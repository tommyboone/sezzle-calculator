import axios from 'axios';

export default{
    findAll: function(){
        return axios.get('/api/calculator/list');
    },
    limit: function(){
        return axios.get('api/calculator/limit');
    },
    save: function(data){
        return axios.post('api/calculator/save', data)
    }

}