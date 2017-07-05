

        

            app.controller('dialogController', dialogController);

         function dialogController ($scope, $mdDialog) {
            $scope.status = '';
			$scope.items = [1,2,3,4,5];
            $scope.showAlert = function(ev) {
               $mdDialog.show(
                  $mdDialog.alert()
                     .parent(angular.element(document.querySelector('#dialogContainer')))
                     .clickOutsideToClose(true)
                     .title('TutorialsPoint.com')
                     .textContent('Welcome to TutorialsPoint.com')
                     .ariaLabel('Welcome to TutorialsPoint.com')
                     .ok('Ok!')
                     .targetEvent(ev)
               );
            };
			
			
            $scope.showConfirm = function(event) {
               var confirm = $mdDialog.confirm()
                  .title('Are you sure to delete the record?')
                  .textContent('Record will be deleted permanently.')
                  .ariaLabel('TutorialsPoint.com')
                  .targetEvent(event)
                  .ok('Yes')
                  .cancel('No');
                  $mdDialog.show(confirm).then(function() {
                     $scope.status = 'Record deleted successfully!';
                     }, function() {
                        $scope.status = 'You decided to keep your record.';
                  });
            };
			
            $scope.showCustom = function(event) {
               $mdDialog.show({
                  clickOutsideToClose: true,
                  scope: $scope,        
                  preserveScope: true,           
            
                  templateUrl: "../home/index",
                  controller: function DialogController($scope, $mdDialog) {
                     $scope.closeDialog = function() {
                        $mdDialog.hide();
                     }
                  }
               });
            };
         }                 
    