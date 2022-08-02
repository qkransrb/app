const express = require("express");
const cors = require("cors");
const path = require("path");
const { config } = require("dotenv");

const app = express();

config();

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

if (NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, process.env.STATIC_PATH)));
  app.get("*", (req, res) => {
    return res.sendFile(path.resolve(__dirname, process.env.STATIC_FILE_PATH));
  });
}

app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`);
});
