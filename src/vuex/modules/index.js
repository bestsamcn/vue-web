import { GET_BANNER,SET_CAROUSEL } from '../mutation-types.js'

const state = {
	bannerList:[]
}

const mutations = {
	[GET_BANNER](state,bannerList){
        state.bannerList = bannerList
	},
	[SET_CAROUSEL](){
		$('#owlcarousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay:true,
            items: 1,
            smartSpeed: 600
        });
	}
}

export default{
	state,
	mutations
}