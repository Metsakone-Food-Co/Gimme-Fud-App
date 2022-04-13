const chai = require('chai')
,  chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const chaiJsonSchemaAjv =  require('chai-json-schema-ajv');
chai.use(chaiJsonSchemaAjv);

const customerInfoSchema = require('../schemas/customerinfo.schema.json');

const serverAddress = 'http://localhost:8080/api/v1';

describe('Customer API tests', function() {
    describe('GET /customer', function() {
        it('should return all customer data', function(done) {
           chai.request(serverAddress)
           .get('/customers')
              .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);

                expect(res.body).to.be.jsonSchema(customerInfoSchema);
             
                done();
              }) 
        })
    })
    describe('POST/ new customer data', function() {

      it('should accept customer data when data is correct', function(done){
        chai.request(serverAddress)
        .post('/customers')
        .send({
          username: "PuukkoAllu",
          password: "$2a$10$1HcFOzNilhJuJobzIQ475.CFYkMXg4H2g2.T.sKZRhnDI6ZVK9dUu",
          firstName: "Allu",
          lastName: "Makkonen",
          address: "Kaukovainio",
          phoneNumber: "04006666969"
        })
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        })
      })
      it('should reject request with missing  fields from data structure', function(done){
        chai.request(serverAddress)
        .post('/customers')
        .send({
          username: "PuukkoAllu",
          password: "$2a$10$1HcFOzNilhJuJobzIQ475.CFYkMXg4H2g2.T.sKZRhnDI6ZVK9dUu",
          lastName: "Makkonen",
          address: "Kaukovainio",
          phoneNumber: "04006666969"
        })
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(500);
          done();
        })

      })
      it('should reject request with incorrect data types', function(done){
        chai.request(serverAddress)
        .post('/customers')
        .send({
          username: null,
          password: "$2a$10$1HcFOzNilhJuJobzIQ475.CFYkMXg4H2g2.T.sKZRhnDI6ZVK9dUu",
          firstName: "Allu",
          lastName: "Makkonen",
          address: "Kaukovainio",
          phoneNumber: "04006666969"
        })
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(500);
          done();
        })
      })
      it('should reject empty post requests', function(done){
        chai.request(serverAddress)
        .post('/customers')
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        })
      })

    })

    })

