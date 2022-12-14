import axios from 'axios';
import { decodeUser } from './token/decode-user';

const user = decodeUser()

// Local Backend

export default axios.create({
    baseURL: "https://localhost:44342/api/",
    headers: {
        // "Content-type": "application/json",
        "Authorization": 'Bearer ' + user?.token
    }
})


// Jaypee Backend

// export default axios.create({
//     baseURL: "http://10.10.13.16:45458/api/",
//     headers: {
//         "Content-type": "application/json",
//         "Authorization": 'Bearer '+user?.token
//     }
// })
