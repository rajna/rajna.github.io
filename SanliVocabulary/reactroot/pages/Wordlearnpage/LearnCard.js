import React, { PureComponent } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  View,
  ScrollView,
  PanResponder
} from 'react-native';

import {Content} from 'native-base';

let {width} = Dimensions.get('window');

import Icon from 'react-native-vector-icons/Icomoon';

var ratio=width/750;

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:"#dbdbdb",
        flex:1,
        borderRadius:3,
        backgroundColor:"#fff",
        elevation: 20,
        shadowOffset: {width: 0, height: -1},
        shadowColor: '#bab4a5',
        shadowOpacity: 0.3,
        shadowRadius: 100
    },
    containerinner:{
        flex:1
    },
    tagwrap:{
        flexDirection:'row',
        marginTop:30*ratio,
        marginLeft:18*ratio
    },
    tagitem:{
        borderWidth:1,
        borderColor:"#dddddd",
        borderRadius:3,
        paddingLeft:22*ratio,
        paddingRight:22*ratio,
        paddingTop:9*ratio,
        paddingBottom:9*ratio,
        marginRight:19*ratio,
        color:"#666666"
    },
    wordcontentwrap:{
        flexDirection:'column',
        alignItems: 'center',
        marginTop:80*ratio,
        marginBottom:80*ratio
    },
    wordcontentTwoStudywrap:{
        marginTop:210*ratio,
    },
    wordwrap:{
        flexDirection:'row',
    },
    word:{
        color:"#666666",
        fontSize:78*ratio
    },
    wordplay:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:"#dddddd",
        borderRadius:20,
        backgroundColor:'#fafafa',
        justifyContent:"center",
        alignItems: 'center',
        paddingLeft:26*ratio,
        paddingRight:34*ratio,
        height:48*ratio,
        marginTop:40*ratio,
        marginLeft:24*ratio
    },
    wordplayyinbiao:{
        fontSize:26*ratio,
        color:"#999999",
        marginLeft:28*ratio
    },
    wordplayintro:{
        color:"#222222",
        fontSize:32*ratio
    },
    lijuwrap:{
        flexDirection:'column',
        paddingLeft:20*ratio,
        paddingRight:20*ratio,
        paddingBottom:32*ratio,
        marginBottom:30*ratio,
        borderColor:"#e8e8e8",
        borderBottomWidth:1
    },
    lijucontent:{
        flexDirection:'row'
    },
    label:{
        borderRadius:20,
        borderWidth:1,
        borderColor:"#ff7a0e",
        color:"#ff7a0e",
        fontSize:24*ratio,
        paddingLeft:18*ratio,
        paddingRight:18*ratio,
        paddingTop:8*ratio,
        paddingBottom:8*ratio,
        height:48*ratio,
        marginBottom:16*ratio
    },
    lijucontenttext:{
        color:"#222222",
        fontSize:30*ratio,
        marginLeft:18*ratio
    },
    lijucontenttextchin:{
        color:"#999999",
        fontSize:30*ratio
    },
    learned:{
        flexDirection:'row'
    },
    learnedMarginBottom:{
        marginBottom:10*ratio
    },
    learnedText:{
        color:'#222222',
        fontSize:30*ratio,

    },
    actionwrap:{
        position:'absolute',
        bottom:0,
        backgroundColor:'#ffffff',
        borderColor:"#dbdbdb",
        borderTopWidth:1,
        paddingTop:30*ratio,
        paddingBottom:30*ratio,
        alignItems:'center',
        justifyContent:"center",
        width:"100%",
        flexDirection:'row'
    },
    button:{
        color:"#999999",
        fontSize:26*ratio,
        borderColor:"#dbdbdb",
        borderWidth:1,
        borderRadius:3,
        paddingTop:27*ratio,
        paddingBottom:27*ratio,
        width:258*ratio,
        textAlign:"center",
        flex:1
    },
    greybutton:{
        backgroundColor:'#ccc'
    },
    scrollwrap:{
        paddingBottom:137*ratio
    }
});


