<template>
  <section>
    <h2>
      {{message}}
    </h2>
  </section>

</template>

<script lang ="ts">
  import {ref} from 'vue'
  export default{
    setup(){
      const message = ref("Have a nice day!!!!");
      return{
        message
      }
    }
  }
</script>