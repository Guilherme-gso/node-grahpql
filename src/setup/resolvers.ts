import path from 'path'

import { loadFilesSync } from '@graphql-tools/load-files'
import { mergeResolvers } from '@graphql-tools/merge'
import { ROOT_DIR } from '../constants'

const resolversPath = path.join(ROOT_DIR, 'graphql/resolvers/index.ts')
const allResolvers = loadFilesSync(resolversPath)
const resolvers = mergeResolvers(allResolvers)

export { resolvers }
