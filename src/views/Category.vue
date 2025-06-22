<template  #footer>
    <div style="width:auto;height: 100%;">
   <div id="waikuang" >
        
        <div style="width: 375px ;margin-top: 20px;margin-bottom: -30px;" align="center">
            <h3>关注</h3>
        </div>
        

        <div style="display: flex;">
            <h4 style="margin-left: 10px;">最常访问</h4>
            <p style="margin-left: 200px;color:#ddd;margin-top: 40px;">x人直播中</p>
        </div>
        <div style="display: flex;">
            <div style="margin-left: 10px;"><img src="../../public/66-23030H0002N39.jpg" alt="" style="border-radius: 50px;width: 30px;height: 30px;"><p style="font-size: 10px;">東雪蓮Offi<br>cial</p></div>
            <div style="margin-left: 10px;"><img src="../../public/ffd12f5e1eb3b6eb22d82baba7039ec3_4948147917959104938.jpg" alt="" style="border-radius: 50px;width: 30px;height: 30px;"><p style="font-size: 10px;">原神玩家集体<br>记忆名录</p></div>
        </div>
        <hr style="border: 4px #ddd solid;">
        <div id="gundong">
            <van-card
            v-for="dt in dtlist"
            :key="dt.id"
            :title="dt.name"
            :desc="dt.content"
            :thumb="dt.url"
            >
            </van-card>

        </div>
        
       
    </div>
</div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import axios from 'axios'
    const dtlist=ref([])
    const getdtlist=()=>{
        axios({
            url:'http://localhost:3000/dt',
            method:'get'
        }).then(res=>{
            const date=res.data
            if(date.code==1){
                dtlist.value=date.list
            }
        })
    }

    onMounted(()=>{
        getdtlist()
    })
</script>

<style lang="scss" scoped>

</style>
<style>
 a{
            text-decoration: none;
            color: black;

        }
        
        #gundong{
            width: auto;
            height: 520px;
            overflow-y: auto;
            overflow-x: hidden;
            scrollbar-width: none;
            -ms-overflow-style: none;
        }
        #dibu{
            width: 375px;
            height: 50px;
            text-align: center;
            display: flex;
            bottom: 80px;
            position: absolute;
            border-top: 1px solid rgb(211, 211, 211);
        }
        #dibu>p{
            margin-left: 46px;
            
        }
     
</style>