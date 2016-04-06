angular.module('starter.controllers', [])

.controller('SessionCtrl', function($scope, Sessions) {

  $scope.$on('$ionicView.enter', function(e) {
  Sessions.all()
    .then(function(sessions) {
      if ($scope.sessionList !== sessions) {
        $scope.sessionList = sessions;
      }


    })
});


})

.controller('FavsCtrl', function($scope, Sessions) {
  var bookmarkString;
  var bookmarks;
  var updateData = function() {

  }

  $scope.$on('$ionicView.enter', function(e) {
    updateData();
  });

  $scope.unbookmark = function(id) {

  }


})

.controller('SessionDetailCtrl', function($scope, $stateParams, Sessions) {

  $scope.isBookmark = function() {

  }
  var id = $stateParams.sessionId
  var detailSession = Sessions.get(id);
  $scope.session = detailSession;
  var bookmarkString;
  var bookmarks;
  var updateData = function() {

  };

  $scope.$on('$ionicView.enter', function(e) {
    updateData();
  });







  $scope.bookmark = function() {
    if (!bookmarks) {
      bookmarks = new Array();
    }
    if (bookmarks.indexOf(id) < 0) {
      bookmarks.push(id)
    }
    localStorage.bookmarks = bookmarks;
  }
  $scope.unbookmark = function() {
    if (!bookmarks) {
      bookmarks = new Array();
    }
    var idx = bookmarks.indexOf(id);
    if (idx >= 0) {
      bookmarks.splice(idx, 1);
    }
    localStorage.bookmarks = bookmarks;
  }


})



.controller('InfoCtrl', function($scope, Sessions) {

  $scope.update = function() {
    Sessions.update();
  };

});
