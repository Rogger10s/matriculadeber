var app=angular.module('aps',['ngResource']);

app.controller("contr", function($scope, list, list2, $window){
	$scope.mensaje="jdhdjshd";
	$scope.alum=list.get();
	$scope.mate=list2.get();
	$scope.di=function(){
		
		$window.location.href = 'confirmacion.html'
	}
	$scope.verificar=function(ced){
		
		for (var i = 0; i < $scope.alum.length; i++) {
			if(angular.equals(ced, $scope.alum[i].cedula)){
				alert("usted esta matriculado");
				$window.location.href = 'practica13.html'
			}
			else{
				alert("estudiante no existe");
				$window.location.href = 'practica13.html'
			}
		}		
	}

});
app.factory("list", function($resource){
	//$http es un servicio de http
	
	return $resource("http://127.0.0.1:8000/ws/alumnos/",{},{get:{method:"GET",isArray:true}});
});
app.factory("list2",function($resource){
	return $resource("http://127.0.0.1:8000/ws/materias/",{},{get:{method:"GET",isArray:true}});
});
