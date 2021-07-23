<template>
  <div id="app">
    <!--  INÍCIO NAVBAR-->
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <div class="container">
        <a class="navbar-brand order-md-last">Hero List</a>
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">
            Register New Hero
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/list-hero">List All Heroes</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- FIM NAVBAR-->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>
