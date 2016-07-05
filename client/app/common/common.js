import angular from 'angular';
import Navbar from './navbar/navbar';
import CartaoProjeto from './cartaoProjeto/cartaoProjeto';

import GitHubService from './github/github.service'

let commonModule = angular.module('app.common', [
	Navbar.name,
	CartaoProjeto.name
]);

commonModule.service('GitHub', GitHubService);

export default commonModule;
