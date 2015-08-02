var apollo13App = angular.module('apollo13App', ['ngRoute']);

apollo13App.config(function ($routeProvider) {
    $routeProvider
    .when("/events",  { 
        controller: "EventListController", 
        templateUrl: "app/partials/events.html" })

    .when("/event/:event_name",  { 
        controller: "EventViewController", 
        templateUrl: "app/partials/event.html" })

    .when("/",  { redirectTo: "/events" })
    .otherwise({ redirectTo: "/404_page" });
});







