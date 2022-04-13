const chai = require('chai')
,  chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const chaiJsonSchemaAjv =  require('chai-json-schema-ajv');
chai.use(chaiJsonSchemaAjv);

const restaurantInfoSchema = require('../schemas/restaurantinfo.schema.json');




describe('Restaurant API tests', function() {
    describe('GET /restaurants', function() {
        it('should return all restaurant data', function(done) {
           chai.request('http://localhost:8080/api/v1')
           .get('/restaurants')
              .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                
                expect(res.body).to.be.jsonSchema(restaurantInfoSchema);
                done();
              }) 
        })
    })
})