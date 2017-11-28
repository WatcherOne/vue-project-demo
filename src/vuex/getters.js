/***************************************/
/*  name:    mian-entry
/*  author： zhubo
/*  email：  286154864@qq.com
/*  date：   2017-11-28
/***************************************/

import state from './state.js';

export default {
	getName: (state) => {
		return state.name;
	},
	getBirth: (state) => {
		return state.birthday;
	},
	getSex: (state) => {
		return state.sex;
	},
	getAddress: (state) => {
		return state.address;
	}
}
