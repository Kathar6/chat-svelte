<script lang="ts">
  import Card from "$lib/components/card/main.svelte";
  import CardHeader from "$lib/components/card/header.svelte";
  import CardContent from "$lib/components/card/content.svelte";
  import Input from "$lib/components/input/main.svelte"
  import Button from "$lib/components/button/main.svelte";
  import Link from "$lib/components/link/main.svelte"

  const onSubmit = () => {
    
  }

</script>

<Card>
  <CardHeader center>
    <div class="flex items-center flex-col">
      Register
    </div>
  </CardHeader>
  <CardContent>
    <form method="post" class="flex flex-col gap-2 w-3/4">
      <Input name="email" label="Email" type="email" placeholder="Email"/>
      <Input name="password" label="Password" type="password" placeholder="Password"/>
      <Input name="confirm-password" label="Confirm Password" type="password" placeholder="Password"/>
      <Button>Register</Button>
      <small>
        Already have an account? <Link href="/login">Log in</Link>
      </small>
    </form>
  </CardContent>
</Card>