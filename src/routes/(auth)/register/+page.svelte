<script lang="ts">
  import Card from "$components/card/main.svelte";
  import CardHeader from "$components/card/header.svelte";
  import CardContent from "$components/card/content.svelte";
  import Input from "$components/input/main.svelte"
  import Button from "$components/button/main.svelte";
  import Link from "$components/link/main.svelte"

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
    <div class="flex flex-col gap-2 w-3/4">
      <Input label="Email" name="email" placeholder="Email"/>
      <Input label="Password" name="password" placeholder="Password"/>
      <Input label="Confirm Password" name="confirm-password" placeholder="Password"/>
      <Button>Register</Button>
      <small>
        Already have an account? <Link href="/login">Log in</Link>
      </small>
    </div>
  </CardContent>
</Card>