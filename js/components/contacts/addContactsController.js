/**
 * 作者：林创荣
 * 功能：新建联系人
 * 		 
 * 时间：2016年11月1日
 */
(function() {
	'use strict';
	
	app.import('./js/directive/pagebar.directive.js', 'pagebar.directive'); //分页插件

	app.addController("addContactsController", addContactsController);
	addContactsController.$inject = ['$rootScope'];

	function addContactsController($rootScope) {
		var vm = this;
		$rootScope.title="新建联系人";
		
	}
})();