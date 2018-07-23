module.exports = {
  'Signup Page': function (client) {
    client
      .url('http://localhost:3000/signup')
      .waitForElementVisible('body', 2000)
      .assert.title('Weconnect')
      .assert.visible('.login-cover-img')
      .assert.visible('input[name=firstName]')
      .assert.visible('input[name=lastName]')
      .assert.visible('input[name=email]')
      .assert.visible('input[name=password]')
      .assert.visible('input[name=confirmPassword]')
      .assert.visible('input[name=Image]')
      .assert.visible('input[type=submit]')
      .setValue('input[name=firstName]', 'Isaiah')
      .setValue('input[name=lastName]', 'Rotimi')
      // generate random email with random
      .setValue('input[name=email]', `email${Math.random() * 100}@gmail.com`)
      .setValue('input[name=password]', 'password123')
      .setValue('input[name=confirmPassword]', 'password123')
      .click('input[type=submit]')
      .pause(2000)
      // make sure it redirects to the home page.
      .assert.urlContains('http://localhost:3000')
      .assert.containsText('h1.text-center', 'Discover places that people love')
      .end();
  },
};

