const mongoose = require('mongoose')
mongoose.connect(`${process.env.DATABASE_URL}`, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify:false })

// mongodb://127.0.0.1:27017/feedback