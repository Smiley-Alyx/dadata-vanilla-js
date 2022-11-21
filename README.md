# [Dadata.ru](https://dadata.ru/api/suggest/address/) address on vanilla js

Implementation of DaData address on vanilla JS

# Usage
```
const token = '';
const dadata = new DaData(token);
dadata.address(query)
.then((result) => {
    console.log(result);
})
.catch((error) => console.log('error', error));
```

More usage in example.js
