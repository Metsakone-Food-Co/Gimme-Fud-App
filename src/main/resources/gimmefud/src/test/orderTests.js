const chai = require('chai')
,  chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const chaiJsonSchemaAjv =  require('chai-json-schema-ajv');
chai.use(chaiJsonSchemaAjv);

const orderInfoSchema = require('../schemas/orderinfo.schema.json');




describe('Orders API tests', function() {
    describe('GET /orders', function() {
        it('should return all order data', function(done) {
           chai.request('http://localhost:8080/api/v1')
           .get('/orders')
              .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.be.jsonSchema(orderInfoSchema);
                done();
              }) 
        })
    })
})