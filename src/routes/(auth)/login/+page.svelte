<script lang="ts">
  // Components
  import "iconify-icon"

  import Card from "$components/card/main.svelte";
  import CardHeader from "$components/card/header.svelte";
  import CardContent from "$components/card/content.svelte";
  import Input from "$components/input/main.svelte"
  import Button from "$components/button/main.svelte";
  import Link from "$components/link/main.svelte"
</script>

<Card>
  <CardHeader center>
    <div class="flex items-center flex-col">
      <iconify-icon class="text-orange-700" icon="jam:message" width="40"></iconify-icon>
      Login
    </div>
  </CardHeader>
  <CardContent>
    <div class="flex flex-col gap-2 w-3/4">
      <Input label="Email" placeholder="Email"/>
      <Input label="Password" placeholder="Password"/>
      <Button>Login</Button>
      <small>
        Don't have an account yet? <Link href="/register">Register</Link>
      </small>
    </div>
  </CardContent>
</Card>