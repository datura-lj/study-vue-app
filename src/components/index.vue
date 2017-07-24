<template>
  <div class="hello">
    <markdown></markdown>
  </div>
</template>

<script>
import markdown from './markdown'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      code: `<pre><code><span class="hljs-tag"><span class="hljs-name">div</span></span>
    我是一个div标签
<span class="hljs-tag"><span class="hljs-name">div</span></span>
</code></pre>`
    }
  },
  components: {
      markdown
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
