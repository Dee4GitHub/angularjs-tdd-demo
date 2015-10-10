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

    //controller tests
    describe("the contact controller", function(){
        beforeEach(function(){
            module('AddressBook');
            inject(function($injector, $rootScope){
                $scope = $rootScope.$new();
                contactService = $injector.get("contactService");
                $httpBackend = $injector.get("$httpBackend");
                $controller=$injector.get("$controller");
            });
        });

        it("should store an array of contacts in scope", function(){
            $controller("contactController",{$scope:$scope, contactService:contactService});
           assert.isArray($scope.contacts);
        });
    });

    //filter tests
    describe("the proper filter", function(){
        beforeEach(function(){
            module('AddressBook');
            inject(function($injector){
                proper = $injector.get("$filter")("proper");
            });
        });

        //test - strings
        it("should proper case a string",function(){
            expect(proper("ned stark")).to.equal("Ned Stark");
            ////failing test as it should
            //expect(proper("cerci lanester")).to.equal("Jamie Lanester");
            //falling test above corrected to pass
            expect(proper("cerci lanester")).to.equal("Cerci Lanester");
        });

        //test - number
        it("should take a number", function(){
            expect(proper(42)).to.equal("42");
        });

        it("should throw an error on an incompatible type",function(){
            assert.throws(function(){
                //expected to throw an error as per the filter handling
                proper(undefined);

                //output on the browser will throw an error when string is passed directly
                //in order for this error to show, you would need to comment the "proper(undefined);" line above
                //and uncomment the line below
               //proper("Hello");
            })
        })
    })
});



