<script>
    import FieldNode from './FieldNode.svelte';
    import MinionSource from '../Minions/MinionSource.svelte';
    import MinionPath from './MinionPath.svelte';
    import MinionSink from '../Minions/MinionSink.svelte';
    import MinionLayer from '../Minions/MinionLayer.svelte';
    import TowerLayer from '../Tower/TowerLayer.svelte';
    import FPS from '../Game/FPS.svelte';
    import { Canvas } from "svelte-canvas";
    import { stateStore } from '../Stores/state_store.js';
    import { getContext } from 'svelte';

    const game = getContext('game');

    const nodeWidth = game['nodeWidth'],
        nodeHeight = game['nodeHeight'];
    const width = game.columns * nodeWidth,
        height = game.rows * nodeHeight;

    let selected = {
            'row': null,
            'column': null
        }, picked = selected;

    stateStore.subscribe(s => {
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
    background.src = "gfx/field.png";
</script>

<Canvas width={width} height={height}
        on:mousemove={({ clientX: x, clientY: y }) => {
            selected['row'] = Math.min(parseInt(parseInt(y / nodeHeight, 10) - 0.5, 10), game.rows - 1);
            selected['column'] = Math.min(parseInt(parseInt(x / nodeWidth, 10) + 0.5, 10), game.columns - 1);
            game.setSelected({...selected});
        }}
        on:mouseout={() => selected['row'] = selected['column'] = null}
        on:mousedown={() => {
            picked = {...selected};
            game.setPicked({...picked});

            stateStore.update(s => {
                s['activeMenu'] = 'build';
                s['pickedNode']['row'] = picked['row'];
                s['pickedNode']['column'] = picked['column'];

                return s;
            });
        }}
    >
    {#each game.fieldNodeCollection.getFieldNodes() as { row, column }, i}
        <FieldNode
            width={nodeWidth}
            height={nodeHeight}
            row={row}
            column={column}
            selected={selected['row'] === row && selected['column'] === column}
            picked={picked['row'] === row && picked['column'] === column}
            background={background}
        />
    {/each}

    <MinionSource row={game['minionSource']['row']} column={game['minionSource']['column']} nodeWidth={nodeWidth} nodeHeight={nodeHeight} />
    <MinionSink row={game['minionSink']['row']} column={game['minionSink']['column']} nodeWidth={nodeWidth} nodeHeight={nodeHeight} />

    <TowerLayer />

    <MinionLayer />

    <MinionPath />

    <FPS />
</Canvas>
