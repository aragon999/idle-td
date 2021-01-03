<script>
    import { Layer } from 'svelte-canvas';
    export let tower;
</script>

<Layer render={tower.renderer} priority={30} />
