require("dotenv").config()
const PouchDB = require("pouchdb-core")
PouchDB.plugin(require("pouchdb-adapter-http"))

const COUCHDB_SERVER = process.env.COUCHDB_SERVER
const COUCHDB_DBNAME = process.env.COUCHDB_DBNAME
const DB_URL = `${COUCHDB_SERVER}${COUCHDB_DBNAME}`

const db = new PouchDB(DB_URL)

db.bulkDocs([
  {
    _id: "painting_blue-harbor",
    name: "Blue Harbor",
    type: "painting",
    subject: ["sunsets", "boats", "water"],
    paintingType: ["reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  },
  {
    _id: "painting_charleston-egret",
    name: "Charleston Egret",
    type: "painting",
    subject: ["wildlife", "water", "day-scenes"],
    paintingType: ["original", "reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  },
  {
    _id: "painting_harbor-race",
    name: "Harbor Race",
    type: "painting",
    subject: ["boats", "water", "day-scenes", "people"],
    paintingType: ["reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  },
  {
    _id: "painting_charleston-harbor-sunset",
    name: "Charleston Harbor Sunset",
    type: "painting",
    subject: ["boats", "water", "sunsets"],
    paintingType: ["original", "reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  },
  {
    _id: "painting_church-street-by-night",
    name: "Church Street by Night",
    type: "painting",
    subject: ["cityscapes", "people", "night-scenes"],
    paintingType: ["reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  },
  {
    _id: "painting_lights-on-broad-street",
    name: "Lights on Broad Street",
    type: "painting",
    subject: ["cityscapes", "people", "night-scenes"],
    paintingType: ["reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  },
  {
    _id: "painting_lionfish-azure",
    name: "Lionfish Azure",
    type: "painting",
    subject: ["wildlife", "water", "underwater"],
    paintingType: ["original", "reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  },
  {
    _id: "painting_lovers-on-calhoun-and-king",
    name: "Lovers on Calhoun and King",
    type: "painting",
    subject: ["cityscapes", "people", "night-scenes"],
    paintingType: ["original", "reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  },
  {
    _id: "painting_magnolia-memories",
    name: "Magnolia Memories",
    type: "painting",
    subject: ["people", "day-scenes"],
    paintingType: ["original", "reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  },
  {
    _id: "painting_myrtle-strand",
    name: "Myrtle Strand",
    type: "painting",
    subject: ["cityscapes", "water", "night-scenes"],
    paintingType: ["reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  },
  {
    _id: "painting_old-town-evening",
    name: "Old Town Evening",
    type: "painting",
    subject: ["cityscapes", "night-scenes"],
    paintingType: ["reproduction"],
    sizes: ["18x24"],
    jpegData: ""
  },
  {
    _id: "painting_porgy-and-bess-picnic",
    name: "Porgy and Bess Picnic",
    type: "painting",
    subject: ["people", "day-scenes"],
    paintingType: ["original", "reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  },
  {
    _id: "painting_ravenel-sunrise",
    name: "Ravenel Sunrise",
    type: "painting",
    subject: ["water", "people", "boats", "day-scenes"],
    paintingType: ["reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  },
  {
    _id: "painting_restful-anchor",
    name: "Restful Anchor",
    type: "painting",
    subject: ["water", "boats", "sunsets"],
    paintingType: ["original", "reproduction"],
    sizes: ["18x24", "24x36"],
    jpegData: ""
  },
  {
    _id: "painting_shem-creek-shrimper",
    name: "Shem Creek Shrimper",
    type: "painting",
    subject: ["water", "boats", "sunsets"],
    paintingType: ["reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  },
  {
    _id: "painting_sirens-song",
    name: "Siren's Song",
    type: "painting",
    subject: ["water", "people", "underwater"],
    paintingType: ["reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  },
  {
    _id: "painting_snob-in-rain",
    name: "Snob in Rain",
    type: "painting",
    subject: ["cityscapes", "people", "day-scenes"],
    paintingType: ["reproduction"],
    sizes: ["18x24", "24x36"],
    jpegData: ""
  },
  {
    _id: "painting_strike-indigo",
    name: "Strike Indigo",
    type: "painting",
    subject: ["water", "wildlife", "underwater"],
    paintingType: ["reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  },
  {
    _id: "painting_summer-memories",
    name: "Summer Memories",
    type: "painting",
    subject: ["water", "people", "sunsets"],
    paintingType: ["reproduction"],
    sizes: ["18x24", "24x36"],
    jpegData: ""
  },
  {
    _id: "painting_sunrise-serenade",
    name: "Sunrise Serenade",
    type: "painting",
    subject: ["water", "boats", "day-scenes"],
    paintingType: ["original", "reproduction"],
    sizes: ["18x24", "24x36"],
    jpegData: ""
  },
  {
    _id: "painting_sunset-tides",
    name: "Sunset Tides",
    type: "painting",
    subject: ["water", "boats", "sunsets", "people"],
    paintingType: ["reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  },
  {
    _id: "painting_that-crab",
    name: "That Crab",
    type: "painting",
    subject: ["wildlife", "day-scenes"],
    paintingType: ["reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  },
  {
    _id: "painting_vibrant-marsh",
    name: "Vibrant Marsh",
    type: "painting",
    subject: ["water", "wildlife", "day-scenes"],
    paintingType: ["reproduction"],
    sizes: ["18x24", "24x36", "32x48"],
    jpegData: ""
  }
])
  .then(result => console.log("success", JSON.stringify(result, null, 2)))
  .catch(err => console.log("err", err))
