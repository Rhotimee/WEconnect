import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const { expect } = chai;
chai.use(chaiHttp);

const Business = {
  id: 1,
  name: 'Moremi Gloals',
  details: 'Best Ict Resources',
  location: 'lagos',
  category: 'ICT',
};

// Get home route
describe('GET /', () => {
  it('should get home', () => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
      });
  });
});

//  Add a business
describe('POST businesses/', () => {
  it('should be able to register a business', (done) => {
    chai.request(server)
      .post('/api/v1/businesses')
      .send(Business)
      .end((err, res) => {
        expect(res)
          .to.have.status(201);
        expect(res.body)
          .to.be.a('object');
        done();
      });
  });
});
