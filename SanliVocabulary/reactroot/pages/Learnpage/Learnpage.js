'use strict';


import React, { PureComponent } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  ToastAndroid,
  Navigator,
  View,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,StatusBar,
  BackHandler
} from 'react-native';

import { connect } from 'react-redux'

import {Container,Button,Content,Thumbnail,Card,CardItem,List,ListItem,Left,Body,Right,Radio,StyleProvider,Picker,Form, Item as FormItem} from 'native-base';
const Item = Picker.Item;
import getTheme from '../../../native-base-theme/components';
import customstyle from '../../../native-base-theme/variables/commonColor';

import Icon from 'react-native-vector-icons/Icomoon';

import { Col, Row, Grid } from 'react-native-easy-grid';

import { NavigationActions } from 'react-navigation'

import {setLearncount,fetchCacheUsersettingData,fetchCacheHomeData,getuserselectbook,gethomedata,fetchWordData,chooseHomeBookLevel,initlevel_nav} from '../../store/usersetting';

let {width} = Dimensions.get('window');

var ratio=width/750;

import styles from './learnpagestyle.js';

import bookdata from './datatest.js';


var { NativeModules } = require('react-native');

import Menu from '../../components/Menu/Menu';

import Bookpage from '../Bookpage/Bookpage'

import SQLite from '../../db/SQLite';

import {usersettingStorage} from '../../util/tool'

var sqLite = new SQLite();


class Learnpage extends PureComponent {
  static navigationOptions = ({ navigation,screenProps}) => {
   return {
      tabBarLabel: '学词',
      tabBarIcon: ({ tintColor }) => (
                <Icon color={tintColor} name='st-hover' size={24} />
              )
    }
    };
  constructor(props) {
    super(props);
    this.state={
      wordType:1,
      selected1: "key1"
    };
    this.onTypeoneValueChange.bind(this);
  }
  onTypetwoValueChange(value: string) {
     var params=value.split("@");
     var bookid="",level_nav="",level_nav_sub="";
     bookid=params[0]?params[0]:bookid;
     level_nav=params[1]?params[1]:level_nav;
     level_nav_sub=params[2]?params[2]:level_nav_sub;
     console.log(bookid);
     console.log(level_nav);
     console.log(level_nav_sub);
     this.props.chooseHomeBookLevel(bookid,level_nav,level_nav_sub);
  }
  onTypeoneValueChange(value: string) {
    var params=value.split("@");
    var bookid="",level_nav="",level_nav_sub="";
    bookid=params[0]?params[0]:bookid;
    level_nav=params[1]?params[1]:level_nav;
    level_nav_sub=params[2]?params[2]:level_nav_sub;
    this.props.chooseHomeBookLevel(bookid,level_nav,level_nav_sub);
  }
  chooseBook(){}
  start(){
    var usersetting=this.props.usersetting;
    var self=this;
    var {catid,bookid,level_nav,level_nav_sub,homedata}=usersetting;
    //1.从本地数据库里获取单词，
    if(this.bookstype==1&&level_nav=="") level_nav=homedata["books"][this.bookstype]["level"][0];
    this.props.initlevel_nav(level_nav);
    sqLite.findCollectionAllWordData(catid,bookid).then((res)=>{
        console.log("总次数"+res.length);
        if(res==0){//2.没有单词，从服务器获取
//            self.props.fetchWordData().then((result) => {
//                if(result.code==0){
//                    //3.换本地数据，
//                    sqLite.insertWordData(result.data.data).then(()=>{
//                         //4同步到redux store
//                         //self.props.syncWordData(result.data);
//                         //5跳转到学词页面
//                         this.props.navigation.navigate('Wordlearnpage');
//                    }).catch((error)=>{
//                        ToastAndroid.show('系统错误!'+error,ToastAndroid.SHORT);
//                    });
//                }else{
//                    ToastAndroid.show('服务器错误,请检查网络',ToastAndroid.SHORT);
//                }
//            });

//test
            sqLite.insertWordData(bookdata.data.data).then(()=>{
                 //4同步到redux store

                 //5跳转到学词页面
                 this.props.navigation.navigate('Wordlearnpage');
            }).catch((error)=>{
                ToastAndroid.show('系统错误!'+error,ToastAndroid.SHORT);
            });
        }else{
            //3.本地有单词，从服务器获取版，比对版本号，用最新的数据替换本地数据，
            //5跳转到学词页面
            this.props.navigation.navigate('Wordlearnpage');
        }
    }).catch((res)=>{
        ToastAndroid.show('系统错误!'+error,ToastAndroid.SHORT);
    });
  }
  toBookPage(){
//    const resetAction = NavigationActions.reset({
//      index: 0,
//      params:{routefrom: 'HomeTabNavigation'},
//      actions: [
//        NavigationActions.navigate({ routeName: 'Bookpage'})
//      ]
//    });
//    this.props.navigation.navigate('Bookpage',{routefrom: 'HomeTabNavigation'})
    //this.props.navigation.dispatch(resetAction)
  }
  onBackPress = () => {
          const { navigation} = this.props;
          console.log(navigation);
          if(navigation.state.routefrom=="BookPageFirstTieme"){
              BackAndroid.exitApp()
          }else{
            return false;
          }

          return true;
        };
  componentUnWillMount(){
        //BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
    }

