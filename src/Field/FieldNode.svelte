<script>
    import { Layer } from "svelte-canvas";

    export let selected = false;
    export let picked = false;
    export let row;
    export let column;
    export let width;
    export let height;
    export let background;

    $: render = ({ context }) => {
        const dx = column * width,
            dy = row * height;

        if (background.complete) {
            context.drawImage(background, dx, dy, width, height);
        } else {
            background.addEventListener('load', () => {
                context.drawImage(background, dx, dy, width, height);
            });
        }

        if (selected || picked) {
            context.strokeStyle = "#f00";
        } else {
            context.strokeStyle = "#000";
        }

        context.strokeRect(dx, dy, width, height);
    }
</script>

<Layer {render} priority={(selected || picked) && 1} />
