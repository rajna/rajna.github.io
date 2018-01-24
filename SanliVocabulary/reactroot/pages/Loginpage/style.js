import {
  StyleSheet,
  Dimensions
} from 'react-native';

let {width} = Dimensions.get('window');
var ratio=width/750;

const styles=StyleSheet.create({
    head: {
        backgroundColor:'#fff',
        height : 88*ratio,
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:"#dbdbdb",
      },
    thumbnailwrap:{
          marginTop : 28*ratio,
          marginLeft : 30*ratio,
          flex:1,
        },
     headtitle:{
         flex:1,
         paddingTop:18*ratio,
         alignItems: 'center',

       },
     headtext:{
         fontSize:36*ratio,
         color:'#222222'
       },
     headaction:{
         flex:1,
         alignItems: 'flex-end',
         marginTop : 30*ratio,
         marginRight : 30*ratio
       },
     loginform:{
        marginTop:50*ratio,
        backgroundColor:'#fff',
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:'#eaeaea'
     },
     buttonStartStyle:{
         alignItems:'center',
         paddingTop:40*ratio,
         paddingBottom:40*ratio
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
});

export default styles