var app = angular.module("myApp", []);

app.controller("MainController", function ($scope) {
  $scope.users = [
    {
      id:1,
      Price: "22.50",
    },
    {
        id:2,
      Price: "15.00",
    },
    {
        id:3,
      Price: "123.82",
    },
    {
        id:3,
      Price: "123.75",
    },
  ];

  $scope.modalTitle = "Edit Product";
  $scope.formData = {};

  $scope.openModal = function (mode, user) {
    if (mode === "add") {
      $scope.modalTitle = "Edit Product";
      $scope.formData = {};
    } else if (mode === "edit") {
      $scope.modalTitle = "Chỉnh sửa người dùng";
      $scope.formData = angular.copy(user);
    }

    $("#myModal").modal("show");
  };

  $scope.submitUser = function () {
    if ($scope.formData.id) {
      var index = $scope.users.findIndex((u) => u.id === $scope.formData.id);
      if (index !== -1) {
        $scope.users[index] = angular.copy($scope.formData);
      }
    } else {
      $scope.formData.id = $scope.users.length + 1;
      $scope.users.push(angular.copy($scope.formData));
    }

    $("#myModal").modal("hide");
    $scope.formData = {};
  };

  $scope.deleteUser = function (user) {
    var index = $scope.users.indexOf(user);
    if (index !== -1) {
      $scope.users.splice(index, 1);
    }
  };
});

