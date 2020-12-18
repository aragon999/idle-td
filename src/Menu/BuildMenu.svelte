<script>
    import { stateStore } from '../Stores/state_store.js';

    export let row;
    export let column;

    function handleCreateTower() {
        stateStore.update(s => {
            const fieldNode = s['nodeCollection'].getFieldNode(row, column);

            if (fieldNode) {
                fieldNode.setTower('test');
            }

            return s;
        });
    }
</script>

<p>
    Build Menu for {row} {column}
    <button
        on:mousedown={handleCreateTower}
    >Create Tower</button>
</p>
