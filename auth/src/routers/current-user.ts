import express from 'express';

const router = express.Router();

router.get('api/users/currentuser', (req, res) => {
  res.send('Hi there from router');
});

export { router as currentUserRouter }; //as using for giving alias
