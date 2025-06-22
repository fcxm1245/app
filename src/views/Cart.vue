<template>
	<div class="container">
		<div class="header1" style="z-index: 2;">
			<div class="he21">会员购</div>
			<div class="he2" style="color: #999; font-size: 14px;"> 官方直营 · 正品保障</div>
			<div class="g">
				<div style="font-size: 25px;margin-right:-50px;margin-top: 5px; ">🛒</div>
				<div style="font-size: 25px;margin-top: -32px;margin-left: 130px; ">👤</div>
			</div>
		</div>
		<div class="head" style="z-index: 2;"></div>
		<div><img src="./img/download1.gif"
				style="width: 40px; height: 50px; margin-top: 0px;margin-left: 8px;  z-index: 1;" alt="" /></div>
				<van-icon class="gift"  name="gift-o" size="30px"/>
				<van-icon name="share-o" class="gift2"  size="30px" />
				<van-icon name="smile-o" class="gift2" style="left:-10px ;" size="30px" />
				<van-notice-bar
  left-icon="volume-o" style="margin-top: -40px;color: black;"
  text="   木叶飞舞之处,火亦生生不息,学无止境,忍刀之道更是如此"
/>
<!-- 优惠券单元格 -->

		<van-sticky >
			<div id="navbar2" style="z-index: 99;">
				<img class="x1" src="./img/KPR.png" alt="" />
				<a href="javascript:void('');"><input class="search" type="text"
						style="text-align: center;z-index: 99; " placeholder="福利多多~"></a>
			</div>
		</van-sticky>

		<!--  -->
		<div style="margin-top: 34px;">

			<ul class="na" id="nav">
				<li>
					<div class="category">
						<img src="./img/7bz.png">
						<div>手办雕像</div>
					</div>
				</li>
				<li>
					<div class="category">
						<img src="./img/7bz.png">
						<div>&nbsp;&nbsp;盲盒</div>
					</div>
				</li>
				<li>
					<div class="category">
						<img src="./img/7bz.png">
						<div>漫展演出</div>
					</div>
				</li>
				<li>
					<div class="category">
						<img src="./img/7bz.png">
						<div>&nbsp;&nbsp;景品</div>
					</div>
				</li>
				<li>
					<div class="category">
						<img src="./img/7bz.png">
						<div>新人福利</div>
					</div>
				</li>
				<li>
					<div class="category">
						<img src="./img/7bz.png">
						<div>3c数码</div>
					</div>
				</li>
				<li>
					<div class="category">
						<img src="./img/7bz.png">
						<div>&nbsp;&nbsp;谷子</div>
					</div>
				</li>
				<li>
					<div class="category">
						<img src="./img/7bz.png">
						<div>鞋靴箱包</div>
					</div>
				</li>
				<li>
					<div class="category">
						<img src="./img/7bz.png">
						<div>服饰穿搭</div>
					</div>
				</li>
				<li>
					<div class="category">
						<img src="./img/7bz.png">
						<div>服饰穿搭</div>
					</div>
				</li>
				<li>
					<div class="category">
						<img src="./img/7bz.png">
						<div>服饰穿搭</div>
					</div>
				</li>


			</ul>
		</div>
		<div class="top-card" style="display: flex;z-index:1;">
			<div id="top-card"><img src="./images/a3.jpg" /></div>
			<div id="top-card"><img src="./images/a2.jpg" id="musicCover" /></div>
			<div id="top-card"><img src="./images/a1.jpg" /></div>
			<div class="top-card">
				<audio id="audioPlayer">
					<source src="./au1.mp3" type="audio/mpeg">
					您的浏览器不支持
				</audio>
			</div>
		</div>
		
		<div class="bottom-div">
			<div class="video">
				<div class="containerz">
					<div class="swipe-container">
						<van-swipe :autoplay="3000" lazy-render>
							<van-swipe-item v-for="image in images" :key="image">
								<img :src="image" class="swipe-image" />
							</van-swipe-item>
						</van-swipe>
					</div>
				</div>
			</div>

		</div>
		<!-- end -->
		
        
   
   
		<div class="products1">
			<router-link to="/cart1">
			<img src="./images/b8.jpg" alt="">
			<div class="product-info">
				<div class="product-title1">moeyu 名侦探柯南M26黑铁的鱼影卫衣灰</div><!-- <div class="product-price">¥58</div> -->
				<div
					style="background-color: #8a2be2; color: white; padding: 2px 5px; display: inline-block; border-radius: 3px; font-size: 12px;">
					自营
				</div>
				<div class="product-price" style="width: 40px; float: right;margin-top: px;margin-right: px;">¥213</div>
				<div class=""
					style="font-size: 12px;width: px; color: #ff4081;float: right;margin-top: -19px;margin-right:43px;">
					新人券后</div>

				<div style="color: #ff8c00; font-size: 12px;">卫衣榜No.2</div>

			</div>
			</router-link>
			
		</div>
	 

		<!--  -->

		<div class="product">
			<router-link to="/cart2">
			<img src="./images/b4.jpg" alt="每日赢6666魔晶">
			<div class="product-info">
				<div class="product-title">预售 ElixirDream 饿殍明</div>
				<div
					style="background-color: #ff69b4; color: white; padding: 2px 5px;width: 24px; border-radius: 3px; font-size: 12px; margin-left: 5px;display: flex;">
					秒杀</div>
			</div>
			<div class="product-price" style="float: right;margin-top: -33px;margin-right: 20px;">¥234</div>
		</router-link>
		</div>
 <router-view></router-view>
		<div class="product">
			<img src="./images/b6.jpg" alt=" 超级马力欧">
			<div class="product-info">
				<div class="product-title"> 超级马力欧豪华版</div>
				<div style="display: flex; justify-content: space-between; align-items: center;">
					<div>
						<span
							style="background-color: #ff69b4; color: white; padding: 2px 5px; border-radius: 3px; font-size: 12px;width: 25px; height: 16px;">自营</span>
						<div
							style="background-color: #ff69b4; color: white; padding: 2px 5px; border-radius: 3px; font-size: 12px; margin-left: 50px;">
							秒杀</div>
						<div style="color: #ff8c00; font-size: 12px;margin: 1px;">超级马力欧No.1</div>
					</div>
					<div class="product-price">¥59</div>
				</div>
			</div>
		</div>


		<div class="products1" style="margin-top: -378px;">
			<img src="./images/b1.jpg" alt="每日赢6666魔晶">
			<div class="product-info">
				<div class="product-title1">余量销售 SQUARE-ENIX</div>
				<div
					style="background-color: #8a2be2; color: white; padding: 2px 5px; display: inline-block; border-radius: 3px; font-size: 12px;">
					盲盒周周返
				</div>
				<!--  -->
				<div class="product-price" style="float: right;margin-top: px;margin-right: 2px;">¥210</div>
			</div>
		</div>
		<div class="product">
			<img src="./images/b7.jpg" alt="一番赏 运罗猫小">
			<div class="product-info">
				<div class="product-title">bilipods Cyber Module系列 新世纪福音战士 拼装无线蓝牙耳机套</div>
				<div style="display: flex; justify-content: space-between; align-items: center;">
					<div
						style="background-color: #ff69b4; color: white; padding: 2px 5px; border-radius: 3px; font-size: 12px;">
						自营</div>
					<div class="product-price" style="float: right;margin-right: 10px;">¥58</div>
				</div>
				<div style="color: #ff8c00; font-size: 12px;">bilipods榜No.6</div>
			</div>
		</div>
		<div class="products1" style="margin-top: -406px;">
			<img src="./images/b3.jpg" alt="每日赢6666魔晶">
			<div class="product-info">
				<div class="product-title1">都爱漫 火影忍者 Q版公仔</div>
				<div
					style="background-color: #8a2be2; color: white; padding: 2px 5px; display: inline-block; border-radius: 3px; font-size: 12px;">
					欧气盲盒</div>
				<div class="product-price" style="float: right;margin-top: px;margin-right: 2px;">¥58</div>
			</div>
		</div>
		<div class="products1" style="margin-top: -112px; width: 173px;">
			<img src="./images/b9.jpg" style="height: 170px;">
			<div class="product-info">
				<div class="product-title1">TOPTOY 王者荣耀</div>
				<div style="display: flex; ">
					<div>
						<span
							style="background-color: #ff69b4; color: white; padding: 2px 5px; border-radius: 3px; font-size: 12px;width: 25px; height: 16px;">自营</span>

						<div
							style="background-color: #ff69b4; color: white; padding: 2px 5px; border-radius: 3px; font-size: 12px; margin-left: 50px;">
							秒杀</div>
						<div class="product-price" style="float: right;margin-top: -18px;margin-right: -59px;">¥297
						</div>

					</div>
				</div>
			</div>
		</div>
		<div class="product">
			<img src="./images/b5.png" alt="">
			<div class="product-info">
				<!--  -->
				<div class="product-title">【品牌直发】光年工作室</div>
				<div style="display: flex; justify-content: space-between; align-items: center;">
					<div
						style="background-color: #ff69b4; color: white; padding: 2px 5px; border-radius: 3px; font-size: 12px; ">
						满额权益</div>
					<div class="product-price" style="float: right;margin-right: 0px;">¥538</div>
				</div>
				<div style="color: #ff8c00; font-size: 12px;">光年工作室No.4</div>
			</div>
		</div>
	</div>

