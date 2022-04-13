const chai = require('chai')
,  chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const chaiJsonSchemaAjv =  require('chai-json-schema-ajv');
chai.use(chaiJsonSchemaAjv);

const ownerInfoSchema = require('../schemas/ownerinfo.schema.json');



describe('Restaurant owners API tests', function() {
    describe('GET /restaurantowners', function() {
        it('should return all owner data', function(done) {
           chai.request('http://localhost:8080/api/v1')
           .get('/restaurantowners')
              .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
             expect(res.body).to.be.jsonSchema(ownerInfoSchema);
                done();
              }) 
        })
    })
})