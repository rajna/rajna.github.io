import api from "../api"

import {usersettingStorage} from '../util/tool'

const CHOOSE_BOOK='CHOOSE_BOOK';

const RE_CHOOSE_BOOK='RE_CHOOSE_BOOK';

const CHOOSE_BOOK_LEVEL='CHOOSE_BOOK_LEVEL';

const FETCH_CACHE_USERSETTING_DATA='FETCH_CACHE_USERSETTING_DATA';

const FETCH_CACHE_HOME_DATA='FETCH_CACHE_HOME_DATA';

const SET_LEARN_COUNT='SET_LEARN_COUNT'

const SET_WORD_ORDER='SET_WORD_ORDER'

const SYNC_WORD_ISSTUDY='SYNC_WORD_ISSTUDY';

const SYNC_WORD_TODAY_STUDY_DATA='SYNC_WORD_TODAY_STUDY_DATA';

const SYNC_WORD_ISOVERALL='SYNC_WORD_ISOVERALL';

const REFRESH_WORD_CURRENT='REFRESH_WORD_CURRENT';

const SYNC_WORD_ISEASY='SYNC_WORD_ISEASY';

const SYNC_WORD_ISKNOW='SYNC_WORD_ISKNOW';

const SYNC_WORD_ISUNKNOW='SYNC_WORD_ISUNKNOW';

const INIT_LEVEL_NAV='INIT_LEVEL_NAV';

const LOGIN='LOGIN';

const LOGOUT='LOGOUT';

const HABBIT_RESET='HABBIT_RESET';

//const SETINITBOOK='SETINITBOOK';

//export function setInitBook(isInitBook){
//  return {
//         type:SETINITBOOK,
//         isInitBook:isInitBook
//       }
//}

export function habbitreset(){
  return {
         type:HABBIT_RESET
       }
}


export function fetchWordData(){
   var params={
        headers: {
            'Host': 'dict.api.sljy.test',
        }
     };

   return (dispatch,state) => {
    var usersetting=state().usersetting;
    return fetch(api.getbooksdata+`?catid=${usersetting.catid}&&book_id=${usersetting.bookid}`,params)
     .then((response) => response.json())
     .then((result) => result).catch(err => {
       return Promise.reject(err)
     })
 }
}

export function catchBook(catid,bookid,panelid){
  return {
         type:CHOOSE_BOOK,
         catid:catid,
         bookid:bookid,
         panelid:panelid
       }
}

export function recatchBook(catid,bookid,panelid){
  return {
         type:RE_CHOOSE_BOOK,
         catid:catid,
         bookid:bookid,
         panelid:panelid
       }
}

export function catchBookLevel(bookid,level_nav,level_nav_sub){
  return {
         type:CHOOSE_BOOK_LEVEL,
         bookid:bookid,
         level_nav:level_nav,
         level_nav_sub:level_nav_sub
       }
}

export function chooseBook(catid,bookid,panelid){
   return (dispatch,state) => {
        var usersetting=state().usersetting;

        var params={
               method: 'POST',
               headers: {
                    //method: 'POST',
                   'Host': 'dict.api.sljy.test',
                   'Content-Type': 'application/x-www-form-urlencoded',
               },
               body:`user_id&phone_oauth=${usersetting.uuid}&catid=${catid}&book_id=${bookid}`
            };
        fetch(api.setuserselectbook,params);
        dispatch(catchBook(catid,bookid,panelid));
   }

}

export function rechooseBook(catid,bookid,panelid){
   return (dispatch,state) => {
        var usersetting=state().usersetting;

        var params={
               method: 'POST',
               headers: {
                    //method: 'POST',
                   'Host': 'dict.api.sljy.test',
                   'Content-Type': 'application/x-www-form-urlencoded',
               },
               body:`user_id&phone_oauth=${usersetting.uuid}&catid=${catid}&book_id=${bookid}`
            };
        fetch(api.setuserselectbook,params);
        dispatch(recatchBook(catid,bookid,panelid));
   }

}

export function chooseHomeBookLevel(bookid,level_nav,level_nav_sub){
   return (dispatch,state) => {
        var usersetting=state().usersetting;

        var params={
               method: 'POST',
               headers: {
                    //method: 'POST',
                   'Host': 'dict.api.sljy.test',
                   'Content-Type': 'application/x-www-form-urlencoded',
               },
               body:`phone_oauth=${usersetting.uuid}&catid=${usersetting.catid}&book_id=${bookid}&level_nav=${level_nav}&level_nav_sub=${level_nav_sub}`
            };
            console.log(params);
        fetch(api.setuserselectbook,params).then((response) => response.json())
                                               .then((responseJson) => {
                                                 console.log(responseJson);
                                                 console.log("success");
                                               }).catch((error)=>{
                                                console.log(error);
                                                console.log("error");
                                               });
        dispatch(catchBookLevel(bookid,level_nav,level_nav_sub));
   }

}


export function fetchCacheUsersettingData(data){
   return {
       type:FETCH_CACHE_USERSETTING_DATA,
       data:data
     }
}

