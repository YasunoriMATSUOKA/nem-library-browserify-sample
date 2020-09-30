const nem = require("nem-library");
nem.NEMLibrary.bootstrap(nem.NetworkTypes.MAIN_NET);
const dummyPrivateKey =
  "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef";
const account = nem.Account.createWithPrivateKey(dummyPrivateKey);
const address = account.address.plain();
console.log(address);
