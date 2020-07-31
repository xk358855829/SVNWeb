import Vue from 'vue'
import Vuex from 'vuex'
import Qs from 'qs'
import axios from 'axios'
import mutations from './mutations'
import getters from './getters'
import actions from './action'
Vue.use(Vuex);

const state={
	//  http:'http://39.104.113.112:8796',
	// http:'http://192.168.2.123:8796',
	// http:'http://39.104.113.112:8796',
	// http:'http://cloud.sokeed.com',
	http:'http://39.104.99.181:8080',
	url:'http://39.104.113.112:2088',
	// url:'http://192.168.56.1:8084/ZFBrake',
	/*http:process.env.API_ROOT,*/
	abc:'http://39.104.99.181:2080',
	abcds:'http://192.168.2.123:7895',
	activeName:[],
	conGroupList:[],
	objpark:'',
	sideList:[],
	typepayLIST:[],
	firstarr:[],
	blurtime:'',
	bluryuan:'',
	bluryuanhour:'',
	parkingtitle:'',
	ONEreslist:[],
	unblues:'',
	facilitys:'',
	numtitle:'',
	typepay:[],
	abcd:2,
	recharge:'',
	reslist:[],
	totalnum:'',
	parkingname:[],
	mySalePlans:[],
	size:'请按输入框提示输入内容，带*号不能为空！',
	online:[
		{
			value:1,
			type:'已出场'
		},
		{
			value:-1,
			type:'未出场'
		}
	],
	paytypes:[
		{
			value:2,
			type:'支付宝支付'
		},
		{
			value:3,
			type:'微信支付'
		},
		{
			value:5,
			type:'现金支付'
		},
		{
			value:1,
			type:'无感支付'
		},
		// {
		// 	value:-1,
		// 	type:'特权'
		// }
	],
	online1:[
		{
			value:1,
			type:'未支付'
		},
		{
			value:0,
			type:'完成'
		},
		{
			value:-1,
			type:'已退款'
		}
	],
	use_statuslist:[{
			value:0,
			type:'已使用'
		},
		{
			value:1,
			type:'未使用'
		},
		{
			value:-1,
			type:'已失效'
	}],
	Distributing:[{
		value:1,
		type:'免费'
		},{
		value:2,
		type:'收费'
		},{
		value:3,
		type:'积分兑换'
	}],
	disbursement:[{
		value:0,
		type:'团体'
		},{
		value:1,
		type:'个人'
	}],
	usage:[
		{
			value:1,
			type:'免费时长'
		},{
			value:2,
			type:'现金抵用券'
		},{
			value:3,
			type:'满减券'
		}
	],
	tickettype:[{
		value:1,
		type:'电子券'
	},{
		value:2,
		type:'纸券'
	}],
	gstylelast:[{
		value:"1",
		type:'居民小区'
	},{
		value:"2",
		type:'商圈停车场'
	},{
		value:"3",
		type:'路测停车'
	},{
		value:"4",
		type:'公园景点'
	},{
		value:"5",
		type:'商务楼宇'
	},{
		value:"6",
		type:'其他'
	},{
		value:"7",
		type:'交通枢纽'
	},{
		value:"8",
		type:'市政设施'
	}],
	pagytype:[{
		value:1,
		type:'支付宝支付'
	},{
		value:2,
		type:'微信支付'
	},{
		value:3,
		type:'现金支付'
	},{
		value:4,
		type:'无感支付'
	}]
	// tableData:[]
}

export default new Vuex.Store({
	state,
	actions, 
	mutations,
	getters
})