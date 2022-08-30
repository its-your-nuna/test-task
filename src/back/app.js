import { ObjectId, MongoClient } from "mongodb";
import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const port = 5001;

const uri = "mongodb+srv://aidvna:young505@cluster0.ae2ybj6.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
client
  .connect()
  .then(() => {
    console.log("connected!");
  })
  .catch((err) => {
    console.log(err);
  });

const db = client.db("users_db");
const collection = db.collection("users_db");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", async (req, res) => {
  const result = await collection.find({}).toArray();

  res.send(result);
});

app.post("/users", async (req, res) => {
  const { content} = req.body;
  const response = await collection.insertOne({
    avatar,
    email,
    password,
    first_name,
    last_name
  });

  const result = {
    id: response.insertedId,
    avatar,
    email,
    password,
    first_name,
    last_name
  };

  res.send(result);
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});