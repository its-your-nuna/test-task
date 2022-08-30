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

const db = client.db("21goal");
const collection = db.collection("21goal");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tasks", async (req, res) => {
  const result = await collection.find({}).toArray();

  res.send(result);
});

app.post("/tasks", async (req, res) => {
  const { content} = req.body;
  const response = await collection.insertOne({
    content
  });

  const result = {
    id: response.insertedId,
    content
  };

  res.send(result);
});

app.put("/tasks/:id", async (req, res) => {
  const { content} = req.body;
  const { id } = req.params;

  await collection.updateOne(
    {
      _id: new ObjectId(id),
    },
    {
      $set: {
        content
      },
    }
  );

  const result = {
    _id: id,
    content
  };

  res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});