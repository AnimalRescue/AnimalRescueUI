import * as api from './api/api';
import * as angular from 'angular';

const apiModule = angular.module('api', [])
.service('AdminsApi', api.AdminsApi)
.service('StaffApi', api.StaffApi)
.service('VetsApi', api.VetsApi)

export default apiModule;
