function AuthController($scope,$state,Auth){
  $scope.login = function() {
    debugger;
    var credentials = {
      email: $scope.user.email,
      password: $scope.user.password
    }
    Auth.login(credentials).then(function(){
      debugger;
      $state.go('home');
    }, function(error){
      debugger;
      alert(error.statusText);
    });
  };

  $scope.register = function() {
    debugger;
    var credentials = {
      username: $scope.user.username,
      email: $scope.user.email,
      password: $scope.user.password,
      password_confirmation: $scope.user.passwordConfirmation
    }
    debugger;
    Auth.register(credentials).then(function(){
      debugger;
      $state.go('home');
    },function(error){
      alert(error.statusText);
    });
  };
}

angular
  .module('app')
  .controller("AuthController",AuthController);