</template>

<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';

const isPlaying = ref(false);

onMounted(() => {
  const musicCover = document.getElementById('musicCover');
  const audioPlayer = document.getElementById('audioPlayer');

  musicCover.addEventListener('click', () => {
    if (isPlaying.value) {
      audioPlayer.pause();
      isPlaying.value = false;
    } else {
      audioPlayer.play();
      isPlaying.value = true;
    }
  });

  audioPlayer.addEventListener('ended', () => {
    isPlaying.value = false;
  });
});

const images = ref([
	'./a.jpg',
	'./b.jpg',
	'./c.jpg',
	'./d.jpg'
]);


const coupon = {
	available: 1,
	condition: '无门槛\n最多优惠12元',
	reason: '',
	value: 150,
	name: '优惠券名称',
	startAt: 1489104000,
	endAt: 1514592000,
	valueDesc: '1.5',
	unitDesc: '元',
};

const coupons = ref([coupon]);
const showList = ref(false);
const chosenCoupon = ref(-1);

const onChange = (index) => {
	showList.value = false;
	chosenCoupon.value = index;
};

const onExchange = (code) => {
	coupons.value.push(coupon);
};

const disabledCoupons = [coupon];


</script>
<!-- lang="scss" -->
<style scoped>
@import url(../assets/top.css);
@import url(../assets/top2.css);
@import url(../assets/top3.css);
@import url(../assets/secondnaroto.css);
@import url(../assets/end.css);
@import url(../assets/product.css);
@import url(../assets/card.css);

.div1 {
	height: 200px;

	border: 1px solid red;
}

.containerz {
	width: 200px;
	object-fit: cover;

}

.cell{

	float: right;
	top: -40px;
	height: 85px;
	width: 50px;
}
.gift{
	
	top: -44px;
	left: 50px;

}
.gift2{
	float: right;
	top: -44px;
}

		
</style>
