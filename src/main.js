import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Sticky } from 'vant';
import { CouponCell, CouponList } from 'vant';
import { Icon } from 'vant';
import { NoticeBar } from 'vant';
import { PullRefresh } from 'vant';
import { ActionBar, ActionBarIcon, ActionBarButton } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import 'animate.css';
import './js/head3'
import './js/min'
import 'vant/lib/index.css'

const app = createApp(App)

try {   
    app.use(router)
    app.use(Sticky);
    app.use(CouponCell);
    app.use(CouponList);
    app.use(Icon);
    app.use(NoticeBar);
    app.use(PullRefresh);

    app.use(ActionBar);
    app.use(ActionBarIcon);
    app.use(ActionBarButton);

    app.use(Swipe);
    app.use(SwipeItem);
    app.mount('#app')
} catch (error) {
}