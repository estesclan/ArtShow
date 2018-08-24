# ArtShow
Full Stack app using JavaScript/React/Redux/Express - With the ArtShow app, prospective art buyers are able to select artwork based on criteria such as subject matter, size, etc… as well as being able to update/edit individual paintings in the database. All within an intuitive UI/UX experience.


## Getting Started

This section is intended for software developers. If you have rights to the repo, simply clone. If not, you may fork and clone the repo.

After you fork, clone, and install dependencies:

```
git clone <clone url>
cd ArtShow
npm install
```

## Environment Variables

You'll need to create a local **.env** file to store your application's secrets and other configuration values. Follow these steps to generate and store the secrets.

1.  `PORT` - Create a `PORT` environment variable. Set the value to an unused port number for your machine.
2.  `COUCH_HOSTNAME=https://{user}:{pwd}@{dbhostname}/`
3.  `COUCH_DBNAME=paintings`

**.env** file example:

```
PORT=5000
COUCH_HOSTNAME=OUCH_HOSTNAME=https://admin:Password@peterestes.jrscode.cloud/
COUCH_DBNAME=ArtShow
```

## Load some test data

Optionally, you can load some test data in your CouchDB database by running `npm run load`. This will take the array of document within **load-data.js** and bulk add them into the database.

```
npm run load
```

## Start the api

Run the following command to start the api on the designated port.

```
npm start
```

**Example of Data**

```
{
"_id": "painting_blue-harbor",
"_rev": "10-2a10c288f15fe81d8d133032c26bb56b",
"name": "Blue Harbor",
"type": "painting",
"subject": [
"sunsets",
"boats",
"water"
],
"paintingType": [
"original",
"reproduction"
],
"sizes": [
"18x24",
"24x36",
"32x48"
],
"jpegData": "Blue-Harbor",
"aspectRatio": "H"
}

