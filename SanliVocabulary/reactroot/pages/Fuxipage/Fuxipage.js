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

import { Container, Header, Content, List, ListItem,Body ,Right} from 'native-base';

import {syncWordTodayStudy,refreshwordcurrent,syncWordIsOverallData,syncWordIsEasyData} from '../../store/usersetting';

let {width} = Dimensions.get('window');

var ratio=width/750;

import {getDate,GetRandomNum} from '../../util/tool'


import SQLite from '../../db/SQLite';

var sqLite = new SQLite();


class Fuxipage extends Component{
    constructor(props) {
        super(props);
        this._changeToEasy.bind(this);
          var {usersetting,navigation}=props;
          var {catid,bookid,learnlog,learncount,index,learnnewcount}=usersetting;
          var worddata=learnlog[catid+"-"+bookid]["wordTodayStudy"];
          //worddata=worddata.slice(index-learnnewcount);
          var data=[];
          for(let i=0;i<worddata.length;i++){
            if(worddata[i].is_study==1&&worddata[i].is_over==0){
                data.push({
                    index:i,
                    data:worddata[i]
                })
            }
          }
//          worddata=worddata.filter((item)=>{
//            return item.is_study==1&&item.is_over==0
//          });
          this.state={
            worddata:data
          }
      }

      _continue(){
          var self=this;

          var {usersetting,navigation}=this.props;
          if(navigation.state.params.isfinish=="true"){
            this.props.syncWordIsOverallData();
            sqLite.updateCurrentLearn_is_over(1,usersetting.day_num,getDate()).then((res)=>{
                //1.同步store
                this.props.navigation.navigate('Finishpage');
            });

            return
          }
          var {catid,bookid,learnlog,fuxicount,day_num,index,learnwordprocess}=usersetting;
          //1.取learncount的20%进入继续学习
          var fuxicountinsert=fuxicount*0.2;

          var worddataorigin,worddata,randomword=[];

          worddataorigin=worddata=learnlog[catid+"-"+bookid]["wordTodayStudy"];
          //2.乱序为抽取做准备
//          worddata=worddata.filter((item)=>{
//            return item.is_study==1&&item.is_over==0
//          });
          for(let g=0;g<worddataorigin.length;g++){
            if(worddataorigin[g].is_study==1&&worddataorigin[g].is_over==0){
                randomword.push({index:g,item:Object.assign({},{},worddataorigin[g])})
            }
          }
          if(randomword.length>0){
              randomword=randomword.sort(function(){return 0.5-Math.random();});
              if(randomword.length<=fuxicountinsert){
                fuxicountinsert=randomword.length
              }
          }else{
            fuxicountinsert=0;
          }


          //for test
//          fuxicountinsert=1;
//          var randomwordcopy=randomword;

          //3.抽取进入下一轮
          for(let i=0;i<randomword.length;i++){
              if(i<fuxicountinsert){
                  randomword[i]["item"].is_twostudy=1;
                  randomword[i]["item"].is_study=0;
//                  worddataorigin[randomword[i]["index"]].is_twostudy=1;
//                  worddataorigin[randomword[i]["index"]].is_study=0;
                  worddataorigin[randomword[i]["index"]].is_over=1;
              }else{
                  randomword[i]["item"].is_over=1;
                  worddataorigin[randomword[i]["index"]].is_over=1;
              }
          }

          //2.更新数据库is_twostudy
          sqLite.updateCurrentLearn_is_twostudy(randomword,day_num,getDate()).then((res)=>{
            //sqLite.findCollectionLastLearn(day_num,getDate()).then((res)=>{
                //3.把抽取部分插入后续词中
                //var wordarray=worddataorigin;
                var chouqu;

                //4有可抽取的值
                if(fuxicountinsert>0){
                    chouqu = randomword.slice(0,fuxicountinsert);
                    chouqu= chouqu.map((item)=>{
                        //worddataorigin[item["index"]].is_over=1;
                        return item["item"]
                    });
                    var chouruindex=GetRandomNum(learnwordprocess+1,learnwordprocess+fuxicount);
                    var prev=worddataorigin.slice(0,chouruindex);
                    var after=worddataorigin.slice(chouruindex);
                    worddataorigin=prev.concat(chouqu).concat(after);
                }



                //5.同步store

                this.props.syncWordTodayStudy(worddataorigin,day_num,index,0,learnwordprocess);
                this.props.navigation.goBack();
            //})
          });
          //var fuxiarray=worddata.slice(0,fuxicount);
          //var overarray=worddata.slice(fuxicount,worddata.length);

      }

