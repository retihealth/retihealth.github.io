<script setup></script>

<template>
  <div class="navbar">
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
        <li tabindex="0">
          <a>
            FAQs
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 bg-base-100">
            <li><a>For Patients</a></li>
            <li><a>For Optometrists</a></li>
          </ul>
        </li>
      </ul>
      <div class="navbar-end">
        <a class="btn">Contact</a>
      </div>
    </div>
  </div>
</template>
