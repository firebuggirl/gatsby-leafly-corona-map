# How to do audits w/ Yarn

`npm i --package-lock-only`

`npm audit`

`npm audit fix`

`rm package-lock.json`//avoid a conflict w/ `yarn.lock`

`yarn audit`//error

- update your version of Yarn

`curl --compressed -o- -L https://yarnpkg.com/install.sh | bash`
