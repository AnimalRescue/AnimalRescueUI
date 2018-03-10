import * as api from './api/api';
import * as angular from 'angular';

const apiModule = angular.module('api', [])
.service('PublicApi', api.PublicApi)

export default apiModule;
