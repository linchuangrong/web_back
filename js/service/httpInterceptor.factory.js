/**
 * 作者：林创荣
 * 功能：用户未登录拦截
 * 时间：2016年10月24日
 */
(function() {
	'use strict';

	angular.module("httpInterceptor.factory", [])
		.factory("httpInterceptor", httpInterceptor);

	httpInterceptor.$inject = [];

	function httpInterceptor() {
		return {
			response:function(response){
				//用户未登录
				if(response.data.code==30014){
					window.location.href="/#/login";
				}
				return response;
			}
		}
	}
})();