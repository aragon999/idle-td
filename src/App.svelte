<script lang="ts">
    import { setContext } from 'svelte';

    import Field from './Field/Field.svelte';
    import Menu from './Menu/Menu.svelte';
    import Header from './Game/Header.svelte';
    import { Game } from './Core/Game.js';

    const game = new Game(20, 20, {'row': 4, 'column': 3}, {'row': 13, 'column': 17});

    setContext('game', game);
</script>

<main>
    <Header />
    <Field />
    <Menu />
</main>
