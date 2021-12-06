import 'graphql-import-node'

import http from 'http'

import { Application } from 'express'
import { ApolloServer } from 'apollo-server-express'
import { GraphQLSchema } from 'graphql'

interface Server {
  schema: GraphQLSchema
  app: Application
}

export async function createServer({ schema, app }: Server) {
  const httpServer = http.createServer(app)
  const apolloServer = new ApolloServer({ schema })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app, path: 'api' })
  return { httpServer, apolloServer }
}