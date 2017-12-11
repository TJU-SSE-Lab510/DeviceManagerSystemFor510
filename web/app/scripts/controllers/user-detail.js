'use strict';

labsystem.controller('UserDetailCtrl',
      ['$scope', 'BackSrv','NoticeSrv', '$uibModal','$state','TokenSrv','$stateParams','BorrowSrv','UseSrv',
    function($scope,BackSrv,NoticeSrv, $uibModal, $state,TokenSr,$stateParams,BorrowSrv,UseSrv)
    {

      $scope.user ={
        name: "杜盛禹",
        url: "http://100.64.208.218:82/user/default.png",
        phone: "13601643669",
        email: "Qweqwe@qq.com",
        studentNumber: "179xxxx"
      };

      /*
       获取用户id
       */
      var userId = {
        id : $stateParams.id
      };

      /**
       * @description:　获取记录
       * @param:
       * @return:
       */
      var getBorrowRecord = function () {
        BorrowSrv.getRecord().get()
          .$promise.then(function(response){
          if(response.errCode === 0){
            $scope.borrowCollection = response.data;
          }
        },function (response) {
          NoticeSrv.error("获取记录列表错误,http状态码:"+response.status);
        });

      };

      getBorrowRecord();

      var getUseRecord = function () {
        UseSrv.getRecord().get()
          .$promise.then(function(response){
          if(response.errCode === 0){
            $scope.useCollection = response.data;
          }
        },function (response) {
          NoticeSrv.error("获取记录列表错误,http状态码:"+response.status);
        });

      };

      getUseRecord();


      /**
       *@description:　获取用户
       *@param:
       *@return:
       */
      var getUser = function () {

        // BackSrv.getUserById().get(userId)
        //   .$promise.then(function(response){
        //   if(response.errCode === 0){
        //     $scope.user = response.data;
        //   }
        // },function (response) {
        //   NoticeSrv.error("获取用户错误,http状态码:"+response.status);
        // });

      };

      getUser();


    }
    ]);
