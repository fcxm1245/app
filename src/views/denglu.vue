<template>
    <div id="waikuang">
        
        <div style="display: flex;">
           
            <a ><img src="./sc/_2G.png" @click="comeBackCompany" style="height: 30px;transform: rotate(270deg);margin-top: 5px;"></a>
            <p style="margin-left: 30px;margin-top: 10px;"> 密码登录</p>
        </div>
        <div style="display: flex; ">
            <img src="./sc/GLw.png" style="height: 100px;">
            <img src="./sc/BnV.png" style="height: 70px;margin: 0 auto;margin-top: 10px;">
            <img src="./sc/WrK.png" style="height: 100px;">
        </div>
        <van-form @submit="onSubmit"><br>
  <van-cell-group inset>
    <van-field
      v-model="user.username"
      name="username"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="user.password"
      type="password"
      name="password"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group><br>
  
  <div>
    <van-button round block type="primary" native-type="submit" >
      登录
    </van-button>
  </div>
    </van-form>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { showToast } from 'vant';
import axios from 'axios'
const user=ref({username:'',password:''})
const onSubmit=()=>{
  console.log(user.value)
    axios({
        url:'http://localhost:3000/login',
        method:'post',
        date:{
            username:user.value.username,
            password:user.value.password
        }
    }).then(res=>{
        if(res.data.code==1){
            const userStr=JSON.stringify(res.data.users)
            localStorage.setItem('userinfo',userStr)
            showToast('欢迎回家！')
        }else{
            showToast('您似乎中了遗忘的魔法！')
        }
    })
}

// import {ref} from 'vue';
// import { showToast } from 'vant';
// import axios from 'axios';

// const user = ref({username:'',password:''});

// const onSubmit = () => {
//     axios({
//         url:'http://localhost:3000/login',
//         method:'post',
//         params: {
//             username:user.value.username,
//             password:user.value.password
//         }
//     }).then(res => {
//         if(res.data.code === 1) {
//             showToast('欢迎回家！');
//         } else {
//             showToast('您似乎中了遗忘的魔法！');
//         }
//     }).catch(error => {
//         console.error('请求出错:', error);
//     });
// };
</script>

<style>
    #waikuang {
        
       margin: 0 auto;
        height: 700px;
        margin: auto;
    }
    
</style>