let api_client;

(function () {

    const axios = require('axios')
    const baseUrl = 'http://localhost:5000'

    api_client = {

        getList(){
            return axios.get(`${baseUrl}/api/users`).then(res => res.data.data)
        },

        deleteOne(id, queryUsername, queryPassword) {
            return axios.delete(`${baseUrl}/api/user/${id}`, { data: { username: queryUsername, password: queryPassword } })
        },

        updateOne(id, queryUsername, queryPassword, queryname, querysurname, queryemail, newPassword, newUsername){
            return axios.put(`${baseUrl}/api/user/${id}`,  { name:queryname, surname:querysurname, email:queryemail, username: queryUsername, password: queryPassword, newUsername:newUsername , newPassword:newPassword})
        },

        createOne(queryUsername, queryPassword, queryname, querysurname, queryemail){
            return axios.post(`${baseUrl}/api/user`,  { name:queryname, surname:querysurname, email:queryemail, username: queryUsername, password: queryPassword})
        }

    }

})()

export default api_client