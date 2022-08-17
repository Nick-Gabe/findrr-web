import { createServer } from 'miragejs'
import routes from './routes/index'
import seeds from './seeds'

export default function (environment = 'development') {
  createServer({
    environment,
    routes,
    seeds,
  })
}
