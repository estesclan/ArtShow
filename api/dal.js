const PouchDB = require("pouchdb-core")
PouchDB.plugin(require("pouchdb-adapter-http"))
const COUCHDB_SERVER = process.env.COUCHDB_SERVER
const COUCHDB_DBNAME = process.env.COUCHDB_DBNAME
const DB_URL = `${COUCHDB_SERVER}${COUCHDB_DBNAME}`

const { map, prop } = require("ramda")

const db = new PouchDB(DB_URL)

const getPaintings = () =>
  db
    .allDocs({
      include_docs: true,
      startkey: "painting_",
      endkey: "painting_\ufff0"
    })
    .then(docs => map(prop("doc"), docs.rows))

module.exports = { getPaintings }
