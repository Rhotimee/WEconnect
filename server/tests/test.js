import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';

const { expect } = chai;
chai.use(chaiHttp);

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTIxMTk0MTE0LCJleHAiOjUwMjI0MDM3MTR9.2I9wWT5aEr6KOCtZJeUZcsg1bnc0xoGTARFCqCBXHFA';

const Business = {
  name: `Moremi Gloals ${Math.random() * 100}`,
  details: 'Best Ict Resources',
  location: 'lagos',
  category: 'ICT',
};

const User = {
  email: 'user-test@gmail.com',
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

//  API DOCS
describe('GET docs/', () => {
  it('should return 200', (done) => {
    chai.request(server)
      .get('/api-docs')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

//  Get 404
describe('GET page not found', () => {
  it('should return 200', (done) => {
    chai.request(server)
      .get('/api/v1/kjdfkj/wkbw')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});


//  Add a business
describe('POST businesses/', () => {
  it('should be able to register a business', (done) => {
    chai.request(server)
      .post('/api/v1/businesses')
      .set('x-access-token', token)
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
      .set('x-access-token', token)
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
      .set('x-access-token', token)
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
      .set('x-access-token', token)
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
  it('should return 400 if name is empty', (done) => {
    chai.request(server)
      .post('/api/v1/businesses')
      .set('x-access-token', token)
      .send({
        name: '',
        details: '',
        location: '',
        category: '',
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
      .set('x-access-token', token)
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
      .set('x-access-token', token)
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
  describe('GET busineesses/1', () => {
    it('should be able to get a business', (done) => {
      chai.request(server)
        .get('/api/v1/businesses/1')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.a('object');
          done();
        });
    });
  });
});

// Get Business Reviews
describe('Get Reviews/1/reviews', () => {
  it('should be able to get reviews of a business', (done) => {
    chai.request(server)
      .get('/api/v1/businesses/1/reviews')
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
  it('should return 409 if user already exists', (done) => {
    chai.request(server)
      .post('/api/v1/auth/signup')
      .send({
        email: 'admin@admin.com',
        password: 'password',
        lastName: 'mimi',
        firstName: 'Riri'
      })
      .end((err, res) => {
        expect(res).to.have.status(409);
        expect(res.body).to.be.a('object');
        expect(res.body.error).to.equal(true);
        done();
      });
  });
});

//  Post Log In- Should return 400
describe('(Bad Requests) POST auth/login/', () => {
  it('should return 401 if no password', (done) => {
    chai.request(server)
      .post('/api/v1/auth/login')
      .send({
        email: 'rotimi@gm.com',
        password: '',
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(401);
        expect(res.body)
          .to.be.a('object');
        done();
      });
  });

  it('should return 401 if no email', (done) => {
    chai.request(server)
      .post('/api/v1/auth/login')
      .send({
        email: '',
        password: 'passw0RD',
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(401);
        expect(res.body)
          .to.be.a('object');
        done();
      });
  });

  it('should return 401 if username or password is wrong', (done) => {
    chai.request(server)
      .post('/api/v1/auth/login')
      .send({
        email: 'user1@gmail.com',
        password: 'passw0RD1',
      })
      .end((err, res) => {
        expect(res)
          .to.have.status(401);
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
  it('should return 404', (done) => {
    chai.request(server)
      .get('/api/v1/users/10090886')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe('Update users/1/', () => {
  it('should update a user', (done) => {
    chai.request(server)
      .put('/api/v1/users/1')
      .send({
        firstName: 'Marsa',
        lastName: 'Hanna',
      })
      .set('x-access-token', token)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});

// Add A Review
describe('POST reviews/1', () => {
  it('should be able to add reviews to a business', (done) => {
    chai.request(server)
      .post('/api/v1/businesses/2/reviews')
      .set('x-access-token', token)
      .send({
        businessId: 1,
        userId: 1,
        content: 'Lorem ipsum dolor sit amet.',
        star: 4,
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNTIxMTk0MTE0LCJleHAiOjUwMjI0MDM3MTR9.elbF85d04ZHG3iSjL6GElBRJAn05H6ZUxL5J_V8TxCE'
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

// Delete Business
describe('DELETE businesses/2', () => {
  it('should be able to delete a business', (done) => {
    chai.request(server)
      .delete('/api/v1/businesses/1')
      .set('x-access-token', token)
      .end((err, res) => {
        expect(res)
          .to.have.status(200);
        done();
      });
  });
  it('should return 404 if page cannot be found', (done) => {
    chai.request(server)
      .delete('/api/v1/businesses/6382392')
      .set('x-access-token', token)
      .end((err, res) => {
        expect(res)
          .to.have.status(404);
        done();
      });
  });
});

// LoggedIn Middleware
describe('POST businesses/', () => {
  it('should return 401, User not logged in', (done) => {
    chai.request(server)
      .post('/api/v1/businesses/')
      .send(Business)
      .end((err, res) => {
        expect(res)
          .to.have.status(401);
        done();
      });
  });
  it('should return 401, User not logged in', (done) => {
    chai.request(server)
      .post('/api/v1/businesses/2/reviews')
      .send({ content: 'test', star: 3 })
      .end((err, res) => {
        expect(res)
          .to.have.status(401);
        done();
      });
  });
});

// Sorter Middleware
describe('GET businesses/', () => {
  it('should return 200', (done) => {
    chai.request(server)
      .get('/api/v1/businesses?location=lagos')
      .end((err, res) => {
        expect(res)
          .to.have.status(200);
        done();
      });
  });
  it('should return 404', (done) => {
    chai.request(server)
      .get('/api/v1/businesses?location=79ojknlzaria')
      .end((err, res) => {
        expect(res)
          .to.have.status(404);
        done();
      });
  });
  it('should return 200', (done) => {
    chai.request(server)
      .get('/api/v1/businesses?category=ICT')
      .end((err, res) => {
        expect(res)
          .to.have.status(200);
        done();
      });
  });
  it('should return 404', (done) => {
    chai.request(server)
      .get('/api/v1/businesses?category=dddka')
      .end((err, res) => {
        expect(res)
          .to.have.status(404);
        done();
      });
  });
});


// validParam Middleware
describe('GET businesses/', () => {
  it('should return 400', (done) => {
    chai.request(server)
      .get('/api/v1/businesses/2n3')
      .end((err, res) => {
        expect(res)
          .to.have.status(400);
        done();
      });
  });
});

