const Mock = require('mockjs')
const {
	delay
} = require('./utils')
const {
	Random
} = Mock;
// const path = require('path');
// const webpackApiMocker = require('mocker-api')
// 热门活动
Mock.mock('api/test', {
	'list|5-20': [{
		// 属性 id 是一个自增数，起始值为 1，每次增 1
		'id|+1': 1,
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
		'mode|1': ['线上赛', '线下赛'], //参赛方式
		raise: '@integer(1,3)', //募集
		pic: '@domain()', //海报
		type: 'activity',
		tagType: '@integer(1,3)', //募集方式

		avatar: "@dataImage('200x100',   'Hello Mock.js!')"
	}]
})
