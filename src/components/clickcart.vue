<template>
    <header class="header">
        <van-icon name="arrow-left" size="17px" @click="comeBackCompany" />
        <h1 class="title">购物车(1)</h1>
        <span class="manage-button">管理</span>
    </header>
    <div class="cart-item">
        <h2 class="presale-title">预售凑单区(1)</h2>
        <div v-if="books.length">
<table v-for="(item, index) in books">
    <van-swipe-cell>
        <tr>
            <td style="width: 10%;"><input style="position: absolute; top: 60px;" type="checkbox" :checked="item.check" @click="aloncheck(index)"></td>
            <td rowspan="3" style="width: 30%;"><img class="im1" src="../views/images/qqq.png" alt=""></td>
            <td colspan="3" style="height: 10px;">{{ item.name }}</td>
        </tr>
        <tr>
            <td></td>
           <td style="width: 40%;">{{item.date}}</td> 
            <!-- <td>{{ item.num * item.price | getprice }}</td> -->
            <!-- <td>{{item.id}}</td> -->
            <!-- <td>{{item.price | getprice}}</td> -->
            <td >
                <button class="quantity-button" @click="item.num--" :disabled="item.num <= 1" style="position: relative; left: -15px;bottom: -20px;">-</button>
                {{ item.num }}
                <button class="quantity-button" @click="item.num++"  style="position: relative; right: -30px; top: -21px;">+</button>
            </td>
          
            <!-- <button @click="reItem(index)">移除</button> -->
        </tr>
        <van-card style="background-color: white;height: 50px;"/>
        <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="reItem(index)" />
        </template>
    </van-swipe-cell>
</table>
</div>
<div v-else>
<h2>购物车为空</h2>
</div>   
    </div>
    <!--  -->
    <!--  -->
    <section class="recommendations">
        <h3 class="recommendations-title">你可能还喜欢</h3>
        <div class="product-grid">
            <div class="produc-card">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250110090645.jpg-UJPHC4mU0da71GlPna2dByasWRdIOX.jpeg"
                    alt="BearPanda">
                <div class="produc-card-info">
                    <div class="produc-card-price">¥259</div>
                    <div class="produc-card-wants">23578人想要</div>
                </div>
            </div>
            <div class="produc-card">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250110090645.jpg-UJPHC4mU0da71GlPna2dByasWRdIOX.jpeg"
                    alt="GSC">
                <div class="produc-card-info">
                    <div class="produc-card-price">¥1179</div>
                    <div class="produc-card-wants">17152人想要</div>
                </div>
            </div>
        </div>
    </section>
    <div class="bottom-bar">
        <label class="select-all">
            <input type="checkbox"  :checked="Allcheck" @click="allcheck">
            <span>全选</span>
        </label>
        <div>
            <span>合计: </span>
            <span style="color: #ff4d94;">¥{{ totalprice }}</span>
            <button class="checkout-button">结算</button>
        </div>
    </div>

</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref, reactive, computed } from 'vue';
const books = reactive([
    { id: 1, name: "世嘉 VOCALOID 初音未来 fuwa petit L毛绒玩偶fufu 哔哩哔哩独家", date: "全款 ¥112", price: 112, num: 1, check: true },
    { id: 2, name: "新世纪福音 新剧场版 长发绫波丽零 ", date: "全款 ¥82", price: 82, num: 1, check: true},
    { id: 3, name: "2025蛇年巳升升手办拟人版", date: "全款 ¥42", price: 40, num: 1, check: true},
    { id: 4, name: "洛琪希手办 无职转生", date: "全款 ¥52", price: 52, num: 1, check: true},
]);
const Allcheck = ref(true);
const reItem = (index) => {
    books.splice(index, 1);
};
const allcheck = () => {
    Allcheck.value = !Allcheck.value;
    books.forEach(element => {
        element.check = Allcheck.value;
    });
};
const aloncheck = (index) => {
    books[index].check = !books[index].check;
    for (const i in books) {
        const element = books[i];
        if (element.check == false) {
            Allcheck.value = false;
            return;
        } else {
            Allcheck.value = true;
        }
    }
};
const getprice = (val) => {
    return "￥" + val.toFixed(2);
};
const totalprice = computed(() => {
    let total = 0;
    books.forEach(element => {
        if (element.check == true) {
            total += element.price * element.num;
        }
    });
    return total;
});
// 
const router = useRouter();
let comeBackCompany = () => {
    router.go(-1);
};
</script>

<style>
.im1{
    object-fit: cover;
   position: fixed;
     /* border: 1px solid red;  */
     left: 40px;
     top: 17px;
    width: 100px;
    height: 100px;
}

.goods-card {
    margin: 0;
  
}

.delete-button {
    height: 64%;
}

#app {
    margin: 0 auto;
}

th,
td {
    padding: 8px 16px;
    /* border: 1px solid #584040; */
   
    text-align: left;
    width: 100px;
    text-align: center;
    
}

th {
    background-color: #ffffff;
    color: #ffffff;
    font-weight: 600;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #fff;
    border-bottom: 1px solid #eee;
}

.back-button {
    font-size: 20px;
}

.title {
    font-size: 18px;
    font-weight: normal;
}

.manage-button {
    font-size: 16px;
    color: #333;
}

.cart-item {
    background: #fff;
    padding: 15px;
    margin: 10px 0;
}

.presale-title {
    margin-bottom: 15px;
    font-size: 16px;
    color: #333;
}

.produc {
    display: flex;
    gap: 15px;
    margin-bottom: 15px;
}

.produc-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 4px;
}



.quantity-button {

    width: 24px;
    height: 24px;
    border: 1px solid #ddd;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
}

.recommendations {
    padding: 15px;
}

.recommendations-title {
    text-align: center;
    color: #666;
    margin-bottom: 15px;
}

.produc-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
}

.produc-card {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
}

.produc-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.produc-card-info {
    padding: 10px;
}

.produc-card-price {
    color: #ff4d94;
    font-size: 18px;
    margin-bottom: 5px;
}

.produc-card-wants {
    color: #999;
    font-size: 12px;
}

.bottom-bar {
    z-index: 999;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #fff;
    border-top: 1px solid #eee;

    margin: 0 auto;
}

.select-all {
    display: flex;
    align-items: center;
    gap: 5px;
}

.checkout-button {
    background: #ff4d94;
    color: #fff;
    padding: 8px 30px;
    border-radius: 20px;
    border: none;
}
</style>