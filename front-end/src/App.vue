<template>
  <main>
    <nav class="navbar navbar-expand navbar-dark" style="background-color: #53534c;">
      <router-link to="/" class="navbar-brand">Carpentry Management</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/activities" class="nav-link">Activity List</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add Activity</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3" >
      <router-view />
    </div>
  </main>

  <footer class="text-center">
      <img
          src="./assets/logo.png"
          style="max-width: 12.5%; margin-left: auto; margin-right: auto; display: block;" />
    <section class="mb-4">
      <p>Created by group G06</p>
    </section>
  </footer>
</template>

<style type="text/css">
  body {
    background: #ECEEDB !important;  /* Adding !important forces the browser to overwrite the default style applied by Bootstrap */
  }
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  main {
    flex-grow: 1 !important;
  }
  p, h4, label, li, b, select {color: #53534c !important;}
</style>

<script>
export default {
  name: "app"
};
</script>