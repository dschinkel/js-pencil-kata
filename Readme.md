
# JS Pencil Kata
This kata was composed by a group of prisoners at the Marion Correctional Institution in Marion, OH as a way to teach test-driven developmentto one another

# Setup
run command `yarn`

# Tests

To run from command-line: yarn mocha-test
- `yarn test-mocha`

#### From IntelliJ Test Runner
For IntelliJ or WebStorm, if running the test GUI runner, set "Mocha Options" to the following: `-r @babel/register -r src/test/test.config.js --recursive src/test -w`

![example of running tests with mocha](https://github.com/dschinkel/nodejs-kata-scaffolding/raw/master/images/intellij-mocha-test-configuration.png)

![example of running tests with mocha](https://github.com/dschinkel/nodejs-kata-scaffolding/raw/master/images/intellij-mocha-test-gui-run.png)