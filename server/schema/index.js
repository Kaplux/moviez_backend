const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");

// Define your types here.
const typeDefs = `
  type User {
    id: ID!
    firstname: String!
    lastname: String!
    groups: [Group]!
  }

  type Group {
    id: ID!
    name: String!
    sessions: [Session]!
    users: [User]!
  }

  type Session {
    id: ID!
    name: String!
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
  }
`;

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs, resolvers });
