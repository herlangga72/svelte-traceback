<script context="module" lang="ts">
    import { page } from '$app/stores';
    import "../app.css";
</script>

<script lang="ts">
    let code = $page.data.code;
</script>
<style>
code {
	counter-reset: step;
	counter-increment: step calc(var(--start, 1) - 1);
}</style>

<div class="text-white w-full h-full">
    <h3 class="p-3 text-2xl font-bold">Error Log</h3>
    <pre class="m-5">
        <code>
            {@html code}
        </code>
    </pre>
</div>
