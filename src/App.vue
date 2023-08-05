<template>
  <div id="app" class="container">
    <TheNav />
    <RouterView />
    <ReloadPrompt />
  </div>
</template>

<style>
/*header {
  line-height: 1.5;
  max-height: 100vh;
}*/

.logo {
  display: block;
  margin: 0 auto 2rem;
}


/*nav {
  width: 100vw;
  font-size: 12px;
  text-align: center;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}*/

a.router-link-exact-active {
  color: var(--color-text);
  background-color: lightblue;
}

a.router-link-exact-active:hover {
  background-color: lightpink;
}




/*@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}*/
</style>
