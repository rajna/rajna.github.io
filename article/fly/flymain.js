// GLOBALS ====================================================================

var scene, renderer, camera, clock, player;

var bufferScene;
var textureA;
var textureB;
var bufferMaterial;
var bufferObject;
var finalMaterial;
var quad;
var plane
var target;

var HORIZONTAL_UNIT = 100,
			VERTICAL_UNIT = 100,
		INV_MAX_FPS = 1 / 100,
		FIRING_DELAY = 1000,
		BOT_MAX_AXIAL_ERROR = 10,
		BOT_MOVE_DELAY = 2000;
var frameDelta = 0,
		paused = true;
var spawnPoints = [];
var floor;
var bullets = [],bullet,
		deadBulletPool = [];
var enemies = [],
		numEnemies = 5;

// MAPS =======================================================================

var map = "   XXXXXXXX     XXXXXXXX      \n" +
					"   X      X     X      X      \n" +
					"   X  S   X     X   S  X      \n" +
					"   X      XXXXXXX      X      \n" +
					"   X                  XXXXXXXX\n" +
					"   X         S               X\n" +
					"   XXXX XX       XXXX    S   X\n" +
					"      X XX       X  X        X\n" +
					"   XXXX XXX     XX  X        X\n" +
					"   X      XX   XXXXXXTTXX  XXX\n" +
					"   X      XTTTTTXXXTTTTXX  X  \n" +
					"   XX  S  XTTTTTXXTTTTTXX  XXX\n" +
					"XXXXX     XTTTTTXTTTTTTX     X\n" +
					"X      XTTXTTTTTTTTTTTTX     X\n" +
					"X  S  XXTTTTTTTTXTTTTTXX  S  X\n" +
					"X     XTTTTTTTTTXTTTTTX      X\n" +
					"X     TTTTTTTTTTXXXXTTX  XXXXX\n" +
					"X     XTTTTTTTTTX X      X    \n" +
					"XX  XXXTTTTTTTTTX X      X    \n" +
					" X  X XTTTTTTTTTX X      X    \n" +
					" X  XXX         X X      X    \n" +
					" X             XXXX      XX   \n" +
					" XXXXX    T               X   \n" +
					"     X                 S  X   \n" +
					"     XX   S  XXXXXXXX     X   \n" +
					"      XX    XX      XXXXXXX   \n" +
					"       XXXXXX                 ";
map = map.split("\n");
var ZSIZE = map.length * HORIZONTAL_UNIT,
		XSIZE = map[0].length * HORIZONTAL_UNIT;
var meshMap = new Array(map.length);

function MapCell() {
	this.set.apply(this, arguments);
}
MapCell.prototype.set = function(row, col, char, mesh) {
	this.row = row;
	this.col = col;
	this.char = char;
	this.mesh = mesh;
	return this;
};

// ANIMATION LOOP =============================================================

function animate() {
	draw();

	frameDelta += clock.getDelta();
	while (frameDelta >= INV_MAX_FPS) {
		update(INV_MAX_FPS);
	 	bufferMaterial.uniforms.smokeSource.value.z = 0.1;
        //UpdateMousePosition(window.innerWidth/2,window.innerHeight/2);
		frameDelta -= INV_MAX_FPS;
	}

		requestAnimationFrame(animate);
	
}

// SETUP ======================================================================

function setup() {
	setupThreeJS();
	setupWorld();
	buffer_texture_setup();
	requestAnimationFrame(animate);
}

function setupThreeJS() {
	scene = new THREE.Scene();
	//scene.fog = new THREE.FogExp2(0xdcf7e7, 0.001);

	renderer = new THREE.WebGLRenderer({antialias: true,alpha: true,});
	renderer.setSize(window.innerWidth, window.innerHeight);
	//renderer.setClearColor(0xffffff,1);
	document.body.appendChild(renderer.domElement);

	camera = new THREE.PerspectiveCamera(60, renderer.domElement.width / renderer.domElement.height, 1, 10000);
	camera.rotation.x=-Math.PI/6;
	camera.position.set(0,1500,2500);
	
	clock = new THREE.Clock(false);
}

