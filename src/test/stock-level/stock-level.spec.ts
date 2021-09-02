import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

chai.should(); 

chai.use(chaiHttp);
/*
 * Test the /POST route
 */
describe('GET /stockLevel', () => {
    it('it should return stock level object with sku and qty', (done) => {
        chai.request(app)
            .post('/stockLevel')
            .send({ sku: 'SAL508741/19/43' })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

    it('sku not found for stock level', (done) => {
        chai.request(app)
            .post('/stockLevel')
            .send({ sku: 'SAL508741/19/41' })
            .end((err, res) => {
                res.should.have.status(404);
                done();
            });
    });
});
