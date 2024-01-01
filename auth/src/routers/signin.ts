import express from 'express';

const router = express.Router();

router.post('api/users/signin', (req, res) => {
  res.send('Hi there from router');
});

export { router as signinRouter }; //as using for giving alias