function setupWorld() {
	setupMap();

	// player = new Player();
	// player.add(camera);
	// player.position.y = 20;
	// scene.add(player);

	 var light = new THREE.DirectionalLight(0xffffff, 2.5);
	 light.position.set(1, 1, 1);
	 scene.add(light);
	 light = new THREE.DirectionalLight(0xf3faff, 0.75);
	 light.position.set(-1, - 0.5, -1);
	 //scene.add(light);
}

function setupMap() {
	for (var i = 0, rows = map.length; i < rows; i++) {
		for (var j = 0, cols = map[i].length; j < cols; j++) {
			if (typeof meshMap[i] === 'undefined') {
				meshMap[i] = new Array(cols);
			}
			meshMap[i][j] = addVoxel(map[i].charAt(j), i, j);
		}
	}

	
}

var addVoxel = (function() {
	var XOFFSET = map.length * 0.5 * HORIZONTAL_UNIT,
			ZOFFSET = map[0].length * 0.5 * HORIZONTAL_UNIT,
			materials = [];
	for (var i = 0; i < 8; i++) {
		materials.push(new THREE.MeshPhongMaterial({
			color: new THREE.Color().setHSL(Math.random() * 0.2 + 0.3, 0.5, Math.random() * 0.25 + 0.75)
		}));
	}
	function material() {
		return materials[Math.floor(Math.random() * materials.length)].clone();
	}

	var WALL = new THREE.CubeGeometry(HORIZONTAL_UNIT, VERTICAL_UNIT, HORIZONTAL_UNIT);

	return function(type, row, col) {
		var z = (row+1) * HORIZONTAL_UNIT - ZOFFSET,
				x = (col+1) * HORIZONTAL_UNIT - XOFFSET,
				mesh;
		switch(type) {
			case ' ': break;
			case 'S':
				spawnPoints.push(new THREE.Vector3(x, 0, z));
				break;
			case 'T':
				mesh = new THREE.Mesh(WALL.clone(), material());
				mesh.position.set(x, VERTICAL_UNIT*0.5, z);
				break;
			case 'X':
				mesh = new THREE.Mesh(WALL.clone(), material());
				mesh.scale.y = 3;
				mesh.position.set(x, VERTICAL_UNIT*1.5, z);
				break;
		}
		if (typeof mesh !== 'undefined') {
			//scene.add(mesh);
		}
		return mesh;
	};
})();

var checkBulletCollision = (function() {
	var cell = new MapCell();
	function removeBullet(bullet) {
		scene.remove(bullet);
	}
	return function(bullet) {
		
		mapCellFromPosition(bullet.position, cell);
		if (cell.char == 'X' ||
				(cell.char == 'T' && bullet.position.y - Bullet.RADIUS < cell.mesh.position.y + VERTICAL_UNIT * 0.5) ||
				bullet.position.y - Bullet.RADIUS < floor.position.y ||
				bullet.position.y > VERTICAL_UNIT * 5) {
		    	bullet.direction=new THREE.Vector3(-bullet.direction.x,-bullet.direction.y,-bullet.direction.z)
		    	//scene.add(cell.mesh);
		}
	};
})();

function mapCellFromPosition(position, cell) {
	cell = cell || new MapCell();
	var XOFFSET = (map.length+1) * 0.5 * HORIZONTAL_UNIT,
			ZOFFSET = (map[0].length+1) * 0.5 * HORIZONTAL_UNIT;
	var mapCol = Math.floor((position.x + XOFFSET) / HORIZONTAL_UNIT) - 1,
			mapRow = Math.floor((position.z + ZOFFSET) / HORIZONTAL_UNIT) - 1,
			char = map[mapRow].charAt(mapCol),
			mesh = meshMap[mapRow][mapCol];
	return cell.set(mapRow, mapCol, char, mesh);
}

// SHOOTING ===================================================================

var shoot = (function() {
	var error = new THREE.Vector3();
	function produceError(deg) {
		if (typeof deg === 'undefined') deg = BOT_MAX_AXIAL_ERROR;
		return Math.random() * (deg / 90) - (deg / 180);
	}
	return function() {
		var from = new THREE.Vector3(-600, 200, 600);
		var to=new THREE.Vector3(1600, 200, 600);
		bullet = new Bullet();
		bullet.position.copy(from);
		bullet.rotation.copy(new THREE.Vector3(0, 0, 0));
		bullet.direction = to.clone().sub(from).normalize();
		error.set(produceError(), produceError(), produceError());
		bullet.direction.add(error);
		scene.add(bullet);
	};
})();

