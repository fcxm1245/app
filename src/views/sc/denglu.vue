<template>
    <div id="waikuang">
        <div style="margin-top: -14px;margin-left: 3px;display: flex;">
            <p>
                16:24:14
            </p>
            <p style="margin-left: 265px;">
                99%
            </p>
        </div>
        <div style="display: flex;margin-top: -20px;">
            <!-- <a href="./cilicili.html" style="text-decoration: none;color: black;"><img src="素材/_2G.png" style="height: 30px;transform: rotate(270deg);margin-top: 5px;"></a> -->
            <p style="margin-left: 30px;margin-top: 10px;"> 密码登录</p>
        </div>
        <div style="display: flex;">
            <!-- <img src="./素材/GLw.png" style="width: 100px;">
            <img src="./素材/BnV.png" style="width: 175px;">
            <img src="./素材/WrK.png" style="width: 100px;"> -->
        </div>
        <div>
            <br>
            <div style="margin-left: 35px;display: flex;" ><div>账号&nbsp;&nbsp;&nbsp;&nbsp;</div><input type="text" id="username" style="outline: none;border: 0cm;margin-top: 7px;border-bottom: 1px #eee solid;width: 220px;"><br></div>
            <br>
            <div style="margin-left: 35px;display: flex;"><div>密码&nbsp;&nbsp;&nbsp;&nbsp;</div><input type="password" id="password" style="outline: none;border: 0px;border-bottom: 1px #ddd solid;width: 220px;"></div>
        </div>
        <br>
        <button style="background-color: pink;color: white;border-radius: 20px;border: 0px;width: 200px; height: 30px;margin-left: 80px;" id="anniu" onclick="dianji()">登录</button>
    </div>
</template>

<script setup>
//  function dianji (){
//         var username=document.getElementById("username").value;
//         var password=document.getElementById("password").value;
//         if(username=="114514" && password=="123"){
//             alert("登录成功")
//             window.location.href="cilicili.html"
//         }else{
//             alert("密码或账号错误")
//         }
        
//     }
</script>

<style>
    #waikuang {
        border: 2px black solid;
        width: 375px;
        height: 700px;
        margin: auto;
    }
</style>