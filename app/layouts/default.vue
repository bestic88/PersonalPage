<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <NuxtLink to='/myWork'><li><a>My work</a></li></NuxtLink>
          <li>
            <a>Resume</a>
            <ul class="p-2">
              <NuxtLink to='/personalResume'><li><a>
                Personal Resume</a></li></NuxtLink>
              <NuxtLink to='/sportResume'><li><a>
                Sport Resume</a></li></NuxtLink>
            </ul>
          </li>
        </ul>
      </div>
      <NuxtLink to='/'><a class="btn btn-ghost text-primary text-xl">Home</a></NuxtLink>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <NuxtLink to='/myWork'><li><a>My work</a></li></NuxtLink>
        <li>
          <details>
            <summary>Resume</summary>
            <ul class="p-2 z-50 w-48">
              <NuxtLink to='/personalResume'><li><a>
                Personal Resume</a></li></NuxtLink>
              <NuxtLink to='/sportResume'><li><a>
                Sport Resume</a></li></NuxtLink>
            </ul>
          </details>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <Contact :id="'modal_1'"/>
    </div>
  </div>
  <div>
    <slot />
  </div>
  <LayoutFooter />
</template>
<script setup lang="ts">
import Contact from "~/components/contact.vue";
</script>