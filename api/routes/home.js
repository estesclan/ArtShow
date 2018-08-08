const NodeHTTPError = require("node-http-error")

const home = app => {
  app.get("/", (req, res, next) => {
    res.status(200).send("Mood")
  })
}

module.exports = home
