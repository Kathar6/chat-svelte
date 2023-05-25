<script lang="ts">
  // Components
  import "iconify-icon"

  import Card from "$lib/components/card/main.svelte";
  import CardHeader from "$lib/components/card/header.svelte";
  import CardContent from "$lib/components/card/content.svelte";
  import Input from "$lib/components/input/main.svelte"
  import Button from "$lib/components/button/main.svelte";
  import Link from "$lib/components/link/main.svelte"

  function onLogin(event: Event) {
    console.log(event)
  }

</script>

<Card>
  <CardHeader center>
    <div class="flex items-center flex-col">
      <iconify-icon class="text-orange-700" icon="jam:message" width="40"></iconify-icon>
      Login
    </div>
  </CardHeader>
  <CardContent>
    <form class="flex flex-col gap-2 w-3/4" on:submit|preventDefault={onLogin} >
      <Input label="Email" type="email" placeholder="Email" required/>
      <Input label="Password" type="password" placeholder="Password" required/>
      <Button type="submit">Login</Button>
      <small>
        Don't have an account yet? <Link href="/register">Register</Link>
      </small>
    </form>
  </CardContent>
</Card>