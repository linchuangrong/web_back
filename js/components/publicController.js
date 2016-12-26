/**
 * 作者：林创荣
 * 功能：定义全局变量
 * 		 导航条模块
 * 时间：2016年9月12日
 */
(function() {
	'use strict';

	app.import('js/directive/repeatDone.directive.js', 'repeatDone.directive'); //循环结束事件
	app.import('js/service/public.service.js', 'public.service'); //引入“公共接口”服务

	app.controller("publicController", publicController);
	publicController.$inject = ['$timeout', 'appConfig', '$scope', 'appApiDao', '$rootScope', '$state', 'publicService'];

	function publicController($timeout, appConfig, $scope, appApiDao, $rootScope, $state, publicService) {
		var vm = this;
		vm.baseUrl = appConfig.baseUrl; //全局变量
		vm.imgUrl = "./" + "img"; //全局变量

		
	}
})();