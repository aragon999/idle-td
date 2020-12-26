import { writable } from 'svelte/store';

export const stateStore = writable({
    'activeMenu': 'none',
    'pickedNode': {
        'row': null,
        'column': null,
    },
    'nodeCollection': null,
});

stateStore['updateValue'] = (name, value) => {
    stateStore.update(s => {
        s[name] = value;

        return s;
    });
}
