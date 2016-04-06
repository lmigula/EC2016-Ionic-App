angular.module('starter.services', [])

.factory('Sessions', function(dataService, $q) {
    // Might use a resource here that returns a JSON array

    var sessionsList = localStorage.allSessions;
    var all = function() {
      var deferred = $q.defer();
      if (!sessionsList) {
        dataService.fetchData().then(
          function(response) {
            sessionsList = response;
            localStorage.allSessions = JSON.stringify(sessionsList);
            deferred.resolve(sessionsList);
          }
        );

      } else {
        if(typeof sessionsList =='string')  {
            sessionsList = JSON.parse(sessionsList);
        }
        deferred.resolve(sessionsList);
      }
      return deferred.promise;
    };

    var update = function(){
      dataService.fetchData().then(
        function(response) {
          sessionsList = response;
          localStorage.allSessions = JSON.stringify(sessionsList);
        }
      );
    };

    var get = function(sessionId) {
      if(!sessionsList){
        sessionsList = localStorage.allSessions;
      }

      if (sessionsList) {
        var list;
        if (typeof sessionsList == 'string') {
          list = JSON.parse(sessionsList);
        } else {
          list = sessionsList;
        }
        if (typeof list == String) {
          list = JSON.parse(sessionsList);
        }
        for (var i = 0; i < list.length; i++) {
          if (list[i].id === sessionId) {
            return list[i];
          }
        }
        return null;
      }
    };

    var getFavs = function(bookmarks) {
      if(!sessionsList){
        sessionsList = localStorage.allSessions;
      }
      var result = new Array();
      if (sessionsList && bookmarks) {
        var list;
        if (typeof sessionsList == 'string') {
          list = JSON.parse(sessionsList);
        } else {
          list = sessionsList;
        }
        for (var i = 0; i < list.length; i++) {
          if (bookmarks.indexOf(list[i].id) >= 0) {
            result.push(list[i]);
          }
        }
        return result;
      }

    };

    return {
      all: all,
      get: get,
      getFavs:getFavs,
      update: update
    };
  })
  .service("dataService", function($q, $http) {
    var fetchData = function() {
      var deferred = $q.defer();
      var url = "https://63b0cefa-300d-40da-8a7b-34dd659fd927-bluemix.cloudant.com/ec2016/_all_docs?include_docs=true" ;
      $http({
        method: 'GET',
        url: url
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        deferred.resolve(response.data.rows);
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
      return deferred.promise;
    }

    return {
      fetchData: fetchData
    };
  })

;