      _changeToEasy(item){
       var {catid,bookid,day_num}=this.props.usersetting;
       // alert("ddd");
       var word=item.data;
        //1.更新加历史学词表
        sqLite.updateNewWord(2,word,catid,bookid);
        //2.同步store 设置is_study=2 is_over=1 learnwordprocess+1
        this.props.syncWordIsEasyData(item.index,false);
        //3.更新今日学习表
        sqLite.updateCurrentLearn_is_easy(2,1,word.word_id,day_num,getDate());
      }

      render() {
              var self=this;

              return (
                    <Container style={{backgroundColor:'#f6f6f6'}}>
                        <View style={styles.head}>
                                <View style={styles.thumbnailwrap}>
                                   <Icon name='glove' style={{color:'#666666',fontSize:18}}/>
                                </View>
                                <View style={styles.headtitle}>
                                   <Text style={[styles.headtext]}>小复习</Text>
                                </View>
                                <View style={styles.headaction}>
                                   <Icon name='set' style={{color:'#666666',fontSize:18}}/>
                                </View>
                           </View>

                      <Content style={{backgroundColor:'white'}}>
                        <List>
                          {this.state.worddata.map((item,i)=>{
                            return <ListItem key={i} >
                                         <Body>
                                           <View style={styles.itemwrap}>
                                            <Text style={styles.itemword}>{item.data.word_name}</Text>
                                            <View style={styles.itemexplain}>
                                                <Text style={styles.itemexplaintext}>{item.data.ch_explain}</Text>
                                                {item.data.is_study==1?<TouchableOpacity onPress={()=>this._changeToEasy(item)} style={styles.itemoverlay}>
                                                    <View style={styles.itemoverlaycontent} onPress={this._changeToEasy.bind(this)}></View>
                                                </TouchableOpacity>:null}
                                            </View>
                                           </View>

                                         </Body>
                                         <Right>
                                            <Icon name="know" style={item.data.is_over==1?{color:'#ff7a0e'}:{color:'#999999'}}/>
                                         </Right>
                                     </ListItem>
                          })}

                        </List>
                      </Content>
                       <View style={styles.buttonStartStyle}>
                          <TouchableOpacity onPress={this._continue.bind(this)}>
                           <Image style={[styles.buttonStartBgStyle,{width:650*ratio,height:88*ratio}]} source={{uri: 'button_start'}} />
                           <Text style={styles.buttonStartTextStyle}>继续学习</Text>
                          </TouchableOpacity>
                        </View>
                    </Container>
              );
        }


}


const mapDispatchToProps = {
  syncWordTodayStudy:syncWordTodayStudy,
  syncWordIsOverallData:syncWordIsOverallData,
  syncWordIsEasyData:syncWordIsEasyData
}

const mapStateToProps = (state) => ({
    usersetting:state.usersetting,
})

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#f6f6f6'
    },
    buttonStartStyle:{
        alignItems:'center',
        paddingTop:50*ratio,
        paddingBottom:40*ratio,
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
          flexDirection:'row',
          marginBottom: 20*ratio,
          borderBottomWidth:1,
          borderColor:'#dbdbdb'
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
            marginTop : 28*ratio,
            marginRight : 30*ratio,
          },
     listwrap:{
        backgroundColor:'white'
     },
     itemwrap:{
        flexDirection:'row'
     },
     itemword:{
        flex:3,
        color:'#222222',
        fontSize:36*ratio
     },
     itemexplain:{
        flex:3,
        padding:10*ratio
     },
     itemexplaintext:{
        fontSize:28*ratio,
        color:'#666666'
     },
     itemoverlay:{
        width:'100%',
        height:'100%',
        position:'absolute'
     },
     itemoverlaycontent:{
         width:'100%',
         height:'100%',
         backgroundColor:'#dbdbdb'
      }
});

export default connect(mapStateToProps, mapDispatchToProps)(Fuxipage)