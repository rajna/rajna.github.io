import React from 'react';
import SQLiteStorage from 'react-native-sqlite-storage';

import {getDate} from '../util/tool'

SQLiteStorage.DEBUG(true);
var database_name = "sanlivocabulary.db";
var database_version = "1.0";
var database_displayname = "MySQLite";
var database_size = -1;
var db;

const WORDS_TABLE_NAME = "WORDS";//单词表

const WORDS_TODAY_STUDY_TABLE_NAME = "WORDS_TODAY_STUDY";//当日学词表

const WORDS_HISTORY_STUDY_TABLE_NAME = "WORDS_HISTORY_STUDY_TABLE_NAME";//历史学词表

const SQLite = React.createClass({

    render(){
        return null;
    },
    componentWillUnmount(){
        if(db){
            this._successCB('close');
            db.close();
        }else {
            console.log("SQLiteStorage not open");
        }
    },
    open(){
        db = SQLiteStorage.openDatabase(
            database_name,
            database_version,
            database_displayname,
            database_size,
            ()=>{
                this._successCB('open');
            },
            (err)=>{
                this._errorCB('open',err);
            });
    },
    createTable(){
        if (!db) {
            this.open();
        }
        //创建单词表
        db.transaction((tx)=> {
             tx.executeSql('CREATE TABLE IF NOT EXISTS ' + WORDS_TABLE_NAME + '(' +
                'word_id INTEGER PRIMARY KEY NOT NULL,' +
                'word_name VARCHAR,'+
                'ch_explain VARCHAR,'+
                'soundmark VARCHAR,'+
                'catid INTEGER,'+
                'book_id INTEGER,'+
                'level_nav VARCHAR,'+
                'level_nav_sub VARCHAR'
                + ');'
                , [], ()=> {
                    this._successCB('executeSql:create table '+WORDS_TABLE_NAME);
                }, (err)=> {
                    this._errorCB('executeSql', err);
                });

             tx.executeSql('CREATE TABLE IF NOT EXISTS ' + WORDS_TODAY_STUDY_TABLE_NAME + '(' +
                             'id INTEGER PRIMARY KEY  AUTOINCREMENT,' +
                             'word_id INTEGER,'+//单词id
                             'day_num INTEGER,'+//用户当日学习次数
                             'catid INTEGER,'+//学科id
                             'bookid INTEGER,'+//词汇书id
                             'is_study INTEGER,'+//是否学习  0: 还没有学习 1：学习了  2：太简单
                             'is_over INTEGER,'+//是否结束 0：没有结束 1：结束 2：提前结束
                             'is_twostudy INTEGER,'+//是否二次学习 0 没有 1是二次学习 2 淘汰
                             'create_time VARCHAR'
                             + ');'
                             , [], ()=> {
                                 this._successCB('executeSql:create table '+WORDS_TODAY_STUDY_TABLE_NAME);
                             }, (err)=> {
                                 this._errorCB('executeSql:create table '+WORDS_TODAY_STUDY_TABLE_NAME, err);
                             });
             tx.executeSql('CREATE TABLE IF NOT EXISTS ' + WORDS_HISTORY_STUDY_TABLE_NAME + '(' +
                                          'word_id INTEGER PRIMARY KEY NOT NULL,'+//单词id
                                          'catid INTEGER,'+//学科id
                                          'bookid INTEGER,'+//词汇书id
                                          'level_nav VARCHAR,'+//级别名
                                          'level_nav_sub VARCHAR,'+//套题级别子类名
                                          'word_type INTEGER,'+//单词属性 1：学习过(不认识) 2：认识了 3.熟悉 4.理解  5.应用(太简单)
                                          'create_time VARCHAR'
                                          + ');'
                                          , [], ()=> {
                                              this._successCB('executeSql:create table '+WORDS_HISTORY_STUDY_TABLE_NAME);
                                          }, (err)=> {
                                              this._errorCB('executeSql:create table '+WORDS_HISTORY_STUDY_TABLE_NAME, err);
                                          });
        }, (err)=> {
            this._errorCB('transaction', err);
        }, ()=> {
            this._successCB('transaction');
        });


    },
    close(){
        if(db){
            this._successCB('close');
            db.close();
        }else {
            console.log("SQLiteStorage not open");
        }
        db = null;
    },
    _successCB(name){
        console.log("SQLiteStorage "+name+" success");
    },
    _errorCB(name, err){
        console.log("SQLiteStorage "+name+" error:"+err);
    },
    insertWordData(wordData){
        let len = wordData.length;
        return new Promise((resolve, reject)=>{
                          if (!db) {
                              this.open();
                          }
                          this.createTable();
                          db.transaction((tx)=>{
                             for(let i=0; i<len; i++){
                              var word = wordData[i];
                              let sql = `INSERT INTO ${WORDS_TABLE_NAME} (word_id,catid,book_id,word_name,ch_explain,soundmark,level_nav,level_nav_sub) values(?,?,?,?,?,?,?,?)`;
                              tx.executeSql(
                                  sql,[
                                  word.word_id,
                                  word.catid,
                                  word.book_id,
                                  word.word_name,
                                  word.ch_explain,
                                  word.soundmark,
                                  word.level_nav,
                                  word.level_nav_sub
                                  ],
                                  ()=>{},
                                  (err)=>{}
                              );
                            }
                          },(error)=>{
                            this._errorCB('transaction error:insert table '+WORDS_TABLE_NAME, error);
                            reject(error);

                            //ToastAndroid.show("数据插入失败",ToastAndroid.SHORT);
                          },()=>{
                            this._successCB('transaction success:insert table '+WORDS_TABLE_NAME);
                            resolve(1);

                            //ToastAndroid.show("成功插入 "+len+" 条用户数据",ToastAndroid.SHORT);
                          });
         });
      },
      //插入学习记录
      inertNewLearn(catid,bookid,times,wordlearndata){
              let len = wordlearndata.length;
              return new Promise((resolve, reject)=>{
                        if (!db) {
                            this.open();
                        }
//                        'word_id INTEGER,'+//单词id
//                         'day_num INTEGER,'+//用户当日学习次数
//                         'is_study INTEGER,'+//是否学习  0: 还没有学习 1：学习了  2：太简单
//                         'is_over INTEGER,'+//是否结束 0：没有结束 1：结束 2：提前结束
//                         'is_twostudy INTEGER,'+//是否二次学习 0 没有 1是二次学习 2 淘汰
//                         'create_time VARCHAR'
                        db.transaction((tx)=>{
                            for(let i=0; i<len; i++){
                              var item = wordlearndata[i];
                              let sql = `INSERT INTO ${WORDS_TODAY_STUDY_TABLE_NAME} (word_id,day_num,catid,bookid,is_study,is_over,is_twostudy,create_time) values(?,?,?,?,?,?,?,?)`;
                              tx.executeSql(
                                  sql,[item.word_id,item.day_num,catid,bookid,item.is_study,item.is_over,item.is_twostudy,item.create_time],
                                  ()=>{},
                                  (err)=>{}
                              );
                            }


                        },(error)=>{
                          this._errorCB('transaction error:insert table '+WORDS_TODAY_STUDY_TABLE_NAME, error);
                          reject(error);
                        },()=>{
                          this._successCB('transaction success:insert table '+WORDS_TODAY_STUDY_TABLE_NAME);
                          resolve(1);
                        });
               });
            },
      findCollectionAllWordNotLearnData(catid="",bookid="",level_nav="",level_nav_sub=""){
        return new Promise((resolve, reject)=>{
                if (!db) {
                    this.open();
                }
                db.executeSql(`SELECT * FROM ${WORDS_TABLE_NAME} as w LEFT JOIN (SELECT word_id as i from ${WORDS_HISTORY_STUDY_TABLE_NAME}) as h ON w.word_id = h.i where h.i IS NULL and w.catid=? and w.book_id=? and w.level_nav=? and w.level_nav_sub=?`,[catid,bookid,level_nav,level_nav_sub],
                    (results)=>{
                        if(results.rows.length > 0){
                            var len = results.rows.length;
                            var datas = [];
                            for(let i=0;i<len;i++){
                                datas.push(results.rows.item(i));
                            }
                            resolve(datas);
                        }else {
                            resolve(0);
                        }

                        this._successCB('findCollectionAllWordNotLearnData success from '+WORDS_TABLE_NAME)
                    },(err)=>{
                        reject(err);
                        this._errorCB('findCollectionAllWordNotLearnData error from '+WORDS_TABLE_NAME,err)
                    });
        });

      },
      findCollectionAllWordData(catid="",bookid="",level_nav="",level_nav_sub=""){
              var sql=`SELECT * FROM ${WORDS_TABLE_NAME} as w  where w.catid=? and w.book_id=?`;
              var params=[catid,bookid];
              if(level_nav){
                sql=sql+`  and w.level_nav=?`;
                params.push(level_nav);
              }

              if(level_nav_sub){
                  sql=sql+`  and w.level_nav_sub=?`;
                  params.push(level_nav_sub);
                }
              return new Promise((resolve, reject)=>{
                      if (!db) {
                          this.open();
                      }
                      db.executeSql(sql,params,
                          (results)=>{
                              if(results.rows.length > 0){
                                  var len = results.rows.length;
                                  var datas = [];
                                  for(let i=0;i<len;i++){
                                      datas.push(results.rows.item(i));
                                  }
                                  resolve(datas);
                              }else {
                                  resolve(0);
                              }

                              this._successCB('findCollectionAllWordData success from '+WORDS_TABLE_NAME)
                          },(err)=>{
                              reject(err);
                              this._errorCB('findCollectionAllWordData error from '+WORDS_TABLE_NAME,err)
                          });
              });

            },
      //查找用户最后一次学习的次数
      findLastLearn(today,catid,bookid){
              return new Promise((resolve, reject)=>{
                      if (!db) {
                          this.open();
                      }
                       db.executeSql(`SELECT day_num FROM ${WORDS_TODAY_STUDY_TABLE_NAME} WHERE create_time=? and catid=? and bookid=? ORDER BY day_num DESC LIMIT 1`,[today,catid,bookid],
                       //db.executeSql(`SELECT word_id FROM ${WORDS_TABLE_NAME} LIMIT 1`,[],

                          (results)=>{
                              if(results.rows.length==1){
                                resolve(results.rows.item(0)["day_num"]);
                              }else{
                               resolve(results.rows.length)
                              }


                              this._successCB('findLastLearn success from '+WORDS_TABLE_NAME)
                          },(err)=>{
                              reject(err);
                              this._errorCB('findLastLearn error from '+WORDS_TABLE_NAME,err)
                          });
              });

       },
       checkFinish(day_num,today){
                     return new Promise((resolve, reject)=>{
                             if (!db) {
                                 this.open();
                             }
                              db.executeSql(`SELECT count(*),day_num FROM ${WORDS_TODAY_STUDY_TABLE_NAME} WHERE day_num=? and create_time=? and is_over==0`,[day_num,today],
                                 (results)=>{
                                     resolve(results.rows.item(0));
                                     //resolve(results.rows.item(0)["count(*)"]);

                                     this._successCB('executeSql checkFinish success from '+WORDS_TODAY_STUDY_TABLE_NAME)
                                 },(err)=>{
                                     reject(err);
                                     this._errorCB('executeSql checkFinish error from '+WORDS_TODAY_STUDY_TABLE_NAME,err)
                                 });
                     });

       },
       //查找未完成的学习记录
       findCollectionLastLearn(daynum,time){
               return new Promise((resolve, reject)=>{
                       if (!db) {
                           this.open();
                       }
                       db.executeSql(`SELECT ${WORDS_TODAY_STUDY_TABLE_NAME}.*,${WORDS_TABLE_NAME}.* FROM ${WORDS_TODAY_STUDY_TABLE_NAME} JOIN ${WORDS_TABLE_NAME} on ${WORDS_TODAY_STUDY_TABLE_NAME}.word_id=${WORDS_TABLE_NAME}.word_id and ${WORDS_TODAY_STUDY_TABLE_NAME}.day_num=? and ${WORDS_TODAY_STUDY_TABLE_NAME}.create_time=?`,[daynum,time],
                           (results)=>{
                               if(results.rows.length > 0){
                                   var len = results.rows.length;
                                   var datas = [];
                                   //var index=0;
                                   var learnnewcount=0;
                                   var learnwordprocess=0;
                                   var index=0;
                                   for(let i=0;i<len;i++){
                                       var item=results.rows.item(i);
                                       if(item.is_study == 1 && item.is_over == 0){
                                        learnnewcount+=1;
                                       }
                                       //太简单，继续学习，二次学习
                                       if(item.is_study == 2 || item.is_study == 1|| item.is_twostudy!=0){
                                        index+=1;
                                       }
                                       if(item.is_study == 2 || item.is_study == 1||item.is_twostudy==1){
                                           learnwordprocess+=1;
                                        }
                                       datas.push(results.rows.item(i));
                                   }
                                   resolve({
                                    data:datas,
                                    index:index,
                                    learnnewcount:learnnewcount,
                                    learnwordprocess:learnwordprocess
                                   });
                               }else {
                                   resolve(0);
                               }

                               this._successCB('executeSql findCollectionLastLearn success from '+WORDS_TODAY_STUDY_TABLE_NAME)
                           },(err)=>{
                               reject(err);
                               this._errorCB('executeSql findCollectionLastLearn error from '+WORDS_TODAY_STUDY_TABLE_NAME,err)
                           });
               });

             },
        updateCurrentLearn_is_study(is_study,word_id,daynum,time){
            return new Promise((resolve, reject)=>{
                                   if (!db) {
                                       this.open();
                                   }
                                   db.executeSql(`UPDATE ${WORDS_TODAY_STUDY_TABLE_NAME}  SET is_study = ${is_study} WHERE word_id=? and day_num=? and create_time=?`,[word_id,daynum,time],
                                       (results)=>{
                                           resolve(1);

                                           this._successCB('executeSql updateCurrentLearn_is_study success from '+WORDS_TODAY_STUDY_TABLE_NAME)
                                       },(err)=>{
                                           reject(err);
                                           this._errorCB('executeSql updateCurrentLearn_is_study error from '+WORDS_TODAY_STUDY_TABLE_NAME,err)
                                       });
                           });
        },
        updateCurrentLearn_is_easy(is_study,is_over,word_id,daynum,time){
                    return new Promise((resolve, reject)=>{
                                           if (!db) {
                                               this.open();
                                           }
                                           db.executeSql(`UPDATE ${WORDS_TODAY_STUDY_TABLE_NAME}  SET is_study = ${is_study},is_over=${is_over} WHERE word_id=? and day_num=? and create_time=?`,[word_id,daynum,time],
                                               (results)=>{
                                                   resolve(1);
                                                   this._successCB('executeSql updateCurrentLearn_is_easy success from '+WORDS_TODAY_STUDY_TABLE_NAME)
                                               },(err)=>{
                                                   reject(err);
                                                   this._errorCB('executeSql updateCurrentLearn_is_easy error from '+WORDS_TODAY_STUDY_TABLE_NAME,err)
                                               });
                                   });
                },
        updateCurrentLearn_is_over(is_over,daynum,time){
                    return new Promise((resolve, reject)=>{
                                           if (!db) {
                                               this.open();
                                           }
                                           db.executeSql(`UPDATE ${WORDS_TODAY_STUDY_TABLE_NAME}  SET is_over = ${is_over} WHERE day_num=? and create_time=?`,[daynum,time],
                                               (results)=>{
                                                   resolve(1);

                                                   this._successCB('executeSql updateCurrentLearn_is_over success from '+WORDS_TODAY_STUDY_TABLE_NAME)
                                               },(err)=>{
                                                   reject(err);
                                                   this._errorCB('executeSql updateCurrentLearn error from '+WORDS_TODAY_STUDY_TABLE_NAME,err)
                                               });
                                   });
                },
       //更新小复习
       updateCurrentLearn_is_twostudy(worddata,daynum,time){
                           return new Promise((resolve, reject)=>{
                                                  if (!db) {
                                                      this.open();
                                                  }

                                                  db.transaction((tx)=>{
                                                       for(let i=0; i<worddata.length; i++){
                                                        var word = worddata[i]["item"];
                                                        let sql = `UPDATE ${WORDS_TODAY_STUDY_TABLE_NAME} SET is_over = ${word.is_over},is_twostudy=${word.is_twostudy},is_study=${word.is_study} WHERE day_num=? and create_time=? and word_id=?`;
                                                        tx.executeSql(
                                                            sql,[daynum,time,word.word_id],
                                                            ()=>{},
                                                            (err)=>{}
                                                        );
                                                      }
                                                    },(error)=>{
                                                      this._errorCB('transaction updateCurrentLearn_is_twostudy error: table '+WORDS_TODAY_STUDY_TABLE_NAME, error);
                                                      reject(error);
                                                    },()=>{
                                                      this._successCB('transaction updateCurrentLearn_is_twostudy success: table '+WORDS_TODAY_STUDY_TABLE_NAME);
                                                      resolve(1);
                                                    });
                                          });
                       },
       //查找当前学习了多少新词
        findCollectionLastLearnNewWord(daynum,time){
                      return new Promise((resolve, reject)=>{
                              if (!db) {
                                  this.open();
                              }
                              db.executeSql(`SELECT * FROM ${WORDS_TODAY_STUDY_TABLE_NAME}  where day_num=? and create_time=? and is_study=1 and is_over=0`,[daynum,time],
                                  (results)=>{
                                      if(results.rows.length > 0){
                                          var len = results.rows.length;
                                          var datas = [];
                                          var index=0;
                                          for(let i=0;i<len;i++){
                                              var item=results.rows.item(i);
                                              if(item.is_study==1){
                                               index+=1;
                                              }
                                              datas.push(results.rows.item(i));
                                          }
                                          resolve({
                                           data:datas,
                                           index:index
                                          });
                                      }else {
                                          resolve(0);
                                      }

                                      this._successCB('executeSql findCollectionLastLearnNewWord success from '+WORDS_TODAY_STUDY_TABLE_NAME)
                                  },(err)=>{
                                      reject(err);
                                      this._errorCB('executeSql findCollectionLastLearnNewWord error from '+WORDS_TODAY_STUDY_TABLE_NAME,err)
                                  });
                      });

                    },
        addNewWord(word_type,word,catid,bookid){
//        'word_id INTEGER PRIMARY KEY NOT NULL,'+//单词id
//                                                  'catid INTEGER,'+//学科id
//                                                  'bookid INTEGER,'+//词汇书id
//                                                  'level_nav VARCHAR,'+//级别名
//                                                  'level_nav_sub VARCHAR,'+//套题级别子类名
//                                                  'word_type INTEGER,'+//单词属性 1：学习过 2：太简单
//                                                  'create_time VARCHAR'
               return new Promise((resolve, reject)=>{
                                      if (!db) {
                                          this.open();
                                      }
                                      db.executeSql(`INSERT INTO ${WORDS_HISTORY_STUDY_TABLE_NAME} (word_id,catid,bookid,level_nav,level_nav_sub,word_type,create_time) values(?,?,?,?,?,?,?)`,
                                          [word.word_id,catid,bookid,null,null,word_type,getDate()],
                                          (results)=>{
                                              resolve(1);

                                              this._successCB('executeSql addNewWord success from '+WORDS_HISTORY_STUDY_TABLE_NAME)
                                          },(err)=>{
                                              reject(err);
                                              this._errorCB('executeSql addNewWord error from '+WORDS_HISTORY_STUDY_TABLE_NAME,err)
                                          });
                              });
           },
         updateNewWord(word_type,word,catid,bookid){
                return new Promise((resolve, reject)=>{
                                       if (!db) {
                                           this.open();
                                       }
                                       db.executeSql(`UPDATE ${WORDS_HISTORY_STUDY_TABLE_NAME} SET word_type = ${word_type} WHERE word_id=? and catid=? and bookid=?`,
                                           [word.word_id,catid,bookid],
                                           (results)=>{
                                               resolve(1);

                                               this._successCB('executeSql updateNewWord success from '+WORDS_HISTORY_STUDY_TABLE_NAME)
                                           },(err)=>{
                                               reject(err);
                                               this._errorCB('executeSql updateNewWord error from '+WORDS_HISTORY_STUDY_TABLE_NAME,err)
                                           });
                               });
            },
         findCollectionAllHistoryWordData(catid,bookid,level_nav,level_nav_sub){
                 return new Promise((resolve, reject)=>{
                         if (!db) {
                             this.open();
                         }
                         db.executeSql(`SELECT ${WORDS_TABLE_NAME}.* FROM ${WORDS_HISTORY_STUDY_TABLE_NAME} JOIN ${WORDS_TABLE_NAME} on ${WORDS_HISTORY_STUDY_TABLE_NAME}.word_id=${WORDS_TABLE_NAME}.word_id and ${WORDS_HISTORY_STUDY_TABLE_NAME}.word_type=1 and ${WORDS_HISTORY_STUDY_TABLE_NAME}.catid=? and ${WORDS_HISTORY_STUDY_TABLE_NAME}.bookid=? and ${WORDS_TABLE_NAME}.level_nav=? and ${WORDS_TABLE_NAME}.level_nav_sub=?`,[catid,bookid,level_nav,level_nav_sub],
                             (results)=>{
                                 if(results.rows.length > 0){
                                     var len = results.rows.length;
                                     var datas = [];
                                     for(let i=0;i<len;i++){
                                         datas.push(results.rows.item(i));
                                     }
                                     resolve(datas);
                                 }else {
                                     resolve(0);
                                 }

                                 this._successCB('executeSql findCollectionAllHistoryWordData success from '+WORDS_HISTORY_STUDY_TABLE_NAME)
                             },(err)=>{
                                 reject(err);
                                 this._errorCB('executeSql findCollectionAllHistoryWordData error from '+WORDS_HISTORY_STUDY_TABLE_NAME,err)
                             });
                 });

               },
});

module.exports = SQLite;