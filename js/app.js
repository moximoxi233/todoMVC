(function (angular) {
	'use strict';
//创建一个主模块,用 app 来接受模块对象
	var app=angular.module(('MyTodoMvc'),[])
//注册 主要 控制器
	app.controller('MainController',['$scope',function ($scope) {
		//文本框模型
		$scope.text='';

		//任务列表
		$scope.tasktodos=[
			{id:1,task_text:'学习英语',task_completed:true},
			{id:2,task_text:'学习英语',task_completed:true},
			{id:3,task_text:'学习数学',task_completed:false},
			{id:4,task_text:'学习jsonp',task_completed:false},
			{id:5,task_text:'学习php',task_completed:false},
		];

		//添加todos
		$scope.add=function () {
			if($scope.text){
				$scope.tasktodos.push({
					id:Math.random(),
					task_text:$scope.text,
					task_completed:false
				})
				$scope.text='';
			}

		}

		//删除 todo
		$scope.delete=function (id) {
			for(var i=0;i<$scope.tasktodos.length;i++){
				if($scope.tasktodos[i].id===id){
					$scope.tasktodos.splice(i,1)
					break
				}
			}
		}

		//清楚全部完成的任务
		$scope.clear=function () {
			var todos=[]
			for(var i=0;i<$scope.tasktodos.length;i++){
				if(!$scope.tasktodos[i].task_completed){
					//未完成的任务
					todos.push($scope.tasktodos[i])
				}
			}
			$scope.tasktodos=todos

		}

		//是否有已经完成的
		$scope.existComplate=function () {
			var flag=false
			for(var i=0;i<$scope.tasktodos.length;i++){
				if($scope.tasktodos[i].task_completed){
					flag=true
					break
				}
			}
			return flag
		}

		//编辑
		$scope.currentEditId=-1;
		$scope.edit=function (id) {
			$scope.currentEditId=id;
		}
		$scope.save=function (txt) {
			if($scope.text){
				$scope.currentEditId=-1;
			}
		}

		//全选
		$scope.checkall=true;
		$scope.toggleAll=function () {
			for(var i=0;i<$scope.tasktodos.length;i++){
				$scope.tasktodos[i].task_completed=$scope.checkall
			}
			$scope.checkall!=$scope.checkall
		}

	}])
})(angular);
