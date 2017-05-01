import logger from 'morgan'
import compress from 'compression'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import methodOverride from 'method-override'
import helmet from 'helmet'
import { compose } from 'compose-middleware'

const middlewares = [
  logger('dev'),
  compress(),
  cookieParser(),
  helmet(),
  methodOverride(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json()
]

export errorHandler from './errorhandler'

export default () => compose(middlewares)
