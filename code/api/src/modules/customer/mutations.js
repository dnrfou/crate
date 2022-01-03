// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { CustomerType } from './types'
import { create, remove } from './resolvers'

// Create
export const customerSignup = {
  type: CustomerType,
  args: {
    image: {
      name: 'image',
      type: GraphQLString
    },
    name: {
      name: 'name',
      type: GraphQLString
    },
    birthday: {
      name: 'birthday',
      type: GraphQLString
    },
    gender: {
      name: 'gender',
      type: GraphQLString
    },
    job: {
      name: 'jobgender',
      type: GraphQLString
    }
  },
  resolve: create
}
