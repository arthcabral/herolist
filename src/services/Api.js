/**
 * file: src/services/Api.js
 * data: 07/23/2021
 * description: file responsible for initializing the 'axios' and HTTP's requests.
 */

import axios from 'axios';

export default () => axios.create({
    // 'baseURL' do back-end -> realiza a comunicação cliente-servidor
    baseURL: 'http://localhost:3000/api',
})