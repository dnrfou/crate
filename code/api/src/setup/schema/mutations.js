// Imports
import { GraphQLObjectType } from 'graphql'

// App Imports
import * as customer from '../../modules/customer/mutations'
import * as user from '../../modules/user/mutations'
import * as product from '../../modules/product/mutations'
import * as crate from '../../modules/crate/mutations'
import * as subscription from '../../modules/subscription/mutations'

// Mutation
const mutation = new GraphQLObjectType({
  name: 'mutations',
  description: 'API Mutations [Create, Update, Delete]',

  fields: {
    ...customer,
    ...user,
    ...product,
    ...crate,
    ...subscription
  }
})

export default mutation
