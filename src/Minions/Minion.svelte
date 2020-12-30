<script>
    import Circle from '../CanvasObjects/Circle.svelte';
    export let minion;

    let dx = 20;
    let dy = 20;

    $: dx = minion['position']['dx'];
    $: dy = minion['position']['dy'];
</script>

<Circle dx={dx} dy={dy} color="#ff0" radius=2 priority=30 />
