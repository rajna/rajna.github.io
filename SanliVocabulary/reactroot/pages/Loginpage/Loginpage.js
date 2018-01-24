import React, { PureComponent } from 'react';

import {
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
  PanResponder,
  TextInput
} from 'react-native';

import { connect } from 'react-redux'

import {login} from '../../store/usersetting';

let {width} = Dimensions.get('window');

var ratio=width/750;

import Icon from 'react-native-vector-icons/Icomoon';

import {Container,Content,Item,Input,Form} from 'native-base';

import styles from './style.js';

class Loginpage extends PureComponent {
  constructor(props){
      super(props);
      this.scollerPanResponder = PanResponder.create({
                  onStartShouldSetPanResponder: (e, g) => true,
                  onMoveShouldSetResponder: (evt) => true
              });
      this.name="";
      this.psd="";
      this._onNameChange.bind(this);
      this._onPasswordChange.bind(this);
  }
  _onNameChange(text){
    this.name=text;
  }
  _onPasswordChange(text){
    this.psd=text;
  }
  _onLogin(){
      this.props.login(this.name,this.psd);
      //this.props.navigation.navigate('DrawerNavigation')
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
                     <Text style={[styles.headtext]}>登录</Text>
                  </View>
                  <View style={styles.headaction}>
                     <Icon name='glove' style={{color:'white',fontSize:18}}/>
                  </View>
             </View>
             <Content>
               <View style={styles.loginform}>
                <Form>
                      <Item>
                         <Icon name='glove' style={{color:'#999999',fontSize:18}}/>
                         <Input placeholder='请输入账号' onChangeText={(text) => {this._onNameChange(text)}}/>
                       </Item>
                       <Item style={{borderBottomWidth:0}}>
                         <Icon name='glove' style={{color:'#999999',fontSize:18}}/>
                         <Input placeholder='登录密码' onChangeText={(text) => {this._onPasswordChange(text)}}/>
                       </Item>
                </Form>

               </View>
               <View style={styles.buttonStartStyle}>
                     <TouchableOpacity onPress={() => {this._onLogin()}}>
                      <Image style={[styles.buttonStartBgStyle,{width:650*ratio,height:88*ratio}]} source={{uri: 'button_start'}} />
                      <Text style={styles.buttonStartTextStyle}>登录</Text>
                     </TouchableOpacity>
                   </View>
             </Content>

        </Container>
    )
  }
}

const mapDispatchToProps = {
  login : login,
}

const mapStateToProps = (state) => ({
  usersetting:state.usersetting
})

export default connect(mapStateToProps, mapDispatchToProps)(Loginpage)