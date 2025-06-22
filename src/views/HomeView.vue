<template>
    <div class="nan">

        <div class="search-header">
            <router-link to="/h">
                <div id="touxiang"><img src="./im/touxiang.png"
                        style="width: 35px;height: 35px;border-radius: 90px;margin-left: 5px;object-fit: cover;"></div>

            </router-link>
            <router-view></router-view>
            <div class="search-bar">

                <input type="text" style="width: 100%;" placeholder="&nbsp;&nbsp;&nbsp;你所热爱的就是你的生活">
            </div>

            <div class="icon-button">
                <span class="icon"><img src="./sc/m47.png" alt="" style="height: 28px;margin-top: 4px;"></span>
                <span class="bad">23</span>
            </div>
        </div>
        
        <div class="nav-tabs" >

            <!--  -->
            <div class="navigation" >
                
         <div v-for="(item, index) in items" 
      :key="index"
      class="navigation-item"
      :class="{ active: index === activeIndex }"
      @click="activeIndex = index"
      ref="itemRefs">
      {{ item }}
      
    </div>
    <div 
      class="navigation-underline"
      :class="{ active: activeIndex !== -1 }"
      :style="underlineStyle"
      ref="underlineRef"
    ></div>
  </div>
  
               <!-- <router-link to="/nav">
                <span class="nav-tab">直播</span>
            </router-link>
            <router-view></router-view>
            <span class="nav-tab active">推荐</span>
            <span class="nav-tab">热门</span>

            <span class="nav-tab">动画</span>
            <span class="nav-tab">影视</span>
            <span class="nav-tab" >跨年</span>   -->

            
        </div>
    </div>
 

    <div class="content">
        <router-link to="/b">
            <div class="featured-banner">
                <img src="./lunbo/01.jpg" alt="KSG比赛直播">
                <div class="banner-title">
                    正在直播...
                </div>
            </div>
        </router-link>
        <router-view></router-view>
        <div class="video-grid">
            <router-link to="/b">
                <div class="video-card">
                    <img src="./lunbo/02.jpg" class="video-thumbnail" alt="视频缩略图">
                    <span class="video-duration">37:47</span>
                    <div class="video-title">【时长2小时33分】2024年终大合集...</div>
                    <div class="video-views">24.6万 观看</div>

                </div>
            </router-link>
            <router-view></router-view>
            <router-link to="/b">
                <div class="video-card">
                    <img src="./lunbo/03.jpg" class="video-thumbnail" alt="视频缩略图">
                    <span class="video-duration">2:03:41</span>
                    <div class="video-title">【时长1小时53分】2024年终大合集...</div>
                    <div class="video-views">6.4万 观看</div>
                </div>
            </router-link>
            <router-view></router-view>

            <router-link to="/b">
                <div class="video-card">
                    <img src="./lunbo/04.jpg" class="video-thumbnail" alt="视频缩略图">
                    <span class="video-duration">2:03:41</span>
                    <div class="video-title">【时长1小时33分】2024年终大合集...</div>
                    <div class="video-views">4.7万 观看</div>
                </div>
            </router-link>
            <router-view></router-view>

            <div class="video-card">
                <router-link to="/b">
                    <img src="./lunbo/05.jpg" class="video-thumbnail" alt="视频缩略图">
                    <span class="video-duration">2:03:41</span>
                    <div class="video-title">【时长1小时46分】2024年终大合集...</div>
                    <div class="video-views">18.4万 观看</div>
                </router-link>
                <router-view></router-view>
            </div>
            <router-link to="/b">
                <div class="video-card">
                    <img src="./lunbo/06.jpg" class="video-thumbnail" alt="视频缩略图">
                    <span class="video-duration">2:03:41</span>
                    <div class="video-title">【时长3小时22分】2024年终大合集...</div>
                    <div class="video-views">4.7万 观看</div>
                </div>
            </router-link>
            <router-view></router-view>
            <div class="video-card">
                <router-link to="/b">
                    <img src="./lunbo/07.jpg" class="video-thumbnail" alt="视频缩略图">
                    <span class="video-duration">2:03:41</span>
                    <div class="video-title">【时长0小时53分】2024年终大合集...</div>
                    <div class="video-views">7.1万 观看</div>
                </router-link>
                <router-view></router-view>
            </div>
            <router-link to="/b">
                <div class="video-card">
                    <img src="./lunbo/08.jpg" class="video-thumbnail" alt="视频缩略图">
                    <span class="video-duration">2:03:41</span>
                    <div class="video-title">【时长1小时22分】2024年终大合集...</div>
                    <div class="video-views">6.4万 观看</div>
                </div>
            </router-link>
            <router-view></router-view>
            <router-link to="/b">
                <div class="video-card">
                    <img src="./lunbo/01.jpg" class="video-thumbnail" alt="视频缩略图">
                    <span class="video-duration">2:03:41</span>
                    <div class="video-title">【时长1小时3分】2024年终大合集...</div>
                    <div class="video-views">5.4万 观看</div>
                </div>
            </router-link>
            <router-view></router-view>
            <router-link to="/b">
                <div class="video-card">
                    <img src="./lunbo/02.jpg" class="video-thumbnail" alt="视频缩略图">
                    <span class="video-duration">2:03:41</span>
                    <div class="video-title">【时长0小时33分】2024年终大合集...</div>
                    <div class="video-views">2.4万 观看</div>
                </div>
            </router-link>
            <router-view></router-view>
            <router-link to="/b">
                <div class="video-card">
                    <img src="./lunbo/03.jpg" class="video-thumbnail" alt="视频缩略图">
                    <span class="video-duration">2:03:41</span>
                    <div class="video-title">【时长1小时33分】2024年终大合集...</div>
                    <div class="video-views">6.4万 观看</div>
                </div>
            </router-link>
            <router-view></router-view>

        </div>
    </div>
    <div>
    
  </div>
