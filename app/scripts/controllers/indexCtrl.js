'use strict';

angular.module('main')
.controller('indexCtrl', function ($scope, $state) {

  $scope.topimgs = [
    {imgurl : "http://oss.juyouhx.com/jysh_php/aa/bb/1445587815_629272707.jpg", url : "http://www.baidu.com"},
    {imgurl : "http://oss.juyouhx.com/jysh_php/aa/bb/1445570030_616713789.jpg", url : "http://www.163.com"}
  ];

  $scope.goviewlist = function(){


  	$state.go("viewlist");

  };

});
