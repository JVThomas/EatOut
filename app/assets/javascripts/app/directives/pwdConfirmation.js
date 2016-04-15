function pwdConfirmation(){
  return {
    require:"ngModel",
    scope:{
      password: "=pwdConfirmation"
    },
    link:function(scope, elem, attrs, ngModel){
      ngModel.$validators.pwdConfirmation = function(modelValue){
        return modelValue === scope.password;
      };
      scope.$watch("password", function(){
        ngModel.$validate();
      });
    }
  };
}

angular
  .module('app')
  .directive('pwdConfirmation',pwdConfirmation)