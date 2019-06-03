function Bullet(direction) {
	THREE.Mesh.call(this,
		new THREE.SphereGeometry(Bullet.RADIUS, 6, 6),
		new THREE.MeshBasicMaterial({ color: 0xffffff })
	);


	this.direction = direction;
	this.scale.x=0.75;
	this.scale.z=0.75;
	this.speed = 300;
	this.damage = 20;

	this.wanderAngle=30;

	this.ANGLE_CHANGE=5;

	this.drawline=function(from,to){
		var geometry = new THREE.Geometry();
        var material = new THREE.LineBasicMaterial( { vertexColors: true } );
        var color1 = new THREE.Color( 0xe4e4e4 ), color2 = new THREE.Color( 0xe4e4e4 );

        // 线的材质可以由2点的颜色决定
        var p1 = from;
        var p2 = to;
        geometry.vertices.push(p1);
        geometry.vertices.push(p2);
        geometry.colors.push( color1, color2 );

        var line = new THREE.Line( geometry, material, THREE.LinePieces );

        scene.add(line);
	}
	this.wander=function(){
		var self=this;

		//设置随机角度
		function setAngle(displacement,wanderAngle){
			var length=displacement.length();
			displacement.setX(Math.cos(self.wanderAngle)*length);
			displacement.setZ(Math.sin(self.wanderAngle)*length);
		}
		//拷贝当前方向单位向量,大小扩展为圆的长度
		var circleCenter=new THREE.Vector3();

		circleCenter=circleCenter.copy(this.direction);

		circleCenter.multiplyScalar(Bullet.CIRCLE_DISTANCE);

		//计算位移矢量
		var displacement =new THREE.Vector3(0,0,-1);

		displacement.multiplyScalar(Bullet.CIRCLE_RADIUS);
		
		setAngle(displacement,this.wanderAngle);

		this.wanderAngle+=Math.random()*this.ANGLE_CHANGE - this.ANGLE_CHANGE * .5;

		var wanderForce =new THREE.Vector3();

		wanderForce = circleCenter.add(displacement);

		this.direction=wanderForce;
		return wanderForce
	}
}

Bullet.prototype = Object.create(THREE.Mesh.prototype);

Bullet.prototype.constructor = Bullet;

Bullet.RADIUS = 20;

Bullet.CIRCLE_DISTANCE=40;

Bullet.CIRCLE_RADIUS=5;

Bullet.steering=new THREE.Vector3(0.0,0.0,0.0); 


Bullet.prototype.update = (function() {
	var scaledDirection = new THREE.Vector3();
	  return function(delta) {
	  	if(Bullet.target){
	  		Bullet.target.clone().sub(this.position).length()<=Bullet.RADIUS?(
	  				Bullet.target=null,
	  				scene.remove(target)
	  			):null;
	  	}
	  	var from= this.position;
	  	this.direction=this.direction.add(this.wander()).normalize();

	 	scaledDirection.copy(this.direction).multiplyScalar(this.speed*delta);
		this.position.add(scaledDirection)
		Bullet.target?(
			this.changeDirection(),
			this.position.add(Bullet.steering)
			):null;
		var to= new THREE.Vector3(this.position.x,this.position.y,this.position.z)
		this.drawline(from,to);
	};
})();

Bullet.prototype.changeDirection=(function(){
	var steering= new THREE.Vector3(),desired_velocity=new THREE.Vector3();
	return function(target){
		target=target||Bullet.target;
		desired_velocity=target.clone().sub(this.position).normalize().multiplyScalar(10);
		Bullet.steering=desired_velocity.sub(this.direction).divideScalar(1.9);
		Bullet.target=target;
	}
})();

Bullet.prototype.clone = function(object) {
	if (typeof object === 'undefined') {
		object = new Bullet();
	}
	THREE.Mesh.prototype.clone.call(this, object);

	object.direction = this.direction;
	object.speed = this.speed;
	object.damage = this.damage;

	return object;
};
