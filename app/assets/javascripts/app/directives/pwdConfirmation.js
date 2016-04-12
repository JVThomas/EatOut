function pwdConfirmation(){
  return {
    require:"ngModel",
    scope:{
      password: "=pwdConfirmation"
    },
    link:function(scope, elem, attrs, ngModel){
      ngModel.$validators.pwdConfirmation = function(modelValue){
        debugger;
        return modelValue === scope.password;
      };
      scope.$watch("password", function(){
        debugger;
        ngModel.$validate();
      });
    }
  };
}

angular
  .module('app')
  .directive('pwdConfirmation',pwdConfirmation)