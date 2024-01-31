const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config({ path: "./config.env" });

async function main() {
  const dbUri = process.env.ATLAS_URI;
  const client = new MongoClient(dbUri);

  try {
    await client.connect();
    const collections = await client.db('Event').collections();
    collections.forEach((collection) => console.log(collection.s.namespace.collection));
  } catch (err) {
    console.log(err);
  }
}

main();