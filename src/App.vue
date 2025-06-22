<template>
	<div class="g-container">
		<div class="g-wrapper">
			  <router-view v-slot="{ Component }">
      <transition name="slide">
        <component :is="Component" />
      </transition>
    </router-view>
		</div>
		
		<ul class="g-tab-footer">
			
			<li v-for="(item, index) in tabList" :key="index" :class="currentTypeName == item.path ? 'active' : ''"
				@click="bindChangeTab(item.path)">
				{{ item.title }}
			</li>
			
		</ul>
	</div>
</template>
<script setup>
import home from './views/home.vue'
import { RouterView } from 'vue-router'
import router from './router'
import { reactive, ref } from 'vue'
let currentTypeName = ref('/home') // 当前tab名称
const tabList = reactive([
	{ path: '/home', title: '首页' },
	{ path: '/category', title: '分类' },
	{ path: '/cart', title: '购物车' },
	{ path: '/my', title: '我的' },
])
const bindChangeTab = path => {
	router.replace({ path })
	try {
		currentTypeName.value = path
	} catch (error) {	}
	
}
</script>
<style lang="css" scoped>
      .slide-leave-active,
.slide-enter-active {
  transition: all 1s ease;
  /* 同时过渡透明度和位移 */
  transition-property: transform, opacity;
}
.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-leave-to {
  opacity: 0.1;
    
    font-size: 10px;
 
}
.g-container {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-color: #f3f4f6;
}

.g-container .g-wrapper {
	height: calc(100vh - 60px);
	overflow: scroll;
}

.g-container .g-tab-footer {
	position: fixed;
	bottom: 0;
	left: 0;
	height: 60px;
	width: 100%;
	background-color: #ffffff;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	border-top: 1px solid #aeaeae;
}

.g-container .g-tab-footer li {
	padding: 10px 20px;
	border-radius: 8px;
}

.g-container .g-tab-footer .active {
	color: red;
}
</style>
