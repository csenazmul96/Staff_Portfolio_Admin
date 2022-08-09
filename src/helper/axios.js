import axios from 'axios';
let user = localStorage.getItem('user')
user = user ? JSON.parse(user) : null
let token = ''
if(user)
    token = user.token

export default axios.create({
    baseURL: 'http://127.0.0.1:8000/api/admin',
    credentials: true,
    headers: {
        common: {
            'Accept': 'application/json',
            'Authorization': token ? `Bearer ${token}` : null
        },
    }

});
