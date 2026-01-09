<script setup lang="ts">
import { ref, onMounted } from "vue";

// 获取 localStorage 中的状态
const getNoticeStatus = () => {
  if (typeof localStorage === "undefined") return true;

  const status = localStorage.getItem("notice_closed");
  // 如果已关闭，返回 false
  if (status === "true") {
    return false;
  }

  // 检查是否在24小时内已显示
  const lastShown = localStorage.getItem("notice_last_shown");
  if (lastShown) {
    const now = Date.now();
    const lastShownTime = parseInt(lastShown);
    const twentyFourHours = 24 * 60 * 60 * 1000;

    // 24小时内不重复显示
    if (now - lastShownTime < twentyFourHours) {
      return false;
    }
  }

  return true;
};

const visible = ref(false);

// 关闭公告
function closetz() {
  visible.value = false;

  if (typeof localStorage !== "undefined") {
    // 标记为已关闭
    localStorage.setItem("notice_closed", "true");
    // 记录关闭时间
    localStorage.setItem("notice_closed_time", Date.now().toString());
  }
}

onMounted(() => {
  // 页面加载时检查是否显示
  visible.value = getNoticeStatus();

  // 如果显示，记录显示时间
  if (visible.value && typeof localStorage !== "undefined") {
    localStorage.setItem("notice_last_shown", Date.now().toString());
  }

  // 5秒后自动关闭
  setTimeout(function () {
    closetz();
  }, 5000);
});
</script>

<template>
  <div v-if="visible" class="notice-background" style="display: block"></div>
  <div v-if="visible" class="notice">
    <h3 class="notice-title">网站公告</h3>
    <div class="notice-describe">
      <p>本次更新：新公告样式</p>
      <p class="notice-domain">
        <strong>
          详细教程：<a
            href="https://vitepress.yiov.top/layout.html#%E5%85%AC%E5%91%8A"
            target="_blank"
            >vitepress.yiov.top</a
          >
        </strong>
      </p>
      <p>QQ 频道：******(无效二维码)</p>
      <!-- <img class="notice-img" src="/qrcode.png"> -->
    </div>
    <div class="notice-footer">
      <div class="notice-btn" @click="closetz">朕知道了</div>
    </div>
  </div>
</template>

<style scoped>
.notice-img {
  z-index: 9999;
}

/* 全屏遮罩层 */
.notice-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  z-index: 99;
  pointer-events: none;
}

/* 通知 */
.notice {
  z-index: 999;
  padding: 25px;
  background: #fff;
  width: 350px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 18px;
  box-sizing: border-box;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.05),
    0 1.5rem 2.2rem rgba(0, 0, 0, 0.1);
}

@media (max-width: 640px) {
  .notice {
    width: 82%;
    padding: 25px;
  }
}

.notice-title {
  text-align: center;
  color: #3c3c3c;
  font-size: 20px;
  font-weight: 900;
}

.notice-describe p {
  color: #3c3c3c;
  padding: 10px 0;
  font-size: 15px;
}

.notice-describe p strong {
  color: #3c3c3c;
}

.notice-describe p a {
  color: #eb0e0e;
}

.notice-domain {
  background: #f3f5f7;
  text-align: center;
  border-radius: 10px;
}

/* 通知底部 */
.notice-footer {
  padding: 20px 0 0;
  text-align: center;
}

.notice-btn {
  text-align: center;
  cursor: pointer;
  border-radius: 50px;
  font-weight: 700;
  padding: 0 30px;
  color: #fff;
  background: linear-gradient(to right, #1e69f5 0%, #093ce5 100%);
  box-shadow: 0 10px 12px -4px rgb(0 0 0 / 40%);
  line-height: 40px;
  font-size: 14px;
  display: inline-block;
  text-wrap: nowrap;
}
</style>
