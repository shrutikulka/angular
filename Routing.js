var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider

    .when('/User', {

        templateUrl: '/AngularViews/User.html'
    })

    .when('/Admin', {

         templateUrl: '/AngularViews/Admin.html',
         controller: 'Admin'
     })

    .when('/searchBus', {

        templateUrl: '/AngularViews/searchBus.html',
        controller: 'busDetalisController'

    })

    .when('/BusDetails', {

        templateUrl: '/AngularViews/BusDetails.html',
        controller: 'busDetalisController'

    })

    .when('/BusCRUD', {

        templateUrl: '/AngularViews/BusCRUD.html',
        controller: 'Admin'
    
    })

    .when('/routeCRUD', {

            templateUrl: '/AngularViews/routeCRUD.html',
           controller: 'Admin'

       })


    .otherwise({
        redirectTo: '/Home'
    });
});
