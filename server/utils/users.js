// addUser(id, name, room)
//removeUser(id)
// getUser(id)
// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    //return user that was removed
    var user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => {
        return user.id !== id;
      })
    }

    return user
  }
  getUser(id) {
    // return user object

    var users = this.users.filter((user) => {
      return user.id === id;
    });
    return users[0];
  }
  getUserList(room) {
    // return an array of strings (name)
    var users = this.users.filter((user) => {
      return user.room === room;
    });
    var namesArray = users.map((user) => {
      return user.name;
    });
    return namesArray;
  }
}

module.exports = {Users};
