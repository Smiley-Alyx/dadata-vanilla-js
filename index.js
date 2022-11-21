'use strict';
export class DaData {
    constructor(token) {
        this.token = token;
    }

    address(query) {
        const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
        const options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Token ${this.token}`,
            },
            body: JSON.stringify({ query }),
        };
        return new Promise((resolve, reject) => {
            fetch(url, options)
                .then((response) => response.text())
                .then((result) => {
                    const data = JSON.parse(result);
                    resolve(data.suggestions);
                })
                .catch((error) => reject(error));
        });
    }
}
