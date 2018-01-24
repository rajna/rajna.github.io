import React, { PureComponent } from 'react';

import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  PanResponder
} from 'react-native';

import { connect } from 'react-redux'

import WheelView from 'react-native-wheel';

import {setLearncount,setWordorder,habbitreset} from '../../store/usersetting';

let wheelData = [],wheelpostData=[],wheelpostDataObj={};

for(let k=1;k<=50;k++){
    wheelData.push(k*10+"            "+Math.floor(k*10*20/60));
    wheelpostData.push(k*10);
    wheelpostDataObj[k*10]=k-1;
}

let currentIndex;


let {width} = Dimensions.get('window');

var ratio=width/750;

import Icon from 'react-native-vector-icons/Icomoon';

import {Container,Button,Content,Thumbnail,Card,CardItem,List,ListItem,Left,Body,Right,Radio,StyleProvider,Picker,Form, Item as FormItem} from 'native-base';

import styles from './style.js';

class Habbitpage extends PureComponent {
  constructor(props){
      super(props);
      this.scollerPanResponder = PanResponder.create({
                  onStartShouldSetPanResponder: (e, g) => true,
                  onMoveShouldSetResponder: (evt) => true
              });

      this._onOrderChange.bind(this);
  }
  _onItemChange(index){
    currentIndex = index;
    this.props.setLearncount(wheelpostData[currentIndex]);
  }
  _onOrderChange(index){
    this.props.setWordorder(index);
  }
  _go(){
    var {learncount,word_order}=this.props.usersetting;
    if(learncount==0) this.props.setLearncount(200);
    this.props.habbitreset();
  }
  render() {
    var {usersetting}=this.props;
    var {learncount,word_order}=usersetting;
    return (
        <Container style={{backgroundColor:'#f6f6f6'}}>

            <View style={styles.head}>
                  <View style={styles.thumbnailwrap}>
                     <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon name='glove' style={{color:'#666666',fontSize:18}}/>
                     </TouchableOpacity>
                  </View>
                  <View style={styles.headtitle}>
                     <Text style={[styles.headtext]}>背词习惯设置</Text>
                  </View>
                  <View style={styles.headaction}>
                     <Icon name='glove' style={{color:'white',fontSize:18}}/>
                  </View>
             </View>
             <Content>
                 <View style={styles.title}>
                   <Text style={styles.titletext}>背词顺序</Text>
                 </View>
                 <View style={styles.order}>
                    <View style={styles.order_left}>
                         <TouchableOpacity onPress={() => this._onOrderChange(1)}>
                             <View style={styles.orderitem}>
                                {word_order==1?<Image  style={styles.orderbutton}  source={{uri: 'settingbutton'}} />:null}
                                  <Text style={[styles.orderitemtext,word_order==1?styles.orderitemtextactive:null]}>词频由高到低</Text>
                             </View>
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => this._onOrderChange(2)}>
                             <View style={styles.orderitem}>
                                 {word_order==2?<Image  style={styles.orderbutton}  source={{uri: 'settingbutton'}} />:null}
                                 <Text style={[styles.orderitemtext,word_order==2?styles.orderitemtextactive:null]}>正序A-Z</Text>
                              </View>
                          </TouchableOpacity>
                    </View>
                    <View style={styles.order_right}>
                        <TouchableOpacity onPress={() => this._onOrderChange(4)}>
                            <View style={styles.orderitem}>
                                {word_order==4?<Image  style={styles.orderbutton}  source={{uri: 'settingbutton'}} />:null}
                                <Text style={[styles.orderitemtext,word_order==4?styles.orderitemtextactive:null]}>乱序</Text>
                             </View>
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => this._onOrderChange(3)}>
                             <View style={styles.orderitem}>
                                 {word_order==3?<Image  style={styles.orderbutton}  source={{uri: 'settingbutton'}} />:null}
                                 <Text style={[styles.orderitemtext,word_order==3?styles.orderitemtextactive:null]}>逆序Z-A</Text>
                              </View>
                          </TouchableOpacity>
                    </View>
                  </View>

                  <View style={styles.title}>
                     <Text style={styles.titletext}>每日背词计划</Text>
                     <View style={styles.titleintro}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerNavigation')}>
                            <Text style={styles.titleintrotext}>如何制定计划？</Text>
                         </TouchableOpacity>
                     </View>
                  </View>

                  <View style={styles.wheelviewwrap}>
                       <View style={styles.settinginfo}>
                        <Text>您打算学习 </Text>
                        <Text style={styles.settinginfoactive}>123</Text>
                        <Text> 个单词，大约需要 </Text>
                        <Text style={styles.settinginfoactive}>30</Text>
                        <Text style={styles.settinginfoactive}>min</Text>
                       </View>
                       <View style={styles.settingtitlewwrap}>
                       <Image  style={styles.settingtime}  source={{uri: 'settingtitle'}} />
                       </View>
                       <View style={styles.wheelviewwrapinner}>
                           <Image  style={styles.wheelbg}  source={{uri: 'countpanel'}} />
                           <WheelView
                               style={styles.wheelview}
                               onItemChange={this._onItemChange.bind(this)}
                               values={wheelData}
                               isLoop={false}
                               selectedIndex={wheelpostDataObj[learncount]}
                               textSize={20}
                               velocityFling={20}
                               {...this.scollerPanResponder.panHandlers}
                             />
                        </View>
                  </View>
            </Content>
            <View style={styles.buttonStartStyle}>
              <TouchableOpacity onPress={() => this._go()}>
               <Image style={[styles.buttonStartBgStyle,{width:650*ratio,height:88*ratio}]} source={{uri: 'button_start'}} />
               <Text style={styles.buttonStartTextStyle}>GO</Text>
              </TouchableOpacity>
            </View>
        </Container>
    )
  }
}

const mapDispatchToProps = {
  setLearncount : setLearncount,
  setWordorder : setWordorder,
  habbitreset : habbitreset
}

const mapStateToProps = (state) => ({
  usersetting:state.usersetting
})

export default connect(mapStateToProps, mapDispatchToProps)(Habbitpage)