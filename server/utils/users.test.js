const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

beforeEach(() => {
  users = new Users();
  users.users = [{
    id: 1,
    name: 'Michel',
    room: 'Thread'
  }, {
    id: 2,
    name: 'Farid',
    room: 'Some Other Thread'
  }, {
    id: 3,
    name: 'Ndodo',
    room: 'Thread'
  }]
})

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Julien',
      room: 'Some room'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var user = users.removeUser(1);
    expect(user.id).toBe(1);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    // id not in the seed array
    var user = users.removeUser(99);
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var user = users.getUser(1);
    expect(user).toEqual(users.users[0]);
  });

  it('should not find user', () => {
    var user = users.getUser(99);
    expect(user).toNotExist();
  });

  it('should return names for room: Thread', () => {
    var userList = users.getUserList('Thread');
    expect(userList).toEqual(['Michel', 'Ndodo']);
  });

  it('should return names for room: Some Other Thread', () => {
    var userList = users.getUserList('Some Other Thread');
    expect(userList).toEqual(['Farid']);
  });
});
