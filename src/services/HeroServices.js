/**
 * file: src/services/Api.js
 * data: 07/23/2021
 * description: file responsible for api request methods
 */

import Api from './Api';

export default {

    /**
     * Método responsável por criar um novo 'Hero'
     * (POST): localhost:3000/api/heroes
     */
     async createNewHero(hero) {
        try {
            const response = await Api().post('/heroes', hero);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    /**
     * Método responsável por listar todos os 'Heroes'
     * (GET): localhost:3000/api/heroes
     */
    async getHeroes() {
        try {
            const response = await Api().get('/heroes');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },

    /**
     * método responsável por listar por Id um determinado 'hero'
     * (GET): localhost:3000/api/heroes/:id
     */

    async getHeroId(id) {
        try {
            const response = await Api().get(`/heroes/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}