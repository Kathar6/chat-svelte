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
    <div class="flex flex-col gap-2 w-3/4">
      <Input label="Email" type="email" placeholder="Email"/>
      <Input label="Password" type="password" placeholder="Password"/>
      <Input label="Confirm Password" name="confirm-password" placeholder="Password"/>
      <Button>Register</Button>
      <small>
        Already have an account? <Link href="/login">Log in</Link>
      </small>
    </div>
  </CardContent>
</Card>