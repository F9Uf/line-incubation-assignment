<template>
  <div class="body overflow-auto p-5">
    <ul>
      <li v-for="(m, index) in messages" :key="index">
        {{ m.username}}, {{ m.time }}, {{ m.messages}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      default: () => [],
    }
  }
}
</script>

<style scoped>
.body {
  height: calc(100vh - 151.54px);
}
</style>