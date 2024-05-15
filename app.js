import express from 'express';
import indexRouter from './routes/index.js';
const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/', indexRouter);

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
