//: migrations 디렉토리 앞 붙여지는 숫자대로 실행된다.
const Migrations = artifacts.require("Migrations");

module.exports = function (deployer) {
    deployer.deploy(Migrations);
}