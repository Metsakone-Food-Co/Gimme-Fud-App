const assert = require('assert');
const chai = require('chai')
,  chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const chaiJsonSchemaAjv =  require('chai-json-schema-ajv');
chai.use(chaiJsonSchemaAjv);

const coursesInfoSchema = require('../schemas/coursesinfo.schema.json');

const serverAddress = 'http://localhost:8080/api/v1';



describe('Courses API tests', function() {
    describe('GET /courses', function() {
        it('should return all courses data', function(done) {
           chai.request(serverAddress)
           .get('/courses')
              .end(function(err, res) {
                expect(err).to.be.null;
                expect(res).to.have.status(200);

                expect(res.body).to.be.jsonSchema(coursesInfoSchema);
             
                done();
              }) 
        })
    })

    describe('POST/ new courses data', function() {

      it('should accept course data when data is correct', function(done){
        chai.request(serverAddress)
        .post('/courses')
        .send({
          course_name: "Osmo Susi",
          rname: "Osmo Rilli",
          meal_type: "Side",
          meal_price: "7",
          img_url: "https://res.cloudinary.com/gimmefudapp/image/upload/v1649832838/w7oyd6wxpqrdujymbliw.jpg"
        })
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
        })
      })
      it('should reject request with missing  fields from data structure', function(done){
        chai.request(serverAddress)
        .post('/courses')
        .send({
          course_name: "Osmo Susi",
          meal_type: "Side",
          meal_price: "7",
          img_url: "https://res.cloudinary.com/gimmefudapp/image/upload/v1649832838/w7oyd6wxpqrdujymbliw.jpg"
        })
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(500);
          done();
        })

      })
      it('should reject request with incorrect data types', function(done){
        chai.request(serverAddress)
        .post('/courses')
        .send({
          course_name: null,
          rname: "Osmo Rilli",
          meal_type: "Side",
          meal_price: "7",
          img_url: "https://res.cloudinary.com/gimmefudapp/image/upload/v1649832838/w7oyd6wxpqrdujymbliw.jpg"
        })
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(500);
          done();
        })
      })
      it('should reject empty post requests', function(done){
        chai.request(serverAddress)
        .post('/courses')
        .end(function(err, res){
          expect(err).to.be.null;
          expect(res).to.have.status(400);
          done();
        })
      })

    })

    })
