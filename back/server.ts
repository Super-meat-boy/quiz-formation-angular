import express from "express";
import serveIndex from "serve-index";
const app = express();

// quelque soit le verbe http et le '.' indique le répertoire actuel
const www = "../front/dist/front";
app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

// sers à mettre un système de navigation
app.use(serveIndex(".", { icons: true }));

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
