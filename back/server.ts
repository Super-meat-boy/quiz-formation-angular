import express from 'express';
import serveIndex from 'serve-index';
import cors from 'cors';
import { QuizzMap } from '../front/src/app/interface/quizz-map';
import fs from 'fs';

const app = express();

app.use(cors());
app.use(express.json());

let quizzMap: QuizzMap;
try {
  const str = fs.readFileSync('data.json', { encoding: 'utf8' });
  quizzMap = JSON.parse(str);
} catch (err) {}

app.get('/v1/quizz', (req, res, next) => {
  res.json(quizzMap);
});

app.post('/v1/quizz', (req, res, next) => {
  quizzMap = req.body;
  fs.writeFileSync('data.json', JSON.stringify(quizzMap, undefined, 2));
  res.status(201).end();
});

// quelque soit le verbe http et le '.' indique le répertoire actuel
const www = '../front/dist/front';
app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

// sers à mettre un système de navigation
app.use(serveIndex('.', { icons: true }));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
