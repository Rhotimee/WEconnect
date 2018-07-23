module.exports = {
  'Landing Page': function (client) {
    client
      .url('http://localhost:3000')
      .waitForElementVisible('body', 2000)
      .assert.title('Weconnect')
      .assert.visible('h1.text-center')
      .assert.containsText('h1.text-center', 'Discover places that people love')
      .assert.visible('a.nav-link.text-light')
      .assert.visible('input[name=text]')
      .assert.visible('select[name=type]')
      .assert.visible('#landing-input-button')
      .setValue('input[name=text]', 'lagos')
      .click('select[name=type]')
      .click('#search-location')
      .click('#landing-input-button')
      .pause(2000)
      .assert.urlContains('http://localhost:3000/businesses')
      .assert.visible('.nav-2.py-2')
      .assert.visible('.business-card.p-3.my-2.mx-sm-5')
      .end();
  },
};

