const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/type-defs");
const { Query, Mutation, Product, Category } = require("./schema/resolvers");
const { db } = require("./database/db");

const PORT = 4000
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Category,
    Product,
  },
  context: {
    db,
  },
});

server.listen(PORT).then(({ url }) => {
  console.log("Server is up at " + url);
});