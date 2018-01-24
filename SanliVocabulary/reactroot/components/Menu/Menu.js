import React,{PureComponent} from "react";
import { AppRegistry, Image, StatusBar ,StyleSheet,View,Dimensions,Text} from "react-native";
import { Container, Content, List, ListItem } from "native-base";
import Icon from 'react-native-vector-icons/Icomoon';
import {logout} from '../../store/usersetting';

import {dispatch,connect} from 'react-redux'

const routes = ["test1", "HomeToBookpage","test2","test3","test4","logout"];
const routesName = {"test1":"学词tips",
                  "HomeToBookpage":"更改考试",
                  "test2":"背词习惯",
                  "test3":"意见反馈",
                  "test4":"清除缓存",
                  "logout":"退出系统"};
const iconsName = {"test1":"tip",
                  "HomeToBookpage":"replace",
                  "test2":"like",
                  "test3":"feedback",
                  "test4":"clean",
                  "logout":"update"};
let {width} = Dimensions.get('window');

var ratio=width/750;

class SideBar extends PureComponent {
  handleNavChange(data){
        if(data=="HomeToBookpage"){
            this.props.navigation.navigate('BookReSelectpage',{ routefrom: 'DrawerNavigation' })
            return
        }
        if(data=="logout"){
            this.props.dispatch(this.props.logout())
            return
        }
        this.props.navigation.navigate(data)
  }
  render() {
    var {usersetting}=this.props;
    return (
      <Container>
        <Content>
          <Image
            source={{uri: 'menuhead'}}
            style={{
              height: 65,
              alignSelf: "stretch",
              flexDirection:'row'
            }}>
            <View style={styles.thumbnailwrap}>
              <Image style={styles.thumbnail} source={{uri:'http://tva3.sinaimg.cn/crop.62.133.333.333.180/6c7a503fjw8euvl4hxybfj20cq0godig.jpg'}} />
            </View>
            <View style={styles.headtitle}>
              <Text style={styles.headtitletext}>{usersetting.token?usersetting.token:"登录/注册"}</Text>
           </View>
          </Image>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.handleNavChange(data)}>
                   <Icon name={iconsName[data]} size={16} style={{marginRight:8}} color='#666666'/><Text>{routesName[data]}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
 return {
    usersetting:state.usersetting
 }
}

const mapDispatchToProps  = (dispatch) => {
    return {
        dispatch: dispatch,
        logout:logout
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SideBar)

const styles = StyleSheet.create({
  thumbnailwrap:{
    marginTop : 34*ratio,
    marginLeft : 30*ratio,
    width:60*ratio,
    height:60*ratio,
  },
  thumbnail:{
      width:60*ratio,
      height:60*ratio,
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius : 100
    },
  headtitle:{
      paddingTop:42*ratio,
      paddingLeft:20*ratio,
      alignItems: 'center',
  },
  headtitletext:{
    color:'#fff',
    fontSize:32*ratio,
  }
})