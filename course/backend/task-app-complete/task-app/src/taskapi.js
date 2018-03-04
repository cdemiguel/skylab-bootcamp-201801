const axios = require('axios')

let taskApi;

taskApi = {

    createTask: (task) => {
      return  axios.post('http://localhost:5000/api/tasks', { task, status:false})
    },

    getTasks: () => {
        return axios.get('http://localhost:5000/api/tasks')
            .then(function (response) {
                return response.data.data
            })
    },

    modifyTask: (id) =>{
        
        // primero hace la llamada axios.put y cuando vuelve hace el then
        return axios.put(`http://localhost:5000/api/tasks/${id}`)
            .then(function (response) {
                return response.data
            })
    },

    removeTask: (id) => {

        return axios.delete(`http://localhost:5000/api/tasks/${id}`)
        .then(function (response) {
            return response.data
        })

    }

}

module.exports = taskApi