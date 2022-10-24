<template>
  <v-md-preview ref="preview" :text="article"></v-md-preview>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, getCurrentInstance } from "vue";

const preview = ref(null)
// const {proxy} = getCurrentInstance()
export default defineComponent({
  name: "preview",
  props: {
    article: {
      type: String,
      default: "",
    },
  },
  setup() {
    let titleList = reactive([]);

    // onMounted(() => {

    //   console.log(`output->preview`, preview);
    //   const anchors = proxy.$refs.preview.$el.querySelectorAll('h1,h2,h3,h4,h5,h6')
    //   console.log(`output->anchors`,anchors)
    //   const titles = Array.from(anchors).filter(
    //     (title) => !!title.innerText.trim()
    //   );

    //   if (!titles.length) {
    //     titleList = [];
    //     return;
    //   }

    //   const hTags = Array.from(
    //     new Set(titles.map((title) => title.tagName))
    //   ).sort();

    //   titleList = titles.map((el) => ({
    //     title: el.innerText,
    //     lineIndex: el.getAttribute("data-v-md-line"),
    //     indent: hTags.indexOf(el.tagName),
    //   }));
    // });
    return {titleList};
  },
  methods: {
    handleAnchorClick(anchor) {
      const { preview } = this.$refs;
      const { lineIndex } = anchor;

      const heading = preview.$el.querySelector(
        `[data-v-md-line="${lineIndex}"]`
      );

      if (heading) {
        preview.scrollToTarget({
          target: heading,
          scrollContainer: window,
          top: 60,
        });
      }
    },
  },
});
</script>

<style></style>
