'use strict';

console.log('here');

angular.module('contextcommentsApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('comment', {
        url: '/comment',
        views: {

          '':{
            templateUrl: 'app/article/comment/comment.html',
            controller: function() {}
      },
          'commentEntry@comment': { 
            templateUrl: 'app/article/comment/commentEntry/comment.html',
            controller: 'CommentEntryCtrl'
          }
        },
        // templateUrl: 'app/article/article.html',
      })
  })
  .controller('CommentBoxCtrl', function ($scope, $http) {
    $scope.entries = [{name : 'Dave', value: 'a'},{name : 'Dave2', value: 'a2'}
    ];
  });
