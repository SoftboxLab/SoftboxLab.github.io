import template from './cartaoProjeto.html!text';
import controller from './cartaoProjeto.controller';
import './cartaoProjeto.css!';

let cartaoProjetoComponent = function() {
    return {
        template,
        controller,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {
            info: '='
        },
        bindToController: true,
        bindings: {}
    };
};

export default cartaoProjetoComponent;
