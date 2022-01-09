import 'graphql-import-node'

import http from 'http'
import express from 'express'

import { ApolloServer } from 'apollo-server-express'
import { schema } from './schema'

const app = express()
const PORT = process.env.PORT ?? 3333

export async function createServer() {
  const httpServer = http.createServer(app)
  const apolloServer = new ApolloServer({ schema })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app, path: 'api' })

  httpServer.listen(PORT, () => {
    const serverPath = `http://localhost:${PORT}/${apolloServer.graphqlPath}`
    console.log(`Server listen on: ${serverPath}`)
  })
}

createServer()
