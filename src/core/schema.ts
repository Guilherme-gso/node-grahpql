import { makeExecutableSchema } from '@graphql-tools/schema'
import { resolvers, typeDefs } from '../setup'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})
