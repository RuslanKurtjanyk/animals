app.controller("FooterController", function FooterController($scope, $rootScope) {

    $scope.dialogWindow = angular.element(document.querySelector('#modal-window'));

    $scope.openHelp = function() {
        $rootScope.message = "Need help?";
        document.getElementById('modal-window').show();
    }
});