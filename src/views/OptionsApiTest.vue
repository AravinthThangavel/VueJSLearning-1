 

<template>
  <section>
    <div>
      <h1 :class="titleClass">{{message}}</h1>
    </div>
  </section>

</template>

<script lang = "ts">

export default {
  data() {
    return{
      message:"Hello World!!",
      titleClass:"title"
    }
  }
}
</script>

<style lang="scss" scoped>
h1.title {
  color:red;
}
</style>

