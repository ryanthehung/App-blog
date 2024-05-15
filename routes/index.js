import express from 'express';
const router = express.Router();

let posts = [];

router.get('/', (req, res) => {
  res.render('index', { posts: posts });
});

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', (req, res) => {
  // const { title, content } = req.body;
  posts.push({ title, content });
  res.redirect('/');
  console.log(req.body);
  console.log(posts);
});

// Routes for edit and delete will be added here
router.get('/edit/:index', (req, res) => {
  const post = posts[req.params.index];
  res.render('edit', { post: post, index: req.params.index });
});

router.post('/edit/:index', (req, res) => {
  const { title, content } = req.body;
  posts[req.params.index] = { title, content };
  res.redirect('/');
});

router.post('/delete/:index', (req, res) => {
  posts.splice(req.params.index, 1);
  res.redirect('/');
});

export default router;
