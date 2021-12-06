import express from 'express'
import { createServer } from './server'
import { schema } from './schemas'

const app = express()
const PORT = process.env.PORT || 3333

createServer({ app, schema })
  .then(({ httpServer, apolloServer }) => {
    httpServer.listen(PORT, () => {
      console.log(`Server Running on PORT: http://localhost:3333/${apolloServer.graphqlPath}`)
    })
  })
  .catch(err => console.error(err))