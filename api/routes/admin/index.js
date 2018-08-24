const NodeHTTPError = require("node-http-error")
const { propOr, isEmpty } = require("ramda")
const { editPainting } = require("../../dal")
const bodyParser = require("body-parser")

const adminRoutes = app => {
  app.put("/paintings", bodyParser.json(), (req, res, next) => {
    const painting = propOr({}, "body", req)
    if (isEmpty(painting)) {
      next(
        new NodeHTTPError(
          400,
          "No valid JSON document was provided in the request body."
        )
      )
    }
    editPainting(painting)
      .then(result => {
        res.status(200).send(result)
      })
      .catch(error => {
        next(new NodeHTTPError(error.status, error.message, error))
      })
  })
}

module.exports = adminRoutes
