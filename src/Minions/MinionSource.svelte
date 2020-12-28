<script>
    import Circle from '../CanvasObjects/Circle.svelte';

    export let column;
    export let row;
    export let nodeWidth;
    export let nodeHeight;
    export let color = '#f00';

    column = parseInt(column, 10);
    row = parseInt(row, 10);

    const dx = (column + 0.5) * nodeWidth;
    const dy = (row + 0.5) *  nodeHeight;
</script>

<Circle dx={dx} dy={dy} color={color} radius={nodeHeight / 2.5} priority=10 />
