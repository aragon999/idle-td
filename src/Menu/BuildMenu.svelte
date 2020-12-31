<script>
    import { getContext } from 'svelte';

    export let row;
    export let column;

    const game = getContext('game');

    function handleCreateTower() {
        game.buildTower(row, column);
    }
</script>

<p>
    Build Menu for {row} {column}
    <button
        on:mousedown={handleCreateTower}
    >Create Tower (2)</button>
</p>
