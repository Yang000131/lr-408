<script lang="ts" setup>
import { useData } from "vitepress";
import { computed, ref, onMounted } from "vue";
import { countWord, toISODate } from "../util/function";

const { frontmatter, page } = useData();

const author = computed(() => frontmatter.value.author || "一可爱小白兔");
const firstCommit = computed(() => toISODate(frontmatter.value.firstCommit));
const lastUpdate = computed(() => toISODate(page.value.lastUpdated));
const version = computed(() => frontmatter.value.version || "1.0.0");
const tags = computed(() => frontmatter.value.tags);
const wordCount = ref(0);
const imageCount = ref(0);

const wordTime = computed(() => {
  return (wordCount.value / 275) * 60;
});

const imageTime = computed(() => {
  const n = imageCount.value;
  if (imageCount.value <= 10) {
    return n * 13 + (n * (n - 1)) / 2;
  }
  return 175 + (n - 10) * 3;
});

const readTime = computed(() => {
  return Math.ceil((wordTime.value + imageTime.value) / 60);
});

function analyze() {
  document.querySelectorAll(".meta-des").forEach((v) => v.remove());
  const docDomContainer = window.document.querySelector("#VPContent");
  const imgs = docDomContainer?.querySelectorAll<HTMLImageElement>(
    ".content-container .main img",
  );
  imageCount.value = imgs?.length || 0;
  const words =
    docDomContainer?.querySelector(".content-container .main")?.textContent ||
    "";
  wordCount.value = countWord(words);
}

onMounted(() => {
  analyze();
});
</script>

<template>
  <div class="lr-meta">
    <div v-if="author" class="meta-item">
      🧑‍💻 作者:
      <span>{{ author }}</span>
    </div>

    <div v-if="version" class="meta-item">
      📦 版本:
      <span>{{ version }}</span>
    </div>

    <div class="meta-item">
      📄 字数(字):
      <span>{{ wordCount }}</span>
    </div>

    <div class="meta-item">
      ⏳ 时长(min):
      <span>{{ readTime }}</span>
    </div>

    <div v-if="firstCommit" class="meta-item">
      📅 发表于:
      <span>{{ firstCommit }}</span>
    </div>

    <div class="meta-item">
      ⏱️ 更新于:
      <span>{{ lastUpdate }}</span>
    </div>

    <div v-if="tags && Array.isArray(tags)" class="meta-item tags">
      🏷️ 标签:
      <span v-for="tag in tags.slice(0, 3)" :key="tag" class="tag">{{
        tag
      }}</span>
    </div>
  </div>
</template>

<style>
.lr-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 16px 40px;
  margin-top: 12px;
  color: var(--vp-c-text-2);
  font-size: 14px;
  line-height: 1.5;

  .meta-item {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 500;
  }
  .tags {
    display: flex;
    align-items: center;
    gap: 6px;
    flex-wrap: wrap;

    .tag {
      background: #f0f2f5;
      color: #4a5568;
      padding: 2px 8px;
      border-radius: 6px;
      font-size: 12px;
      white-space: nowrap;
    }
  }
}

/* 响应式：移动端缩小间距 */
@media (max-width: 768px) {
  .weiz-meta {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
