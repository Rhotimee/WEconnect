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

const User = {
  email: 'user10101@gmail.com',
  password: 'passw0RD',
  firstName: 'Timi',
  lastName: 'Yemi'
};

// Redirect to API v1
describe('GET /', () => {
  it('should get home', () => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
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

//  Get all Users
describe('GET users/', () => {
  it('should get all users', (done) => {
    chai.request(server)
      .get('/api/v1/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.a('object');
        done();
      });
  });
});

//  POST - Sign up
describe('POST auth/signup/', () => {
  //  POST - Should create a new User
  it('should create new user', (done) => {
    chai.request(server)
      .post('/api/v1/auth/signup')
      .send(User)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.a('object');
        expect(res.body.error).to.equal(false);
        done();
      });
  });

  // POST Sign up- should return 400 if no email
  it('should return 400 if no eamil', (done) => {
    chai.request(server)
      .post('/api/v1/auth/signup')
      .send({
        email: '',
        password: 'timi',
        lastName: 'mimi',
        firstName: 'Riri'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.a('object');
        expect(res.body.error).to.equal(true);
        done();
      });
  });

  // POST Sign up - should return 400 if no password
  it('should return 400 if no password', (done) => {
    chai.request(server)
      .post('/api/v1/auth/signup')
      .send({
        email: 'timi@gmail.com',
        password: '',
        lastName: 'mimi',
        firstName: 'Riri'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.a('object');
        expect(res.body.error).to.equal(true);
        done();
      });
  });
  // POST Sign up - should return 400
  it('should return 400 if user already exists', (done) => {
    chai.request(server)
      .post('/api/v1/auth/signup')
      .send({
        email: 'user10101@gmail.com',
        password: 'password',
        lastName: 'mimi',
        firstName: 'Riri'
      })
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body).to.be.a('object');
        expect(res.body.error).to.equal(true);
        done();
      });
  });
});

//  Post Log In- Should return 400
describe('(Bad Requests) POST auth/login/', () => {
  it('should return 400 if no password', (done) => {
    chai.request(server)
      .post('/api/v1/auth/login')
      .send({
        email: 'rotimi',
        password: '',
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(400);
        expect(res.body)
          .to.be.a('object');
        done();
      });
  });

  it('should return 400 if no email', (done) => {
    chai.request(server)
      .post('/api/v1/auth/login')
      .send({
        email: '',
        password: 'passw0RD',
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(400);
        expect(res.body)
          .to.be.a('object');
        done();
      });
  });

  it('should return 400 if username or password is wrong', (done) => {
    chai.request(server)
      .post('/api/v1/auth/login')
      .send({
        email: 'user1@gmail.com',
        password: 'passw0RD1',
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

//  Post Log in - Should Login Successfully
describe('POST auth/login/', () => {
  it('should authenticate successfully', (done) => {
    chai.request(server)
      .post('/api/v1/auth/login')
      .send({
        email: User.email,
        password: User.password,
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(200);
        expect(res.body)
          .to.be.a('object');
        done();
      });
  });
});

describe('Get logout/', () => {
  it('should logout a user', (done) => {
    chai.request(server)
      .get('/api/v1/auth/logout')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

describe('Get users/1/', () => {
  it('should get a user', (done) => {
    chai.request(server)
      .get('/api/v1/users/1')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

// Get Business Reviews
describe('Get businesses/3/reviews', () => {
  it('should be able to get reviews of a business', (done) => {
    chai.request(server)
      .get('/api/v1/businesses/2/reviews')
      .end((err, res) => {
        expect(res)
          .to.have.status(200);
        done();
      });
  });

  it('should return 404', (done) => {
    chai.request(server)
      .get('/api/v1/businesses/3627827/reviews')
      .end((err, res) => {
        expect(res)
          .to.have.status(404);
        done();
      });
  });
});

// Add A Review
describe('POST reviews/1', () => {
  it('should be able to add reviews to a business', (done) => {
    chai.request(server)
      .post('/api/v1/businesses/1/reviews')
      .send({
        reviewer: 'Solomon',
        content: 'Lorem ipsum dolor sit amet.',
        stars: 4,
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(201);
        expect(res.body).to.be.a('object');
        done();
      });
  });

  it('should return 404', (done) => {
    chai.request(server)
      .get('/api/v1/businesses/3627827/reviews')
      .end((err, res) => {
        expect(res)
          .to.have.status(404);
        done();
      });
  });
});
