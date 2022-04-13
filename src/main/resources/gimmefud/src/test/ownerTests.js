const chai = require('chai')
,  chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const chaiJsonSchemaAjv =  require('chai-json-schema-ajv');
chai.use(chaiJsonSchemaAjv);

const ownerInfoSchema = require('../schemas/ownerinfo.schema.json');

const serverAddress = 'http://localhost:8080/api/v1';



describe('Restaurant owners API tests', function() {
    describe('GET /restaurantowners', function() {
        it('should return all owner data', function(done) {
           chai.request(serverAddress)
           .get('/restaurantowners')
              .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
             expect(res.body).to.be.jsonSchema(ownerInfoSchema);
                done();
              }) 
        })
    })
    describe('POST/ new owner data', function() {

      it('should accept owner data when data is correct', function(done){
        chai.request(serverAddress)
        .post('/restaurantowners')
        .send({
                usernamer: "Osmo",
                password: "$2a$10$XZOl085Y6vZF61GdFgw/IezPVFyrv2bYAj5NfhpuxZpkvtQmfI4.e",
                fname: "Osmo",
                lname: "Osmonen",
                address: "Osmontalo",
                phone_number: "054564646544"
        })
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        })
      })
      it('should reject request with missing  fields from data structure', function(done){
        chai.request(serverAddress)
        .post('/restaurantowners')
        .send({
          usernamer: "Osmo",
          password: "$2a$10$XZOl085Y6vZF61GdFgw/IezPVFyrv2bYAj5NfhpuxZpkvtQmfI4.e",
          fname: "Osmo",
          address: "Osmontalo",
          phone_number: "054564646544"
        })
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(500);
          done();
        })

      })
      it('should reject request with incorrect data types', function(done){
        chai.request(serverAddress)
        .post('/restaurantowners')
        .send({
          usernamer: "Osmo",
          password: "$2a$10$XZOl085Y6vZF61GdFgw/IezPVFyrv2bYAj5NfhpuxZpkvtQmfI4.e",
          fname: "Osmo",
          lname: null,
          address: "Osmontalo",
          phone_number: "054564646544"
        })
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(500);
          done();
        })
      })
      it('should reject empty post requests', function(done){
        chai.request(serverAddress)
        .post('/restaurantowners')
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        })
      })

    })
})