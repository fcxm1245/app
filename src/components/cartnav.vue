<template>
    <div class="navigation">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="navigation-item"
        :class="{ active: index === activeIndex }"
        @click="activeIndex = index"
        ref="itemRefs"
      >
        {{ item }}
      </div>
      <div
        class="navigation-underline"
        :class="{ active: activeIndex !== -1 }"
        :style="underlineStyle"
        ref="underlineRef"
      ></div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from "vue";
  const activeIndex = ref(0);
  const items = ref(["商品", "讨论", "详情"]);
  const underlineStyle = ref({
    transform: "translateX(0)",
  });
  const itemRefs = ref([]);
  const underlineRef = ref(null);
  const updateUnderline = () => {
    // 获取标题的宽度，减去下划线的宽度除以2，可以使下划线在标题下居中显示
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
  
  <style>
  .navigation {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    padding: 0 20px;
    height: 50px;
    font-size: 16px;
    font-weight: bold;
  }
  
  .navigation-item {
    cursor: pointer;
  }
  
  .navigation-item.active {
    color: #f00;
  }
  
  .navigation-underline {
    /* 下划线的宽度 */
    width: 50px;
    height: 3px;
    border-radius: 2px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #ff2c54;
    transition: all 0.3s ease-in-out;
  }
  
  .navigation-underline.active {
    transform: translateY(-3px);
  }
  </style>
  