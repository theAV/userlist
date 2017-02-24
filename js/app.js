var gituser = angular.module('gituser', ['ngRoute']);

gituser.config(function($routeProvider){
	$routeProvider.when("/",{
		templateUrl:"templates/teamlist.html",
		controller:'listctrl'
	}).when('/:username',{
		templateUrl:"templates/teamdetail.html",
		controller:'teamDetailctrl'
	}).otherwise({
		redirectTo:"/"
	})
});
gituser.constant('apiPath', 'https://api.github.com/');
