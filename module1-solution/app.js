(function() {
    'use strict';

    angular.module("LunchCheck", [])
    .controller('LunchCheckController', LunchCheckController);
     
    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
         $scope.message = "";
         $scope.dishes = "";

         $scope.displayMessage = function () {
            
             if ($scope.dishes == "") {
                 $scope.message = "Please enter data first ";
                 document.getElementById('txt_msg').style.color = "#ff0000";
                 document.getElementById('txt_msg').style.border = "thick solid #f88379";
                 return;
             }

             var total = countDishes($scope.dishes);

             if (total<=3) {
                $scope.message = "Enjoy!";
                document.getElementById('txt_msg').style.color = "#008000";
                document.getElementById('txt_msg').style.border = "thick solid #f88379";
             }

             else {
                $scope.message = "Too much!";
                document.getElementById('txt_msg').style.color = "#008000";
                document.getElementById('txt_msg').style.border = "thick solid #f88379";
             }

         };

         function countDishes(items) {
             var count = items.split(',').length;
             return count;
         };
    };
}) ();