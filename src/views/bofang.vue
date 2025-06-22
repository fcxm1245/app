<template>
    <div id="waikuang">
        
        <div >
            <video  controls  src="../views/sc/361820022-1-208.mp4" style="width: 100%;height: auto;" autoplay="true"></video>
        </div>
        <div id="qiehuan">
            <p>简介</p>
            <p>评论</p>
            <div style="width: 80px;margin-left: 100px;border-radius: 50px 0 0 50px;"><button style="border: 0cm;background-color: white;font-size: 10px;margin: -10px 2px 0px 10px;">点击发弹幕</button></div>
            <div style="width: 40px;border-radius: 0 50px 50px 0;"></div>
        </div>
       <div><!--介绍，评价，弹幕--></div>
        <div style="display: flex;"><!--up头像，名称粉丝数充电，关注-->
        <img src="./sc/2021051521244130.jpg" style="width: 30px; height: 30px;border-radius: 50px;margin: 10px;">
        
        <div >
            <p style="margin-bottom: -10px;margin-top: 8px;">快去玩你的原神</p>
            <p style="margin-bottom: -10px;margin-top: 8px;font-size: 10px;color: #665f5f;">100.9粉丝 12个视频</p>
        </div>
        <button style="width: 70px;height: 25px;background-color: rgb(255, 126, 147);border: 0px;border-radius: 30px;margin-top: 10px;margin-left: 150px;color: white;">+关注</button>
        </div>
        <div style="color: black;margin-left: 20px;margin-top: 5px;">
            “你被骗啦！！！！”
        </div>
        <div>

        </div>
        <div id="dz" style="display: flex;width: 375px;">
            <img src="./sc/1i6.png">
            <img src="./sc/1i6.png" style="transform: rotate(180deg);">
            <img src="./sc/6bx.png">
            <img src="./sc/BIE.png">
            <img src="./sc/o3S.png">
        </div>
        <div style="margin-top: 20px;"><!--标签-->
            <div style="border-radius: 10px;height: 20px;width: 70px;border: 0px solid ;background-color: #ddd;"></div>
        </div>
        

        <div id="tuijian"><!--推荐-->
            <hr><!--一组-->
            <div class="tuijian2">
                <img class="tupian" src="./sc/2021051521244130.jpg" >
                <div>
                    <p style="margin-top:-5px;">XXXXXXXXXXXXXXXXXX</p>
                    <p style="color: #bbb;font-size: 12px;margin-bottom: -5px;"><img src="./sc/Nbu.png" width="12px">XXXXX</p>
                    <p style="color: #bbb;font-size: 10px;margin: top 10px;margin-bottom: -5px;">XXXXXXXXXXXXXXXXXX</p>
                </div>
            </div>
            <hr>
            <div class="tuijian2">
                <img class="tupian" src="./sc/2021051521244130.jpg" >
                <div>
                    <p style="margin-top:-5px;">XXXXXXXXXXXXXXXXXX</p>
                    <p style="color: #bbb;font-size: 12px;margin-bottom: -5px;"><img src="./sc/Nbu.png" width="12px">XXXXX</p>
                    <p style="color: #bbb;font-size: 10px;margin: top 10px;margin-bottom: -5px;">XXXXXXXXXXXXXXXXXX</p>
                </div>
            </div>
            <hr>
            <div class="tuijian2">
                <img class="tupian" src="./sc/2021051521244130.jpg" >
                <div>
                    <p style="margin-top:-5px;">XXXXXXXXXXXXXXXXXX</p>
                    <p style="color: #bbb;font-size: 12px;margin-bottom: -5px;"><img src="./sc/Nbu.png" width="12px">XXXXX</p>
                    <p style="color: #bbb;font-size: 10px;margin: top 10px;margin-bottom: -5px;">XXXXXXXXXXXXXXXXXX</p>
                </div>
            </div>
            <hr>
            <div class="tuijian2">
                <img class="tupian" src="./sc/2021051521244130.jpg" >
                <div>
                    <p style="margin-top:-5px;">XXXXXXXXXXXXXXXXXX</p>
                    <p style="color: #bbb;font-size: 12px;margin-bottom: -5px;"><img src="./sc/Nbu.png" width="12px">XXXXX</p>
                    <p style="color: #bbb;font-size: 10px;margin: top 10px;margin-bottom: -5px;">XXXXXXXXXXXXXXXXXX</p>
                </div>
            </div>
            <hr>
        </div>
    </div>
   

</template>


    <style>
    #waikuang {
          
          margin: 0 auto;
       
        }
        #qiehuan{
            display: flex;
            height: 35px;
            border: 1px black solid;
            margin-top: 15px;
        }
        #qiehuan > div{
            border: 0.5px black solid;
            height: 25px;
            margin-top: 4px;
        }
        #qiehuan > p{
            margin-left: 20px;
            margin-right: 10px;
            margin-top: 8px;
        }
        #dz>img{
            width: 35px;
            height: 35px;
            margin-top: 10px;
            margin-left: 35px;
        }
        #tuijian{
            width: 100%;
            height: 250px;
            overflow-y: auto;
            overflow-x: hidden;
            scrollbar-width: none;
            -ms-overflow-style: none;
        }
        .tuijian2{
            display:flex ;
        }
        .tupian{
            margin-bottom: -5px;
            margin-top: -4px;
            margin-left: 5px;
            height: 70px;
            width: 120px;
        }
        
    </style>
