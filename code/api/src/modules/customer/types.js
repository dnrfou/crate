// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// User type
const CustomerType = new GraphQLObjectType({
  name: 'customer',
  description: 'Customer type',

  fields: () => ({
    id: { type: GraphQLInt },
    image: { type: GraphQLString },
    name: { type: GraphQLString },
    birthday: { type: GraphQLString },
    gender: { type: GraphQLString },
    job: { type: GraphQLString }
  })
})

export { CustomerType }