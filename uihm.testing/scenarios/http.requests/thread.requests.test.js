import * as chai from 'chai'
import server from '../../harness.setup/testing.server'

const expect = chai.expect

describe('Call to GET user\'s interaction thread at /thread endpoint', () => {
    describe('#200', () => {
        it('should return json', (done) => {
            server
                .get('/thread/johndoe?size=2&interactor=sys')
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

        it('should return a collection of 2 interactions', (done) => {
            server
                .get('/thread/johndoe?size=2&interactor=sys')
                .end((err, res) => {
                    expect(res.body.data.thread.length)
                        .to
                        .eql(2)
                    expect(res.body.data.thread[0])
                        .to
                        .have
                        .property('interactorId')
                        .and
                        .eql('johnDoe')
                    done()
                })
        })
    })
})