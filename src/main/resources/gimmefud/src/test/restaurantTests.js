const chai = require('chai')
,  chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const chaiJsonSchemaAjv =  require('chai-json-schema-ajv');
chai.use(chaiJsonSchemaAjv);

const restaurantInfoSchema = require('../schemas/restaurantinfo.schema.json');

const serverAddress = 'http://localhost:8080/api/v1';


describe('Restaurant API tests', function() {
    describe('GET /restaurants', function() {
        it('should return all restaurant data', function(done) {
           chai.request(serverAddress)
           .get('/restaurants')
              .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                
                expect(res.body).to.be.jsonSchema(restaurantInfoSchema);
                done();
              }) 
        })
    })
    describe('POST/ new restaurant data', function() {

      it('should accept restaurant data when data is correct', function(done){
        chai.request(serverAddress)
        .post('/restaurants')
        .send({
          rname: "Osmo Rilli",
          usernamer: "Osmo",
          raddress: "Osmo takapiha",
          service_hours: "9",
          rtype: "Rilli",
          price_range: "Euro",
          img_url: "https://res.cloudinary.com/gimmefudapp/image/upload/v1649832753/hde0qfco8iysoqcdjkuz.jpg"
        })
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        })
      })
      it('should reject request with missing  fields from data structure', function(done){
        chai.request(serverAddress)
        .post('/restaurants')
        .send({
          rname: "Osmo Rilli",
          raddress: "Osmo takapiha",
          service_hours: "9",
          rtype: "Rilli",
          price_range: "Euro",
          img_url: "https://res.cloudinary.com/gimmefudapp/image/upload/v1649832753/hde0qfco8iysoqcdjkuz.jpg"
        })
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(500);
          done();
        })

      })
      it('should reject request with incorrect data types', function(done){
        chai.request(serverAddress)
        .post('/restaurants')
        .send({
          rname: "Osmo Rilli",
          usernamer: "Osmo",
          raddress: null,
          service_hours: "9",
          rtype: "Rilli",
          price_range: "Euro",
          img_url: "https://res.cloudinary.com/gimmefudapp/image/upload/v1649832753/hde0qfco8iysoqcdjkuz.jpg"
        })
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(500);
          done();
        })
      })
      it('should reject empty post requests', function(done){
        chai.request(serverAddress)
        .post('/restaurants')
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        })
      })

    })
})