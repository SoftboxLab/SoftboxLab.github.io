class CartaoProjetoController {
	constructor(GitHub) {
		'ngInject';

		this.name = 'cartaoProjeto';

		console.log(GitHub.getRepos());
	}
}

export default CartaoProjetoController;
