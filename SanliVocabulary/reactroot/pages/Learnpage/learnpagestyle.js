import {
  StyleSheet,
  Dimensions
} from 'react-native';

let {width} = Dimensions.get('window');
var ratio=width/750;

const styles=StyleSheet.create({
  head: {
    backgroundColor:'rgba(0,0,0,0)',
    height : 88*ratio,
    flexDirection:'row'
  },
  thumbnailwrap:{
    marginTop : 14*ratio,
    marginLeft : 30*ratio,
    flex:1,
  },
  thumbnail:{
    width:60*ratio,
    height:60*ratio,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius : 100
  },
  headtitle:{
    flex:1,
    paddingTop:18*ratio,
    alignItems: 'center'
  },
  headtext:{
    fontSize:38*ratio,
    color:'#fff'
  },
  headaction:{
    flex:1,
    alignItems: 'flex-end',
    marginTop : 20*ratio,
    marginRight : 30*ratio
  },
  panel:{
    marginLeft:20*ratio,
    marginRight:20*ratio,
    height:658*ratio,
//    borderRadius:6,
//    backgroundColor:'white'

  },
  panel_scorewrap:{
    position:'absolute',
    top:89*ratio,
    left:236*ratio,
    height:238*ratio,
    width:238*ratio,
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel_text:{
    color:'white',
    fontSize:60*ratio,
    position:'absolute',
//    top:95*ratio,
//    left:58*ratio,
    zIndex:100
  },
  actiontext: {
    fontSize: 34*ratio
  },
  headbg: {
    width:750*ratio,
    height:790*ratio,
    position:'absolute'
  },
  headtopbg:{
    width:750*ratio,
    position:'absolute'
  },
  panel_tipswrap:{
    flexDirection:'row',
    paddingBottom:50*ratio
  },
  panel_tipswrap_left:{
    flex:2,
    width: 230*ratio,
    alignItems: 'center',
  },
  panel_tipswrap_middle:{
    flex:2,
  },
  panel_tipswrap_right:{
    flex:2,
    width: 230*ratio,
    alignItems: 'center'
  },
  line:{
    height:1,
    backgroundColor:'#eaeaea'
  },
  panel_tipswrap_item:{
    alignItems: 'center',
    marginTop: 58*ratio
  },
  panel_tipswrap_seconditem:{
    marginTop: 70*ratio
  },
  panel_item_tag:{
    fontSize:28*ratio,
    color:'#222222'
  },
  panel_item_block:{
    fontSize:22*ratio,
    color:'#222222'
  },
  panel_item_grey:{
    color:'#999999'
  },
  panel_tipswrap_action:{
    flexDirection:'row',
    marginBottom:30*ratio
  },
  panel_tipswrap_action_left:{
    flex:1,
    flexDirection:'row',
    marginTop:38*ratio,
    marginLeft:32*ratio
  },
  panel_tipswrap_action_right:{
    flex:1,
    flexDirection:'row',
    marginTop:38*ratio,
    marginRight:32*ratio,
    paddingLeft:150*ratio
  },
  panel_tipswrap_radio:{
    marginTop:2*ratio
  },
  panel_tipswrap_picker:{
    height:48*ratio,
    width:210*ratio,
    borderColor:'#999999',
    borderRadius:3
  },
  buttonStartStyle:{
    alignItems:'center'
  },
  buttonStartBgStyle:{
    position:'absolute'
  },
  buttonStartTextStyle:{
    fontSize:34*ratio,
    color:'white',
    textAlign:'center',
    width:650*ratio,
    height:88*ratio,
    top:20*ratio,
  },
  plan:{
    flex:1,
    flexDirection:'row',
    marginTop:30*ratio,
    marginLeft:30*ratio,
    marginBottom:30*ratio
  },
  plan_text:{
    color:'white',
    fontSize:28*ratio
  },
  plan_action:{
     color:'#ff7607',
     fontSize:22*ratio,
     backgroundColor:'#fff3ee',
     borderRadius:100,
     width:82*ratio,
     height:36*ratio,
     textAlign:'center',
     marginLeft:22*ratio,
     marginTop:3*ratio
  }
});

export default styles