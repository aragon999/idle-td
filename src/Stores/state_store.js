import { writable } from 'svelte/store';

export const stateStore = writable({
    'activeMenu': 'none',
    'activeField': {
        'row': null,
        'column': null,
    }
});
