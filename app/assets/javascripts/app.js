angular
  .module('eatOut',['ui.router','Devise','templates', 'ngResource'])
  .config(function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl:'app/views/home.html'
      });
  });