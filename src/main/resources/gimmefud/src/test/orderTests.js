const chai = require('chai')
,  chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const chaiJsonSchemaAjv =  require('chai-json-schema-ajv');
chai.use(chaiJsonSchemaAjv);

const orderInfoSchema = require('../schemas/orderinfo.schema.json');

const serverAddress = 'http://localhost:8080/api/v1';


describe('Orders API tests', function() {
    describe('GET /orders', function() {
        it('should return all order data', function(done) {
           chai.request(serverAddress)
           .get('/orders')
              .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                expect(res.body).to.be.jsonSchema(orderInfoSchema);
                done();
              }) 
        })
    })
    describe('POST/ new order data', function() {

      it('should accept order data when data is correct', function(done){
        chai.request(serverAddress)
        .post('/orders')
        .send({
          rname: "Aaken traumat",
          username: "Ooke",
          orderitems: "Morso 2pcs",
          totalsum: "100",
          order_date: "Wed Apr 13 2022 09:40:07 GMT+0300 (Itä-Euroopan kesäaika)"
        })
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        })
      })
      it('should reject request with missing  fields from data structure', function(done){
        chai.request(serverAddress)
        .post('/orders')
        .send({
          rname: "Aaken traumat",
          orderitems: "Morso 2pcs",
          totalsum: "100",
          order_date: "Wed Apr 13 2022 09:40:07 GMT+0300 (Itä-Euroopan kesäaika)"
        })
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(500);
          done();
        })

      })
      it('should reject request with incorrect data types', function(done){
        chai.request(serverAddress)
        .post('/orders')
        .send({
          rname: "Aaken traumat",
          username: null,
          orderitems: "Morso 2pcs",
          totalsum: "100",
          order_date: "Wed Apr 13 2022 09:40:07 GMT+0300 (Itä-Euroopan kesäaika)"
        })
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(500);
          done();
        })
      })
      it('should reject empty post requests', function(done){
        chai.request(serverAddress)
        .post('/orders')
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        })
      })

    })
})