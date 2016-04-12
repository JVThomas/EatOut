function HomeController($scope,$state,Auth){
  var ctrl = this;
  ctrl.user;
  if (Auth.isAuthenticated()){
    debugger;
    Auth.currentUser.then(function(user){
      ctrl.user = user;
    });
  }

  ctrl.logout = function(){
    debugger;
    Auth.logout().then(function(resp){
      delete ctrl.user;
      debugger;
      $state.go('home');
    });
  }

  $scope.$on('devise:login', function(event, currentUser) {
    ctrl.user = currentUser;
    debugger;
  }); 
}

angular
  .module('app')
  .controller('HomeController',HomeController);