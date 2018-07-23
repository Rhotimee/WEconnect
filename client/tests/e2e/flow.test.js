module.exports = {
  'Flows ': function (client) {
    client
      .url('http://localhost:3000/login')
      .waitForElementVisible('body', 2000)
      .assert.title('Weconnect')
      .assert.visible('.login-cover-img')
      .assert.visible('input[name=email]')
      .assert.visible('input[name=password]')
      .assert.visible('input[type=submit]')
      .setValue('input[name=email]', 'admin@admin.com')
      .setValue('input[name=password]', 'password')
      .click('input[type=submit]')
      .pause(2000)
      // make sure it redirects to the home page.
      .assert.urlContains('http://localhost:3000')
      .assert.containsText('h1.text-center', 'Discover places that people love')
      // go to the add business page
      .assert.visible('#add-business.nav-link')
      .url('http://localhost:3000/add-business')
      .waitForElementVisible('.row#add-business-form', 1000)
      .assert.urlContains('http://localhost:3000/add-business')
      .setValue('input[name=name]', `business${Math.random() * 10}`)
      .click('select[name=category]')
      .click('#professional')
      .setValue(
        'textarea[name=details]',
        'Lorem ipsum dolor, sit amet consectetur adipisicing .'
      )
      .setValue(
        'input[name=location]',
        'Lagos.'
      )
      .click('button[type=submit]')
      .pause(2000)
      .assert.urlContains('http://localhost:3000/businesses')
      .assert.visible('.nav-2.py-2')
      .assert.visible('.business-card.p-3.my-2.mx-sm-5')
      // details
      .url('http://localhost:3000/businesses/1')
      .waitForElementVisible('.bg-cover.details-page', 1000)
      // reviews
      .assert.visible('.content-box.review')
      .end();
  },
};

