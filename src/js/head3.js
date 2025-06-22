window.g=function(){
var flag; // 鼠标按下
	    var downX; // 鼠标点击的x下标
	    var scrollLeft; // 当前元素滚动条的偏移量
	    nav.addEventListener("mousedown", function (event) {
	        flag = true;
	        downX = event.clientX; // 获取到点击的x下标
	        scrollLeft = this.scrollLeft; // 获取当前元素滚动条的偏移量
	    });
	    nav.addEventListener("mousemove", function (event) {
	        if (flag) { // 判断是否是鼠标按下滚动元素区域
	        	// 获取移动的x轴
	            var moveX = event.clientX; 
	            // 当前移动的x轴下标减去刚点击下去的x轴下标得到鼠标滑动距离
	            var scrollX = moveX - downX; 
	            // 鼠标按下的滚动条偏移量减去当前鼠标的滑动距离
	            this.scrollLeft = scrollLeft - scrollX;
	            console.log(scrollX)
	        }
	    });
	    // 鼠标抬起停止拖动
	    nav.addEventListener("mouseup", function () {
	        flag = false;
	    });
	    // 鼠标离开元素停止拖动
	    nav.addEventListener("mouseleave", function (event) {
	        flag = false;
	    });
	}