/**
 * 作者：林创荣
 * 功能：主页
 * 		 
 * 时间：2016年10月31日
 */
(function() {
	'use strict';

	app.addController("homeController", homeController);
	homeController.$inject = ['$rootScope'];

	function homeController($rootScope) {
		var vm = this;
		$rootScope.title="主页";
		
		
		var contactsEcharts = echarts.init(document.getElementById('contacts-echarts'));
		var fundraisingEcharts = echarts.init(document.getElementById('fundraising-echarts'));
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
					text: '联系人增长趋势'
				},
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ['联系人总数', '联系人增量']
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
					data: ['10-01', '10-02', '10-03', '10-04', '10-05', '10-06', '10-07', '10-08', '10-09', '10-10']
				},
				yAxis: {
					type: 'value'
				},
				series: [{
					name: '联系人总数',
					type: 'line',
					//stack: '总量',
					data: [0, 0, 10, 110, 200, 430, 640, 640, 640, 650],
					itemStyle: {
						normal: {
							color: '#31708f',
							lineStyle: {
								color: '#31708f'
							}
						}
					}
				}, {
					name: '联系人增量',
					type: 'line',
					//stack: '总量',
					data: [0, 0, 10, 100, 90, 230, 210, 0, 0, 10],
					itemStyle: {
						normal: {
							color: '#e45454',
							lineStyle: {
								color: '#e45454'
							}
						}
					}
				}]
			};
			contactsEcharts.setOption(option);
		})();
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
				contactsEcharts.resize();
				fundraisingEcharts.resize();
			}
		}, 200);
	}
})();