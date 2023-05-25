<script lang="ts">
  import "./input.css"

  export let id: string | undefined = undefined;
  export let label: string | undefined = undefined;
</script>


<div class="flex flex-col max-w-full">
  {#if label}
    <label class="text-sm" for={id}>{label}</label>
  {/if}
  <input class="input border rounded-md p-2" id={id} {...$$restProps}>
</div>