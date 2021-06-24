<template>
	<div class="home">
		<NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
		<HomeSwiper :banners="banners"></HomeSwiper>
		<HomeRecommendView :recommends='recommends'></HomeRecommendView>
	</div>
</template>

<script>
	import NavBar from 'components/common/navbar/NavBar.vue'
	import HomeSwiper from './childComponents/HomeSwiper.vue'
	import HomeRecommendView from './childComponents/HomeRecommendView.vue'
	import {getHomeMulitdata} from 'network/home.js'
	

	export default {
	name: 'Home',
	components: { 
		NavBar,
		HomeSwiper,
		HomeRecommendView
		
	 },
	data() {
		return {
			  banners: [],
				dKeywords:[],
				keywords:[],
				recommends:[]
		};
	},
	created () {
			//请求多个数据
			getHomeMulitdata().then(res =>{
				console.log(res)
				this.banners = res.data.banner.list
				this.dKeywords = res.data.dKeyword
				this.keywords = res.data.keywords
				this.recommends = res.data.recommend
				
			})

	},
	mounted() {
		
	},

	methods: {
		
	},
};
</script>

<style scoped>
.home-nav{
	background-color: var(--color-tint);
	color: #fff;
}
</style>