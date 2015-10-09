/**
 * Created by Deepak Papanna on 9/27/2015.
 */
angular.module("AddressBook",[])
    .service("contactService", function($http) {
        this.contacts = [];
        $http.get("http://localhost:9001/contacts", function(res) {
            console.log(res);
        });
    });