/**
 * Created by Deepak Papanna on 08/10/2015.
 */
describe("The Address Book App", function() {
    var assert = chai.assert;
    var expect = chai.expect;
    describe("the Contact Service", function() {
        it("Should have contacts, an array", function() {
            module('AddressBook');
            inject(function($injector) {
                contactService = $injector.get("contactService");
                ////failing Test
                //expect(contactService.contacts).to.be.an('number');
                //passing Test
                expect(contactService.contacts).to.be.an('array');
            });
        });
    });
});