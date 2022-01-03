// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import { CustomerType } from './types'
import { getAll, getById, login, getGenders } from './resolvers'

// All
export const customers = {
  type: new GraphQLList(CustomerType),
  resolve: getAll
}

// By ID
export const customer = {
  type: CustomerType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: getById
}