</template>


<script setup>
import { ref, watch, onMounted,  } from "vue";

const activeIndex = ref(0);
const items = ref(["直播","推荐","热门", "动画", "影视","春节", "跨年","新征程"]);


const underlineStyle = ref({
  transform: "translateX(0)",
});
const itemRefs = ref([]);
const underlineRef = ref(null);
const updateUnderline = () => {

  const item = itemRefs.value[activeIndex.value];
  const underline = underlineRef.value;
  let newLeft = Number((item.offsetWidth - underline.offsetWidth)) / 2;
  if (item && underline) {
    const { offsetLeft } = item;
   
    underlineStyle.value = {
      transform: `translateX(${offsetLeft + newLeft}px)`,
    };
  }
};

watch(activeIndex, () => {
  updateUnderline();
});

onMounted(() => {
  updateUnderline();
});
</script>

<style lang="css" scoped>
.navigation {
 
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  padding: 0px;
letter-spacing: 1px;
margin-left: -10px;
  height: 20px;
  font-size: 16px;
  font-weight:normal;
}

.navigation-item {
  cursor: pointer;
}

.navigation-item.active {
  color: #ff4757;
}

.navigation-underline {
  /* 下划线的宽度 */
  width: 45px;
  height: 3px;
  border-radius: 2px;
  position: absolute;
  bottom: -12px;
  left: 0;
  background-color: #ff4757;
  transition: all 0.3s ease-in-out;
}

.navigation-underline.active {
  transform: translateY(-3px);
}
/*  */
.g-title {
    display: flex;
    background-color: #ff0000;
    height: 40px;
    align-items: center;
    justify-content: space-between;
}

.g-title h3 {
    color: white;
    font-size: 16px;
    font-weight: normal;
    width: 60px;
    text-align: center;
}

.g-title input {
    flex: 1;
    height: 30px;
    border: none;
    outline: none;
    border-radius: 8px;
    text-indent: 5px;
}
</style>

<style>
.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #eee;
}






.content {

    padding: 8px;
    position: relative;
    top: 100px;
}

.featured-banner {
    position: relative;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 8px;
}

.featured-banner img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
}

.banner-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;
    color: white;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
}

.video-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
}

.video-card {
    position: relative;
    background-color: #ffffff;
}

.video-thumbnail {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 8px;
}

.video-duration {
    position: absolute;
    bottom: 4px;
    right: 4px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 2px 4px;
    border-radius: 4px;
    font-size: 12px;
}

.video-title {
    margin-top: 4px;
    font-size: 14px;
}

.video-views {
    color: #666;
    font-size: 12px;
}


.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: #666;
    text-decoration: none;
    font-size: 12px;
}


.icon {
    font-size: 24px;
}
</style>
<style>
.search-header {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    gap: 12px;
    background: #fff;

}

.search-bar {

    flex: 1;
    display: flex;
    align-items: center;
    background: #f5f5f5;
    border-radius: 20px;
    padding: 8px 16px;
}

.search-bar input {
    border: none;
    background: transparent;

    width: 100%;
    outline: none;
}

.icon-button {
    position: relative;
    right: -10px;
}

.bad {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #ff4757;
    color: white;
    border-radius: 10px;
    padding: 2px 4px;
    font-size: 12px;
    min-width: 16px;
    text-align: center;
}

.nav-tabs {
    display: flex;
    padding: 12px 16px;
    gap: 24px;
    background: #fff;
    border-bottom: 1px solid #eee;
    overflow-x: auto;
    white-space: nowrap;

}

.nav-tab {
    color: #634c4c;
    position: relative;
}

.nav-tab.active {
    color: #ff4757;
}

.nav-tab.active::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 2px;
    background: #ff4757;
}

.nan {

    position: fixed;
    z-index: 999;
    top: 0;
    width: 100%;

}
</style>
