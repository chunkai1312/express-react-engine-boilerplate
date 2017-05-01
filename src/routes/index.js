import { Router } from 'express'
import { main } from '../controllers'

const router = Router()
  .get('/', main.index)
  .get('/about', main.about)
  .get('/*', main.notFound)

export default () => router
