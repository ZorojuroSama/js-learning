const accountId = 412345
let accountEmail = "shsh@gmail.com"
var accountPassword = "789456"
accountCity = "Tilak Nagar"
let accountState;

// accountId = 2 // not allowed
// we don't use "var" nowadays because of its SCOPE.
/*

*/

accountEmail = "hshs@gmail.com"
accountPassword = "123456"
accountCity = "Uttam Nagar"
accountState = "Delhi"

// console.log() used to print multiple "items/variable" in a tabular layout.
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
