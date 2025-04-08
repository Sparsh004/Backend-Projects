const express = require('express');
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");


//dot en configuration
dotenv.config();

//DB connection
const connectDB= require('./config/database');
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//route
// URL => http://localhost:8080
app.use("/api/v1/test", require("./routes/testRoute"));
app.use("/api/v1/auth", require("./routes/authRoute"));
app.use("/api/v1/user", require("./routes/userRoute"));
app.use("/api/v1/resturant", require("./routes/restaurantRoute"));
app.use("/api/v1/category", require("./routes/categoryRoute"));
app.use("/api/v1/food", require("./routes/foodRoute"));

app.get("/", (req, res) => {
  return res
    .status(200)
    .send("<h1>Welcome to Food Server APP API BASE PROJECT </h1>");
});

//PORT
const PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});