<script>
    import { getContext } from 'svelte';
    import { Layer } from 'svelte-canvas';

    const game = getContext('game');

    const nodeWidth = game.nodeWidth,
          nodeHeight = game.nodeHeight;

    $: render = ({ context }) => {
        context.strokeStyle = '#0f0'
        context.beginPath();
        context.moveTo((game.minionSource['column'] + 0.5) * nodeWidth, (game.minionSource['row'] + 0.5) * nodeHeight);
        for (let i = 0; i < game.path.length; i++) {
            context.lineTo((game.path[i]['column'] + 0.5) * nodeWidth, (game.path[i]['row'] + 0.5) * nodeWidth);
        }

        context.stroke();
    };
</script>

<Layer render={render} priority={5} />
