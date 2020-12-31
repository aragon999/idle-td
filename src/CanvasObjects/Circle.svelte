<script>
    import { Layer } from "svelte-canvas";

    export let dx, dy,
        radius,
        color,
        priority;

    $: render = ({ context }) => {
        context.fillStyle = color;
        context.beginPath();
        context.arc(dx, dy, radius, 0, 2 * Math.PI);
        context.fill();
    }
</script>

<Layer {render} priority={parseInt(priority, 10)} />
