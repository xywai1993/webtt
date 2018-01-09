import "fetch-polyfill"
import zlFetch from 'zl-fetch'

let host = '//127.0.0.1:3000';

if(process.env.NODE_ENV === 'production'){
  host = '//api.fanep.cn'
}

const Api= {
  list:'/list',
  sendMessage:'/message'
};






const ajax = (url,options={})=>{
  console.log(options);
  return zlFetch(host+url,options);
};

export {
  Api,
  ajax
}
