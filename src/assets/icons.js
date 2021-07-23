/**
 * file: assets/icon.js
 * date: 07/23/2021
 * description: File responsible for icon logic.
 * Autor: Arthur Silva - twiiter <@osmilin>
 */

import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus, faUserEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faUserPlus, faUserEdit, faTrash);

Vue.component('font-awesome-icon', FontAwesomeIcon);