function spawn(unit) {
	unit = unit || player;
	var cell = new MapCell(), point;
	// do {
	// 	point = spawnPoints[Math.floor(Math.random() * spawnPoints.length)];
	// 	mapCellFromPosition(point, cell);
	// } while (isPlayerInCell(cell.row, cell.col));
	point = spawnPoints[Math.floor(Math.random() * spawnPoints.length)];
	unit.position.copy(point);
	unit.position.y = 200;
	var direction = (point.z > 0 ? 0 : -1) * Math.PI;
	unit.rotation.set(0, direction, 0);
}

// DRAW =======================================================================

function draw() {

	renderer.render(bufferScene,camera,textureB,true);
	//Swap textureA and B
	var t = textureA;
	textureA = textureB;
	textureB = t;
	quad.material.map = textureB;
	bufferMaterial.uniforms.bufferTexture.value = textureA;
	renderer.render(scene, camera);
}

// UPDATE =====================================================================

function update(delta) {

	bullet.update(delta);
	checkBulletCollision(bullet);

}

function generateTexture() {
				var canvas = document.createElement( 'canvas' );
				canvas.width = 256;
				canvas.height = 256;
				var context = canvas.getContext( '2d' );
				var image = context.getImageData( 0, 0, 256, 256 );
				var x = 0, y = 0;
				for ( var i = 0, j = 0, l = image.data.length; i < l; i += 4, j ++ ) {
					x = j % 256;
					y = x == 0 ? y + 1 : y;
					image.data[ i ] = 255;
					image.data[ i + 1 ] = 255;
					image.data[ i + 2 ] = 255;
					image.data[ i + 3 ] = Math.floor( x ^ y );
				}
				context.putImageData( image, 0, 0 );
				return canvas;
			}

function buffer_texture_setup(){
    //Create buffer scene
    bufferScene = new THREE.Scene();
    //Create 2 buffer textures
    textureA = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter});
    textureB = new THREE.WebGLRenderTarget( window.innerWidth, window.innerHeight, { minFilter: THREE.LinearFilter, magFilter: THREE.NearestFilter} );
    //Pass textureA to shader
    bufferMaterial = new THREE.ShaderMaterial( {
        uniforms: {
         bufferTexture: { type: "t", value: textureA },
         res : {type: 'v2',value:new THREE.Vector2(window.innerWidth,window.innerHeight)},
         smokeSource:{type:"v3",value:new THREE.Vector3(0,0,0)}
        },
        fragmentShader: document.getElementById( 'fragShader' ).innerHTML
    } );
    plane = new THREE.PlaneBufferGeometry( XSIZE, ZSIZE );
    bufferObject = new THREE.Mesh( plane, bufferMaterial );
    bufferScene.add(bufferObject);

    //Draw textureB to screen 
    finalMaterial =  new THREE.MeshBasicMaterial({map: textureB});
    quad = new THREE.Mesh( plane, finalMaterial );
    quad.position.set(HORIZONTAL_UNIT, 0, -HORIZONTAL_UNIT); // Ideally this wouldn't be needed
    quad.rotation.x = Math.PI * -0.5;
   // scene.add(quad);
    var texture = new THREE.Texture( generateTexture() );
    texture.needsUpdate = true;
    var material = new THREE.MeshLambertMaterial( { map: texture, transparent: true } );
	var floorGeo = new THREE.PlaneGeometry(XSIZE, ZSIZE, 20, 20);
	floor = new THREE.Mesh(floorGeo, material);
	floor.rotation.x = Math.PI * -0.5;
	floor.position.set(HORIZONTAL_UNIT, 0, -HORIZONTAL_UNIT); // Ideally this wouldn't be needed
	//scene.add(floor);

	var helper = new THREE.GridHelper( 1450, 13, 0xb750b7, 0xb750b7 );
				helper.position.set(HORIZONTAL_UNIT, 0, -HORIZONTAL_UNIT);
				scene.add( helper );
}





document.addEventListener('click', function(event) {
	target?scene.remove(target):null;

	target = new Bullet();

	spawn(target);

	bullet.changeDirection(target.position);

	scene.add(target);
	
});

setup();

shoot();


clock.start();




