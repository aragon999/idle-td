<script>
    import FieldNode from './FieldNode.svelte';
    import { Canvas } from "svelte-canvas";
    import { stateStore } from '../Stores/state_store.js';
    import { FieldNodeCollection } from './classes.js';

    export let cols,
               rows;

    const nodeWidth = 20,
          nodeHeight = 20;

    // Take the border of each cell into account
    const width = cols * nodeWidth,
          height = rows * nodeHeight;

    let selected = {
        'row': null,
        'column': null
    }, picked = selected;

    const nodeCollection = new FieldNodeCollection(rows, cols);

    stateStore.updateValue('nodeCollection', nodeCollection);

    const watch = stateStore.subscribe(s => {
        if (!s['pickedNode']) {
            picked['row'] = picked['column'] = null;

            return;
        }

        if (picked['row'] !== s['pickedNode']['row']) {
            picked['row'] = s['pickedNode']['row'];
        }

        if (picked['column'] !== s['pickedNode']['column']) {
            picked['column'] = s['pickedNode']['column'];
        }
    });

    const background = new Image();
    background.src = "../../gfx/field.png";
</script>

<Canvas width={width} height={height}
        on:mousemove={({ clientX: x, clientY: y }) => {
            selected['row'] = Math.min(parseInt(y / nodeHeight, 10), rows - 1);
            selected['column'] = Math.min(parseInt(x / nodeWidth, 10), cols - 1);
        }}
        on:mouseout={() => selected['row'] = selected['column'] = null}
        on:mousedown={() => {
            picked = selected;

            stateStore.update(s => {
                s['activeMenu'] = 'build';
                s['pickedNode']['row'] = picked['row'];
                s['pickedNode']['column'] = picked['column'];

                return s;
            });
        }}
    >
    {#each nodeCollection.getFieldNodes() as fieldNode, i}
        <FieldNode
            width={nodeWidth}
            height={nodeHeight}
            fieldNode={fieldNode}
            selected={selected['row'] === fieldNode['row'] && selected['column'] === fieldNode['column']}
            picked={picked['row'] === fieldNode['row'] && picked['column'] === fieldNode['column']}
            background={background}
        />
    {/each}
</Canvas>
