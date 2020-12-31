<script>
    import { Layer } from "svelte-canvas";
    import { getContext } from 'svelte';

    export let selected = false;
    export let picked = false;
    export let row;
    export let column;
    export let width;
    export let height;
    export let background;

    const game = getContext('game');
    const fieldNodeIdx = game.fieldNodeCollection.getFieldNodeIndex(row, column);

    let fieldNode;

    $: render = ({ context }) => {
        const dx = column * width,
            dy = row * height;

        fieldNode = game.fieldNodeCollection.getFieldNodeByIndex(fieldNodeIdx);

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

        if (fieldNode.getTower()) {
            context.strokeStyle = "#000";

            context.beginPath();
            context.arc(dx + (width / 2), dy  + (width / 2), width / 4, 0, 2 * Math.PI);
            context.stroke();
        }
    }
</script>

<Layer {render} priority={(selected || picked) && 1} />
