const NodeHTTPError = require("node-http-error")
//const {pathOr} = require("ramda")
const { editPainting } = require("../../dal")
const bodyParser = require("body-parser")

const adminRoutes = app => {
  app.put("/paintings/:id", bodyParser.json(), (req, res, next) => {
    const painting = propOr({}, "body", req)
    // console.log(JSON.stringify(newResource))
    if (isEmpty(painting)) {
      next(
        new NodeHTTPError(
          400,
          "No valid JSON document was provided in the request body."
        )
      )
      return
    }
  })
}

module.exports = adminRoutes
