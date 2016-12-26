/**
 * 作者：林创荣
 * 功能：定义全局路由
 * 		 定义$rootScope.currentRouter来存储当前页面的路由名,用来设置左侧菜单栏的active状态
 * 时间：2016年9月2日
 */
(function() {
	"use strict";

	app.import('js/libs/angular/angular-ui-router.min.js', 'ui.router'); //引入ui-router
	app.import('js/service/loadFile.service.js', 'load.file'); //引入动态加载js插件

	app.config(webRouter);
	webRouter.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider', '$controllerProvider', 'appConfig', 'loadFileProvider', 'httpInterceptorProvider'];

	function webRouter($httpProvider, $stateProvider, $urlRouterProvider, $controllerProvider, appConfig, loadFileProvider, httpInterceptorProvider) {

		//注入HTTP拦截器,用来检测用户是否未登录
		$httpProvider.interceptors.push(httpInterceptorProvider.$get);

		//设置动态添加controller的方法
		app.addController = $controllerProvider.register;

		//设置路由
		$urlRouterProvider.otherwise("/home");
		$stateProvider
			.state("home", home()) //首页
			.state("contacts", contacts()) //联系人
			.state("addContacts", addContacts()) //新建联系人
			.state("activity", activity()) //活动
			.state("fundraising", fundraising()) //筹款
			.state("sms", sms()) //短信
			.state("sendSms", sendSms()) //群发短信
			.state("email", email()) //邮件记录
			.state("notes", notes()) //交易记录
		;

		//首页
		function home() {
			return {
				url: '/home',
				templateUrl: appConfig.baseUrl + "js/components/home/home.tpl.html",
				controller: 'homeController as home',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load("js/components/home/homeController.js")
				}
			}
		}

		//联系人
		function contacts() {
			return {
				url: '/contacts',
				templateUrl: appConfig.baseUrl + "js/components/contacts/contacts.tpl.html",
				controller: 'contactsController as contacts',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load("js/components/contacts/contactsController.js")
				}
			}
		}

		//新建联系人
		function addContacts() {
			return {
				url: '/addContacts',
				templateUrl: appConfig.baseUrl + "js/components/contacts/addContacts.tpl.html",
				controller: 'addContactsController as addContacts',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load("js/components/contacts/addContactsController.js")
				}
			}
		}

		//活动
		function activity() {
			return {
				url: '/activity',
				templateUrl: appConfig.baseUrl + "js/components/activity/activity.tpl.html",
				controller: 'activityController as activity',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load("js/components/activity/activityController.js")
				}
			}
		}

		//筹款
		function fundraising() {
			return {
				url: '/fundraising',
				templateUrl: appConfig.baseUrl + "js/components/fundraising/fundraising.tpl.html",
				controller: 'fundraisingController as fundraising',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load("js/components/fundraising/fundraisingController.js")
				}
			}
		}

		//短信
		function sms() {
			return {
				url: '/sms',
				templateUrl: appConfig.baseUrl + "js/components/sms/sms.tpl.html",
				controller: 'smsController as sms',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load("js/components/sms/smsController.js")
				}
			}
		}

		//群发短信
		function sendSms() {
			return {
				url: '/sendSms',
				templateUrl: appConfig.baseUrl + "js/components/sms/sendSms.tpl.html",
				controller: 'sendSmsController as sendSms',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load("js/components/sms/sendSmsController.js")
				}
			}
		}

		//邮件记录
		function email() {
			return {
				url: '/email',
				templateUrl: appConfig.baseUrl + "js/components/email/email.tpl.html",
				controller: 'emailController as email',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load("js/components/email/emailController.js")
				}
			}
		}

		//交易记录
		function notes() {
			return {
				url: '/notes',
				templateUrl: appConfig.baseUrl + "js/components/notes/notes.tpl.html",
				controller: 'notesController as notes',
				resolve: {
					loadMyCtrl: loadFileProvider.$get().load("js/components/notes/notesController.js")
				}
			}
		}

	}
})();

(function() {
	//配置router全局调用参数
	app.run(routerGlobal);
	routerGlobal.$inject = ['$rootScope', '$timeout'];

	function routerGlobal($rootScope, $timeout) {
		$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
			//当前页面加载完成后的  路由名
			$rootScope.currentRouter = toState.name;
		});
	}

})();