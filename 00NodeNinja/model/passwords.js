// Secure Users & Passwords NOT TO PUSH to GIT
// NB! Add this file to .gitingore

// ref :https://javascript.info/private-protected-properties-methods

/*

user : netninja
pass : N3tninJA.2022

Conncection String

mongodb+srv://<username>:<password>@cluster0.xxtzh.mongodb.net/?retryWrites=true&w=majority


*/

class SecretUser {
  #username = null;
  #password = null;
  #uri = null;

  constructor(username, password, urI) {
    this.username = username;
    this.password = password;
    this.uri = urI;
  }

  getUsername() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }

  getUri() {
    let templateStr = this.uri;
    let $username = this.getUsername();
    let $password = this.getPassword();
    templateStr = templateStr.replace("<username>", $username);
    templateStr = templateStr.replace("<password>", $password);
    return templateStr;
  }
}

// custom account fails
// const atlasUser = new SecretUser(
//   "netnija",
//   "N3tninJA2022",
//   "mongodb+srv://<username>:<password>@cluster0.xxtzh.mongodb.net/?retryWrites=true&w=majority"
// );

const atlasUser = new SecretUser(
  "m001-student",
  "m001-mongodb-basics",
  "mongodb+srv://<username>:<password>@cluster0.xxtzh.mongodb.net/netninjas"
);

console.log(atlasUser.getUsername());
console.log(atlasUser.getPassword());
console.log(atlasUser.getUri());

module.exports = atlasUser;
