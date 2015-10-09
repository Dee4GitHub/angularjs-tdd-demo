/**
 * Created by Deepak Papanna on 08/10/2015.
 */
describe("The Address Book App", function() {
    var assert = chai.assert;
    var expect = chai.expect;
    describe("the Contact Service", function() {
        beforeEach(function(){
            module('AddressBook');
            inject(function($injector) {
                contactService = $injector.get("contactService");
                $httpBackend = $injector.get("$httpBackend");
            });
        });
        it("Should have a property contacts, an array", function() {

            ////failing Test
            //expect(contactService.contacts).to.be.an('number');

            //passing Test
            expect(contactService.contacts).to.be.an('array');
        });
        it("Should call the Backend", function(){
            $httpBackend.expectGET("http://localhost:9001/contacts")
                .respond(200,[]);
            $httpBackend.flush();
        });
    });
});