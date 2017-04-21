import * as chai from 'chai'
import server from '../../harness.setup/testing.server'

const expect = chai.expect

describe('Call to GET user\'s interaction thread at /thread endpoint', () => {
    describe('#200', () => {
        it('should return json', (done) => {
            server
                .get('/thread')
                .end((err, res) => {
                    expect(res)
                        .to
                        .have
                        .status(200)
                    expect(res.type)
                        .to
                        .eql('application/json')
                    done()
                })
        })
    })
})