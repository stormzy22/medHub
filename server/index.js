const express = require("express");
const mongoose = require("mongoose");
const route = require("./router/routes");

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000/" }));

app.use("/api", route);

const PORT = process.env.PORT || 4000;

const server = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/register", {
      useFindAndModify: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`server started`);
    app.listen(PORT, (err) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      console.log(`server started at port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

server();
