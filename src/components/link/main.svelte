<script lang="ts">
  export let href: string
</script>

<a class="text-orange-700" href={href} {...$$restProps}>
  <slot/>
</a>