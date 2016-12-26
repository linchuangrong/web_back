/**
 * 作者：林创荣
 * 功能：邮件
 * 时间：2016年12月2日
 */
(function() {
	'use strict';

	app.import('./js/directive/pagebar.directive.js', 'pagebar.directive'); //分页插件

	app.addController("emailController", emailController);
	emailController.$inject = ['$rootScope', '$window'];

	function emailController($rootScope, $window) {
		var vm = this;
		$rootScope.title = "邮件发送记录";

		/*****************变量 begin****************/

		//活动列表分页参数
		vm.pageParams = {
			showPage: 5, //显示多少个页码提供用户点击，不会变
			pageSize: 10, //1页显示的数量,不会变
			current: 1, //当前页
			page_count: 6, //总共多少页
			pageChange: pageChangeFn //切换页面函数
		}

		/*****************变量 end****************/
		
		/*****************函数 begin****************/

		

		/*****************函数 end****************/

		//
		//
		//
		//
		//
		//----------------------------分页事件------------------------------------------
		//
		//
		//
		//
		//
		function pageChangeFn() {
			return function(param) {
				if(parseInt(param) > 0 && parseInt(param) <= vm.pageParams.page_count) {
					//修改页码
					vm.pageParams.current = parseInt(param);
					//获取数据
					//vm.getActiivtyList();
					//滚动到顶部
					angular.element($window).scrollTop(0);
				} else {
					console.log("输入非法");
				}
			}
		}
	}
})();