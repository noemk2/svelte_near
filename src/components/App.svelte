<script>
  export let nearConfig, walletConnection, currentUser;

  const signIn = () => {
    walletConnection.requestSignIn(nearConfig.contractName, "Near Quest Book");
  };

  const signOut = () => {
    walletConnection.signOut();
    window.location.replace(window.location.origin + window.location.pathname);
  };

</script>

<h1>Hello svelte-near!</h1>


{#if currentUser}
  <button on:click="{signOut}">Sign Out</button>
  {:else}
  <button on:click="{signIn}">Log In</button>
{/if}

<style>
  h1 {
    text-align: center;
  }
</style>
