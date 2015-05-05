'use strict';

console.log('here');

angular.module('contextcommentsApp')
  .controller('CommentBoxCtrl', function ($scope, $http) {
    $scope.boxes = [
      {
        name: 'Comment Box 1', 
        value: 'A', 
        entries: [
          {user: 'John', comment: 'Hello, World!'}, 
          {user: 'Jane', comment: 'Hello, John!'}
        ]
      },
      {
        name: 'Comment Box 2', 
        value: 'B',
        entries: [
          {user: 'John', comment: 'Jane you are not the world.'}, 
          {user: 'Jane', comment: 'How do you know?'}
        ]
      }
    ];
  });
