function AuthController($state,Auth){
  var ctrl = this;
  
  ctrl.login = function() {
    var credentials = {
      email: ctrl.user.email,
      password: ctrl.user.password
    }
    Auth.login(credentials).then(function(){
      $state.go('home.main');
    }, function(error){
      alert("Access: " + error.statusText);
    });
  };

  ctrl.register = function() {
    var credentials = {
      username: ctrl.user.username,
      email: ctrl.user.email,
      password: ctrl.user.password,
      password_confirmation: ctrl.user.passwordConfirmation
    }
    Auth.register(credentials).then(function(resp){
      $state.go('home.main');
    },function(error){
      alert(error.statusText);
    });
  };
}

angular
  .module('app')
  .controller("AuthController",AuthController);