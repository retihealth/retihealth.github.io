<script setup></script>

<template>
  <div class="absolute navbar">
    <div class="flex-1">
      <router-link to="/">
        <a class="btn btn-ghost normal-case text-xl">Reti Health</a>
      </router-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li>
          <router-link to="/">
            <a>Home</a>
          </router-link>
        </li>

        <li>
          <router-link to="/team"><a>Team</a></router-link>
        </li>
      </ul>
      <div class="navbar-end">
        <a href="mailto:contact@retihealth.com" class="btn btn-primary"
          >Contact</a
        >
      </div>
    </div>
  </div>
</template>
