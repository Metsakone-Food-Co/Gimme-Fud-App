const chai = require('chai')
,  chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;




describe('Courses API tests', function() {
    describe('GET /courses', function() {
        it('should return all courses data', function(done) {
           chai.request('http://localhost:8080/api/v1')
           .get('/courses')
              .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
             
                done();
              }) 
        })
    })
})