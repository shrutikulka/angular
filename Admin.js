//var app = angular.module('myApp', []);
app.controller('Admin', function ($http) {
    var self = this;

    self.showbusSearch = function () {

        self.searchBus = !self.searchBus;
        self.showBusData = false;
        self.addBus = false;
        self.editBus = false;
        self.deleteBus = false;


    };

    self.showaddBus = function () {

        self.addBus = !self.addBus;
        self.showBusData = false;
        self.searchBus = false;
        self.deleteBus = false;
        self.editBus = false;
    };

    self.showeditBus = function () {

        self.editBus = !self.editBus;
        self.showBusData = false;
        self.searchBus = false;
        self.deleteBus = false;
        self.addBus = false;
    };

    self.showdeleteBus = function () {

        self.deleteBus = !self.deleteBus;
        self.showBusData = false;
        self.searchBus = false;
        self.editBus = false;
        self.addBus = false;
    };
    

    self.busdetails = function () {

        self.showBusData = !self.showBusData;
        self.searchBus = false;
        self.addBus = false;
        self.editBus = false;
        self.deleteBus = false;

        $http({
            method: 'GET',
            url: 'http://localhost:63039/api/admin/GetBusDetails'
        }).then(function successCallback(response) {
            self.busData = response.data;
            console.log(self.busData);
        }, function errorCallback(response) {

        });
    };


//app.controller('busSearchController', function ($http) {
  //  var self = this;
    self.busSearch = function () {

        $http({
            method: 'GET',
            url: 'http://localhost:63039/Api/Admin/FindBusById' + '?BusNumber=' + self.BusNumber
        }).then(function successCallback(response) {
            self.busSearchDatas = response.data;
        }, function errorCallback(response) {

        });
    };
//});

//app.controller('busEditController', function ($http) {
   // var self = this;

    self.busaddSubmit = function () {
        var self = this;
        var data = {
            'BusNumber': self.BusNumber,
            'BusName': self.BusName,
            'TotalSeats': self.TotalSeats,
            'CategoryID': self.CategoryID
        };

        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        $http.post('http://localhost:63039/Api/admin/AddBusDetails/', data, config)
        .success(function (data, status, headers, config) {
            self.PostDataResponse = data;
            alert("New record updated with busname:" + self.BusName);
        })
            .error(function (data, status, header, config) {
                ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };


    self.busEditSubmit = function (editObj) {
        var self = this;
        var data = {
            'BusNumber': editObj.BusNumber,
            'BusName': editObj.BusName,
            'TotalSeats': editObj.TotalSeats,
            'CategoryID': editObj.CategoryID

        };

        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        $http.put('http://localhost:63039/Api/Admin/PutEditBus/' + '?BusObject=', data, config)
        .success(function (data, status, headers, config) {
            self.PostDataResponse = data;
            alert("New record updated with busid:" + editObj.BusNumber);
        })
            .error(function (data, status, header, config) {
                ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };




    self.busDelete = function (b1) {
        console.log(b1);
        var self = this;
        $http({
            method: 'POST',
            url: 'http://localhost:63039/Api/Admin/DeleteBusDetails/'+b1
        }).then(function successCallback(response) {
            alert("Successfully Deleted of busid:" + self.BusNumber);
            self.busSearchData = response.data;
        }, function errorCallback(response) {
            alert("The bus is not exist of id:" + self.BusNumber);
        });
    }
//});

//app.controller('routeDetalisController', function ($http) {
  //  var self = this;
    self.routedetails = function () {

        $http({
            method: 'GET',
            url: 'http://localhost:63039/api/AdminRoute/GetRouteDetails'
        }).then(function successCallback(response) {
            self.routeData = response.data;
        }, function errorCallback(response) {

        });
    };
//});

//app.controller('routeSearchController', function ($http) {
    var self = this;
    self.routeSearch = function () {

        $http({
            method: 'GET',
            url: 'http://localhost:63039/api/AdminRoute/FindRouteById/' + '?RouteId=' + self.id
        }).then(function successCallback(response) {
            self.routeSearchData = response.data;
        }, function errorCallback(response) {

        });
    };
//});

//app.controller('routeAddEditDelController', function ($http) {
    var self = this;

    self.routeaddSubmit = function () {
        var self = this;
        var data = {
            'SourceRoute': self.SourceRoute,
            'DestinationRoute': self.DestinationRoute,
            'Distance': self.Distance,
            'Duration': self.Duration
        };

        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        $http.post('http://localhost:63039/api/AdminRoute/AddRoute/', data, config)
        .success(function (data, status, headers, config) {
            self.PostDataResponse = data;
            alert("Route is added with source:" + self.SourceRoute + "and destination:" + self.DestinationRoute);
        })
            .error(function (data, status, header, config) {
                ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };


    self.routeEditSubmit = function (route) {

        var self = this;

        console.log(route);

        var data = {
            'RouteId': route.RouteId,
            'SourceRoute': route.SourceRoute,
            'DestinationRoute': route.DestinationRoute,
            'Distance': route.Distance,
            'Duration': route.Duration

        };

        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        $http.put('http://localhost:63039/api/AdminRoute/PutEditRoute/' + '?BusObject=', data, config)
        .success(function (data, status, headers, config) {
            self.PostDataResponse = data;
            alert("Route is updated with routeid:" + route.RouteId);
        })
            .error(function (data, status, header, config) {
                ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };


    self.routeDelete = function () {
        var self = this;
        $http({
            method: 'POST',
            url: 'http://localhost:63039/api/AdminRoute/Delete' + '?RouteId=' + self.RouteId
        }).then(function successCallback(response) {
            alert("Route Successfully Deleted with routeid:" + self.RouteId);
            self.busSearchData = response.data;
        }, function errorCallback(response) {
            alert("This Route is not valid of Id:" + self.RouteId);

        });
    }
//});


//app.controller('userDetalisandDeleteController', function ($http) {
  //  var self = this;
    self.userdetails = function () {

        $http({
            method: 'GET',
            url: 'http://localhost:53144/api/AdminUser/Gettbl_UserDetails'
        }).then(function successCallback(response) {
            self.allUserDetails = response.data;
        }, function errorCallback(response) {

        });
    };

    self.userDelete = function () {
    //    var self = this;
        $http({
            method: 'DELETE',
            url: 'http://localhost:53144/api/AdminUser/Deletetbl_UserDetails/' + self.UserId
        }).then(function successCallback(response) {
            alert("Successfully Deleted with userid:" + self.UserId);
            self.busSearchData = response.data;
        }, function errorCallback(response) {
            alert("This User is not exist with id:" + self.UserId);

        });
    }

});









