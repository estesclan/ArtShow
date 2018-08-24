require("dotenv").config()
const PORT = process.env.PORT
const app = require("express")()
const bodyParser = require("body-parser")
const cors = require("cors")

const paintings = require("./routes/paintings")
const home = require("./routes/home")
const admin = require("./routes/admin")

app.use(bodyParser.json())
app.use(cors({ credentials: true }))

paintings(app)
home(app)
admin(app)

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message)
})

app.use((err, req, res, next) => {
  console.log("error", err)
  next(err)
})

app.listen(PORT || 5000, () => console.log("UP on ", PORT || 5000))
