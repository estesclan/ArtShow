const NodeHTTPError = require("node-http-error")
//const {pathOr} = require("ramda")
const { getPaintings } = require("../../dal")

const paintingRoutes = app => {
  app.get("/paintings", (req, res, next) => {
    getPaintings()
      .then(paintings => res.status(200).send(paintings))
      .catch(err => {
        next(new NodeHTTPError(err.status, err.message, err))
      })
  })
}

module.exports = paintingRoutes
