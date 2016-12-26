/**
 * 需要依赖app.config.js--appConfig
 */

(function() {
	'use strict';

	angular.module('app.dao', ['app.config'])
		.service('appApiDao', appApiDao);

	appApiDao.$inject = ['$http', 'appConfig'];

	function appApiDao($http, appConfig) {
		var url = {
			
		};

		function getData(url, params) {

			if(typeof params == "object") {
				return $http({
					method: "GET",
					url: url,
					params: params,
					//cache: true
				});
			} else if(params != undefined) {
				return $http({
					method: 'GET',
					url: url + "/" + params,
					//cache: true
				});
			} else {
				return $http({
					method: 'GET',
					url: url,
					//cache: true
				})
			}
		}

		function postData(url, params) {
			if(typeof params == "object") {
				return $http({
					'headers': {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					'method': 'POST',
					'url': url,
					'params': params
				});
			} else if(params != undefined) {
				return $http({
					'headers': {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					'method': 'POST',
					'url': url + "/" + params
				});
			} else {
				return $http({
					'headers': {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					'method': 'POST',
					'url': url
				});
			}
		}

		function postJsonData(url, params) {
			return $http.post(url, {
				params: params
			});
		}

		//formData
		function postFormData(url, params) {
			var fd = makeFormData(params);
			return $http({
				'method': 'POST',
				'url': url,
				'data': fd,
				'headers': {
					'Content-Type': undefined
				},
				'transformRequest': angular.identity
			});
		}

		return {
			url: url,
			getData: function(url, params) {
				return getData(url, params);
			},
			postData: function(url, params) {
				return postData(url, params);
			},
			postJsonData: function(url, params) {
				return postJsonData(url, params);
			},
			postFormData: function(url, params) {
				return postFormData(url, params);
			},
		}
	}

})();