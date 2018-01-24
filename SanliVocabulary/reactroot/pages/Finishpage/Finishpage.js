import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  TouchableOpacity,
  ListView,
  BackAndroid,
  ScrollView,
  Dimensions,
  BackHandler,
    StyleSheet,
    Text,
    View,
    Image,
    findNodeHandle,
    PanResponder
} from 'react-native';

import { NavigationActions } from 'react-navigation'

import Icon from 'react-native-vector-icons/Icomoon';

import { Container, Header, Content, List, ListItem } from 'native-base';

import {syncWordTodayStudy,refreshwordcurrent} from '../../store/usersetting';

let {width} = Dimensions.get('window');

var ratio=width/750;

var styles = StyleSheet.create({

})


import SQLite from '../../db/SQLite';

var sqLite = new SQLite();


class Finishpage extends Component{
    constructor(props) {
        super(props);
      }

      componentWillMount(){

      }

      _continue(){
        const resetAction = NavigationActions.reset({
              index: 0,
              params:{routefrom: 'Finishpage'},
              actions: [
                NavigationActions.navigate({ routeName: 'DrawerNavigation'})
              ]
            });
            this.props.navigation.dispatch(resetAction)
      }

      render() {
              var self=this;
              var {usersetting}=this.props;
              var {catid,bookid,learnlog,learncount,index}=usersetting;
              var worddata=learnlog[catid+"-"+bookid]["wordTodayStudy"];

              return (
                    <Container style={{backgroundColor:'#f6f6f6'}}>
                        <View style={styles.head}>
                                <View style={styles.headtopbg}>
                                    <Image style={{width:750*ratio,height:88*ratio}} source={{uri: 'headtopbg'}} />
                                </View>
                                <View style={styles.thumbnailwrap}>
                                   <Icon name='glove' style={{color:'white',fontSize:18}}/>
                                </View>
                                <View style={styles.headtitle}>
                                   <Text style={[styles.headtext]}>学词结束</Text>
                                </View>
                                <View style={styles.headaction}>
                                   <Icon name='glove' style={{color:'white',fontSize:18}}/>
                                </View>
                           </View>

                      <Content>
                        <View style={styles.headbg}>
                              <Image style={{width:750*ratio,height:483*ratio}} source={{uri: 'xuexifinish'}} />
                        </View>
                        <View style={styles.learntextview}>
                          <Text style={styles.learntext}>很棒哦，</Text>
                          <View style={{flexDirection:'row'}}><Text style={styles.learntext}>本次学习了 </Text><Text style={styles.learnnumtext}>120</Text><Text style={styles.learntext}> 个单词，再看一下它们吧~</Text></View>
                        </View>
                        <List>
                          {worddata.map((item,i)=>{
                            return <ListItem key={i}>
                                       <View style={styles.itemwrap}>
                                        <Text style={styles.itemword}>{item.word_name}</Text>
                                        <Text style={styles.itemexplaintext}>{item.ch_explain}</Text>
                                       </View>
                                     </ListItem>
                          })}

                        </List>
                      </Content>
                       <View style={styles.buttonStartStyle}>
                          <TouchableOpacity onPress={this._continue.bind(this)}>
                           <Image style={[styles.buttonStartBgStyle,{width:650*ratio,height:88*ratio}]} source={{uri: 'button_start'}} />
                           <Text style={styles.buttonStartTextStyle}>结束学词</Text>
                          </TouchableOpacity>
                        </View>
                    </Container>
              );
        }


}


const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
    usersetting:state.usersetting
})

const styles=StyleSheet.create({
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
    head: {
          backgroundColor:'white',
          height : 88*ratio,
          flexDirection:'row'
        },
    headtopbg:{
        width:750*ratio,
        position:'absolute'
      },
    thumbnailwrap:{
            marginTop : 28*ratio,
            marginLeft : 30*ratio,
            flex:1,
          },
     headtitle:{
            flex:1,
            paddingTop:18*ratio,
            alignItems: 'center'
          },
     headtext:{
            fontSize:36*ratio,
            color:'#fff'
          },
     headaction:{
            flex:1,
            alignItems: 'flex-end',
            opacity:0
          },
     headbg: {
         width:750*ratio,
         height:483*ratio,
         position:'absolute'
       },
     learntextview:{
        alignItems: 'center',
        marginTop:330*ratio,
        marginBottom:90*ratio,
     },
     learntext:{
        color:'#222222',
        fontSize:28*ratio
     },
     learnnumtext:{
        color:'#ff7a0e',
        fontSize:28*ratio
     },
     itemwrap:{
         flexDirection:'row'
      },
     itemword:{
        flex:2,
        color:'#222222',
        fontSize:36*ratio
     },
     itemexplaintext:{
         fontSize:28*ratio,
         color:'#666666',
         flex:4
      }
});

export default connect(mapStateToProps, mapDispatchToProps)(Finishpage)