
export function getDate(){
           var myDate = new Date();
           return myDate.getFullYear()+"-"+(myDate.getMonth()+1)+"-"+myDate.getDate()
       }

export function GetRandomNum(Min,Max)
{
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}

export function usersettingStorage(usersetting)
{
    var {catid,bookid,panelid,uuid,level_nav,level_nav_sub}=usersetting;
    var newdata={
      catid:catid,
      bookid:bookid,
      panelid:panelid,
      uuid:uuid,
      level_nav:level_nav,
      level_nav_sub:level_nav_sub,
      version:new Date()
    };
    global.storage.save({
        key:'usersetting',
        data: newdata,
        expires: null
    });
}



