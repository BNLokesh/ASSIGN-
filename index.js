const express = require('express');
const multer = require('multer');
const Post = require('./models/post');

const app = express();
app.use(express.json());

// Endpoint to Get All Posts
app.get('/posts', async (req, res) => {

  try {
    const posts = await Post.findAll();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Endpoint to Create a Post
const upload = multer({ dest: 'uploads/' });
app.post('/posts', upload.single('image'), async (req, res) => {
  try {
    const { title, desc, tag } = req.body;
    const imageUrl = req.file.path; // Assuming image upload saves to local directory
    const post = await Post.create({ title, desc, tag, imageUrl });
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
