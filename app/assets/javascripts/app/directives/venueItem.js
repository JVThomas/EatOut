//directive, not checked yet, will do tomorrow
function venueItem($rootScope){
  return{
    controllerAs:'venueCtrl',
    scope:{},
    templateUrl:'app/views/events/directives/venueItem.html',
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

angular
  .module('app')
  .directive('venueItem', venueItem);