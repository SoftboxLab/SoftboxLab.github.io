import angular from 'angular';
import 'angular-ui-router';
import cartaoProjetoComponent from './cartaoProjeto.component';

let cartaoProjetoModule = angular.module('cartaoProjeto', [
	'ui.router'
])
.directive('cartaoProjeto', cartaoProjetoComponent);

export default cartaoProjetoModule;