    _onBackAndroid=()=>{
        alert("dd");
        let now = new Date().getTime();
        if(now - lastBackPressed < 2500) {
            return false;
        }
        lastBackPressed = now;
        ToastAndroid.show('再点击一次退出应用',ToastAndroid.SHORT);
        return true;
    }
  handlehomedata(){
    var self=this;

    global.storage.load({
         key:'homedata',
     }).then(res=>{
        console.log("local homedata");
        self.props.fetchCacheHomeData(res);
     }).catch((err)=>{
       //本地没有首页数据，从服务器获取
       this.props.gethomedata().then((result)=>{
            if(result.code==0){
                 console.log("server homedata");
                 global.storage.save({
                      key:'homedata',
                      data: result.data,
                      expires: null
                  });
                self.props.fetchCacheHomeData(result.data);
            }
       })
     });
  }
  init(){
    var self=this;

        //BackHandler.addEventListener("hardwareBackPress", this.onBackPress);

        //1.查询本地用户数据
        global.storage.load({
             key:'usersetting',
         }).then(ret => {
             var usersetting=ret;
             //2.是否存在uuid,生成uuid
             if(!ret.uuid){
                NativeModules.GetUuid.generator((res)=>{
                    usersetting.uuid=res;

//                    global.storage.save({
//                        key:'usersetting',
//                        data: usersetting,
//                        expires: null
//                    });

                    usersettingStorage(usersetting);
                    //3存在本地数据,将本地数据同步到redux store
                    self.props.fetchCacheUsersettingData(usersetting);

                });
             }else{
                //3存在本地数据,将本地数据同步到redux store
                self.props.fetchCacheUsersettingData(usersetting);
             }

             //用户未选择书籍跳转到书籍选择页面
             if(!ret.bookid){
               self.toBookPage();
               //self.props.navigation.navigate('Bookpage',{routefrom: 'HomeTabNavigation'})
             }else{
               this.handlehomedata();
             }
         }).catch(err => {
             NativeModules.GetUuid.generator((uuid)=>{
                //本地数据不存在从服务器获取用户数据
                self.props.getuserselectbook(uuid).then((result) => {
                    var data=result.data;
                    var usersetting={
                        catid:data.catid,
                        bookid:data.book_id,
                        panelid:data.position,
                        uuid:uuid,
                        level_nav:data.level_nav,
                        level_nav_sub:data.level_nav_sub,
                        version:new Date()
                    };
                    //同步到本地
                     usersettingStorage(usersetting);
//                    global.storage.save({
//                        key:'usersetting',
//                        data: usersetting,
//                        expires: null
//                    });

                    //将数据同步到redux store
                    self.props.fetchCacheUsersettingData(usersetting);
                    if(!usersetting.book_id) {
                        self.toBookPage();
                        //self.props.navigation.navigate('Bookpage',{routefrom: 'HomeTabNavigation'})
                    }else{
                        this.handlehomedata();
                    }
                }).catch((err) => {
                    var usersetting={
                        catid:null,//data.catid,
                        bookid:null,//data.book_id,
                        panelid:null,//data.position,
                        uuid:uuid,
                        level_nav:null,
                        level_nav_sub:null,
                        version:new Date()
                    };
                    //同步到本地
                    usersettingStorage(usersetting);
//                                    global.storage.save({
//                                        key:'usersetting',
//                                        data: usersetting,
//                                        expires: null
//                                    });


                    //将数据同步到redux store
                    self.props.fetchCacheUsersettingData(usersetting);

                    self.toBookPage();
                });

             });
         })
  }
  //当组件挂载之后,去获取Activity传输过来的数据...
  componentWillMount(){
        //BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid );
        this.init();
        //进行从Activity中获取数据传输到JS
        //     NativeModules.IntentModule.dataToJS((msg) => {
        //                    var data=msg.split("|");
        //                    self.props.setLearncount(data[0]);
        //                  },
        //                   (result) => {
        //                    ToastAndroid.show('JS界面:错误信息为:'+result,ToastAndroid.SHORT);
        //                  })

  }

