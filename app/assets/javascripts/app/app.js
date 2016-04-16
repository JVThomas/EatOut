angular
  .module('app',['ui.router','Devise','templates', 'ngResource', 'ngCookies', 'ngMessages'])
  .config(function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl:'app/views/home.html',
        controller:'HomeController as home',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('.main');
          });
        }]
      })
      .state('home.register',{
        url: 'register',
        templateUrl: 'app/views/auth/register.html',
        controller:'AuthController as auth',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('^.main');
          });
        }]
      })
      .state('home.login',{
        url: 'login',
        templateUrl: 'app/views/auth/login.html',
        controller:'AuthController as auth',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('^.main');
          });
        }]
      })
      .state('home.main',{
        url:'main',
        templateUrl:'app/views/events/main.html',
        controller: 'EventController as event',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
          }, function(error){
            $state.go('^home');
          });
        }]
      }) 
      .state('home.newEvent',{
        url:'newevent',
        templateUrl:'app/views/events/event.html',
        controller: 'EventController as event',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
          }, function(error){
            $state.go('^home');
          });
        }]
      })
      .state('home.events',{
        url:'events',
        templateUrl:'app/views/events/index.html',
        controller: 'EventIndexController as events',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
          }, function(error){
            $state.go('^home');
          });
        }],
        resolve:{
          userEvents:['EventService','$cookies', function (EventService, $cookies){
            return EventService.getEvents(JSON.parse($cookies.get('user')).id);
          }]
        }
      }); 
      //.state('home.eventShow',{
      //  url:'eventShow',
      //  templateUrl:'app/views/events/show.html',
      //  controller: 'EventController as event',
      //  params:{
      //    obj: null;
      //  }
      //  resolve:{
      //    authenticate: authenticate
      //  }
      //}); //end of states
     
        
      $urlRouterProvider.otherwise('/');
  });