<template>
	<div class="showAudio">
		<div class="audio-container">
      <my-audio v-for="(list, index) in lists"
                  :source="list.source"
                  :index="index"
                  :mode="mode"
                  @timeupdate="timeupdate"
                  @playing="playing"
                  @pause="pause"
                  @ended="ended"
                  @waiting="waiting"
                  @error="error"
                  :key="index">
        <div class="player">
          <svg class="progress" :width="svgOptions.width" :height="svgOptions.height">
            <path :fill="svgOptions.fill" :stroke="svgOptions.stroke" :stroke-width="svgOptions.strokeWidth"></path>
          </svg>
          <a class="play" href="javascript:;">
          </a>
        </div>
      </my-audio>
    </div>	
	</div>
</template>
<script>
  import myAudio from '../components/audio/audio.vue';
  import * as constant from '../components/audio/constant.js';
  export default {
    name:'showAudio',
    components: {
    myAudio
    },
    data () {
      return {
        lists: [{
          source: 'http://otaf5vcob.bkt.clouddn.com/audio/%E5%BD%95%E9%9F%B31.wav',
          time: '0:16'
        }],
        mode: constant.SINGLE,
        single_mode: constant.SINGLE,
        loop_mode: constant.LOOP,
        order_mode: constant.ORDER,
        circulation_mode: constant.CIRCULATION,
        random_mode: constant.RANDOM,
        svgOptions: {
          width: 40,
          height: 40,
          fill: 'none',
          stroke: '#007aff',
          strokeWidth: 2
        }
      }
    },
    methods: {
      timeupdate (e) {
        let target = e.target
        let currentTime = target.currentTime
        let duration = target.duration
        let percent = (100 / duration * currentTime).toFixed(1)
        if (isNaN(percent) || percent === '0.0') {
          percent = 0
        }
        let svg = target.parentNode.querySelector('svg')
        if (percent > 100) {
          percent = 100
        }
        let centerX = this.svgOptions.width / 2
        let centerY = this.svgOptions.height / 2
        let radius = centerX - this.svgOptions.strokeWidth / 2
        let startX = centerX
        let startY = centerY - radius
        let xAxisRotation = 0
        let sweepFlag = 1
        let circ = Math.PI * 2
        let largeArcFlag = 0
        if (percent * circ / 100 >= Math.PI) {
          largeArcFlag = 1
        }
        let endX = centerX + radius * Math.sin(circ * percent / 100)
        let endY = centerY - radius * Math.cos(circ * percent / 100)
        let d = 'M' + startX + ',' + startY + ' ' + 'A' + radius + ',' + radius + ' ' + xAxisRotation + ' ' + largeArcFlag + ' ' + sweepFlag + ' ' + endX + ',' + endY
        let path = svg.querySelector('path')
        path.setAttribute('d', d)
      },
      playing (e) {
        e.target.parentElement.querySelector('a').className = constant.PLAY_CLASS
      },
      pause (e) {
        e.target.parentElement.querySelector('a').className = constant.PAUSE_CLASS
      },
      ended (e) {
        e.target.parentElement.querySelector('a').className = constant.PAUSE_CLASS
      },
      waiting (e) {
        e.target.parentElement.querySelector('a').className = constant.LOAD_CLASS
      },
      error (e) {
        console.log(e)
      }
    }
  }
</script>
<style lang="sass" src='../components/audio/audio.scss' scoped>Error: Source sample is missing.</style>