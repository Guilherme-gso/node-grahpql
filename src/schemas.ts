import { makeExecutableSchema } from '@graphql-tools/schema'
import { resolvers } from './resolvers'
import typeDefs from './schema.gql'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export { schema }
