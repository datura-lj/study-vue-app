<template>
    <div class="mdContainer" :class="{ fullPage: fullPageStatus }">
        <div class="mdBodyContainer">
            <div class="previewContainer markdown-body" v-scroll="previewScroll" v-html="htmlcode" v-if="previewStatus">
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import marked from 'marked'
    import scroll from 'vue-scroll'
    import hljs from '../../static/js/highlight.min.js'
    import range from '../../static/js/rangeFn.js'
    Vue.use(scroll)
    marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false,
        highlight: function(code) {
            return hljs.highlightAuto(code).value
        }
    });
    export default {
        name: 'markdown',
        props: ['previewStatusP'],
        data() {
            return {
                input: this.mdValuesP || '',
                editStatus: this.editStatusP || true,
                previewStatus: this.previewStatusP || true,
                fullPageStatus: this.fullPageStatusP || false,
                navStatus: this.navStatusP || true,
                icoStatus: this.icoStatusP || true,
                maxEditScrollHeight:0,
                maxPreviewScrollHeight:0,
                htmlcode:`<p><strong>测试字体加粗aa</strong></p>
<pre><code><span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">"utf-8"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>vue-study-app<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"app"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-comment">&lt;!-- built files will be auto injected --&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre>`
            }
        },
        methods: {
            previewScroll: function(e, position) {
                if(this.maxEditScrollHeight!==0){
                    let topPercent=position.scrollTop/this.maxPreviewScrollHeight;
                    document.querySelector('.mdEditor').scrollTop = this.maxEditScrollHeight*topPercent;
                }
            },
            editScroll:function(e, position){
                if(this.maxPreviewScrollHeight!==0){
                    let topPercent=position.scrollTop/this.maxEditScrollHeight;
                    document.querySelector('.previewContainer').scrollTop = this.maxPreviewScrollHeight*topPercent;
                }
            }
        }
    }
</script>

<style lang="scss">
    /*引入reset文件*/

    @import "../../static/css/reset";

    /*引入github的markdown样式文件*/

    @import "../../static/css/github-markdown.css";

    /*引入atom的代码高亮样式文件*/

    @import "../../static/css/atom-one-dark.min.css";
    .mdContainer {
        width: 100%;
        height: 100%;
        background: lightblue;
        &.fullPage {
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
        }
    }
    // 预览区
    .previewContainer {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        background: #fff;
        overflow: auto;
        padding: 10px;
    }
</style>
