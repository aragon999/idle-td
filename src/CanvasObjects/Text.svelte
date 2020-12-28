<script>
    import { Layer } from 'svelte-canvas';

    export let color = 'hsl(0, 0%, 100%)';
    export let align = 'center';
    export let baseline = 'middle';

    export let text = '';
    export let dx = 0;
    export let dy = 0;

    export let priority = 5;

    export let fontSize = 16;
    export let fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica';

    $: render = ({ context }) => {
        if (text) {
            context.fillStyle = color;
            context.font = `${fontSize}px ${fontFamily}`;
            context.textAlign = align;
            context.textBaseline = baseline;
            context.fillText(text, dx, dy);
        }
    }
</script>

<Layer {render} priority={parseInt(priority, 10)} />
