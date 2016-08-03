import template from './cartaoMembro.html!text';
import controller from './cartaoMembro.controller';
import './cartaoMembro.css!';

let cartaoMembroComponent = function(){
	return {
		template,
		controller,
		restrict: 'E',
		controllerAs: 'vm',
		scope: {
			membro: '='
		},
		bindToController: true
	};
};

export default cartaoMembroComponent;
