import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ListView,
  BackAndroid,
  ScrollView,
  Dimensions,
  Text,
  BackHandler,
  NativeModules,
  ToastAndroid,
  DeviceEventEmitter
} from 'react-native';

import { NavigationActions } from 'react-navigation'

import { Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Button , Spinner } from "native-base";

import Panel from '../../components/Panel/Panel';

import Book from '../../components/Book/Book';

import {fetchBookData,fetchCacheBookData} from '../../store/book';

import {chooseBook,setLearncount,/*setInitBook*/} from '../../store/usersetting';

let {width} = Dimensions.get('window');

var ratio=width/750;

class Bookpage extends PureComponent{
    constructor(props) {
        super(props);
        //this.handleBack = this.handleBack.bind(this);
        this.opencallback = this.opencallback.bind(this);
        const { usersetting} = this.props;
        this.state={
            active:usersetting.panelid,
            databook:[],
            pagechange:false
        }
      }

      onBackPress = () => {
        const { navigation} = this.props;
//        global.storage.load({
//            key:'usersetting',
//        }).then(ret => {
//            var usersetting=JSON.parse(ret);
//            if(!usersetting.bookid&&navigation.state.params.routefrom=="HomeTabNavigation"){
//              BackAndroid.exitApp()
//            }
//        }).catch(err => {
//        })

        if(navigation.state.routefrom=="HomeTabNavigation"){
            BackAndroid.exitApp()
        }else{
          return false;
        }

        return true;
      };

      componentWillUnmount(){
        var self=this;
        this.timer && clearTimeout(this.timer);
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
      }

      componentDidMount () {
        var self=this;
        this.setState({
            pagechange:false
        });

//        DeviceEventEmitter.addListener('ABC', function (e: Event) {
//              alert(e.type);
//            });

        BackHandler.addEventListener("hardwareBackPress", this.onBackPress);

        const { databook } = this.props;

        //if(databook.length>0) return

        global.storage.load({
                    key:'datalist',

                    // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
                    //autoSync: true,

                    // syncInBackground(默认为true)意味着如果数据过期，
                    // 在调用sync方法的同时先返回已经过期的数据。
                    // 设置为false的话，则始终强制返回sync方法提供的最新数据(当然会需要更多等待时间)。
                    //syncInBackground: true,

                    // 你还可以给sync方法传递额外的参数
//                    syncParams: {
//                        extraFetchOptions: {
//                            // 各种参数
//                        },
//                        someFlag: true,
//                    },
                }).then(ret => {
                    // 如果找到数据，则在then方法中返回
                    // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
                    // 你只能在then这个方法内继续处理ret数据
                    // 而不能在then以外处理
                    // 也没有办法“变成”同步返回
                    // 你也可以使用“看似”同步的async/await语法

                    // 更新data值

                    self.props.fetchCacheBookData(JSON.parse(ret))

                }).catch(err => {
                    //如果没有找到数据且没有sync方法，
                    //或者有其他异常，则在catch中返回
                    self.props.fetchBookData();
//                    switch (err.name) {
//                        case 'NotFoundError':
//                            break;
//                        case 'ExpiredError':
//                            break;
//                    }
                })
//         global.storage.load({
//                             key:'usersetting',
//                         }).then(ret => {
//                             var data=JSON.parse(ret);
//                             self.setState({
//                                active:data.panelid
//                             });
//                             self.props.fetchCacheUsersettingData(data)
//                         })
        //BackAndroid.addEventListener('hardwareBackPress', this.handleBack)
      }


      opencallback(index){
          this.setState({
            active:index
          });
      }
      choosebook(bookid,catid,panelid){
        this.props.chooseBook(catid,bookid,panelid);
        //this.props.setInitBook(false);
        this.props.navigation.navigate('Habbitpage');
        //NativeModules.IntentModule.startActivityFromJS("com.sanli.vocabulary.TwoActivity","5#firstselect")

//        NativeModules.IntentModule.startActivityFromJSGetResult("com.sanli.vocabulary.TwoActivity",200,"5",
//          (msg) => {
//
//            this.props.setLearncount(msg)
//            ToastAndroid.show('bookpage界面:'+msg,ToastAndroid.SHORT);
//            if(msg!="back") {
//                this.setState({
//                    pagechange:true
//                });
//                var data=msg.split("|");
//                this.props.setLearncount(data[0]);
//                this.timer = setTimeout(
//                      () => {
//                        this.props.navigation.goBack();
//                      },
//                      100
//                    );
//
//            }
//
//          },
//           (result) => {
//            ToastAndroid.show('系统错误:'+result,ToastAndroid.SHORT);
//
//          })
      }


