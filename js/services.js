gituser.factory('commonServices', ['$q', '$http', 'apiPath', function($q, $http, apiPath) {
    function getAPI(pram) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: apiPath + pram
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(data) {
            deferred.reject(data);
        });
        return deferred.promise;
    }
    return {
        getAPI: getAPI
    };
}])
