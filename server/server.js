/**TODO
 *
 * 1) Find a way to test if this express.urlencoded is working properly
 */

const path = require("path");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.use(express.urlencoded({ extended: false })); //this will parse url encoded data

app.use(express.json()); //call the function so that it parses any json data that we may receieve from req.body in the routes

app.use(morgan("dev"));

// app.get("/api/test", (req, res) => {
//   console.log("Test page was hit");
//   res.send({ hello: "world" });
// }); //you need a / before api for this page to get hit

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
}); //see if there's a better way then this or how did we used to do this before with router?

app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
  // or
  // res.status(404).json({ error: "Page Not Found" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
