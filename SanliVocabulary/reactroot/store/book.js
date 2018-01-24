//import { CALL_API } from '../middleware/api'

const FETCH_BOOK_DATA_START='FETCH_BOOK_DATA_START';
const FETCH_BOOK_DATA_SUCCESS='FETCH_BOOK_DATA_SUCCESS';
const FETCH_BOOK_DATA_ERROR='FETCH_BOOK_DATA_ERROR';

const FETCH_CACHE_BOOK_DATA='FETCH_CACHE_BOOK_DATA';

//import 'es6-symbol/implement';
//
//import FetchMock from 'react-native-fetch-mock';
//
//const fetch = new FetchMock(require('./mock')).fetch;

export function fetchBookData(){
   return {
       url: 'http://192.168.1.242/categories/index',
       types: [FETCH_BOOK_DATA_START,
               FETCH_BOOK_DATA_SUCCESS,
               FETCH_BOOK_DATA_ERROR]
   }
}

export function fetchCacheBookData(data){
   return {
       type:FETCH_CACHE_BOOK_DATA,
       data:data
     }
 }

//export function fetchBookData(){
//  return dispatch => {
////    return fetch('/api/users/mockjs',{
////        method:'get'
////    }).then(res => {
////              if (res.status !== 200) {
////                throw new Error('fetch failed');
////              }
////              return res.json();
////            })
////            .then(data => { console.log(data) })
////            .catch(err => ({ err }));
//    return fetch('http://192.168.1.242/categories/index', {
//      method: 'get',
//      headers: {
//        'Host': 'dict.api.sljy.test',
//      }
//    }).then((res)=>{
//        return res.json();
//    }).then(data => { console.log(data) })
//  }
//}

const initialState={
    loading:false,
    datalist:[],
    error:null
}


