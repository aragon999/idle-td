<script>
    import Minion from './Minion.svelte';
    import { getContext } from 'svelte';
    import { t } from 'svelte-canvas';

    const game = getContext('game');
    const minions = game.minionCollection.minions;

    t.subscribe(() => {
        game.minionCollection.update();
    });
</script>

{#each $minions as minion}
    <Minion minion={minion} />
{/each}
