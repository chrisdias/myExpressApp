import express, { Request, Response } from 'express';
const router = express.Router();

interface Product {
  sku: number;
  name: string;
  price: number;
  quantity: number;
}

/**
 * Array of products.
 * @type {Product[]}
 */

let products: Product[] = [
  { sku: 1, name: 'Super Soaker 3000', price: 9.99, quantity: 10 },
  { sku: 2, name: 'Giant Teddy Bear', price: 19.99, quantity: 5 },
  { sku: 3, name: 'Rainbow Unicorn Slippers', price: 29.99, quantity: 2 }
];

// GET all products
router.get('/', (req: Request, res: Response) => {
  res.json(products);
});

// POST a new product
router.post('/', (req: Request, res: Response) => {
  const newProduct: Product = req.body;
  products.push(newProduct);
  res.json(newProduct);
});

// DELETE a product by ID
router.delete('/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  products = products.filter(product => product.sku !== Number(id));
  res.json({ message: `Product with ID ${id} has been deleted.` });
});

export default router;
