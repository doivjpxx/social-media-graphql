const { ApolloServer, gql } = require('apollo-server');

require('dotenv').config();

const typeDefs = gql`
  type Query {
    sayHi: String!
  }
`;

const resolvers = {
  Query: {
    sayHi: () => 'Hi world !'
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
})

server.listen(process.env.PORT).then(res => console.log(`Server is running at ${res.url}`)).catch(err => console.error(err));
