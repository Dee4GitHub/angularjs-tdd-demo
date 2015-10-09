/**
 * Created by Deepak Papanna on 9/27/2015.
 */
angular.module("AddressBook",[])
    .service("contactService", function($http) {
        this.contacts = [];
        var contactService = this;
        $http.get("http://localhost:9001/contacts")
            .then(function(res) {
                console.log(res);
                while(res.data[0]){
                    contactService.contacts.push(res.data.pop());
                }
            });
    })
    .controller("contactController", function(contactService, $scope){
    $scope.contacts = contactService.contacts;
});