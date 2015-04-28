angular.module('testModule', ['ui.bootstrap', 'selectionModel', 'ngFileUpload', 'flow']).config(['flowFactoryProvider', function (flowFactoryProvider) {
	flowFactoryProvider.defaults = {
		target: 'upload.php',
		permanentErrors: [404, 500, 501],
		maxChunkRetries: 1,
		chunkRetryInterval: 5000,
		simultaneousUploads: 4
	};
	flowFactoryProvider.on('catchAll', function (event) {
		console.log('catchAll', arguments);
	});
}]);


angular.module('testModule').controller('alertController', function ($scope, $http, $window, Upload) {

	$scope.$watch('files', function() {
		$scope.upload($scope.files);
	});
	$scope.log = '';

	$scope.upload = function (files) {
		if (files && files.length) {
		    for (var i = 0; i < files.length; i++) {
			var file = files[i];
			Upload.upload({
			    url: 'upload/url',
			    file: file
			}).progress(function (evt) {
			    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
			    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
			}).success(function (data, status, headers, config) {
			    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
			});
		    }
		}
	};

	$scope.alerts = [
		{ type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' }
	];

	$scope.addAlert = function() {
		$scope.alerts.push({msg: 'Another alert!'});
	};

	$scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	};

	$scope.insertRandom = function() {
		$http.get("http://10.9.8.106:8080/angular_bootstrap_insertRandom.php")
	};

	$scope.loadDB = function() {
		$http.get("http://10.9.8.106:8080/angular_bootstrap_loadDB.php")
		.success(function (response) {
			$scope.items = response;
		});
	};

	$scope.bag = [
		{label: 'Test1', selected: false},
		{label: 'Test2', selected: false},
		{label: 'Test3', selected: false},
		{label: 'Test4', selected: true}
	];

	$scope.tabs = [
		{ title:'Title 1', content:'Content 1' },
		{ title:'Title 2', content:'Content 2', disabled: true }
	];

	$scope.alertMe = function() {
		setTimeout(function() {
			$window.alert('You\'ve selected the alert tab!');
		});
	};


	$scope.selectedTab = "";
	$scope.onTabSelect = function(tabName) {
		$scope.selectedTab = tabName
	};
	$scope.actOnTab = function() {
		//$window.alert($scope.selectedTab.stringify());
		$window.alert(JSON.stringify($scope.selectedTab));
	};

	$scope.imgToBase64 = function() {
		return "asdf";
	};
		

});
