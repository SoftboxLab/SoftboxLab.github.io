SoftboxLab.github.io
===================

Página de exibição dos projetos open source da Softbox. Contribuições a páinga e aos projetos são bem vindas.


Esta página foi construída seguindo o template [NG6 starter](https://github.com/AngularClass/NG6-starter).

# Dependências

O que você precisa para desenvolver:
* node e npm.
* jspm
* gulp
* karma
* karma-cli


# Instalação

Siga o passo-a-passo para a monstagem do ambiente para o desenvolvimento.

Instalar as dependências do projeto.
```
npm i
```

Instalar o Gulp.

```
npm install -g gulp
```

A postinstall deverá instalar automaticamente o jspm, caso não seja instalado, executar o comando abaixo.
```
jspm install
```

# Executando a Aplicação

```
gulp
```

# Deploy

```
gulp build
git push origin `git subtree split --prefix dist master`:master --force
```
