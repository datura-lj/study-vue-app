<template>
  <div class="hello">
    <h3>{{ $store.state.num }}b</h3>
    <h4>{{count}}a</h4>
    <button @click="$store.commit('add')">加一个</button>
    <button type="button" name="buttonAdd" @click="add">add</button>
    <button type="button" name="buttonAdd" @click="addPlus">addPlus</button>
    <markdown></markdown>
  </div>
</template>

<script>
import markdown from './markdown'
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
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
  computed:{
    ...mapGetters({
      count:'num'
    })
  },
  components: {
      markdown
  },
  methods:{
    ...mapMutations([
       'add',
     ]),
     ...mapActions([
       'addPlus',
     ]),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
