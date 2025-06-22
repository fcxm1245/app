<template>
  
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
</template>

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
            background: linear-gradient(transparent, rgba(0,0,0,0.7));
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
            background: rgba(0,0,0,0.7);
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