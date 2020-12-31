<script>
    import { getContext } from 'svelte';

    const game = getContext('game');

    const minions = game.minionCollection.minions;
    let minonsOnField = 0;

    $: minonsOnField = $minions.length
</script>

<header>
    <span>Current Minions in Game {minonsOnField}</span>
</header>

<style>
    header {
        position: relative;
        padding: 10px;
        border: 1px solid #000;
    }
</style>
