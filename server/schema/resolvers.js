const sessions = [
  {
    id: 1,
    name: "Session1",
    movies: [
      {
        id: 1,
        name: "La 5ème vague",
        imdbURL: "http://www.imdb.com/title/tt2304933/"
      }
    ]
  }
];

const groups = [{ id: 1, name: "Group1", sessionIds: [1], userIds: [1, 2] }];

const users = [
  {
    id: 1,
    firstname: "test",
    lastname: "test",
    email: "test@test.com",
    groupIds: [1]
  },
  {
    id: 2,
    firstname: "user2",
    lastname: "user2",
    email: "user2@test.com",
    groupIds: [1]
  }
];

module.exports = {
  Query: {
    allUsers: () => users,
    user: (obj, { email }, context) => users.find(user => user.email === email)
  },
  User: {
    groups(user) {
      return groups.filter(group => user.groupIds.indexOf(group.id) !== -1);
    }
  },
  Group: {
    sessions(group) {
      return sessions.filter(
        session => group.sessionIds.indexOf(session.id) !== -1
      );
    },
    users(group) {
      return users.filter(user => group.userIds.indexOf(user.id) !== -1);
    }
  }
};
