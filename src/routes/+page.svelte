<script context="module" lang="ts">
    import {marked} from 'marked';
    import { page } from '$app/stores';
    import "../app.css";
</script>

<script lang="ts">
    let code = $page.data.code;
    let htmlContent = marked(code) || "";

    $: {
        htmlContent = marked(code);
    }
</script>
<div class="text-white w-full h-full">
    <h3 class="p-3 text-2xl font-bold">Error Log</h3>
    <pre class="m-5">
        <code data-language="python" class="bg-stone-800 p-8 block text-sm">{code}</code>
    </pre>
</div>
