<template>
  <div class="w-full bg-red-100 p-5">
    <form @submit.prevent="submit">
      <div class="flex flex-row space-x-4">
        <div class="username-input space-x-4">
          <label for="user">User</label>
          <input type="text" placeholder="username..." class="border-2 border-gray-400 px-3 py-1" v-model="username">
        </div>
        <div class="server-input space-x-4">
          <label for="server">Chat Server</label>
          <input type="text" placeholder="server name..." class="border-2 border-gray-400 px-3 py-1" v-model="servername">
        </div>
        <div class="btn-submit">
          <button class="border-2 border-gray-400 px-3 py-1">connect</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      servername: '',
    }
  },
  methods: {
    submit() {
      this.$emit('form-submit', {
        username: this.username,
        servername: this.servername
      })
    }
  }
}
</script>

<style>

</style>