<script lang="ts">
    import { setContext } from 'svelte';

    import Field from './Field/Field.svelte';
    import Menu from './Menu/Menu.svelte';
    import { Game } from './Core/Game.js';

    const game = new Game(20, 20);

    setContext('game', game);
</script>

<main>
    <Field />
    <Menu />
</main>
