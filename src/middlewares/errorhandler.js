import { errors } from 'compose-middleware'

const handlers = [
  (err, req, res, next) => {
    res.render('error', {
      message: err.message,
      error: {},
      title: 'error'
    })
  }
]

export default () => errors(handlers)
