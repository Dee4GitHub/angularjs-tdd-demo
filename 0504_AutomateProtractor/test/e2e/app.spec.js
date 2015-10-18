/**
 * Created by Deepak Papanna on 10/14/2015.
 */
describe('end to end address tests', function(){
    it("should have contacts", function(done){
        browser.get("http://localhost:8080");
        element.all(by.repeater('contact in contacts'))
            .then(function(contacts){
                var first = contacts[0];
                var text = first.getText();
                //failing test
                //expect(text).toEqual('Edard E');
                //passing test
                expect(text).toEqual('Robert R');
                done();
            })
    })
})