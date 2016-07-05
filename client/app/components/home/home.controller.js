class HomeController {
    constructor(GitHub) {
        'ngInject';

        this.name = 'home';

        this.cartoes = [];

		GitHub.getRepos().then((res) => {
			this.cartoes = res;
		});
    }
}

export default HomeController;
