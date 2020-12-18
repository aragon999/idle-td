<script>
    import { stateStore } from '../Stores/state_store.js';

    let activeMenu = 'none';
    let activeField = null;

    const watch = stateStore.subscribe(value => {
        if (value['activeMenu'] !== activeMenu) {
            activeMenu = value['activeMenu'];
        }

        activeField = value['activeField'];
    });

    function handleCloseMenuClick () {
        stateStore.update(function (s) {
           s['activeMenu'] = 'none';
           s['activeField']['row'] = null;
           s['activeField']['column'] = null;
           return s;
       });
    }

    import BuildMenu from './BuildMenu.svelte';
</script>

<div class="menu">
    {#if activeMenu === 'build'}
        <BuildMenu row={activeField['row']} column={activeField['column']} />
    {:else}
        Kein Menü
    {/if}

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
