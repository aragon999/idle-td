<script>
    import Text from '../CanvasObjects/Text.svelte';
    import { t } from 'svelte-canvas';

    let text = '';

    let frames = 0;
    let prevTime = $t;

    $: text = $t && getText();

    const getText = function() {
        let time = $t;

        frames++;
        if (time >= prevTime + 1000) {
            const fps = ((frames * 1000) / (time - prevTime));
            text = `${fps.toFixed(1)} FPS`;
            prevTime = time;
            frames = 0;
        }

        return text;
    };
</script>

<Text text={text} fontSize=12 fontFamily='Courier New' align='left' baseline='top' dy={20} dx={20} />
