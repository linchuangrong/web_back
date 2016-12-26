/**
 * Created by Chunangrong on 2016/7/20.
 * 主要功能是为了“项目评审”的评分功能
 */
(function() {
	'use strict';

	angular.module("ngMouseOver.directive", [])
		.directive("ngMouseOver", function() {
			return {
				scope: {
					siblingDom: '@'
				},
				link: function(scope, ele, attr) {
					scope.activeIndex = ele.find(".active").index();
					ele.find(scope.siblingDom).bind("mouseover", mouseoverFn);
					ele.find(scope.siblingDom).bind("click", clickFn);
					ele.find(scope.siblingDom).bind("mouseout", mouseoutFn);

					function mouseoverFn(event) {
						var dom = angular.element(event.target);
						dom.addClass("active").siblings().removeClass("active");
					}

					function mouseoutFn(event) {
						var dom = ele.find(scope.siblingDom).eq(scope.activeIndex);
						dom.addClass("active").siblings().removeClass("active");
					}

					function clickFn(event) {
						var dom = angular.element(event.target);
						scope.activeIndex = dom.index();
						dom.addClass("active").siblings().removeClass("active");
						//console.log("点击的下标：" + scope.activeIndex);
					}
				}
			}
		});
})();