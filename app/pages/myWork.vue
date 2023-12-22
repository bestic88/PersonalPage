<script setup lang="ts">

</script>

<template>
  <div class="container mx-auto px-4">
    <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
      <div class="card card-compact w-50 bg-base-100 shadow-xl">
        <figure class="bg-black"><img src="/pictures/autolaros.webp" alt="autolaros"/></figure>
        <div class="card-body">
          <h2 class="card-title">Autolaros</h2>
          <p>Loading and filtering cars. Everything what is on subdom vozy.autolaros.cz.
            Created in Slim framework with twig.</p>
          <div class="card-actions justify-end">
            <a href="https://vozy.autolaros.cz/Cars">
              <button class="btn btn-primary">Check it</button>
            </a>
          </div>
        </div>
      </div>

      <div class="card card-compact w-50 bg-base-100 shadow-xl">
        <figure><img src="/pictures/sokol.jpg" alt="sokol"/></figure>
        <div class="card-body">
          <h2 class="card-title">Sokol Poruba</h2>
          <p>Internal system. Not public.
         Created in Slim framework with twig.</p>

          <div class="card-actions justify-end">
            <a href="https://www.sokolporuba.cz/">
              <button class="btn btn-primary">Check it</button>
            </a>
          </div>
        </div>
      </div>

      <div class="card card-compact w-50 bg-base-100 shadow-xl">
        <figure class="p-3"><img src="/pictures/logo.svg" alt="diploma"/></figure>
        <div class="card-body">
          <h2 class="card-title">Final master thesis</h2>
          <p>Not public. Graphical system for semi formal modeling of processes based on formal restriction.
          Created in TypeScript. Frameworks Nuxt.js, Nest.js. Database MariaDB. If needed repository available.</p>
          <div class="card-actions justify-end">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>