import express, { Request, Response, Router } from 'express';

interface User {
  id: number;
  name: string;
  email: string;
}

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'johndoe@example.com' },
  { id: 2, name: 'Jane Doe', email: 'janedoe@example.com' },
  { id: 3, name: 'Bob Smith', email: 'bobsmith@example.com' }
];

const router: Router = express.Router();

/* GET users listing. */
router.get('/', function(req: Request, res: Response) {
  res.render('users', { title: 'Users', users: users });
});

/* POST add user. */
router.post('/', function(req: Request, res: Response) {
  const { name, email } = req.body;
  const id = users.length + 1;
  users.push({ id, name, email });
  res.redirect('/users');
});

/* POST remove user. */
router.post('/:id/delete', function(req: Request, res: Response) {
  const { id } = req.params;
  const index = users.findIndex(user => user.id === parseInt(id));
  if (index !== -1) {
    users.splice(index, 1);
  }
  res.redirect('/users');
});

export default router;
