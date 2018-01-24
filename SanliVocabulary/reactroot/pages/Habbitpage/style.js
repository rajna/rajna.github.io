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
     title:{
        height : 93*ratio,
        borderBottomWidth:1,
        borderColor:"#e8e8e8",
        paddingTop:20*ratio,
        marginTop:30*ratio,
        backgroundColor:'#fff',
        position:'relative'
     },
     titleintro:{
        position:'absolute',
        right:20*ratio,
        top:30*ratio
     },
     titletext:{
        fontSize:34*ratio,
        color:'#222222',
        paddingLeft:20*ratio
     },
     order:{
      flexDirection:'row',
      backgroundColor:'#fff',
      paddingTop:30*ratio
     },
     titleintrotext:{
        color:'#ff7a0e',
        fontSize:24*ratio
     },
     order_left:{
         flex:2,
         width: 230*ratio,
         alignItems: 'center',
       },
     order_right:{
         flex:2,
         width: 230*ratio,
         alignItems: 'center'
       },
     orderitem:{
        borderWidth:1,
        borderColor:"#dbdbdb",
        borderRadius:3,
        width:260*ratio,
        height:80*ratio,
        marginBottom:30*ratio,
        alignItems:'center',
        justifyContent: 'center',
     },
     orderitemtext:{
        fontSize:26*ratio,
        color:"#999999"
     },
     orderitemtextactive:{
        color:"#fff"
     },
     wheelviewwrap:{
        flex: 1,
        position:'relative',
        backgroundColor:'#fff',
        paddingBottom:40*ratio
     },
     wheelviewwrapinner:{
        position:'relative',
        paddingTop : 37*ratio,
        overflow:'hidden',
        height: 393*ratio,
        alignItems: 'center',
     },
     settingtitlewwrap:{
        alignItems: 'center',
     },
     wheelview: {
         width: 710*ratio,
         height: 393*ratio,
       },
     wheelbg:{
        width:710*ratio,
        height:393*ratio,
        position:'absolute'
     },
     settingtime:{
       width:710*ratio,
       height:59*ratio
     },
     settinginfo:{
        flexDirection:'row',
        paddingTop:22*ratio,
        paddingBottom:32*ratio,
        paddingLeft:20*ratio
     },
     settinginfoactive:{
        color:'#ff7a0e'
     },
     orderbutton:{
        width:260*ratio,
        height:80*ratio,
        position:'absolute'
     },
     buttonStartStyle:{
         alignItems:'center',
         paddingTop:50*ratio,
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