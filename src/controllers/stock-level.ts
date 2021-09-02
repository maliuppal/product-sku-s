import { Request, Response } from 'express';
import { getStockLevel } from '../services/stock-level';

export const stockLevel = (req: Request, res: Response) => {
    try {
        // tem added dumy sku
        const sku: string = req.body.sku || 'SAL508741/19/43';

        // as starting qty is 0
        const qty: number = 0;

        getStockLevel(sku, qty).then((data: any) => {
            if (data) {
                res.status(200).send(data);
            } else {
                res.status(404).send({ error: 'No SKU found' });
            }
        });
    } catch (err) {
        res.status(500).send({ error: 'Error while checking stock level' });
    }
};
