angular.module('amep-products').
controller('createProductController', ['$scope', 'Session', '$mdDialog','Prossumer','$mdToast', 'productCategories','prossumerId','Upload', function ($scope, Session, $mdDialog,Prossumer,$mdToast,productCategories,prossumerId,Upload) {
  $scope.productCategories = productCategories;
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();

  };
  $scope.ok = function(file) {
    var data = angular  .copy($scope.product);
    data.file = file;
    console.log(data);

    file.upload = Upload.upload({
      url: 'api/v1/prossumers/'+prossumerId+'/products/',
      data: data,
    }).then(function(product){
      $mdToast.show(product.title + ' adicionado aos meus produtos');
      $mdDialog.hide();
    })
    /*Prossumer.Product.save({prossumerId: prossumerId},$scope.product,function(product){
    });*/
  };
}]);
