import * as chai from 'chai';

import server from '../../harness-setup/testing.server';

const expect = chai.expect;

describe('Call to GET service metadata at /meta endpoint', () => {
  describe('#200', () => {
    it('should return json', (done) => {
      server
        .get('/meta')
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(200);
          expect(res.type)
            .to
            .eql('application/json');
          done();
        });
    });

    it('should return an OK status', (done) => {
      server
        .get('/meta')
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(200);
          expect(res.body.health)
            .to
            .eql('ok');
          done();
        });
    });

    it('should return a description of the service', (done) => {
      server
        .get('/meta')
        .end((err, res) => {
          expect(res)
            .to
            .have
            .status(200);
          expect(res.body.description)
            .to
            .eql('user-interaction-history-manager');
          done();
        });
    });
  });
});
