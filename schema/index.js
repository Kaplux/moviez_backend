const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

// Define your types here.
const typeDefs = `
    enum SessionStatus {
        NEW
        OPEN
        CLOSED
    }
    
  type User {
    id: ID!
    firstname: String!
    lastname: String!
    email: String!
    groups: [Group]!
  }

  type Group {
    id: ID!
    name: String!
    sessions(status:SessionStatus): [Session]!
    users: [User]!
  }

  type Session {
    id: ID!
    name: String!
    status: SessionStatus!
    movies: [Movie]!
    winner: Movie
    votes: Vote

  }

  type Movie {
    id: ID!
    name: String!
    imdbURL: String!
  }

  type Vote {
    id: ID!
    user: User!
    movie: Movie!
    rank: Int!
  }

  type Query {
    allUsers: [User]!
    user(email: String!): User
  }

  type Mutation {
    addSession(groupId: ID!,name: String!): Session
  }
`;

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs, resolvers });
