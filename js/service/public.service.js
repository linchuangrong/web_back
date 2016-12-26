/**
 * 林创荣
 * 功能：公共接口
 * 		退出
 * 		短信验证码
 * 		省市二级关联
 * 2016年10月21日
 */
(function() {
	'use strict';

	angular.module("public.service", [])
		.service("publicService", publicService);

	publicService.$inject = ["appApiDao"];

	function publicService(appApiDao) {

		var dateNow = new Date(); //今天的时间
		this.dateNowStamp = Date.parse(dateNow.getFullYear() + "-" + (dateNow.getMonth() + 1) + "-" + dateNow.getDate()) / 1000; //今天08:00:00的时间戳,这里时间默认有8个小时
		this.dataOneMonthStamp = Date.parse(dateNow.getFullYear() + "-" + (dateNow.getMonth() + 1) + "-" + dateNow.getDate()) / 1000 + 30 * 24 * 60 * 60;//一个月后的时间戳
		
		this.exit = exitFn; //退出
		this.sendsms = sendsmsFn; //发送验证码
		this.getArea = getAreaFn; //获取省市关联数据
		this.getSmsEmailCode = getSmsEmailCodeFn; //获取用户绑定的手机号、邮箱，然后发送验证码
		
		

		//退出接口
		function exitFn(params) {
			var url = appApiDao.url.common.exit;
			return appApiDao.getData(url);
		}

		//发送短信验证码
		function sendsmsFn(params) {
			return appApiDao.postData(appApiDao.url.common.sendsms, params);
		}

		//获取省市关联数据
		function getAreaFn(params) {
			return appApiDao.postData(appApiDao.url.common.getArea, params);
		}

		//获取用户绑定的手机号、邮箱，然后发送验证码
		function getSmsEmailCodeFn() {
			return appApiDao.getData(appApiDao.url.common.getSmsEmailCode);
		}
	}
})();