  render() {
    var {usersetting}=this.props;

    var {homedata}=usersetting;

    var booklist=[],booklistUI=null,taotilist=[],taotiUI=null;

    this.bookstype=1;

    var initvalue=null;

    if(homedata&&homedata.books){

        var {title,book_id,level}=homedata.books["1"];

        var {level_nav,level_nav_sub,bookid}=usersetting;

        //三立书level_nav not null,level_nav_sub null
        //其他老师书level_nav null,level_nav_sub null
        //套题level_nav not null,level_nav_sub not null

        //this.bookstype=homedata.selected.type;


        for(var item in level){
            if(level_nav==level[item]) {
                initvalue=book_id+"@"+level[item];
            }
            booklist.push({
                book_id:book_id+"@"+level[item],
                title:title+"-"+level[item]
            })
        };

        for(var index in homedata.books["2"]){
            var item=homedata.books["2"][index];
            if(item.book_id==bookid){
                this.bookstype=2
                initvalue=item.book_id;
            }
        }

        booklist=booklist.concat(homedata.books["2"]);

        booklistUI=<Picker
                     mode="dropdown"
                     selectedValue={initvalue}
                     onValueChange={this.onTypeoneValueChange.bind(this)}
                     style={{height:48*ratio}}
                   >
                       {booklist.map((item,i)=>{
                            return <Item label={item.title} value={item.book_id} key={i}/>
                        })}
                   </Picker>

        ;


        var taotititle=homedata.books["3"].title;
        var taotibook_id=homedata.books["3"].book_id;
        var taotilevel=homedata.books["3"].level;

        for(var taotiitem in taotilevel){
            for(var inneritem in taotilevel[taotiitem]){
                if(level_nav==taotiitem&&level_nav_sub==taotilevel[taotiitem][inneritem]) {
                    initvalue=taotibook_id+"@"+taotiitem+"@"+taotilevel[taotiitem][inneritem];
                    this.bookstype=3;
                }
                taotilist.push({
                    book_id:taotibook_id+"@"+taotiitem+"@"+taotilevel[taotiitem][inneritem],
                    title:taotiitem+"-"+taotilevel[taotiitem][inneritem]
                })
            }
        };

        taotiUI=<Picker
                     mode="dropdown"
                     selectedValue={initvalue}
                     onValueChange={this.onTypetwoValueChange.bind(this)}
                     style={{height:48*ratio}}
                   >
                   {taotilist.map((item,i)=>{
                               return <Item label={item.title} value={item.book_id} key={i}/>
                           })}
                 </Picker>
    }


    return (
          <Container style={{backgroundColor:'white'}}>

              <View style={styles.head}>
                   <View style={styles.headtopbg}>
                        <Image style={{width:750*ratio,height:88*ratio}} source={{uri: 'headtopbg'}} />
                   </View>
                   <View style={styles.thumbnailwrap}>
                      <Image style={styles.thumbnail} source={{uri:'http://tva3.sinaimg.cn/crop.62.133.333.333.180/6c7a503fjw8euvl4hxybfj20cq0godig.jpg'}} />
                   </View>
                   <View style={styles.headtitle}>
                      <Text style={[styles.headtext]}>托福</Text>
                   </View>
                   <View style={styles.headaction}>
                      <Icon name='glove' color='white' style={{color:'white',fontSize:18}}/>
                   </View>
              </View>


              <Content>
                <View style={styles.headbg}>
                      <Image style={{width:750*ratio,height:790*ratio}} source={{uri: 'mainbg'}} />
                </View>
                <View style={styles.plan}>
                    <Text style={styles.plan_text}>今日计划:<Text>20</Text>/<Text>{usersetting.learncount}</Text>词</Text>
                    <TouchableOpacity onPress={this.start.bind(this)}>
                        <Text style={styles.plan_action}>更改</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.panel}>
                    <View style={styles.panel_scorewrap}>
                        <Text style={styles.panel_text}>100+</Text>
                        <Image style={{height:238*ratio,width:238*ratio}} source={{uri: 'score'}} />
                     </View>
                     <View style={styles.panel_tipswrap}>
                        <View style={styles.panel_tipswrap_left}>
                            <View style={[styles.panel_tipswrap_item]}>
                                <Icon name="read" size={22} color='#fd796d'/>
                                <Text style={styles.panel_item_tag}>阅读词汇</Text>
                                <Text style={styles.panel_item_block}>测试<Text style={styles.panel_item_grey}>/{homedata.tags_num?homedata.tags_num[3].num:0}</Text></Text>
                            </View>

                            <View style={[styles.panel_tipswrap_item,styles.panel_tipswrap_seconditem]}>
                                <Icon name="speek" size={22} color='#34c67d'/>
                                <Text style={styles.panel_item_tag}>口语词汇</Text>
                                <Text style={styles.panel_item_block}>300<Text style={styles.panel_item_grey}>/{homedata.tags_num?homedata.tags_num[2].num:0}</Text></Text>
                            </View>
                        </View>
                        <View style={styles.panel_tipswrap_middle}></View>
                        <View style={styles.panel_tipswrap_right}>
                          <View style={[styles.panel_tipswrap_item]}>
                              <Icon name="hear" size={22} color='#6295ff'/>
                              <Text style={styles.panel_item_tag}>听力词汇</Text>
                              <Text style={styles.panel_item_block}>待挑战<Text style={styles.panel_item_grey}>/{homedata.tags_num?homedata.tags_num[0].num:0}</Text></Text>
                          </View>

                          <View style={[styles.panel_tipswrap_item,styles.panel_tipswrap_seconditem]}>
                              <Icon name="write" size={22} color='#ce7ffe'/>
                              <Text style={styles.panel_item_tag}>写作短语</Text>
                              <Text style={styles.panel_item_block}>200<Text style={styles.panel_item_grey}>/{homedata.tags_num?homedata.tags_num[1].num:0}</Text></Text>
                          </View>
                        </View>
                     </View>
                     <View style={styles.line}></View>
                     <StyleProvider style={getTheme(customstyle)}>
                         <View style={styles.panel_tipswrap_action}>
                           <View style={styles.panel_tipswrap_action_left}>
                             <View style={[styles.panel_tipswrap_radio,{flex:1}]}><Radio selected={this.bookstype==1||this.bookstype==2?true:false}/></View>
                             <View style={{flex:4}}>
                                <Form style={{height:48*ratio,
                                              borderColor:'#999999',
                                              borderWidth:1,
                                              borderRadius:4}}>
                                    {booklistUI}
                                </Form>
                             </View>
                           </View>
                           <View style={styles.panel_tipswrap_action_right}>
                             <View style={[styles.panel_tipswrap_radio,{flex:1}]}><Radio selected={this.bookstype==3?true:false}/></View>
                             <View style={{flex:4}}>
                                 <Form style={{height:48*ratio,
                                               borderColor:'#999999',
                                               borderWidth:1,
                                               borderRadius:4}}>
                                 {taotiUI}
                                 </Form>
                              </View>
                           </View>
                     </View>
                     </StyleProvider>
                     <View style={styles.buttonStartStyle}>
                       <TouchableOpacity onPress={this.start.bind(this)}>
                        <Image style={[styles.buttonStartBgStyle,{width:650*ratio,height:88*ratio}]} source={{uri: 'button_start'}} />
                        <Text style={styles.buttonStartTextStyle}>开始学词</Text>
                       </TouchableOpacity>
                     </View>
                </View>



                <List style={{marginTop:15*ratio}}>
                    <ListItem icon  onPress={() => this.props.navigation.navigate('Loginpage', {})}>
                      <Left>
                        <Icon name="mix" size={16}/>
                      </Left>
                      <Body>
                        <Text style={styles.actiontext}>混合练词</Text>
                      </Body>
                      <Right>
                        <Icon name="left" />
                      </Right>
                    </ListItem>

                    <ListItem icon  onPress={()=>NativeModules.IntentModule.startActivityFromJS("com.sanli.vocabulary.TwoActivity","5")}>
                      <Left>
                        <Icon name="review" size={16}/>
                      </Left>
                      <Body>
                        <Text style={styles.actiontext}>复习</Text>
                      </Body>
                      <Right>
                        <Icon name="left" />
                      </Right>
                    </ListItem>

                    <ListItem icon onPress={()=>NativeModules.IntentModule.startActivityFromJSGetResult("com.sanli.vocabulary.ThreeActivity",200,(msg) => {
                                                           ToastAndroid.show('JS界面:从Activity中传输过来的数据为:'+msg,ToastAndroid.SHORT);
                                                         },
                                                          (result) => {
                                                           ToastAndroid.show('JS界面:错误信息为:'+result,ToastAndroid.SHORT);
                                                         })}>
                      <Left>
                        <Icon name="search" size={16}/>
                      </Left>
                      <Body>
                        <Text style={styles.actiontext}>查询</Text>
                      </Body>
                      <Right>
                        <Icon name="left" />
                      </Right>
                    </ListItem>
                </List>


              </Content>
          </Container>
    );
  }
}

const mapDispatchToProps = {
  setLearncount:setLearncount,
  fetchCacheUsersettingData:fetchCacheUsersettingData,
  fetchCacheHomeData:fetchCacheHomeData,
  getuserselectbook:getuserselectbook,
  gethomedata:gethomedata,
  fetchWordData:fetchWordData,
  chooseHomeBookLevel:chooseHomeBookLevel,
  initlevel_nav:initlevel_nav
}

const mapStateToProps = (state) => ({
  usersetting:state.usersetting
})

export default connect(mapStateToProps, mapDispatchToProps)(Learnpage)

