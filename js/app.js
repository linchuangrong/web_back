//统一入口
var app = angular.module("app", []);

//存储js文件路径名集合
var importObject = {};
//增加依赖方法
app.import = importFn;

function importFn(moduleAndPath, moduleName) {

	//过滤重复的js文件
	if(!importObject[moduleAndPath]) {
		importObject[moduleAndPath] = moduleAndPath;
	} else {
		return false;
	}

	var modName;

	//判断是否是URL
	function isUrl(s) {
		var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
		return regexp.test(s);
	}

	if(moduleName == null) {
		var moduleFileName = moduleAndPath.substring(moduleAndPath.lastIndexOf('/') + 1);
		modName = moduleFileName.substring(0, moduleFileName.lastIndexOf("."));
	} else {
		modName = moduleName;
	}

	//判断是否为URL，然后载入js文件
	if(isUrl(moduleAndPath)) {
		console.log("file path error:" + modName);
	} else {
		$("body").append("<script defer async='true' src='" + moduleAndPath + "'></script>");
	}

	//执行注入
	if(app.requires.indexOf(moduleName) == -1) {
		//没有加载,则自动加载
		app.requires.push(modName);
	}
}


//animate动画
app.import('js/libs/angular/angular-animate.js', 'ngAnimate');
//加入拦截器
app.import('js/service/httpInterceptor.factory.js','httpInterceptor.factory');
app.import('js/config.js', 'app.config');
app.import('js/dao/app.dao.js', 'app.dao');
app.import('js/filter/common.filter.js', 'common.filter');