angular
  .module('app',['ui.router','Devise','templates', 'ngResource', 'ngCookies', 'ngMessages'])
  .config(function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl:'home.html',
        controller:'HomeController as home',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('.main');
          });
        }]
      })
      .state('home.register',{
        url: 'register',
        templateUrl: 'auth/register.html',
        controller:'AuthController as auth',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('^.main');
          });
        }]
      })
      .state('home.login',{
        url: 'login',
        templateUrl: 'auth/login.html',
        controller:'AuthController as auth',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('^.main');
          });
        }]
      })
      .state('home.main',{
        url:'main',
        templateUrl:'events/main.html',
        controller: 'EventController as event',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
          }, function(error){
            $state.go('^');
          });
        }]
      }) 
      .state('home.newEvent',{
        url:'newevent',
        templateUrl:'events/newEvent.html',
        controller: 'EventController as event',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
          }, function(error){
            $state.go('^');
          });
        }]
      })
      .state('home.events',{
        url:'events',
        templateUrl:'events/index.html',
        controller: 'EventIndexController as events',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
          }, function(error){
            $state.go('^');
          });
        }],
        resolve:{
          userEvents:['EventFactory','$cookies', function (EventFactory, $cookies){
            return EventFactory.query({user_id: JSON.parse($cookies.get('user')).id});
          }]
        }
      }) 
      .state('home.showEvent',{
        url:'events/:index',
        templateUrl:'events/show.html',
        controller: 'EventShowController as eventShow',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
          }, function(error){
            $state.go('^');
          });
        }]
      })
      .state('home.editEvent',{
        url:'events/:index/edit',
        templateUrl:'events/editEvent.html',
        controller: 'EventController as event',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
          }, function(error){
            $state.go('^');
          });
        }]
      }); //end of states     
        
      $urlRouterProvider.otherwise('/');
  })
  .run(function($rootScope, $location){

    $rootScope.$on('$stateChangeStart', 
      function (event, toState, toParams){
        console.log(toParams)
      });
});
