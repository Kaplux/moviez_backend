const uuidv4 = require("uuid/v4");

let sessions = [
  {
    id: "1",
    name: "Session1",
    status: "OPEN",
    movies: [
      {
        id: 1,
        name: "La 5ème vague",
        imdbURL:
          "http://fr.web.img3.acsta.net/pictures/15/10/23/14/52/531725.jpg"
      },
      {
        id: 2,
        name: "Scream",
        imdbURL:
          "https://i.pinimg.com/originals/62/6e/4a/626e4a11d2686970cf40d6cbc9238f7a.jpg"
      },
      {
        id: 3,
        name: "How High",
        imdbURL:
          "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/96/51/99/20472431.jpg"
      }
    ]
  }
];

const groups = [
  { id: "1", name: "Group1", sessionIds: ["1"], userIds: ["1", "2"] }
];

const users = [
  {
    id: "1",
    firstname: "test",
    lastname: "test",
    email: "test@test.com",
    groupIds: ["1"]
  },
  {
    id: "2",
    firstname: "user2",
    lastname: "user2",
    email: "user2@test.com",
    groupIds: ["1"]
  }
];

module.exports = {
  Query: {
    allUsers: () => users,
    user: (obj, { email }, context) => users.find(user => user.email === email)
  },
  Mutation: {
    addSession: (obj, { groupId, name }) => {
      let newSessionId = uuidv4();
      let newSession = {
        id: newSessionId,
        name: name,
        status: "NEW",
        movies: []
      };
      sessions.push(newSession);
      groups.find(group => group.id == groupId).sessionIds.push(newSessionId);
      console.log(sessions);
      console.log(groups);
      return newSession;
    }
  },
  User: {
    groups(user) {
      return groups.filter(group => user.groupIds.indexOf(group.id) !== -1);
    }
  },
  Group: {
    sessions(group, args) {
      console.log(args.status);
      return sessions.filter(
        session =>
          group.sessionIds.indexOf(session.id) !== -1 &&
          session.status === args.status
      );
    },
    users(group) {
      return users.filter(user => group.userIds.indexOf(user.id) !== -1);
    }
  }
};
