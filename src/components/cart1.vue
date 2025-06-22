<template>
<header class="headerq">
    <van-icon name="arrow-left" size="17px" @click="comeBackCompany"  style="margin-left: -10px;"/>
    <van-search 
  v-model="value"
  shape="round"
  background=""
  placeholder="请输入搜索关键词"
/>
<van-action-bar>
  <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
  <van-action-bar-icon icon="cart-o" text="购物车" />
  <van-action-bar-icon icon="star" text="已收藏" color="#ff5000" /> 
  <van-action-bar-button type="warning" text="加入购物车" />
<router-link to="/ck">
  <van-action-bar-button type="danger" text="立即购买" style="width: 110px;" />
</router-link>
<router-view></router-view>
</van-action-bar>
    </header>
    <nav class="tabs">
        <cartnav></cartnav>
    </nav>
<div class="image-container">
    <van-swipe>
  <van-swipe-item><img src="../views/images/qqq.png" alt="VOCALOID 初音未来手办"></van-swipe-item>
  <van-swipe-item><img src="../views/images/b4.jpg" alt="VOCALOID 初音未来手办"></van-swipe-item>
  <van-swipe-item><img src="../views/images/b4.jpg" alt="VOCALOID 初音未来手办"></van-swipe-item>
  <van-swipe-item><img src="../views/images/b4.jpg" alt="VOCALOID 初音未来手办"></van-swipe-item>
  <template #indicator="{ active, total }">
    <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
  </template>
</van-swipe>
        
    </div>
    <div class="price-section">
        <div>
            <span class="new-price">¥184</span>
            <span class="old-price">原价¥199</span>
        </div>
        <div class="discount-tags">
            <span class="discount-tag">满110减15元</span>
            <span class="discount-tag">满119减14元</span>
            <span class="discount-tag">满20减5元</span>
        </div>
    </div>
    
    <div class="promo-banner">
        <div>
            <span class="price">¥110</span>
            <span>邮</span>
            <p>新人专享礼包，即享首单包邮</p>
        </div>
      <!-- 优惠券单元格 -->
<van-coupon-cell
  :coupons="coupons"
  :chosen-coupon="chosenCoupon"
  @click="showList = true" style=" border-radius: 10px 10px ;"/>
<!-- 优惠券列表 -->
<van-popup
  v-model:show="showList"
  round
  position="bottom"
  style="height: 50%; padding-top: 4px;"

>
  <van-coupon-list
    :coupons="coupons"
    :chosen-coupon="chosenCoupon"
    :disabled-coupons="disabledCoupons"
    @change="onChange"
    @exchange="onExchange"
  />
</van-popup>
    </div>

    <div class="product-info">
        <span class="badge">望光客盒</span>
        <span class="badge">中国大陆独家</span>
        
        <h3>世嘉 VOCALOID 初音未来 fuwa petit L毛绒玩偶fufu 哔哩哔哩独家</h3>
        <div class="likes">3.3万人想要</div>
    </div>

    <div class="product-info">
        <div class="ranking">
            <span>🏆 排行榜</span>
            <span>世嘉榜 No.2</span>
        </div>
    </div>

    <div class="product-info">
        <h3>活动</h3>
        <div class="activity-item">
            <span class="badge pink">欧气宝箱</span>
            支付随机立减，每获限免3次
        </div>
        <div class="activity-item">
            <span class="badge pink">满额权益</span>
            再消费199元可获得「满199元随机福利」
        </div>
    </div>

    <div class="product-info">
        <h3>参数</h3>
        <span>面料</span>
        <span>填充物</span>
        <span>尺寸</span>
    </div>

    <div class="product-info">
        <div class="brand">
            <img src="./a3.jpg" alt="VOCALOID" width="40" height="40">
            <span>VOCALOID</span>
        </div>
        <div class="brand">
            <img src="./a3.jpg" alt="SEGA" width="40" height="40">
            <span>世嘉</span>
            <div class="rating">⭐⭐⭐⭐⭐</div>
        </div>
    </div>

    <div class="comments">
        <h3>晒图/讨论 </h3>
        <!-- 评论图片列表 -->
    </div>

    

</template>
<style>
  .custom-indicator {
    position: absolute;
  
    right: 20px;
 
    padding: 2px 5px;
    font-size: 14px;
    bottom: 10px;
    right: 10px;
    color: #fff;
    background: rgba(0,0,0,0.5);
    padding: 2px 8px;
    border-radius: 10px;
  }
</style>
<script setup>
import cartnav from './cartnav.vue'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
let comeBackCompany = () => {
 
  
  router.go(-1);
};
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
const api = {
  coupons,
  showList,
  onChange,
  onExchange,
  chosenCoupon,
  disabledCoupons,
};


</script>
<style>


.headerq {
    display: flex;
    align-items: center;
    padding: 1px 30px;
    background: #fff;
    position: sticky;
    top: 0;
    z-index: 100;
}

.search-bar {
    flex: 1;
    margin: 0 15px;
    padding: 8px 15px;
    background: #f5f5f5;
    border-radius: 20px;
    display: flex;
    align-items: center;
}

.tabs {
   
    display: flex;
    justify-content: space-around;
    padding: 1px 0;
    background: #fff;
    border-bottom: 1px solid #eee;
     
}


.tab.active::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #ff2c54;
}

.promo-banner {
    margin: 10px;
    background: linear-gradient(to right, #ff6b9d, #ff2c54);
    border-radius: 10px;
    padding: 15px;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.price {
    font-size: 24px;
    font-weight: bold;
}

.product-info {
    background: #fff;
    padding: 15px;
    margin: 10px 0;
}

.badge {
    display: inline-block;
    padding: 2px 8px;
    border-radius: 4px;
    background: #ff69b4;
    font-size: 12px;
    margin-right: 5px;
}

.bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    padding: 10px 15px;
    background: #fff;
    border-top: 1px solid #eee;
}

.btn {
    flex: 1;
    padding: 10px;
    border-radius: 20px;
    border: none;
    margin: 0 5px;
    font-size: 14px;
}

.btn-cart {
    background: #fff;
    border: 1px solid #ff2c54;
    color: #ff2c54;
}

.btn-buy {
    background: #ff2c54;
    color: #fff;
}


.image-container {
    position: relative;
    width: 100%;
    background: #fff;
}

.image-container img {
    
    width: 100%;
    height: auto;
}


.price-section {
    
    padding: 10px;
    background: #fff;
}

.new-price {
    color: #ff4d94;
    font-size: 24px;
    font-weight: bold;
}

.old-price {
    color: #999;
    text-decoration: line-through;
    margin-left: 10px;
}

.discount-tags {
    display: flex;
    gap: 10px;
    margin: 10px 0;
}

.discount-tag {
    color: #ff4d94;
    border: 1px solid #ff4d94;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 12px;
}
</style>