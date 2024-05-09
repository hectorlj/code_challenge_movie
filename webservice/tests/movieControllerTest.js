import { use, expect } from "chai";
import chaiHttp from "chai-http";
import app from '../app.js';
const chai = use(chaiHttp);
chai.should();

describe("Movies", () => {
    describe("GET /movies/", () => {
        // Test searching for movies.
        it("should get ten movie records", (done) => {
            chai.request(app)
                .get('/movies/?search=star wars')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                })
        })
    })
})