export function fetchCacheHomeData(data){
   return {
       type:FETCH_CACHE_HOME_DATA,
       data:data
     }
}

export function syncWordIsStudyData(index){
   return {
       type:SYNC_WORD_ISSTUDY,
       index:index
     }
}

export function syncWordIsEasyData(index,isaddlearnwordprocess=true){
   return {
       type:SYNC_WORD_ISEASY,
       index:index,
       isaddlearnwordprocess:isaddlearnwordprocess
     }
}

export function syncWordIsKnowData(index){
   return {
       type:SYNC_WORD_ISKNOW,
       index:index
     }
}

export function syncWordIsUnknowData(index){
   return {
       type:SYNC_WORD_ISUNKNOW,
       index:index
     }
}

export function syncWordIsOverallData(){
   return {
       type:SYNC_WORD_ISOVERALL
     }
}

//1.data 当日学习词   2.day_num 当日学习标示  3.index 数组下标   4.learnnewcount学习新词数  5.learnwordprocess学习进度
export function syncWordTodayStudy(data,day_num,index,learnnewcount,learnwordprocess){
   return {
       type:SYNC_WORD_TODAY_STUDY_DATA,
       data:data,
       day_num:day_num,
       index:index,//数组下标
       learnnewcount:learnnewcount,//学新词总数
       learnwordprocess:learnwordprocess//学习进度
     }
}

export function refreshwordcurrent(index){
   return {
       type:REFRESH_WORD_CURRENT,
       index:index
     }
}

export function setLearncount(learncount){
    return {
        type:SET_LEARN_COUNT,
        learncount:learncount
      }
}

export function login(name,password){
    return {
        type:LOGIN,
        name:name,
        password:password
      }
}

export function logout(){
    return {
        type:LOGOUT
      }
}

export function setWordorder(word_order){
    return {
        type:SET_WORD_ORDER,
        word_order:word_order
      }
}

export function initlevel_nav(level_nav){
    return {
        type:INIT_LEVEL_NAV,
        level_nav:level_nav
      }
}

export function getuserselectbook(){
   var params={
        headers: {
            'Host': 'dict.api.sljy.test',
        }
     };

   return (dispatch,state) => {
    var usersetting=state().usersetting;
    return fetch(api.getuserselectbook+"?user_id&phone_oauth="+usersetting.uuid,params)
     .then((response) => response.json())
     .then((result) => result).catch(err => {
       return Promise.reject(err)
     })
 }
}


//获取首页数据
export function gethomedata(uuid,catid){
   var params={
        headers: {
            'Host': 'dict.api.sljy.test',
        }
     };

   return (dispatch,state) => {
    var usersetting=state().usersetting;
    console.log(api.gethomedata+"?user_id&phone_oauth="+usersetting.uuid+"&catid="+usersetting.catid);
    return fetch(api.gethomedata+"?user_id&phone_oauth="+usersetting.uuid+"&catid="+usersetting.catid,params)
     .then((response) => response.json())
     .then((result) => result).catch(err => {
       return Promise.reject(err)
     })
 }
}

const initialState={
    token:null,
    catid:"",
    bookid:"",
    panelid:-1,
    level_nav:"",
    level_nav_sub:"",

    learncount:0,//当日背词数量
    fuxicount:0,
    word_order:2,//1.词频，2.正序，3.倒叙,4.乱序

    version:null,
    uuid:null,
    worddataload:false,//下载单词开始标志
    index:0,//当前显示单词卡片游标
    learnwordprocess:0,//当前学习进度
    day_num:-1,//当前活动学习任务,
    learnnewcount:0,//学习新词数量
    learnlog:{//存储当前学科的学习进度
      //"catid-bookid:{wordTodayStudy:[]}"
    },
    //首页
    homedata:{},
    //是否设置书籍,初次用户判断
    //isInitBook:false
}

