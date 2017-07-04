app.controller('control', bottomSheetController);

      

function bottomSheetController($scope, $mdBottomSheet) {
    $scope.openBottomSheet = function () {
        $mdBottomSheet.show({
            template: '<md-bottom-sheet>Learn <b>Angular Material</b> @ TutorialsPoint.com!</md-bottom-sheet>'
        });
    };
}