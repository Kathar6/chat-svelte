<script lang="ts">
  export let center: boolean = false;
</script>

<div class="text-xl p-3 {center ? "text-center" : ""}">
  <slot/>
</div>