gituser.controller('listctrl', function($scope, $http, commonServices) {
    var usersdata = commonServices.getAPI('users');
    usersdata.then(function successCallback(response) {
        $scope.users = response;
    }, function errorCallback(response) {
        alert('Something is wrong :(');
    });

});
gituser.controller('teamDetailctrl', function($scope, $http, $routeParams, commonServices) {
    var curuser = commonServices.getAPI('users/'+$routeParams.username);
    curuser.then(function successCallback(response) {
        $scope.user = response;
    }, function errorCallback(response) {
        alert('Something is wrong :(');
    });
});
