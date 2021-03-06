function HomeController($scope,$state,Auth,$cookies){
  var ctrl = this;
  ctrl.user;

  ctrl.logout = function(){
    Auth.logout().then(function(resp){
      $cookies.remove('user');
      ctrl.user = undefined;
      $state.go('home');
    },function(error){
      alert('Oops, something went wrong with logout');
    });
  }

  ctrl.setUser = function(currentUser){
    $cookies.putObject('user',currentUser);
    ctrl.user = $cookies.get('user');
  }

  var unbindLogin = $scope.$on('devise:login', function(event, currentUser) {
    ctrl.setUser(currentUser);
  });
  
  var unbindSession = $scope.$on('devise:new-session', function(event, currentUser) {
    ctrl.setUser(currentUser);
  }); 

  var unbindRegistration = $scope.$on('devise:new-registration', function(event, user) {
    ctrl.setUser(user);
  });

  $scope.$on('destroy', function(){
    unbindLogin();
    unbindSession();
    unbindRegistration();
  })
}

HomeController.$inject = ['$scope','$state','Auth','$cookies'];

angular
  .module('app')
  .controller('HomeController',HomeController);