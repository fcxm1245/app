<template>
    <div id="dk">
        <div id="db" v-if="account">
            <img :src="account.url" id="tup1">
            <router-link to="/h" >{{account.user_name}}</router-link>
                <router-view v-slot="{ Component }">
                    <transition name="fade">
                        <component :is="Component" />
                    </transition>
                </router-view>
            <div><div class="member-badge">正式会员</div></div>
        </div>

        <div v-else>
            <img src="./im/deng.jpg" id="tup1">
            <router-link to="/h" >点击登录</router-link>
                <router-view v-slot="{ Component }">
                    <transition name="fade">
                        <component :is="Component" />
                    </transition>
                </router-view>
            <div><div class="member-badge">正式会员</div></div>
        </div>
        <div id="db2">
            <div>0<p>动态</p>
            </div>

            <div>0<p>关注</p>
            </div>
            <div>0<p>粉丝</p>
            </div>
        </div>
        <div class="prom-banner">
			<div>
				<strong>大会员限时4.6折</strong>
				<div>年卡仅108元</div>
			</div>
			<button class="pink-button">立即开通</button>
		</div>
        <div id="zb">
            <div class="g-category">
                <div class="box"><img src="./im/TaF.png" style="width: 45px;height: 45px;">
                    <p>离线缓存</p>
                </div>
                <div class="box"><img src="./im/q5O.png" style="margin-top: -12px;">
                    <p>历史记录</p>
                </div>
                <div class="box"><img src="./im/Sgz.png" style="margin-top: -12px;">
                    <p>我的收藏</p>
                </div>
                <div class="box"><img src="./im/9Mw.png" style="width: 45px;height: 45px;">
                    <p>稍后再看</p>
                </div>
            </div>
            <h3 style="padding-left: 10px;">创作中心</h3>
            <div class="g-category">
                <div class="box"><img src="./im/deng.jpg">
                    <p>创作中心</p>
                </div>
                <div class="box"><img src="./im/deng.jpg">
                    <p>稿件管理</p>
                </div>
                <div class="box"><img src="./im/deng.jpg">
                    <p>数据中心</p>
                </div>
                <div class="box"><img src="./im/deng.jpg">
                    <p>有奖活动</p>
                </div>
            </div>
            <h3 style="padding-left: 10px;">推荐服务</h3>
            <div class="g-category">
                <div class="box"><img src="./im/deng.jpg">
                    <p>我的课程</p>
                </div>
                <div class="box"><img src="./im/deng.jpg">
                    <p>免流量服务</p>
                </div>
                <div class="box"><img src="./im/deng.jpg">
                    <p>个性装扮</p>
                </div>
                <div class="box"><img src="./im/deng.jpg">
                    <p>我的钱包</p>
                </div>
            </div>
            <h3 style="padding-left: 10px;">娱乐</h3>
            <div class="g-category">
                <div class="box"><img src="./im/deng.jpg">
                    <p>游戏中心</p>
                </div>
                <div class="box"><img src="./im/deng.jpg">
                    <p>会员购中心</p>
                </div>
                <div class="box"><img src="./im/deng.jpg">
                    <p>我的直播</p>
                </div>
                <div class="box"><img src="./im/deng.jpg">
                    <p>漫画</p>
                </div>
            </div>
            <h3 style="padding-left: 10px;">更多服务</h3>
            <div>
                <div>青少年模式</div>
                <div>联系客服</div>
                <div>设置</div>
            </div>
            <h4 style=" text-align: center;">到底了>_< </h4>
        </div>
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
const account =ref(null)

onMounted(()=>{
    const userinfo=localStorage.getItem('userinfo')
    account.value=JSON.parse(userinfo)
})
</script>

<style lang="scss" scoped></style>
<style>
	.member-badge {

				display: inline-block;
				padding: 2px 8px;
				border-radius: 12px;
				background: #fff;
				border: 1px solid #ff69b4;
				color: #ff69b4;
				font-size: 12px;
				
			}

			.prom-banner {
				background: #fff1f5;
				padding: 15px;
				margin: 12px 15px;
				border-radius: 10px;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}

			.pink-button {
				background: #ff69b4;
				color: white;
				padding: 8px 20px;
				border-radius: 20px;
				border: none;
			}

a {
    text-decoration: none;
    color: black;
}

/* #dk{
            width: 380px;
            height: 700px;
            margin: 0 auto;
        } */
#db {

    background-color: pink;

    height: 140px;
    padding-top: 10px;
    padding-left: 10px;
    font-size: 22px;
    color: white;

}

#zb {
    padding: 0;
    margin: 0;
    background-color: white;
    width: 100%;

    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;
    padding-top: 10px;
}

#db2 {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    background-color: white;
    text-align: center;
    padding-top: 10px;
    border-bottom: 0px solid #000;
    /*只设置下边框属性*/
    font-size: 20px;
}

#tup1 {
    margin-top: 10px;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 100px;
    vertical-align: middle;
    margin-right: 50px;
}

#jk {
    background-color: aqua;
    width: 100%;
    height: 20px;
    color: darkgrey;
}

.g-category {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 0px solid #000;
}

.g-category .box {
    width: 25%;
    text-align: center;
    flex-shrink: 0;
}

.g-category .box img {

    width: 60px;
    height: 58px;
    border-radius: 50%;
}

.g-category .box p {
    text-align: center;
}

#db2>div>p {
    margin-top: 0px;
    font-size: 12px;
    color: #bbb;
}

.g-category>div>p {
    margin-top: 0cqi;
}
</style>