function venueItem($rootScope){
  return{
    controllerAs:'venueCtrl',
    scope:{},
    templateUrl:'events/directives/venueItem.html',
    bindToController:{
      venue: '=venueItem'
    },
    controller:function($rootScope){
      var ctrl = this;
      this.selectVenue = function(){
        $rootScope.$broadcast('selectVenue', ctrl.venue);
      }
    }
  }
}

venueItem.$inject = ['$rootScope'];

angular
  .module('app')
  .directive('venueItem', venueItem);