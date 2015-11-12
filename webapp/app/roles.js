angular.module('amep')
  .run(['Permission', 'Session', '$q', function (Permission, Session, $q) {
    Permission
      .defineRole('prossumer', function (stateParams) {
        var deferred = $q.defer();
        Session.get(function (data) {

          if (data.id) {
            deferred.resolve(); // Session exists , we are logged in :)
          } else {
            deferred.reject();  // Error with request
          }
        }, function () {
          deferred.reject();  // Error with request
        });

        return deferred.promise;
      });
  }]);
