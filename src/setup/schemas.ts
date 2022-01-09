import path from 'path'

import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { ROOT_DIR } from '../constants'

const schemasPath = path.join(ROOT_DIR, 'graphql/schemas/*.gql')
const allTypeDefs = loadFilesSync(schemasPath)
const typeDefs = mergeTypeDefs(allTypeDefs)

export { typeDefs }
