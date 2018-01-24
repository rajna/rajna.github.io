import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import {
  TouchableOpacity,
  ToastAndroid,
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

import LearnCard from './LearnCard';

import { NavigationActions } from 'react-navigation'

import Swiper from 'react-native-swiper';

import Icon from 'react-native-vector-icons/Icomoon';

import {Container,Button,Content,Thumbnail,Card,CardItem,List,ListItem,Left,Body,Right,Radio,StyleProvider,Picker,Form, Item as FormItem,Spinner} from 'native-base';

import ProgressBar from "../../components/ProgressBar";

import {syncWordTodayStudy,refreshwordcurrent,syncWordIsStudyData,syncWordIsOverallData,syncWordIsEasyData
,syncWordIsKnowData
,syncWordIsUnknowData} from '../../store/usersetting';

let {width} = Dimensions.get('window');

var ratio=width/750;




import SQLite from '../../db/SQLite';

import {getDate,GetRandomNum} from '../../util/tool'

var sqLite = new SQLite();



function swapItems(arr, index1, index2) {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    return arr;
  };

function upRecord(arr, $index) {
    if($index == 0) {
      return;
    }
    return swapItems(arr, $index, $index - 1);
  };

function downRecord(arr, $index) {
    if($index == arr.length -1) {
      return;
    }
    return swapItems(arr, $index, $index + 1);
  };




class Wordlearnpage extends PureComponent{
    constructor(props) {
        super(props);
        this.continueLearn.bind(this);
        this.indexChanged.bind(this);
        this.slide.bind(this);
        this.initindex=0;
        this.indexarray=[0,1,2];
        this.direction=null;
        this.isinit=false;
        var {learncount,learnwordprocess}=this.props.usersetting;

        this.buttontype=0;//当前活动按钮 0继续学习 1太简单  4二次学习 继续学习
        this.state={
            index:false,
            progress: learnwordprocess/learncount,
            scrollEnabled:false
        }
      }
      rightChangeIndexarray(index){
            var {catid,bookid,learnlog}=this.props.usersetting;
            var wordTodayStudy=learnlog[catid+"-"+bookid].wordTodayStudy;
            if(index==2){
                //this.indexarray[0]=this.indexarray[2]+1<wordTodayStudy.length?this.indexarray[2]+1:this.indexarray[0];
                this.indexarray[0]=this.indexarray[2]+1;
             }
             if(index==0){
                //this.indexarray[1]=this.indexarray[0]+1<wordTodayStudy.length?this.indexarray[0]+1:this.indexarray[1];
                this.indexarray[1]=this.indexarray[0]+1
             }
             if(index==1){
                 //this.indexarray[2]=this.indexarray[1]+1<wordTodayStudy.length?this.indexarray[1]+1:this.indexarray[2];
                 this.indexarray[2]=this.indexarray[1]+1;
             }
      }
      leftChangeIndexarray(index){
            if(index==1){
               this.indexarray[0]=this.indexarray[1]-1;
             }
            if(index==2){
                this.indexarray[1]=this.indexarray[2]-1;
             }
            if(index==0&&this.indexarray[0]>0){
                this.indexarray[2]=this.indexarray[0]-1;
             }
      }
      indexChanged(content,index){

        var {usersetting}=this.props;

        var {catid,bookid,learnlog,learncount,day_num,fuxicount,learnnewcount,learnwordprocess}=usersetting;
        var learnlogforcurrent=learnlog[catid+"-"+bookid].wordTodayStudy;

        var nexindex=currentindex=usersetting.index;

        //刚学过的单词
        var word=learnlogforcurrent[currentindex];

        var direction=(index-this.initindex==1||index-this.initindex==-2)?"right":"left";

        if(direction=="right") {
         this.rightChangeIndexarray(index);
         nexindex=nexindex+1;
        } else {
         this.leftChangeIndexarray(index);

         nexindex=nexindex-1
        };
        this.initindex=index;

        if(direction=="right"){

            if(this.buttontype==1){//太简单
                 //1.新增加历史学词表
                 sqLite.addNewWord(5,word,catid,bookid);
                 //2.同步store 设置is_study=2 is_over=1 learnwordprocess+1
                 this.props.syncWordIsEasyData(currentindex);
                 //3.更新今日学习表
                 sqLite.updateCurrentLearn_is_easy(2,1,word.word_id,day_num,getDate());
                 this.setState({
                     progress:(learnwordprocess+1)/learncount
                  });
            }
//            if(this.buttontype==2){//认识了
//                 //1.修改历史学词表word_type=2
//                 sqLite.updateNewWord(2,word,catid,bookid);
//                 //2.同步store 设置is_study=2 is_over=1
//                 this.props.syncWordIsKnowData(currentindex);
//                 //3.更新今日学习表
//                 sqLite.updateCurrentLearn_is_easy(2,1,word.word_id,day_num,getDate());
//            }
            if(this.buttontype==0){//继续学习
                if(word.is_study==0&&word.is_over==0){
                    //1.新增加历史学词表
                    sqLite.addNewWord(1,word,catid,bookid);
                    //2.同步store 设置is_study=1 learnwordprocess+1
                    this.props.syncWordIsStudyData(currentindex);
                    //3.更新今日学习表
                    sqLite.updateCurrentLearn_is_study(1,word.word_id,day_num,getDate());
                    //4.判断小复习是否打开
                    if(fuxicount>0&&(learnnewcount+1)>=fuxicount){
                        this.props.navigation.navigate('Fuxipage',{isfinish: 'false'});
                    };
                    this.setState({
                            progress:(learnwordprocess+1)/learncount
                    });

                }
            }
//            if(this.buttontype==3){//不认识
//                if(word.is_study==0&&word.is_over==0&&word.is_twostudy==1){
//                    //1.同步store 设置is_study=1 learnnewcount+1
//                    this.props.syncWordIsUnknowData(currentindex);
//                    //2.更新今日学习表
//                    sqLite.updateCurrentLearn_is_study(1,word.word_id,day_num,getDate());
//                    //3.判断小复习是否打开
//                    if(fuxicount>0&&(learnnewcount+1)==fuxicount){
//                        this.props.navigation.navigate('Fuxipage',{isfinish: 'false'});
//                    };
//
//                }
//            }

            if(this.buttontype==4){//二次学习，继续学习按钮
                //1.判断小复习是否打开
                if(fuxicount>0&&learnnewcount==fuxicount){
                    this.props.navigation.navigate('Fuxipage',{isfinish: 'false'});
                };
            }

        }
        //更新背词游标
        this.props.refreshwordcurrent(nexindex);

        console.log("indexChanged start");
        console.log("滑动方向："+direction);
        console.log("按钮类型："+this.buttontype);
        console.log("当前列表：");

        console.log("当前单词：");
        console.log(word);
        console.log("当前游标位置："+this.props.usersetting.index);

        console.log("当前进度："+this.props.usersetting.learnwordprocess);
        console.log("当前学习新词数："+this.props.usersetting.learnnewcount);
        console.log("当前卡片数组："+this.indexarray);
        console.log("indexChanged end");
      }
      initWord(times){
        //获取当前书下的所有词
        var worddata=[];
        var wordlearndata=[];
        var usersetting=this.props.usersetting;
        var {catid,bookid,learncount,level_nav,level_nav_sub}=usersetting;
        var self=this;
        let today=getDate();
        var learhistorycount=0;
        var learnowcount=learncount;
        //查找本学科,本书,本level中除已背过的单词
//        sqLite.findCollectionAllWordData(catid,bookid).then((res)=>{
//          console.log("本书总词数："+res.length);
//        });
//        sqLite.findCollectionAllWordData(catid,bookid,level_nav).then((res)=>{
//                  console.log("本书本level总词数："+res.length);
//                  console.log(res);
//        });
        sqLite.findCollectionAllWordNotLearnData(catid,bookid,level_nav,level_nav_sub).then((res)=>{
//            console.log("未学词数"+res.length);
//            console.log(res);
            sqLite.findCollectionAllHistoryWordData(catid,bookid,level_nav,level_nav_sub).then((reshistory)=>{
                console.log("学过词数："+reshistory.length);
                console.log(reshistory);
                if(reshistory!=0){
                    //console.log("学过词数："+reshistory.length);
                    learhistorycount=learncount*0.2;
                    learhistorycount=reshistory.length>=learhistorycount?learhistorycount:reshistory.length;
                    learnowcount=learncount-learhistorycount;
                    reshistory=reshistory.sort(function(){return 0.5-Math.random();});
                    reshistory=reshistory.slice(0,learhistorycount);
                }

                 if(res==0){
                   alert("本书已学完");
                 }


                 //本书剩余词汇个数>=learnowcount eg:30-2=28
                 if(res.length<learnowcount){//可学单词不够
                     learnowcount=res.length;//取所有可学词
                     learhistorycount=learncount-learnowcount;//从历史词汇补足
                     learhistorycount=reshistory.length>=learhistorycount?learhistorycount:reshistory.length;
                  }

                  if(learhistorycount>0){
                      for(let j=0;j<learhistorycount;j++){
                          var item=reshistory[j];
                          item=Object.assign({},item,{
                                day_num: times,
                                is_study:0,
                                is_over:0,
                                is_twostudy:3,
                                create_time:today
                             });
                          worddata.push(item);
                          wordlearndata.push({
                             word_id: reshistory[j].word_id,
                             day_num: times,
                             is_study:0,
                             is_over:0,
                             is_twostudy:3,
                             create_time:today
                          })
                      }
                  }

                    for(let i=0;i<learnowcount;i++){
                        //wordindexArr.push(GetRandomNum(1,res.length));
                        var item=res[i];
                        item=Object.assign({},item,{
                                              day_num: times,
                                              is_study:0,
                                              is_over:0,
                                              is_twostudy:0,
                                              create_time:today
                                           });
                        worddata.push(item);
                        wordlearndata.push({
                           word_id: res[i].word_id,
                           day_num: times,
                           is_study:0,
                           is_over:0,
                           is_twostudy:0,
                           create_time:today
                        })
                    };



                 //新建学习游标从0开始
                 self.props.syncWordTodayStudy(worddata,times,0,0,0);

                 sqLite.inertNewLearn(catid,bookid,times,wordlearndata);
            });



        })

      }
      initSlide(){
        var self=this;
        this._panResponder = PanResponder.create({
                          onStartShouldSetPanResponder: () => {return false},
                          onMoveShouldSetPanResponder: (evt,gs)=> {
                            if(Math.abs(gs.dx)>=Math.abs(gs.dy)&&Math.abs(gs.dx)>15) {
                                return true
                            }
                          },
                          onPanResponderMove: (evt,gs)=>{

                            if(Math.abs(gs.dx)>=Math.abs(gs.dy)){
                                if(gs.dx<0){
                                    self.slide("left");
                                }else{
                                    self.slide("right");
                                }
                            }else{
                                self.slide("vertical");
                            }


                          },
                          onPanResponderRelease:(evt,gs)=>{
                            var {catid,bookid,learnlog,index}=self.props.usersetting;

                            var learnlogforcurrent=learnlog[catid+"-"+bookid];

                            if(!learnlogforcurrent){
                              return
                            }

                            var wordTodayStudy=learnlogforcurrent.wordTodayStudy;

                            if(!wordTodayStudy){
                              return
                            }

                            //当前单词
                            var word=wordTodayStudy[index];

                            if((word.is_twostudy==1||word.is_twostudy==3)&&word.is_study==0) return

                            var buttontype=0;

                            if(self.direction=="left"){
                                if(word.is_twostudy==1||word.is_twostudy==3)  buttontype=4;
                                self.continueLearn(1,buttontype);
                            }
                            if(self.direction=="right"){
                                self.continueLearn(-1);
                            }
                          },
                          onResponderTerminationRequest: (evt,gs)=>{
                            return true
                          }
                        })
      }
      componentWillMount(){
        this.initSlide();

        var {usersetting}=this.props;

        var {catid,bookid,day_num,learncount,fuxicount}=usersetting;
        //已初始化当日学习
        //if(day_num>0) return

        var self=this;

        //1.查找用户最后一次学习的次数
        const today=getDate();

        sqLite.findLastLearn(today,catid,bookid).then((res)=>{
            if(res==0){
                //2.当日没有学习记录,插入学习记录
                self.initWord(res+1);
            }else{
                //3.有记录,根据res查询最后一次完成状态
                sqLite.checkFinish(res,today).then((checkres)=>{
                    console.log(checkres);
                    if(checkres["count(*)"]>0) {
                        //有未学完
                        global.storage.load({
                             key:'userlearning',
                             id:`${catid}-${bookid}-${res}`
                         }).then(usersetting => {
                             var {catid,bookid,learnlog,learnnewcount,day_num,fuxicount,index,learnwordprocess,learncount}=usersetting;
                             ToastAndroid.show("上次学了"+learnwordprocess+"个单词,继续学习",ToastAndroid.SHORT);
                             var learnlogforcurrent=learnlog[catid+"-"+bookid].wordTodayStudy;
                             this.props.syncWordTodayStudy(learnlogforcurrent,day_num,index,learnnewcount,learnwordprocess);
                         }).catch((err)=>{
                            //本地没有
                            //查询服务器,
                            //服务器没有新建一个学习
                            self.initWord(res+1);
                         });

//                        sqLite.findCollectionLastLearn(res,today).then((res)=>{
//                            var worddataorigin=res.data;
//                            //var index=res.index==learncount?res.index-1:res.index;
//                            ToastAndroid.show("上次学了"+res.index+"个单词,继续学习",ToastAndroid.SHORT);
//                            var learnnewcount=res.learnnewcount-fuxicount>0?res.learnnewcount-fuxicount:res.learnnewcount;
//
//                            this.props.syncWordTodayStudy(res.data,checkres["day_num"],res.index,learnnewcount,res.learnwordprocess);
//                        });

                    }else{
                        //2.插入学习记录
                        self.initWord(res+1);
                    }
                })
            }
        })



      }
      istwostudyknow(){
        var {usersetting}=this.props;
        var {catid,bookid,learnlog,day_num,index,learnwordprocess,learncount}=usersetting;
        var learnlogforcurrent=learnlog[catid+"-"+bookid].wordTodayStudy;
        //当前单词
        var word=learnlogforcurrent[index];

        //1.修改历史学词表word_type=2
        sqLite.updateNewWord(2,word,catid,bookid);

        if(word.is_twostudy==3){
             //2.同步store 设置is_study=2 is_over=1 learnwordprocess+1
             this.props.syncWordIsEasyData(index);
             this.setState({
                 progress:(learnwordprocess+1)/learncount
              });
        }else{
            //2.同步store 设置is_study=2 is_over=1
            this.props.syncWordIsKnowData(index);
        }


        //3.更新今日学习表
        sqLite.updateCurrentLearn_is_easy(2,1,word.word_id,day_num,getDate());
      }
      istwostudyunknow(){
        var {usersetting}=this.props;
        var {catid,bookid,learnlog,day_num,index}=usersetting;
        var learnlogforcurrent=learnlog[catid+"-"+bookid].wordTodayStudy;
        //当前单词
        var word=learnlogforcurrent[index];
        //0.修改历史学词表word_type=1
        sqLite.updateNewWord(1,word,catid,bookid);

        if(word.is_twostudy==3){
            //1.同步store 设置is_study=1 learnwordprocess+1 learnnewcount+1
            this.props.syncWordIsStudyData(index);
        }else{
            //1.同步store 设置is_study=1 learnnewcount+1
            this.props.syncWordIsUnknowData(index);
        }

        //2.更新今日学习表
        sqLite.updateCurrentLearn_is_study(1,word.word_id,day_num,getDate());
      }
      continueLearn(step,buttontype=0){

        var {usersetting}=this.props;
        var {catid,bookid,learnlog,learnnewcount,day_num,fuxicount,index,learnwordprocess,learncount}=usersetting;
        var learnlogforcurrent=learnlog[catid+"-"+bookid].wordTodayStudy;
        //当前单词
        var word=learnlogforcurrent[index];
        this.buttontype=buttontype;


        if(step==-1){
            if(index==0){
                ToastAndroid.show("到底了",ToastAndroid.SHORT);
                return
            }
        }else{
            //最后一个词
            if(index==learnlogforcurrent.length-1){
                //判断继续学习，不认识
                //a.学习新词数量增加
                learnnewcount=(word.is_study==0&&word.is_over==0)?learnnewcount+1:learnnewcount;

                if(buttontype==0||buttontype==1){
                    //插入历史学词表
                    var word_type=buttontype==1?5:1
                    sqLite.addNewWord(word_type,word,catid,bookid);
                }
                if(buttontype==4){
                    //更改历史学词表
                    sqLite.updateNewWord(word.is_study,word,catid,bookid);
                }

                //0.小复习是否开启
                if(fuxicount>0&&learnnewcount>0){
                    //继续学习，不认识
                    //继续学习 indx+1   learnnewcount+1   learnwordprocess+1
                    //不认识   indx+1   learnnewcount+1   learnwordprocess+0
                    if(buttontype==0){
                        //1.同步store
                        this.props.syncWordIsStudyData(index);
                        //2.更新今日学习表
                        sqLite.updateCurrentLearn_is_study(1,word.word_id,day_num,getDate());
                    }

                    this.props.navigation.navigate('Fuxipage',{isfinish: 'true'});
                }else{
                    //1.更新今日学习表is_over=1
                    sqLite.updateCurrentLearn_is_over(1,day_num,getDate()).then((res)=>{
                        //3.同步store
                        this.props.syncWordIsOverallData();
                    });
                    this.props.navigation.navigate('Finishpage');
                }

                return
            }
        }

        //执行滚动
        this.refs.swiper.scrollBy(step,this.initindex==0?false:true);
      }

      slide(dir){
        this.direction=dir;
//        this.setState({
//                        scrollEnabled:dir=="left"?true:false
//                    })
      }

      render() {
          var self=this;
          var {usersetting}=this.props;
          var {catid,bookid,day_num,learnlog,learncount,index,learnnewcount,learnwordprocess}=usersetting;
          var learnlogforcurrent=learnlog[catid+"-"+bookid];
          var isready=false;
          if(learnlogforcurrent&&learnlogforcurrent.wordTodayStudy) isready=true;
          var content=null;
          if(isready){
            if(!this.isinit){
                 if(usersetting.index!=0){
                    for(var i=1;i<usersetting.index+1;i++){
                        this.rightChangeIndexarray(i%3);
                        this.initindex=i%3;
                    }

                 }

                this.isinit=true;
            }
            var itemarray=[
            learnlogforcurrent.wordTodayStudy[this.indexarray[0]],
            learnlogforcurrent.wordTodayStudy[this.indexarray[1]],
            learnlogforcurrent.wordTodayStudy[this.indexarray[2]]];

            content=itemarray.map((item,i)=>{
                        var content=<View style={styles.slide} key={i}>
                                        <LearnCard data={item}
                                        continueLearn={()=>this.continueLearn(1,0)}       //继续学习，左移一个，按钮类型为默认0
                                        continueLearnEasy={()=>this.continueLearn(1,1)} //太简单，左移一个，按钮类型1
                                        continueLearnKnow={()=>this.istwostudyknow()} //认识了
                                        continueLearnUnknow={()=>this.istwostudyunknow()} //不认识
                                        continueLearntwostudy={()=>this.continueLearn(1,4)} //二次学习，继续学习 按钮类型4
                                        ondScroll={(dir)=>{self.slide(dir)}}/>
                                     </View>;
                        return content
                       });

              console.log("rennder start");
              console.log("当前列表：");
              var wordlist=learnlogforcurrent.wordTodayStudy.map((item)=>{
                return {
                 word_name: item.word_name,
                 word_id: item.word_id,
                 is_study: item.is_study,
                 is_over: item.is_over,
                 is_twostudy: item.is_twostudy
                }
              });
              console.log(wordlist);

              console.log("当前单词：");
              console.log(learnlogforcurrent.wordTodayStudy[index]);
              console.log("当前单词数量："+learnlogforcurrent.wordTodayStudy.length);
              console.log("当前游标位置："+index);
              console.log("当前进度："+learnwordprocess);
              console.log("当前学习新词数："+learnnewcount);
              console.log("当前卡片数组序列："+this.indexarray);
              console.log("当前卡片位置："+this.initindex);
              console.log("当前卡片数组："+itemarray);
              console.log("rennder end");


              if(day_num>0){
                global.storage.save({
                      key:'userlearning',
                      id:`${catid}-${bookid}-${day_num}`,
                      data: usersetting,
                      expires: null
                  });
              }

          }





          return (
          <Container style={{backgroundColor:'white'}}  {...this._panResponder.panHandlers}>
           <View style={styles.head}>
                  <View style={styles.thumbnailwrap}>
                     <Icon name='glove' style={{color:'#666666',fontSize:18}}/>
                  </View>
                  <View style={styles.headtitle}>
                     <Text style={[styles.headtext]}>进度{learnwordprocess}/{learncount}</Text>
                  </View>
                  <View style={styles.headaction}>
                     <Icon name='glove' style={{color:'white',fontSize:18}}/>
                  </View>
             </View>
            <ProgressBar
                      backgroundStyle={{backgroundColor: '#e8e8e8'}}
                      fillStyle={{backgroundColor:'#ff7a0e'}}
                      style={{width: 750*ratio}}
                      progress={this.state.progress?this.state.progress:learnnewcount/learncount}
                    />

           {isready&&this.isinit?<Swiper style={styles.wrapper}
                       showsButtons={false}
                       loop={true}
                       index={this.initindex}
                       showsPagination={false}
                       onIndexChanged={(index)=>{self.indexChanged(self,index)}}
                       scrollEnabled={this.state.scrollEnabled}
                       ref="swiper">
                       {content}
                     </Swiper>:<Spinner color="#ff7a0e"/>}
          </Container>
          );
        }


}


const mapDispatchToProps = {
  syncWordTodayStudy:syncWordTodayStudy,
  syncWordIsStudyData:syncWordIsStudyData,
  syncWordIsOverallData:syncWordIsOverallData,
  refreshwordcurrent:refreshwordcurrent,
  syncWordIsEasyData:syncWordIsEasyData,
  syncWordIsKnowData:syncWordIsKnowData,
  syncWordIsUnknowData:syncWordIsUnknowData
}

const mapStateToProps = (state) => ({
  usersetting:state.usersetting
})

var styles = StyleSheet.create({
  wrapper: {
  },
  slide: {
    flex: 1,
    backgroundColor: '#f8f7f7',
    paddingTop: 21*ratio,
    paddingLeft: 20*ratio,
    paddingRight: 20*ratio,
    paddingBottom: 42*ratio
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  head: {
      backgroundColor:'rgba(0,0,0,0)',
      height : 88*ratio,
      flexDirection:'row'
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
       color:'#222222'
     },
   headaction:{
       flex:1,
       alignItems: 'flex-end',
       marginTop : 20*ratio,
       marginRight : 30*ratio
     },
   slideOverlay:{
    backgroundColor:'rgba(0,0,0,0.1)',
    position:'absolute'
   }
})

export default connect(mapStateToProps, mapDispatchToProps)(Wordlearnpage)