class HomeController {
    constructor(GitHub) {
        'ngInject';

        this.name = 'home';

        this.cartoes = [];

		GitHub.getRepos().then((res) => {
			this.cartoes = res;
		});

		GitHub.getOrganizationMembers().then((res) => {
			this.membros = res;
		});
    }
}

export default HomeController;
