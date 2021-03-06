/**
 * 作者：林创荣
 * 功能：筹款
 * 		 
 * 时间：2016年10月31日
 */
(function() {
	'use strict';

	app.import('./js/directive/pagebar.directive.js', 'pagebar.directive'); //分页插件

	app.addController("fundraisingController", fundraisingController);
	fundraisingController.$inject = ['$rootScope', '$window'];

	function fundraisingController($rootScope, $window) {
		var vm = this;
		$rootScope.title = "筹款";
		var fundraisingEcharts = echarts.init(document.getElementById('fundraising-echarts'));

		/*****************变量 begin****************/

		//活动列表分页参数
		vm.pageParams = {
			showPage: 5, //显示多少个页码提供用户点击，不会变
			pageSize: 10, //1页显示的数量,不会变
			current: 1, //当前页
			page_count: 1, //总共多少页
			pageChange: pageChangeFn //切换页面函数
		}

		/*****************变量 end****************/

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
		
		//
		//
		//
		//
		//
		//----------------------------联系人图表------------------------------------------
		//
		//
		//
		//
		//
		(function() {
			var option = {
				title: {
					text: '筹款趋势'
				},
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ['捐款额', '捐款人数']
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				toolbox: {
					feature: {
						saveAsImage: {}
					}
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10', '10-11', '10-12', '10-13', '10-14', '10-15', '10-16', '10-17', '10-18', '10-19', '10-20']
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					name: '捐款额',
					type: 'line',
					stack: '捐款额',
					data: [0, 0, 10, 100, 90, 230, 210, 0, 0, 10, 100, 90, 0, 20, 0, 12, 10, 100, 90, 30],
					itemStyle: {
						normal: {
							color: '#f0ad4e',
							lineStyle: {
								color: '#f0ad4e'
							}
						}
					}
				}, {
					name: '捐款人数',
					type: 'line',
					stack: '捐款人数',
					data: [0, 0, 10, 110, 200, 430, 640, 640, 640, 650, 750, 840, 840, 860, 860, 872, 882, 982, 1072, 1102],
					itemStyle: {
						normal: {
							color: '#5cb85c',
							lineStyle: {
								color: '#5cb85c'
							}
						}
					}
				}]
			};
			fundraisingEcharts.setOption(option);
		})();
		//
		//
		//
		//
		//
		//----------------------------图表自适应浏览器屏幕大小------------------------------------------
		//
		//
		//
		//
		//
		setTimeout(function() {
			window.onresize = function() {
				fundraisingEcharts.resize();
			}
		}, 200);
	}
})();