function HomeController($scope,$state,Auth,$cookies){
  var ctrl = this;
  ctrl.user;

  ctrl.logout = function(){
    //debugger;
    Auth.logout().then(function(resp){
      //debugger;
      $cookies.remove('user');
      ctrl.user = undefined;
      $state.go('home');
    },function(error){
      //debugger;
    });
  }

  ctrl.setUser = function(currentUser){
    $cookies.putObject('user',currentUser);
    ctrl.user = $cookies.get('user');
  }

  $scope.$on('devise:login', function(event, currentUser) {
    ctrl.setUser(currentUser);
  });
  
  $scope.$on('devise:new-session', function(event, currentUser) {
    ctrl.setUser(currentUser)
  }); 

  $scope.$on('devise:new-registration', function(event, user) {
    ctrl.setUser(user);
  });


}

angular
  .module('app')
  .controller('HomeController',HomeController);