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
<h3 class="p-3 text-2xl font-bold">Error Log</h3>
<pre class="p-5">
  {@html htmlContent}
</pre>

<!-- Load function to get query parameter -->
