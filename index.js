import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { resolvers } from './resolver.js';
// root server module
const server = new ApolloServer({
    // typeDefs - type defintion of the data 
    typeDefs,
    // resolvers - transform or fetch the data from a source
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
console.log(`🚀  Server ready at: ${url}`);