import angular from 'angular';
import 'angular-ui-router';
import cartaoMembroComponent from './cartaoMembro.component';

let cartaoMembroModule = angular.module('cartaoMembro', [
	'ui.router'
])
.directive('cartaoMembro', cartaoMembroComponent);

export default cartaoMembroModule;