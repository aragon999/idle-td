<script>
    import { stateStore } from '../Stores/state_store.js';
    import BuildMenu from './BuildMenu.svelte';
    import { getContext } from 'svelte';

    let activeMenu = 'none';
    let pickedNode = null;

    const game = getContext('game');

    stateStore.subscribe(s => {
        if (s['activeMenu'] !== activeMenu) {
            activeMenu = s['activeMenu'];
        }

        pickedNode = s['pickedNode'];
    });

    function handleCloseMenuClick () {
        stateStore.update(function (s) {
            s['activeMenu'] = 'none';
            s['pickedNode']['row'] = null;
            s['pickedNode']['column'] = null;
            return s;
        });
    }

    function handleCreateMinion () {
        game.minionCollection.createMinion('test');
    }
</script>

<div class="menu">
    {#if activeMenu === 'build'}
        <BuildMenu row={pickedNode['row']} column={pickedNode['column']} />
    {:else}
        Kein Menü
    {/if}

    <button on:mousedown={handleCreateMinion}>Minion erstellen</button>

    {#if activeMenu !== 'none'}
        <span class="close-menu"
              on:click={handleCloseMenuClick}>
            &#x2715;
        </span>
    {/if}
</div>

<style>
    .menu {
        position: relative;
        padding: 10px;
        border: 1px solid #000;
    }

    .close-menu {
        position: absolute;
        top: 10px;
        right: 10px;
        display: inline-block;
        height: 16px;
        width: 16px;
        line-height: 16px;
        border: 3px solid #000;
        background: red;
        text-align: center;
        cursor: pointer;
    }

    .close-menu:hover {
        border-color: #eee;
    }
</style>
