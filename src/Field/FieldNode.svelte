<script>
    import { Layer } from "svelte-canvas";

    export let selected = false;
    export let picked = false;
    export let width;
    export let height;
    export let fieldNode;
    export let background;

    $: render = ({ context }) => {
        const dx = fieldNode['column'] * width,
              dy = fieldNode['row'] * height;

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
