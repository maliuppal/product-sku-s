import { getFileData } from '../common/common';

const getTransactionsData = (sku: string) => {
    return new Promise((resolve, reject) => {
        getFileData('assets/transactions.json')
            .then((transactions: any) => {
                transactions = JSON.parse(transactions);
                let skuTransactions: any = transactions.filter((transaction: any) => transaction.sku === sku);
                resolve(skuTransactions);
            })
            .catch((err) => {
                console.error(err);
                reject(err);
            });
    });
};

export { getTransactionsData };
