<template>
	<div id="records">
		111
	</div>
</template>

<script>
	export default {
  name: 'homePage',
  data () {
    return {
    	img1:'./static/image/bg_1.png',
    	img2:'./static/image/ss.png',
    	imgMy:'./static/image/my.png',
    	cs:0
    }
  },
  mounted:function(){
  	document.title=this.$route.meta.title;
  },
  methods:{}
}
</script>

<style>
</style>