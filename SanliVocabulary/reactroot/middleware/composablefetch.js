export default store => next => action => {
  if(!action.url||!Array.isArray(action.types)){
    return next(action)
  }

  const [LOADING,SUCCESS,ERROR]=action.types;

  next({
    type:LOADING,
    loading:true,
    ...action
  });

  var params={
     headers: {
         'Host': 'dict.api.sljy.test',
     }
  };

  if(action.requestType&&action.requestType=="post") {
    if(action.params) params.body=JSON.stringify(action.params);
    params.method="POST"
  }

  fetch(action.url,params)
    .then((response) => response.json())
    .then(result=>{
      if(result.code==0) {
        return next({
                 type:SUCCESS,
                 loading:false,
                 payload:result
               })
      }
      return next({
                 type:ERROR,
                 loading:false,
                 error:result
               })
    })
    .catch(err=>{
        next({
          type:ERROR,
          loading:false,
          error:err
        })
    })
}