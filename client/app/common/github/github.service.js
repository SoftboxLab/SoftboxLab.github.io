export default class GitHub {
    constructor($http) {
        'ngInject';

        this._$http = $http;
    }

    getRepos() {
        return this._$http({
            url: 'https://api.github.com/orgs/SoftboxLab/repos',
            method: 'GET'
        }).then(
            // On success...
            (res) => {
                let repos = res.data;

                let ret = [];
                let chunk = [];

                const TAMANHO = 3;

                for (let i = 0; i < repos.length; i++) {
                    chunk.push({
                        nome: repos[i].name,
                        descricao: repos[i].description,
                        link: repos[i].url,
                        data: repos[i]
                    });

                    if (((i + 1) % TAMANHO) == 0) {
                        ret.push(chunk);
                        chunk = [];
                    }
                }

                if (chunk.length) {
                    ret.push(chunk);
                }

                return ret;
            }
        );
    }
}
