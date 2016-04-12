angular
  .module('app',['ui.router','Devise','templates', 'ngResource', 'ngCookies', 'ngMessages'])
  .config(function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl:'app/views/home.html',
        controller:'HomeController as home',
      })
      .state('home.register',{
        url: 'register',
        templateUrl: 'app/views/auth/register.html',
        controller:'AuthController as auth',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
          });
        }]
      })
      .state('home.login',{
        url: 'login',
        templateUrl: 'app/views/auth/login.html',
        controller:'AuthController as auth',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
          });
        }]
      });
      $urlRouterProvider.otherwise('/');
  });