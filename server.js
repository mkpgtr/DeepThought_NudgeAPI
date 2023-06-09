const express = require('express')

require('dotenv').config()
const app = express()
const dbConfig = require('./config/dbConfig')
const YAML = require('yamljs');
const helmet = require('helmet')
const xss = require('xss-clean')
const rateLimiter = require('express-rate-limit')
const swaggerDocument = YAML.load('./swagger.yaml');
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const nudgeRoutes = require('./routes/nudgeRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const eventRoutes = require('./routes/eventRoutes.js')
const eventTypeRoutes = require('./routes/eventTypeRoutes.js')
const eventImageRoute = require('./routes/eventImageRoute.js')
const subCategoryRoute = require('./routes/subCategoryRoutes.js')
const nudgeImageRoutes = require('./routes/nudgeImageRoute.js')
const authRoutes= require('./routes/authRoutes')
const base_url = 'api/v3/app'

const cors = require('cors')


app.set('trust proxy', 1)
app.use(rateLimiter({ 
    windowMs:15 * 60 * 1000,
    max: 100
}))
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(xss())

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(`/${base_url}/auth`,authRoutes)
app.use(`/${base_url}/events`,eventRoutes)
app.use(`/${base_url}/nudge`,nudgeRoutes)
app.use(`/${base_url}/nudge/image`,nudgeImageRoutes)
app.use(`/${base_url}/users`,userRoutes)
app.use(`/${base_url}/images`,eventImageRoute)
app.use(`/${base_url}/eventCategory`,eventTypeRoutes)
app.use(`/${base_url}/subCategory`,subCategoryRoute)



const port = process.env.PORT || 5000

app.listen(5000,()=>{
    console.log(`app is running on port ${port}`)
})