var dataoffline={
                code: 0,
                data: {
                version: 1509949068,
                subjects: [
                {
                catid: "1",
                domain: "sat",
                name: "SAT",
                create_time: "2017-10-25 15:32:39",
                books: {
                recommend: {
                book_id: "1",
                catid: "1",
                book_name: "三立sat分级词汇",
                is_recommend: "1",
                is_taoti: "0",
                book_title: "为你量身定制的词汇书！",
                book_des: "学前词汇诊断，了解自身需要 16个level等级词汇，匹配自身水平 词汇量逐级提升，沉着应对考试",
                create_time: "2017-11-06 14:17:49"
                },
                other: [
                {
                book_id: "2",
                catid: "1",
                book_name: "俞敏洪红宝书词表",
                is_recommend: "0",
                is_taoti: "0",
                book_title: "",
                book_des: "",
                create_time: "2017-10-25 16:45:43"
                },
                {
                book_id: "3",
                catid: "1",
                book_name: "张红岩绿宝书词表",
                is_recommend: "0",
                is_taoti: "0",
                book_title: "",
                book_des: "",
                create_time: "2017-10-25 16:45:57"
                },
                {
                book_id: "4",
                catid: "1",
                book_name: "王玉梅蓝宝书词表",
                is_recommend: "0",
                is_taoti: "0",
                book_title: "",
                book_des: "",
                create_time: "2017-10-25 16:46:07"
                }
                ]
                }
                },
                {
                catid: "2",
                domain: "gmat",
                name: "GMAT",
                create_time: "2017-10-25 15:32:39",
                books: {
                recommend: {
                book_id: "6",
                catid: "2",
                book_name: "三立gmat分级词汇书",
                is_recommend: "1",
                is_taoti: "0",
                book_title: "为你量身定制的词汇书！",
                book_des: "学前词汇诊断，了解自身需要 16个level等级词汇，匹配自身水平 词汇量逐级提升，沉着应对考试",
                create_time: "2017-11-02 14:59:54"
                }
                }
                },
                {
                catid: "3",
                domain: "ielts",
                name: "雅思",
                create_time: "2017-10-25 15:34:11",
                books: {
                recommend: {
                book_id: "8",
                catid: "3",
                book_name: "三立ielts分级词汇",
                is_recommend: "1",
                is_taoti: "0",
                book_title: "为你量身定制的词汇书！",
                book_des: "学前词汇诊断，了解自身需要 16个level等级词汇，匹配自身水平 词汇量逐级提升，沉着应对考试",
                create_time: "2017-11-02 14:59:56"
                }
                }
                },
                {
                catid: "4",
                domain: "toefl",
                name: "托福",
                create_time: "2017-10-25 15:34:24",
                books: {
                recommend: {
                book_id: "9",
                catid: "4",
                book_name: "三立toefl分级词汇",
                is_recommend: "1",
                is_taoti: "0",
                book_title: "为你量身定制的词汇书！",
                book_des: "学前词汇诊断，了解自身需要 16个level等级词汇，匹配自身水平 词汇量逐级提升，沉着应对考试",
                create_time: "2017-11-02 14:59:58"
                }
                }
                },
                {
                catid: "5",
                domain: "gre",
                name: "GRE",
                create_time: "2017-10-25 15:34:47",
                books: {
                recommend: {
                book_id: "10",
                catid: "5",
                book_name: "三立gre分级词汇",
                is_recommend: "1",
                is_taoti: "0",
                book_title: "为你量身定制的词汇书！",
                book_des: "学前词汇诊断，了解自身需要 16个level等级词汇，匹配自身水平 词汇量逐级提升，沉着应对考试",
                create_time: "2017-11-02 15:00:01"
                }
                }
                },
                {
                catid: "6",
                domain: "alevel",
                name: "A-LEVEL",
                create_time: "2017-10-25 15:35:06",
                books: {
                recommend: {
                book_id: "11",
                catid: "6",
                book_name: "三立alevel分级词汇",
                is_recommend: "1",
                is_taoti: "0",
                book_title: "为你量身定制的词汇书！",
                book_des: "学前词汇诊断，了解自身需要 16个level等级词汇，匹配自身水平 词汇量逐级提升，沉着应对考试",
                create_time: "2017-11-02 15:00:03"
                }
                }
                },
                {
                catid: "7",
                domain: "ib",
                name: "IB",
                create_time: "2017-10-25 15:35:21",
                books: {
                recommend: {
                book_id: "12",
                catid: "7",
                book_name: "三立ib分级词汇",
                is_recommend: "1",
                is_taoti: "0",
                book_title: "为你量身定制的词汇书！",
                book_des: "学前词汇诊断，了解自身需要 16个level等级词汇，匹配自身水平 词汇量逐级提升，沉着应对考试",
                create_time: "2017-11-02 15:00:06"
                }
                }
                },
                {
                catid: "8",
                domain: "act",
                name: "ACT",
                create_time: "2017-10-25 15:36:05",
                books: {
                recommend: {
                book_id: "13",
                catid: "8",
                book_name: "三立act分级词汇",
                is_recommend: "1",
                is_taoti: "0",
                book_title: "为你量身定制的词汇书！",
                book_des: "学前词汇诊断，了解自身需要 16个level等级词汇，匹配自身水平 词汇量逐级提升，沉着应对考试",
                create_time: "2017-11-02 15:00:08"
                }
                }
                },
                {
                catid: "9",
                domain: "ssat",
                name: "SSAT",
                create_time: "2017-10-25 15:36:23",
                books: {
                recommend: {
                book_id: "14",
                catid: "9",
                book_name: "三立ssat分级词汇",
                is_recommend: "1",
                is_taoti: "0",
                book_title: "为你量身定制的词汇书！",
                book_des: "学前词汇诊断，了解自身需要 16个level等级词汇，匹配自身水平 词汇量逐级提升，沉着应对考试",
                create_time: "2017-11-02 15:00:10"
                }
                }
                },
                {
                catid: "10",
                domain: "ap",
                name: "AP",
                create_time: "2017-10-25 15:36:40",
                books: {
                recommend: {
                book_id: "15",
                catid: "10",
                book_name: "三立ap分级词汇",
                is_recommend: "1",
                is_taoti: "0",
                book_title: "为你量身定制的词汇书！",
                book_des: "学前词汇诊断，了解自身需要 16个level等级词汇，匹配自身水平 词汇量逐级提升，沉着应对考试",
                create_time: "2017-11-02 15:00:12"
                }
                }
                },
                {
                catid: "11",
                domain: "sat2",
                name: "SAT2",
                create_time: "2017-10-25 15:36:49",
                books: {
                recommend: {
                book_id: "16",
                catid: "11",
                book_name: "三立sat2分级词汇",
                is_recommend: "1",
                is_taoti: "0",
                book_title: "为你量身定制的词汇书！",
                book_des: "学前词汇诊断，了解自身需要 16个level等级词汇，匹配自身水平 词汇量逐级提升，沉着应对考试",
                create_time: "2017-11-02 15:00:15"
                }
                }
                }
                ]
                },
                message: "OK",
                serverTime: "2017-11-11 15:55:49"
                }

export default function bookReducer(state = initialState,action){
    switch(action.type){
       case FETCH_BOOK_DATA_START:
            return Object.assign({}, state, {
                          loading:true
                        })
       case FETCH_BOOK_DATA_SUCCESS:
            var {payload}=action;
            global.storage.save({
                key:'datalist',
                data: JSON.stringify(payload.data.subjects),
               expires: null
            });
            return Object.assign({}, state, {
                      loading:false,
                      datalist:payload.data.subjects
                    })
        case FETCH_BOOK_DATA_ERROR:
            var {error}=action;
//            return Object.assign({}, state, {
//                      loading:false,
//                      error:error
//                    })
                          global.storage.save({
                              key:'datalist',
                              data: JSON.stringify(dataoffline.data.subjects),
                             expires: null
                          });
                          return Object.assign({}, state, {
                                    loading:false,
                                    datalist:dataoffline.data.subjects
                                  })
        case FETCH_CACHE_BOOK_DATA:
            return Object.assign({}, state, {
                      loading:false,
                      datalist:action.data
                    })
        default:
            return state;
    }
}