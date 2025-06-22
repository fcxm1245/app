<template>
    <div class="nan">
    <!-- 搜索头部 -->
    <div class="search-header">
        <router-link to="/h">
         <div id="touxiang"><img src="../im/touxiang.png" style="width: 35px;height: 35px;border-radius: 90px;margin-left: 5px;object-fit: cover;"></div>
        
        </router-link>
        <router-view></router-view>
        <div class="search-bar">
            
            <input type="text" style="width: 100%;" placeholder="&nbsp;&nbsp;&nbsp;你所热爱的就是你的生活">
        </div>
       
        <div class="icon-button">
            <span class="icon"><img src="../sc/m47.png" alt="" style="height: 28px;margin-top: 4px;"></span>
            <span class="badge">23</span>
        </div>
    </div>

    <!-- 导航标签 -->
    <div class="nav-tabs">
        <router-link to="/nav1">
        <span class="nav-tab">直播</span>
    </router-link>
    
    <router-link to="/home">
        <span class="nav-tab active">推荐</span>
    </router-link>
    <router-view></router-view>
        <span class="nav-tab">热门</span>
        <span class="nav-tab">动画</span>
        <span class="nav-tab">影视</span>
        <span class="nav-tab">跨年</span>
    </div>
</div>
<div class="content">
      <div>
        直播
      </div>
        </div>
</template>

<script setup>

</script>

<style>

</style>