import express from "express";
import cors from "cors";
import router from "./routes/index.js";
const app = express();
app.use(cors());
app.use('/tmdb', router);
app.listen(5001, () => {
  console.log('Listening on port 5001')
})