export default class LearnCard extends PureComponent {
    constructor(props){
        super(props);
        this.state={
            isshowdetail:props.data&&props.data.is_twostudy!=1?true:false
        }
        this.scollerPanResponder = PanResponder.create({
                    onStartShouldSetPanResponder: (e, g) => true,
                    onMoveShouldSetResponder: (evt) => true
//                    onPanResponderGrant: () => {
//                        console.log('GRANTED TO SCROLLER');
//                    },
//                    onPanResponderMove: (evt, gestureState) => {
//                        console.log('SCROLLER MOVED');
//                    }
                });
    }
//  componentWillMount(){
//    var self=this;
//    this._panResponder = PanResponder.create({
//          onStartShouldSetPanResponder: () => false,
//          onMoveShouldSetPanResponder: ()=> true,
//          onPanResponderGrant: (evt,gs)=>{
//          },
//          onPanResponderMove: (evt,gs)=>{
//
//            if(gs.dx<0){
//                self.props.ondScroll("left")
//            }else{
//                self.props.ondScroll("right")
//            }
//          },
//          onPanResponderRelease: (evt,gs)=>false
//        })
//<ScrollView
//        onScroll={() => { console.log('onScroll!'); }}
//        scrollEventThrottle={200}
//        contentInset={{top: -50}}
//        style={styles.scrollView}>
//        {THUMBS.map(createThumbRow)}
//      </ScrollView>
//  }
//  initaction(data){
//    var actioncontent
//    if(!data) return null;
//
//    //默认显示继续学习，太简单
//    actioncontent=;
//    //学习过或太简单，不是二次学习
//    if(data.is_study>0&&!data.is_twostudy) {
//                  actioncontent==<View style={styles.actionwrap}>
//                         <TouchableOpacity>
//                          <Text style={[styles.button,styles.greybutton,{marginRight:50*ratio}]}>太简单2</Text>
//                         </TouchableOpacity>
//
//                         <TouchableOpacity>
//                          <Text style={[styles.button,styles.greybutton]}>继续学词2</Text>
//                         </TouchableOpacity>
//                   </View>
//            }
//    //二次学习未学习
//    if(data.is_study==0&&data.is_twostudy) {
//             actioncontent==<View style={styles.actionwrap}>
//                                <TouchableOpacity onPress={()=>{this.props.continueLearnUnknow()}}>
//                                 <Text style={[styles.button,{marginRight:50*ratio}]}>不认识</Text>
//                                </TouchableOpacity>
//
//                                <TouchableOpacity onPress={()=>{this.props.continueLearnKnow()}}>
//                                 <Text style={[styles.button]}>认识了</Text>
//                                </TouchableOpacity>
//                         </View>
//    }
//    //二次学习已学习
//    if(data.is_study>0&&data.is_twostudy) {
//             actioncontent==<View style={styles.actionwrap}>
//                                <TouchableOpacity>
//                                 <Text style={[styles.button,styles.greybutton,{marginRight:50*ratio}]}>不认识2</Text>
//                                </TouchableOpacity>
//
//                                <TouchableOpacity>
//                                 <Text style={[styles.button,styles.greybutton]}>认识了2</Text>
//                                </TouchableOpacity>
//                         </View>
//    }
//    return actioncontent
//  }
  render() {
    var {data}=this.props;


    return (
      <View style={styles.container}>
        {data?<View style={styles.containerinner}>
            {data.is_twostudy>=1&&data.is_study==0?
            <ScrollView {...this.scollerPanResponder.panHandlers}>
                <View>
                <View style={styles.tagwrap}>
                    <Text style={styles.tagitem}>
                      听
                    </Text>
                    <Text style={styles.tagitem}>
                      写
                    </Text>
                    <Text style={styles.tagitem}>
                      阅
                    </Text>
                    <Text style={styles.tagitem}>
                      lv 1
                    </Text>
                </View>

                <View style={[styles.wordcontentwrap,styles.wordcontentTwoStudywrap]}>
                  <View style={styles.wordwrap}>
                    <Text style={styles.word}>{data&&data.word_name||null}</Text>
                  </View>
                  <View style={styles.wordplay}>
                      <Icon name='voice' style={{color:'#ff7a0e',fontSize:16}}/>
                      <Text style={styles.wordplayyinbiao}>[{data.soundmark}]</Text>
                  </View>

                </View>
                </View>
            </ScrollView>:null
            }
            {data.is_twostudy==0||data.is_twostudy>=1&&data.is_study!=0?
            <ScrollView {...this.scollerPanResponder.panHandlers}>
                <View style={styles.scrollwrap}>
                <View style={styles.tagwrap}>
                    <Text style={styles.tagitem}>
                      听
                    </Text>
                    <Text style={styles.tagitem}>
                      写
                    </Text>
                    <Text style={styles.tagitem}>
                      阅
                    </Text>
                    <Text style={styles.tagitem}>
                      lv 1
                    </Text>
                </View>

                <View style={styles.wordcontentwrap}>
                  <View style={styles.wordwrap}>
                    <Text style={styles.word}>{data.word_name||null}</Text>
                    <View style={styles.wordplay}>
                        <Icon name='voice' style={{color:'#ff7a0e',fontSize:16}}/>
                        <Text style={styles.wordplayyinbiao}>[{data.soundmark}]</Text>
                    </View>
                  </View>
                  <View>
                      <Text style={styles.wordplayintro}>{data.ch_explain}</Text>
                  </View>
                </View>

                <View style={styles.lijuwrap}>
                  <View style={styles.lijucontent}>
                      <Text style={styles.label}>例句</Text>
                      <Text style={styles.lijucontenttext}>I like banana，but i don't like orange</Text>
                  </View>
                  <View>
                       <Text style={styles.lijucontenttextchin}>我喜欢香蕉，但不喜欢橘子</Text>
                  </View>
                </View>


                <View style={styles.lijuwrap}>
                  <View style={styles.lijucontent}>
                      <Text style={styles.label}>已学</Text>
                  </View>
                  <View style={[styles.learned,styles.learnedMarginBottom]}>
                       <Text style={styles.learnedText}>【同】</Text>
                       <Text style={styles.learnedText}>liken</Text>
                  </View>
                  <View style={styles.learned}>
                       <Text style={styles.learnedText}>【形】</Text>
                       <Text style={styles.learnedText}>liken</Text>
                  </View>
                </View>

                <View style={styles.lijuwrap}>
                  <View style={styles.lijucontent}>
                      <Text style={styles.label}>英</Text>
                  </View>
                  <View style={styles.learned}>
                       <Text style={styles.learnedText}>to enjoy something or think that it is nice or good。 You should have told us. But it's just like you not to share
                       to enjoy something or think that it is nice or good。 You should have told us. But it's just like you not to share
                       to enjoy something or think that it is nice or good。 You should have told us. But it's just like you not to share
                       to enjoy something or think that it is nice or good。 You should have told us. But it's just like you not to shareto enjoy something or think that it is nice or good。 You should have told us. But it's just like you not to shareto enjoy something or think that it is nice or good。 You should have told us. But it's just like you not to share
                       to enjoy something or think that it is nice or good。 You should have told us. But it's just like you not to share
                       to enjoy something or think that it is nice or good。 You should have told us. But it's just like you not to share
                       to enjoy something or think that it is nice or good。 You should have told us. But it's just like you not to share
                       to enjoy something or think that it is nice or good。 You should have told us. But it's just like you not to share
                       to enjoy something or think that it is nice or good。 You should have told us. But it's just like you not to share
                       to enjoy something or think that it is nice or good。 You should have told us. But it's just like you not to share
                       to enjoy something or think that it is nice or good。 You should have told us. But it's just like you not to share
                       </Text>
                  </View>
                </View>

                <View style={styles.lijuwrap}>
                  <View style={styles.lijucontent}>
                      <Text style={styles.label}>助</Text>
                  </View>
                  <View>
                       <Text style={styles.lijucontenttextchin}>like  喜欢</Text>
                  </View>
                </View>
                </View>

            </ScrollView>:null
            }

            {data.is_study==0&&!data.is_twostudy?<View style={styles.actionwrap}>
                    <TouchableOpacity onPress={()=>{this.props.continueLearnEasy()}}>
                     <Text style={[styles.button,{marginRight:50*ratio}]}>太简单</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=>{this.props.continueLearn()}}>
                     <Text style={[styles.button]}>继续学词</Text>
                    </TouchableOpacity>
              </View>:null}

            {data.is_study>0&&!data.is_twostudy?<View style={styles.actionwrap}>
                    <TouchableOpacity>
                     <Text style={[styles.button,styles.greybutton,{marginRight:50*ratio}]}>太简单</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                     <Text style={[styles.button,styles.greybutton]}>继续学词</Text>
                    </TouchableOpacity>
              </View>:null}
             {data.is_study==0&&data.is_over==0&&data.is_twostudy?<View style={styles.actionwrap}>
                     <TouchableOpacity onPress={()=>{this.props.continueLearnUnknow()}}>
                      <Text style={[styles.button,{marginRight:50*ratio}]}>不认识</Text>
                     </TouchableOpacity>

                     <TouchableOpacity onPress={()=>{this.props.continueLearnKnow()}}>
                      <Text style={[styles.button]}>认识了</Text>
                     </TouchableOpacity>
              </View>:null}
              {(data.is_study>0||data.is_over==1)&&data.is_twostudy?<View style={styles.actionwrap}>
                    <TouchableOpacity onPress={()=>{this.props.continueLearntwostudy()}}>
                     <Text style={[styles.button]}>继续学习</Text>
                    </TouchableOpacity>
                </View>:null}
             </View>:null}
        </View>


    );
  }
}
