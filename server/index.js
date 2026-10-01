require('dotenv').config();
const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
const express = require('express');
const cors = require("cors");
const app = express();

require("dotenv").config();
require("./config/dbConfig");

const userRoute = require("./routes/userRoutes");
const movieRoute = require("./routes/movieRoutes");
const theatreRoute = require("./routes/theatreRoutes");
const bookingRoute = require("./routes/bookingRoutes");


app.use(cors({
  origin: "http://localhost:3000",
  // origin: "https://chiragbms.vercel.app", // your frontend URL
  credentials: true
}));
app.get('/',(req,res)=>{
  res.send("Hello World! I am running!");
});
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/movie", movieRoute);
app.use('/api/theatre', theatreRoute);
app.use('/api/bookings', bookingRoute);

app.listen(8082, () => {
  console.log('Server is running on http://localhost:8082');
});