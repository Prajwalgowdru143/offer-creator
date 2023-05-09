import express from "express";
import data from "./data.js";
import mongoose from "mongoose";
import Videos from "./dbModel.js";

const connectionUrl =
  "mongodb+srv://prajwal:BscCKXugNt4F5gTk@cluster.xnluhlu.mongodb.net/?retryWrites=true&w=majority";

const app = express();
const port = 8000;

app.use(express.json());
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Headers','*'),
    next()

})

mongoose
  .connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.status(200).send("hello World"));

app.get("/v2/posts", (req,res)=>{
  Videos.find()
  .then(() => {
      res.status(200).send(res);
  })
  .catch(() => {
      res.status(500).send(err);
  });
})

app.post("/v2/posts", (req, res) => {
const dbVideos = req.body;
Videos.create(dbVideos)
  .then(() => {
      res.status(201).send(dbVideos);
  })
  .catch(() => {
      res.status(500).send(err);
  });
});

app.listen(port, () => console.log(`listening on localhost: ${port}`));
