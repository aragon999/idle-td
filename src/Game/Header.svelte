<script>
    import { getContext } from 'svelte';

    const game = getContext('game');

    const minions = game.minionCollection.minions;
    const currentGold = game.currentGold

    let minonsOnField = 0;

    $: minonsOnField = $minions.length
</script>

<header>
    <span>Current Minions in Game {minonsOnField}</span>
    <span>Current Gold {$currentGold}</span>
</header>

<style type="text/scss">
    header {
        position: relative;
        padding: 10px;
        border: 1px solid #000;

        span {
            display: block;
        }
    }
</style>
