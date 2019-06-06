// Add fontawesome icons used by the application.

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faAngleUp,
    faCalendar,
    faCheck,
    faClock,
    faCog,
    faCross,
    faEdit,
    faEye,
    faPlus,
    faQuestion,
    faTrash,
    faUser,
    faUsers,
    faUserSecret,
    faWindowClose,
    faWindowMaximize,
    faWindowMinimize,
    faWindowRestore,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';

library.add(
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faAngleUp,
    faCalendar,
    faCheck,
    faClock,
    faCog,
    faCross,
    faEdit,
    faEye,
    faPlus,
    faQuestion,
    faTrash,
    faUser,
    faUsers,
    faUserSecret,
    faWindowClose,
    faWindowMaximize,
    faWindowMinimize,
    faWindowRestore,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
