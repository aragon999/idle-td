<script>
    export let width;
    export let height;

    import FieldNode from './FieldNode.svelte';
</script>

{#each {length: height} as _, i}
    {#each {length: width} as _, j}
        <FieldNode row={i} column={j} />
    {/each}
    <br>
{/each}
