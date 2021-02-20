<template>
  <div>
    <TheHeader @form-submit="onSubmit" />
    <TheBody :messages="chatHistory" />
    <TheFooter @post-message="onPostMessage" />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
import TheBody from './components/TheBody.vue'

import axios from 'axios';

export default {
  components: {
    TheFooter,
    TheBody,
    TheHeader
  },
  data() {
    return {
      chatHistory: []
    }
  },
  methods: {
    onSubmit(e) {
      const { username, servername } = e;

      let source = new EventSource(servername);
      source.onmessage = event => {
        let data = JSON.parse(event.data);
        let { username, message, time } = data;
        this.chatHistory.push({
          username,
          message,
          time
        })
      }
    },
    onPostMessage(message) {
      console.log(message);
    }
  },
  mounted() {
    
  }
}
</script>