import express from 'express';

const router = express.Router();

router.post('api/users/signout', (req, res) => {
  res.send('Hi there from router');
});

export { router as signoutRouter }; //as using for giving alias
