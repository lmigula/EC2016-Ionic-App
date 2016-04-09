// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
            //

        });
    })
    .config(function ($ionicConfigProvider) {
        $ionicConfigProvider.tabs.position('bottom');
    })
    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
        // setup an abstract state for the tabs directive
            .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'templates/tabs.html'
        })

        // Each tab has its own nav history stack:
        .state('tab.sessions', {
                url: '/sessions',
                views: {
                    'tab-sessions': {
                        templateUrl: 'templates/tab-sessions.html',
                        controller: 'SessionCtrl'
                    }
                }
            })
            .state('tab.sessions-detail', {
                url: '/sessions/:sessionId',
                views: {
                    'tab-sessions': {
                        templateUrl: 'templates/session-detail.html',
                        controller: 'SessionDetailCtrl'
                    }
                }
            })
            .state('tab.favs', {
                url: '/favs',
                views: {
                    'tab-favs': {
                        templateUrl: 'templates/tab-favs.html',
                        controller: 'FavsCtrl'
                    }
                }
            })
            .state('tab.info', {
                url: '/info',
                views: {
                    'tab-info': {
                        templateUrl: 'templates/tab-info.html',
                        controller: 'InfoCtrl'
                    }
                }
            });
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/sessions');
    })
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|file|mailto|local|sms|tel):/);
}])
    .filter('timeFilter', function () {
        return function (input) {
            switch (input) {
            case 1:
                return "11.03.2016 14:00 - 15:30"
                break;
            case 2:
                return "11.03.2016 16:00 - 17:30"
                break;
            case 3:
                return "12.03.2016 09:00 - 10:30"
                break;
            case 4:
                return "12.03.2016 11:00 - 12:30"
                break;
            case 5:
                return "12.03.2016 14:00 - 15:30"
                break;
            case 6:
                return "12.03.2016 16:00 - 17:30"
                break;
            case 7:
                return "13.03.2016 09:00 - 10:30"
                break;
            case 8:
                return "13.03.2016 11:00 - 12:30"
                break;
            default:

            }


        }
    });