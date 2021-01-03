<script>
    import Tower from './Tower.svelte';
    import { getContext } from 'svelte';
    import { t } from 'svelte-canvas';

    const game = getContext('game');
    const towers = game.towerCollection.towers;

    t.subscribe(() => {
        game.towerCollection.update();
    });
</script>

{#each $towers as tower}
    <Tower tower={tower} />
{/each}