      render() {
          var self=this;
          const { navigation,databook,usersetting} = this.props;
          //console.log(navigation);
          var content=null;
          if(databook.length>0){
            content=databook.map((item,i)=>{
                  var books=item.books.other?item.books.other.map((bookitem,j)=>{
                    return <View key={j} style={styles.item_other_item}><Book text={bookitem.book_name} onPress={()=>self.choosebook(bookitem.book_id,bookitem.catid,i+1)} selected={usersetting.bookid==bookitem.book_id&&usersetting.catid==bookitem.catid?true:false}/></View>
                  }):null
                  return (<Panel key={i} title={item.name} opencallback={()=>self.opencallback(i+1)} isSelect={usersetting.panelid==i+1?true:false}  active={this.state.active} index={i+1}>
                            <View style={styles.itemwrap}>
                              <View style={styles.item_jianwrap}>
                                <View><Book text={item.books.recommend.book_name} onPress={()=>self.choosebook(item.books.recommend.book_id,item.books.recommend.catid,i+1)} jian={true} selected={usersetting.bookid==item.books.recommend.book_id?true:false}/></View>
                                <View style={styles.item_jian_textwrap}>
                                    <Text style={styles.item_jian_title}>{item.books.recommend.book_title}</Text>
                                    <Text>{item.books.recommend.book_des}</Text>
                                </View>
                              </View>
                              <View style={styles.item_otherwrap}>
                                {books}
                              </View>
                            </View>
                          </Panel>)
              })
          }
          return ( //Step 2

            <Container>
                {this.props.dataloading||this.state.pagechange?
                <ScrollView style={styles.container}><Spinner color="#ff7a0e"/></ScrollView>:null}
                {navigation.state.routefrom&&navigation.state.routefrom=='Drawer'?<Header>
                    <Left>
                      <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrow-back" />
                      </Button>
                    </Left>
                    <Body>
                      <Title>EditScreenOne</Title>
                    </Body>
                    <Right />
                  </Header>:null}
                {!this.state.pagechange&&!this.props.dataloading?<ScrollView style={styles.container}>

                  <View>
                  <Text style={styles.title}>
                    选择考试书籍
                  </Text>
                  </View>
                  {content}

                </ScrollView>:null}
            </Container>
          );
        }

}

const styles=StyleSheet.create({
  container: {
      flex : 1,
      backgroundColor : '#ffffff'
    },
  title:{
    flex : 1,
    color:'#222222',
    fontSize:36*ratio,
    textAlign:'center',
    paddingTop : 48*ratio,
    paddingBottom : 64*ratio
  },
  item_jianwrap:{
    flex : 1,
    flexDirection:'row',
    marginTop:35*ratio,
    marginLeft:27*ratio,
    marginRight:27*ratio,
    paddingBottom:40*ratio,
    borderBottomWidth:1,
    borderBottomColor:'#eaeaea'
  },
  item_otherwrap:{
    flexDirection:'row',
    marginLeft:20*ratio,
    marginTop:35*ratio,
    justifyContent:'flex-start',
    flexWrap:'wrap'
  },
  item_other_item:{
    paddingRight:40*ratio,
    paddingLeft:40*ratio,
    marginBottom:40*ratio
  },
  item_jian_textwrap:{
    marginLeft:30*ratio,
    width:472*ratio
  },
  item_jian_title:{
    fontSize:30*ratio,
    color:'#222222',
    marginBottom:20*ratio
  }
});

const mapDispatchToProps = {
  fetchBookData : fetchBookData,
  fetchCacheBookData : fetchCacheBookData,
  //fetchCacheUsersettingData:fetchCacheUsersettingData,
  chooseBook : chooseBook,
  setLearncount : setLearncount
  //setInitBook : setInitBook
}

const mapStateToProps = (state) => ({
  dataloading:state.databook.loading,
  databook:state.databook.datalist,
  error:state.databook.error,
  usersetting:state.usersetting,
  navigationState: state.root
})

export default connect(mapStateToProps, mapDispatchToProps)(Bookpage)