<script>
    import { stateStore } from '../Stores/state_store.js';

    export let row;
    export let column;

    let nodeFieldSelected = false;

    function handleFieldNodeClick () {
        stateStore.update(function (s) {
            s['activeMenu'] = 'build';
            s['activeField']['row'] = row;
            s['activeField']['column'] = column;
            return s;
        });
    }

    const watch = stateStore.subscribe(value => {
        if (value['activeField']['row'] === row
               && value['activeField']['column'] === column) {
            nodeFieldSelected = true;
        } else {
            nodeFieldSelected = false;
        }
    });
</script>

<span on:click={handleFieldNodeClick}
      class="{nodeFieldSelected ? 'is-selected' : ''}"><img src="gfx/field.png"></span>

<style>
    span {
        display: inline-block;
        width: 20px;
        height: 20px;
        padding: 0;
        margin: 1px;
        border: 2px solid #000;
        cursor: pointer;
    }

    span img {
        max-width: 100%;
        max-height: 100%;
        vertical-align: top;
    }

    .is-selected {
        border-color: red;
    }

    span:hover {
        border-color: #ffcccb;
    }
</style>
