<template>
  <div class="w-full bg-red-100 p-5">
    <form @submit.prevent="onPostMessage">
      <div class="flex flex-row space-x-4">
        <div class="message-input space-x-4">
          <label for="message">Message:</label>
          <input type="text" placeholder="message..." class="border-2 border-gray-400 px-3 py-1" v-model="message">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '',
    }
  },
  methods: {
    onPostMessage() {
      this.$emit('post-message',this. message)
    }
  }
}
</script>

<style>

</style>