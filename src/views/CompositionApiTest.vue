<template>
  <section>
    <h2 :class="titleClass">
      {{ message }}
    </h2>
  </section>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const message = ref("Have a nice day!!!!");
    const titleClass = ref("title");
    return {
      message,
      titleClass,
    };
  },
};
</script>

<style lang="scss" scoped>
h2.title {
  color: green;
}
</style>
