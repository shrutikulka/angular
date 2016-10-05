//var app = angular.module('myApp', []);
app.controller('busDetalisController', function ($http) {
    var self = this;



    self.busdetails = function () {

        $http({
            method: 'GET',
            url: 'http://localhost:63039/api/User/Index'
        }).then(function successCallback(response) {
            self.busData = response.data;
            console.log(self.busData);
        }, function errorCallback(response) {

        });
    };

    self.busdetails();

    $http({
        method: 'GET',
        url: 'http://localhost:63039/api/User/GetCategory'
    }).then(function successCallback(response) {
        self.busCategory = response.data;
        console.log(self.busCategory);
    }, function errorCallback(response) {

    });


    $http({
        method: 'GET',
        url: 'http://localhost:63039/api/User/GetSource'
    }).then(function successCallback(response) {

        self.busSource = response.data;
        console.log(self.busSource);
    }, function errorCallback(response) {

    });



    $http({
        method: 'GET',
        url: 'http://localhost:63039/api/User/GetDestination'
    }).then(function successCallback(response) {
        self.busDestination = response.data;
        console.log(self.busDestination);
    }, function errorCallback(response) {

    });


    //self.bussearch = function () {
    //    var self = this;
    //    var model = {
    //        Category: self.Category,
    //        Source: self.Source,
    //        Destination: self.Destination,
    //        DateValue: self.DateValue
    //    };
    //        $http({
    //            url: "http://localhost:63039/api/User/SearchBySourceandDestination/",
    //            dataType: 'json',
    //            method: 'POST',
    //            data: JSON.stringify(model),
    //            headers: {
    //                "Content-Type": "application/json"
    //            }
    //        }).success(function (response) {
    //            self.value = response;
    //        })
    //           .error(function (error) {
    //               alert(error);
    //           });
    //    }



    self.bussearch = function () {
        var self = this;
        var datas = {
            'Category': self.Category,
            'Source': self.Source,
            'Destination': self.Destination,
            'DateValue': self.DateValue
        };

        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        $http.post('http://localhost:63039/api/User/SearchBySourceandDestination/', datas, config)
        .success(function (data, status, headers, config) {
            self.PostDataResponse = data[0];
        })
            .error(function (data, status, header, config) {
                ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config;
            });
    };




});