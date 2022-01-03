// Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// App Imports
import serverConfig from '../../config/server'
import params from '../../config/params'
import models from '../../setup/models'


// Get by ID
export async function getById(parentValue, { id }) {
  return await models.Customer.findOne({ where: { id } })
}

// Get all
export async function getAll() {
  return await models.Customer.findAll()
}

