const chai = require('chai')
,  chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;




describe('Customer API tests', function() {
    describe('GET /customer', function() {
        it('should return all customer data', function(done) {
           chai.request('http://localhost:8080/api/v1')
           .get('/customers')
              .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
             
                done();
              }) 
        })
    })
})