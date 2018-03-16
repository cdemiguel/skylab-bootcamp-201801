const rp = require('request-promise')

const api = {
    _baseUrl() {
        with (this) {
            return `${protocol}://${host}:${port}/api`
        }
    },

    _call(method, path, header, body) {
        return rp({
            method,
            uri: `${this._baseUrl()}/${path}`,
            headers:{
            authorization: 
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InUiLCJpYXQiOjE1MjA1MTIyOTMsImV4cCI6MTUyMDUxNTg5M30.WheKKCJf_W2RVzFVx__Xi_3S6DjdzVyi-LxVihYG8mY'
            },
            // Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InUiLCJpYXQiOjE1MjA1MTIyOTMsImV4cCI6MTUyMDUxNTg5M30.WheKKCJf_W2RVzFVx__Xi_3S6DjdzVyi-LxVihYG8mY',
            body,
            json: true
        })
    },

    list() {
        return this._call('get', 'users',)
    },

    register(name, surname, email, username, password) {
        return this._call('post', 'user', { name, surname, email, username, password })
    },

    remove(id, username, password) {
        return this._call('delete', `user/${id}`, { username, password })
    },

    retrieve(id) {
        return this._call('get', `user/${id}`)
    },

    update(id, name, surname, email, newUsername, newPassword, username, password) {
        return this._call('put', `user/${id}`, { name, surname, email, newUsername, newPassword, username, password })
    },

    login(username,password){
        return this._call('post', 'login', {username, password})
    }

}

module.exports = api