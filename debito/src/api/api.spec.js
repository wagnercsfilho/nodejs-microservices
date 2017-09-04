/* eslint-env mocha */
const request = require('supertest')
const server = require('../server/server')

describe('DEBITAR CPC', () => {
  let app = null
  let port = 3000
  let testAccount = [{
    _id: 202020,
    name: 'Empresa Teste',
    amount: 100,
  }];
  let testAd = [{
    _id: 101010,
    name: "Ad Teste",
    cpc: 0.30,
    count_clicks: 0,
    account_id: 202020
  }];


  const getAdById = () => {
    return Promise.resolve(testAd[0]);
  }

  const getAccountById = () => {
    return Promise.resolve(testAccount[0]);
  }

  const decCpcAccount = (accountId, cpc) => {
    const _testAd = testAd[0];
    const _testAccount = testAccount[0];
    _testAccount.amount -= _testAd.cpc;
    return Promise.resolve(_testAccount);
  }

  let repository = {
    decCpcAccount,
    getAccountById,
    getAdById,
  }

  beforeEach(() => {
    return server({
      port,
      repository,
    }).then(serv => {
      app = serv
    })
  })

  afterEach(() => {
    app.close()
    app = null
  })

  it('deve debitar cpc da conta do cliente', (done) => {
    request(app)
      .post('/api/dec-cpc-account')
      .send({
        'ad_id': 101010,
      })
      .set('Accept', 'application/json')
      .expect(200, {
        amount: 99.7,
      }, done);
  })

  it('deve retornar 404 quando nao passar ad_id', (done) => {
    request(app)
      .post('/api/dec-cpc-account')
      .send({
        'ad_id': null,
      })
      .set('Accept', 'application/json')
      .expect(404, done);
  })

});
