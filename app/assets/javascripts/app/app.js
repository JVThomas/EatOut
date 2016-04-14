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
            $state.go('.events');
          });
        }]
      })
      .state('home.register',{
        url: 'register',
        templateUrl: 'app/views/auth/register.html',
        controller:'AuthController as auth',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('^.events');
          });
        }]
      })
      .state('home.login',{
        url: 'login',
        templateUrl: 'app/views/auth/login.html',
        controller:'AuthController as auth',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('^.events');
          });
        }]
      })
      .state('home.events',{
        url:'events',
        templateUrl:'app/views/events/main.html',
        controller: 'EventController as event',
        resolve:{
          authenticate: authenticate
        }
      }) 
      .state('home.createEvent',{
        url:'newevent',
        templateUrl:'app/views/events/new.html',
        controller: 'EventController as event',
        resolve:{
          authenticate: authenticate
        }
      }); //end of states
      
      //Authenticate method to prevent template load with unauthorized access
      //Idea is to use $q's promise control to control redirects
      //by adding this to a state's resolve, I can perform a redirect if auth fails
     
      function authenticate($q, $state, $timeout, $cookies) {
        if($cookies.get('user') !== undefined){
          return $q.when();
        }
        else{
          $timeout(function(){
            $state.go('home');
          });
          $q.reject;
        }        
      }      
      $urlRouterProvider.otherwise('/');
  });