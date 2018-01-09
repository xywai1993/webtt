<template>
  <div class="hello">
    name: <input type="text" v-model="name"> <br>
    email:<input type="email" v-model="email"> <br>
    message:<textarea v-model="message" cols="30" rows="10"></textarea><br>
    <button @click="send">send</button>

    <ul>
      <li v-for="li in list">
        <h3>{{li.nickname}}</h3>
        <i>{{ li.date | datedate }}</i>
        <p>{{li.message}}</p>

      </li>
    </ul>
  </div>
</template>

<script>
  import {Api,ajax} from '@/config'


export default {
  name: 'TTLog',
  data () {
    return {
      list:[],
      message:'',
      email:'',
      name:''
    }
  },
  methods:{
    send(){
      if(!this.message){return false}
      const data = {
        message:this.message,
        name:this.name,
        email:this.email
      }
      ajax(Api.sendMessage,{method:'POST',body:data}).then(data=>{
        this.list = data.data.list ;
      })
      //fetch('http://127.0.0.1:3000'+Api.sendMessage,{method:'POST',body:formData})
    }
  },
  filters:{
    datedate(time){
      console.log(time[0] === 1);
      if(Number(time)){
        return new Date(Number(time)).toDateString();
      }else{

        return new Date(time).toDateString() ;
      }
    }
  },
  created(){
    ajax(Api.list).then(data=>this.list = data.data.list)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /*display: inline-block;*/
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
