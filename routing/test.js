import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.json({ 'jesper' : 'cool' });
});

export default router;