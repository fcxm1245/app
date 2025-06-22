<template>
    <div>
        <transition
                enter-active-class=" animate__animated animate__zoomIn"
                leave-active-class="animate__delay-4s "
        >
            <div class="fixedSearch" v-show="showFixedSearch">
                <img class="searchBox"
                     src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1022330132,1035223511&fm=26&gp=0.jpg"
                     alt="搜索框图片">
            </div>
        </transition>
        <div class="box100">0</div>
        <div class="box100">100</div>
        <div class="box100">200</div>
        <div class="box100">300</div>
        <div class="box100">400</div>
        <div class="box100">500</div>
        <div class="box100">600</div>
        <div class="box100">700</div>
        <div class="box100">800</div>
        <div class="box100">900</div>
        <div class="box100">1000</div>
    </div>
</template>
<script>

import  "animate.css";

    export default {
        data() {
            return {
                showFixedSearch: false
            }
        },
        mounted() {
            // 监听页面滚动事件
            window.addEventListener("scroll", this.showSearch)
        },
        methods: {
            showSearch() {
                // 获取当前滚动条向下滚动的距离
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                // 当页面滚动到高度300px处时，显示搜索框
                if (scrollTop > 300) {
                    this.showFixedSearch = true;
                } else {
                    this.showFixedSearch = false;
                }
            },
        }
    }
</script>
<style scoped>
    .fixedSearch {
        position: fixed;
        width: 100%;
        z-index: 999;
        background: #f6f6f6;
        height: 150px;
        overflow: hidden;
    }
 
    .searchBox {
        z-index: 999;
        position: absolute;
        top: 100px;
       text-align: center;
        transform: translateX(50%);
    }
 
    .box100 {
        z-index: 1;
        height: 100px;
        background: #3a8ee6;
        border: 1px solid black;
    }
</style>
 