# Web - Angular/ReactJS Test Assignment


URL: https://gungho0619.github.io/git-user-search/

### Additions

- [Prettier](https://prettier.io/) for the code style check and cleanup
- [Tailwind CSS](https://tailwindcss.com/) for the CSS library
- [Angular Material & CDK](https://material.angular.io) for the general UI component library
- [GitHub Pages](https://pages.github.com) for the deployment
- [Codecov](https://about.codecov.io/) for the code coverage integration and pipelines

### Git workflows

- Every push will be tested via GitHub actions passing 3 steps - build, testing, code-coverage check.
- `main` branch is connected with the server(GitHub Page), whenever you push your code to `main` branch, that will be deployed to the hosting.
- Code coverage is listed on the README.md by default, you can click this [badge](#web---angularreactjs-test-assignment) to check the report more details.
- Following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commits.

### Development guideline

After clone the repository, following steps will allow you to set up the project on the local environment. 

```bash
$ # Install packages
$ npm install
$
$ # Run project and check http://localhost:4200 from your browser
$ npm start
$
$ # Run unit test (single run - capable for CI)
$ npm run test
$
$ # Run unit test to generate code coverage
$ npm run test:cov
$
$ # Build the project in production mode
$ npm run build
$
$ # Other additional scripts can be found from the package.json - script section
```

## Original Requirements

### Search Component

This component should contain two elements:

- 'Login' Text input for entering a String value
- 'Submit' Button for initiating a request to
  `https://api.github.com/search/users?q={login} in:login`, where {login} is the input value

```bash
# Example curl GET request to search for for login `foo`
curl --request GET '[https://api.github.com/search/users?q=foo in:login](https://api.github.com/search/users?q=foo%20in:login)'
```
