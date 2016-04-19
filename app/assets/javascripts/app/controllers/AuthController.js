function AuthController($scope,$state,Auth){
  $scope.login = function() {
    var credentials = {
      email: $scope.user.email,
      password: $scope.user.password
    }
    Auth.login(credentials).then(function(){
      $state.go('^.main');
    }, function(error){
      alert("Access: " + error.statusText);
    });
  };

  $scope.register = function() {
    var credentials = {
      username: $scope.user.username,
      email: $scope.user.email,
      password: $scope.user.password,
      password_confirmation: $scope.user.passwordConfirmation
    }
    Auth.register(credentials).then(function(resp){
      $state.go('^.main');
    },function(error){
      alert(error.statusText);
    });
  };
}

angular
  .module('app')
  .controller("AuthController",AuthController);