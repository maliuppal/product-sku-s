import fs from 'fs';

const getFileData = (fileName: string) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data.toString());
        });
    });
};

export {
    getFileData
};
