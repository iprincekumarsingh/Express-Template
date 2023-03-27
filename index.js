const app = require('./app')

// importing dotenv
require('dotenv').config()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
}
)