export default function usersettingReducer(state = initialState,action){
    switch(action.type){
//      case SETINITBOOK:
//           return Object.assign({}, state, {
//                     isInitBook:action.isInitBook
//                   })
      case REFRESH_WORD_CURRENT:
             return Object.assign({}, state, {
                       index:action.index>state.index?state.index+1:action.index!=state.index?state.index-1:state.index
                     })
      case SYNC_WORD_TODAY_STUDY_DATA:
         var {data,day_num,index,learnnewcount,learnwordprocess}=action;
         var learnlog=state.learnlog;
         var catbookdata=learnlog[state.catid+"-"+state.bookid]?learnlog[state.catid+"-"+state.bookid]:{};
         catbookdata.wordTodayStudy=data;
         learnlog[state.catid+"-"+state.bookid]=catbookdata;
         return Object.assign({}, state, {
                   learnlog:learnlog,
                   day_num:day_num,
                   index:index,
                   learnnewcount:learnnewcount,
                   learnwordprocess:learnwordprocess
                 })
      case SYNC_WORD_ISSTUDY:
           var {index}=action;
           var {learnlog,learnnewcount,learnwordprocess}=state;
           var catbookdata=learnlog[state.catid+"-"+state.bookid];
           catbookdata.wordTodayStudy[index].is_study=1;
           learnlog[state.catid+"-"+state.bookid]=catbookdata;
           return Object.assign({}, state, {
                     learnlog:learnlog,
                     learnnewcount:learnnewcount+1,
                     learnwordprocess:learnwordprocess+1
                   })
       case SYNC_WORD_ISUNKNOW:
                  var {index}=action;
                  var {learnlog,learnnewcount}=state;
                  var catbookdata=learnlog[state.catid+"-"+state.bookid];
                  catbookdata.wordTodayStudy[index].is_study=1;
                  learnlog[state.catid+"-"+state.bookid]=catbookdata;
                  return Object.assign({}, state, {
                            learnlog:learnlog,
                            learnnewcount:learnnewcount+1
                          })
       case SYNC_WORD_ISEASY:
                  var {index,isaddlearnwordprocess}=action;
                  var {learnlog,learnwordprocess}=state;
                  var catbookdata=learnlog[state.catid+"-"+state.bookid];
                  catbookdata.wordTodayStudy[index].is_study=2;
                  catbookdata.wordTodayStudy[index].is_over=1;
                  learnlog[state.catid+"-"+state.bookid]=catbookdata;
                  return Object.assign({}, state, {
                            learnlog:learnlog,
                            learnwordprocess:isaddlearnwordprocess?learnwordprocess+1:learnwordprocess
                          })
       case SYNC_WORD_ISKNOW:
                         var {index}=action;
                         var {learnlog}=state;
                         var catbookdata=learnlog[state.catid+"-"+state.bookid];
                         catbookdata.wordTodayStudy[index].is_study=2;
                         catbookdata.wordTodayStudy[index].is_over=1;
                         learnlog[state.catid+"-"+state.bookid]=catbookdata;
                         return Object.assign({}, state, {
                                   learnlog:learnlog,
                                 })
       case SYNC_WORD_ISOVERALL:
                  var learnlog=state.learnlog;
                  var catbookdata=learnlog[state.catid+"-"+state.bookid];
                  for(let i=0;i<catbookdata.wordTodayStudy.length;i++){
                    catbookdata.wordTodayStudy[i].is_over=1;
                  }
                  learnlog[state.catid+"-"+state.bookid]=catbookdata;
                  return Object.assign({}, state, {
                            learnlog:learnlog,
                            day_num:-1,
                            index:0,
                            learnwordprocess:0,
                            learnnewcount:0
                          })
       case CHOOSE_BOOK:
            var newdata=Object.assign({}, state, {
              catid:action.catid,
              bookid:action.bookid,
              panelid:action.panelid,
              level_nav: "",
              level_nav_sub: "",
              version:new Date()
            });
            usersettingStorage(newdata);
            return newdata
       case RE_CHOOSE_BOOK:
                   var newdata=Object.assign({}, state, {
                     catid:action.catid,
                     bookid:action.bookid,
                     panelid:action.panelid,
                     level_nav: "",
                     level_nav_sub: "",
                     version:new Date()
                   });
                   usersettingStorage(newdata);
                   return newdata
       case CHOOSE_BOOK_LEVEL:
            var newdata=Object.assign({}, state, {
             bookid:action.bookid,
             level_nav: action.level_nav,
             level_nav_sub: action.level_nav_sub,
             version:new Date()
            });
            usersettingStorage(newdata);
            return newdata
       case FETCH_CACHE_USERSETTING_DATA:
            return Object.assign({}, state, {
                      catid:action.data.catid,
                      bookid:action.data.bookid,
                      panelid:action.data.panelid,
                      uuid:action.data.uuid,
                      level_nav:action.data.level_nav,
                      level_nav_sub:action.data.level_nav_sub,
                      version:action.data.version
                    })
       case FETCH_CACHE_HOME_DATA:
            return Object.assign({},state, {
                      homedata:action.data
                    })
        case INIT_LEVEL_NAV:
             var newdata=Object.assign({}, state, {
                          level_nav:action.level_nav,
                        });
             return newdata
        case SET_LEARN_COUNT:
             var finalstate=Object.assign({}, state, {
                              learncount:action.learncount,
                            })
//             global.storage.save({
//                             key:'usersetting',
//                             data: JSON.stringify(finalstate),
//                            expires: null
//                         });
             return finalstate
        case SET_WORD_ORDER:
             return Object.assign({}, state, {
                      word_order:action.word_order,
                    })
        case LOGIN:
             return Object.assign({}, state, {
                      token:action.name+"-"+action.password,
                    })
        case LOGOUT:
                     return Object.assign({}, state, {
                              token:"",
                            })
//        case FETCH_USER_SELECT_SUCCESS:
//                    var {payload}=action;
//                    var data = payload.data;
//                    return Object.assign({}, state, {
//                                          catid:data.catid,
//                                          bookid:data.book_id
//                                        })
//                    return state
//        case FETCH_USER_SELECT_ERROR:
//                    var {error}=action;
//                    console.log(error);
//                    return state
        default:
            return state;
    }
}