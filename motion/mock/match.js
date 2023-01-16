const Mock = require('mockjs')
const {
	delay
} = require('./utils')
const {
	Random
} = Mock;
// 热门活动
Mock.mock('home/hotActivity', {
	pic: "@dataImage('200x100',   'Hello Mock.js!')",
	dec: '@cparagraph(1, 10)',
	'project|5-20': [{
		// 属性 id 是一个自增数，起始值为 1，每次增 1
		'id|+1': 1,
		title: '@ctitle(3, 30)', //标题
		location: '@city()', //地点
		time: "@date('yyyy-MM-dd')", //时间
		read: '@integer(1,10000)', //阅读量
		enlist: '@natural()', //报名参赛
		details: '@cparagraph(5, 30)', //详情
		mode: '@boolean()', //参赛方式
		'raise|1': ["未开始", "报名中", "已结束"], //募集
		pic: '@domain()', //海报
		type: 'activity',
		'tagType|1': ["未开始", "报名中", "已结束"], //募集方式
		avatar: "@dataImage('200x100',   'Hello Mock.js!')"
	}]
})

Mock.mock('multiple/list', {
	'list|5-20': [{
		// 属性 id 是一个自增数，起始值为 1，每次增 1
		'id|+1': 1,
		name: '@cname',
		title: '@ctitle(3, 30)', //标题
		location: '@city(true)', //地点
		time: "@date('yyyy-MM-dd')", //时间
		read: '@integer(1,10000)', //阅读量
		enlist: '@natural()', //报名参赛
		details: '@cparagraph(5, 30)', //详情
		mode: '@boolean()', //参赛方式
		raise: '@integer(1,3)', //募集
		pic: '@domain()', //海报
		type: 'activity'
	}]
})
// 详情
Mock.mock('multiple/detail', {
	// 属性 id 是一个自增数，起始值为 1，每次增 1
	'id|+1': 1,
	pic: '', //图片
	name: '@cname',
	title: '@date(yyyy)' + '年' + '@ctitle(3, 20)', //标题
	subTitle: '@ctitle(5)' + '.' + '@ctitle( 5)',
	'raise|1': ["未开始", "报名中", "已结束"], //募集

	signTime: "@datetime(yyyy-MM-dd HH:mm)" + '至' + "@datetime(yyyy-MM-dd HH:mm)", //时间
	competeTime: "@datetime(yyyy-MM-dd HH:mm)" + '至' + "@datetime(yyyy-MM-dd HH:mm)", //时间
	line: '@city(true)' + '路线', //线路
	'level|1': ['A', 'B', 'C'], //难度
})
// 报名名单
Mock.mock('multiple/roster/list', {
	'list|3-30': [{
		// 属性 id 是一个自增数，起始值为 1，每次增 1
		'id|+1': 20221101,
		name: '@cname',
		signTime: "@datetime(yyyy-MM-dd HH:mm)", //时间
		'team|1': ["单人", "双人", "三人", "团队"], //个人，双人，三人 ，tram>3=团队，
		'signType|1': [
			"预赛",
			"复赛",
			"半决赛",
			"决赛"
		]
	}]
})
