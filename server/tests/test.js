import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const { expect } = chai;
chai.use(chaiHttp);

const Business = {
  name: 'Moremi Gloals',
  details: 'Best Ict Resources',
  location: 'lagos',
  category: 'ICT',
};

// Redirect to API v1
describe('GET /', () => {
  it('should get home', () => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.message).to.equals('welcome to version 1 of Weconnect');
      });
  });
});

// GET /api/v1
describe('GET /api/v1', () => {
  it('should get home', () => {
    chai.request(server)
      .get('/api/v1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        expect(res.body.message).to.equals('welcome to version 1 of Weconnect');
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

  it('should return 400 if no business name', (done) => {
    chai.request(server)
      .post('/api/v1/businesses')
      .send({
        details: 'Best Ict Resources',
        location: 'lagos',
        category: 'ICT',
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(400);
        expect(res.body)
          .to.be.a('object');
        done();
      });
  });
  it('should return 400 if name is undefined', (done) => {
    chai.request(server)
      .post('/api/v1/businesses')
      .send({
        name: undefined,
        details: 'Best Ict Resources',
        location: 'lagos',
        category: 'ICT',
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(400);
        expect(res.body)
          .to.be.a('object');
        done();
      });
  });
  it('should return 400 if name is empty', (done) => {
    chai.request(server)
      .post('/api/v1/businesses')
      .send({
        name: '',
        details: 'Best Ict Resources',
        location: 'lagos',
        category: 'ICT',
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(400);
        expect(res.body)
          .to.be.a('object');
        done();
      });
  });
});

//  Update a business
describe('PUT businesses/1', () => {
  it('should be able to update a business', (done) => {
    chai.request(server)
      .put('/api/v1/businesses/1')
      .send({
        name: 'Rotimi Texh',
        details: 'Software company',
        location: 'lagos',
        category: 'ICT',
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        done();
      });
  });
  it('should return 404, if business cannot be found', (done) => {
    chai.request(server)
      .put('/api/v1/businesses/193992932')
      .send({
        name: 'Rotimi Texh',
        details: 'Software company',
        location: 'lagos',
        category: 'ICT',
      })
      .end((err, res) => {
        expect(res).to.have.status(404);
        expect(res.body).to.be.a('object');
        done();
      });
  });
});

// Delete Business
describe('DELETE businesses/3', () => {
  it('should be able to delete a business', (done) => {
    chai.request(server)
      .delete('/api/v1/businesses/3')
      .end((err, res) => {
        expect(res)
          .to.have.status(200);
        done();
      });
  });
  it('should return 404 if page cannot be found', (done) => {
    chai.request(server)
      .delete('/api/v1/businesses/6382392')
      .end((err, res) => {
        expect(res)
          .to.have.status(404);
        done();
      });
  });
});

//  Get all businesses
describe('GET businesses/', () => {
  it('should get all businesses', (done) => {
    chai.request(server)
      .get('/api/v1/businesses')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        done();
      });
  });
  // Get Individual Business
  describe('GET busineesses/3', () => {
    it('should be able to get a business', (done) => {
      chai.request(server)
        .get('/api/v1/businesses/2')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('object');
          done();
        });
    });
  });
});
