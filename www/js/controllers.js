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
    bookmarkString = localStorage.bookmarks;
    if (bookmarkString) {
      bookmarks = bookmarkString.split(',')
    }
    var favList = Sessions.getFavs(bookmarks);
    $scope.favList = favList;
  }

  $scope.$on('$ionicView.enter', function(e) {
    updateData();
  });

  $scope.unbookmark = function(id) {
    if (bookmarks) {
      var idx = bookmarks.indexOf(id);
      if (idx >= 0) {
        bookmarks.splice(idx, 1);
      }
      localStorage.bookmarks = bookmarks;
      updateData();
    }
  }


})

.controller('SessionDetailCtrl', function($scope, $stateParams, Sessions) {

  $scope.isBookmark = function() {
    var result = false
    if (bookmarks) {
      result = bookmarks.indexOf(id) >= 0;
    }
    return result;
  }
  var id = $stateParams.sessionId
  var detailSession = Sessions.get(id);
  $scope.session = detailSession;
  var bookmarkString;
  var bookmarks;
  var updateData = function() {
    bookmarkString = localStorage.bookmarks;
    if (bookmarkString) {
      bookmarks = bookmarkString.split(',')
    }
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
