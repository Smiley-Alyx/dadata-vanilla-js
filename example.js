// example using https://github.com/kraaden/autocomplete
import autocomplete from 'autocompleter/autocomplete';
import {DaData} from "./index";
const token = '';
const dadata = new DaData(token);
document.querySelectorAll('[data-role="input_street"]').forEach((target) => {
    const form = target.closest('form');
    autocomplete({
        input: target,
        minLength: 1,
        debounceWaitMs: 500,
        fetch(text, update) {
            text = text.toLowerCase();
            const city = form.querySelector('.bx-ui-sls-fake').title;
            if (city) {
                const query = `${city} ${text}`;

                dadata.address(query)
                    .then((result) => {
                        const data = [];
                        result.forEach((item) => {
                            if (item.data.street) {
                                data.push({
                                    label: item.value,
                                    value: item.data.street,
                                });
                            }
                        });
                        const suggestions = data.filter((n) => n.value.toLowerCase().startsWith(text));
                        update(suggestions);
                    })
                    .catch((error) => console.log('error', error));
            }
        },
        onSelect(item) {
            target.value = item.value;
        },
    });
});
