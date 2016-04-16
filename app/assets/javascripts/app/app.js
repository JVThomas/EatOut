angular
  .module('app',['ui.router','Devise','templates', 'ngResource', 'ngCookies', 'ngMessages'])
  .config(function($stateProvider,$urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl:'app/views/home.html',
        controller:'HomeController as home',
        onEnter: ['$state', 'Auth', function($state, Auth) { //too slow, loads template before switch, check $cookies
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
        resolve:{
          authenticate: authenticate
        }
      }) 
      .state('home.newEvent',{
        url:'newevent',
        templateUrl:'app/views/events/event.html',
        controller: 'EventController as event',
        resolve:{
          authenticate: authenticate
        }
      })
      .state('home.events',{
        url:'events',
        templateUrl:'app/views/events/index.html',
        controller: 'EventIndexController as events',
        onEnter:['$cookies', function($cookies){
          if(JSON.parse($cookies.get('user')).id === undefined){
            $state.go('^home');
          }
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