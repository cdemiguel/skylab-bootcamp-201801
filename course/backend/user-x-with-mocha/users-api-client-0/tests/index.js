require('dotenv').config()

const api = require('../src')
const assert = require('assert')

const { API_PROTOCOL, API_HOST, API_PORT } = process.env

api.protocol = API_PROTOCOL
api.host = API_HOST
api.port = API_PORT

describe('api', () => {

    it('should create', done => {
        api.create('z', 'z', 'z', 'z', 'z')
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')

                assert(res.data && res.data.id, 'should return data id')

                done()
            })
            .catch(done)
    })


    it('should list', done => {
        api.list()
            .then(res => {
                assert.equal(res.status, 'OK', 'results should be OK')

                assert(res.data && res.data.length > 0, 'should return data array')

                done()
            })
            .catch(done)
    })


    it('should delete', done=> {
        api.delete('aaea783b-68ed-4e4b-91d4-3ae53729798b', 'z', 'z')
            .then(res=>{
                
                done()
            })
            .catch(done)
    })

    
})
