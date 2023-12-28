<script setup lang="ts">

import RepreStatistics from "~/components/tables/repreStatistics.vue";
import VitkyStatistics from "~/components/tables/vitkyStatistics.vue";
import BolkaStatistics from "~/components/tables/bolkaStatistics.vue";
</script>

<template>
  <div class="bg-base-200">
    <div class="container mx-auto">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src="/pictures/repre_hlava.jpg" class="max-w-sm rounded-lg shadow-2xl"/>
        <div>
          <h1 class="text-4xl font-bold">Ing. Jiří Besta</h1>
          <p class="py-6">My name is Jiří Besta I am 24 years old and I am currently playing for Florbal Mladá Boleslav.
            I started play floorball when I was 5 years old in small floorball club FBK Škorpioni Ostrava
            where I played for 8 years. Then I moved to elite floorball team 1. SC Vítkovice.
            In this club I played most of my carer and after 10 seasons I moved to my current club Florbal MB.</p>

          <h2 class="text-2xl font-bold">Basic information</h2>
          <div class="mt-4 flex items-center">
            <Icon class="text-xl" name="i-material-symbols-calendar-month"/>
            <p class="ml-2">Birthday: 19.4.1999</p>
          </div>
          <div class="mt-4 flex items-center">
            <Icon class="text-xl" name="i-mdi-weight-kilogram"/>
            <p class="ml-2">Weight: 83 kg</p>
          </div>
          <div class="mt-4 flex items-center">
            <Icon class="text-xl" name="i-mdi-human-male-height-variant"/>
            <p class="ml-2">Height: 185 cm</p>
          </div>
          <div class="mt-4 flex items-center">
            <Icon class="text-xl" name="i-mdi-hockey-sticks"/>
            <p class="ml-2">Grip: Left</p>
          </div>
          <div class="mt-4 flex items-center">
            <Icon class="text-xl" name="i-ic-baseline-place"/>
            <p class="ml-2">Current club: Florbal MB</p>
          </div>
          <div class="mt-4 flex items-center">
            <Icon class="text-xl" name="i-ic-baseline-house"/>
            <p class="ml-2">Original club: FBK Škorpioni Ostrava</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto">
    <div class="py-6 p-4">
      <div>
        <h1 class="text-3xl font-bold mb-8">Club history</h1>
        <h3 class="text-2xl font-semibold">FBK Škorpioni Ostrava</h3>
        <p class="text-sm w-100 text-gray-600">2005-2013</p>
        <div class="p-4">
          <ul class="list-disc pl-4">
            <li>Original club.</li>
          </ul>
        </div>

        <div class="divider"></div>

        <div class="grid grid-cols-2 grid-flow-col">
          <div>
            <h3 class="text-2xl font-semibold">1. SC. Vítkovice</h3>
            <p class="text-sm w-100 text-gray-600">2013-2023</p>
            <div class="p-4">
              <ul class="list-disc pl-4">
                <li>From junior categories to A-team.</li>
                <li>1x League champion</li>
                <li>3x League runner up</li>
                <li>2x Cup winner</li>
                <li>1x Cup runner up</li>
              </ul>
            </div>
            <div class="h-96 carousel carousel-vertical m-1 rounded-box">
              <div class="carousel-item h-full">
                <img src="/pictures/vitky.jpg"/>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h3 class="text-xl">A - team statistics</h3>
              <VitkyStatistics/>
            </div>
          </div>
        </div>

        <div class="divider"></div>

        <div class="grid grid-cols-2 grid-flow-col">
          <div>
            <h3 class="text-2xl font-semibold">Florbal MB</h3>
            <p class="text-sm w-100 text-gray-600">2023-present</p>
            <div class="p-4">
              <ul class="list-disc pl-4">
                <li>Season is still running.
                </li>
              </ul>
            </div>
            <div class="h-96 carousel carousel-vertical m-1 rounded-box">
              <div class="carousel-item h-full">
                <img src="/pictures/bolka.jpg"/>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h3 class="text-xl">A - team statistics</h3>
              <BolkaStatistics/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-base-200">
    <div class="container mx-auto">
      <div class="py-6 p-4 mb-24">
        <div>
          <div class="grid grid-cols-2 grid-flow-col">
            <div>
              <h1 class="text-3xl font-bold mb-4">National teams</h1>
              <h3 class="text-2xl font-semibold">Junior national team</h3>
              <p class="text-sm w-100 text-gray-600">2017</p>
              <div class="p-4">
                <ul class="list-disc pl-4">
                  <li>First matches in national team.</li>
                </ul>
              </div>

              <h3 class="text-2xl font-semibold mt-4">Men's national team</h3>
              <p class="text-sm w-100 text-gray-600">2019 - present</p>
              <div class="p-4">
                <ul class="list-disc pl-4">
                  <li>Stable player of Czech national team.</li>
                  <li>1x World Championships runner up.</li>
                  <li>1x World Championships bronze medal.</li>
                </ul>
              </div>
              <div class="h-96 carousel carousel-vertical m-1 rounded-box">
                <div class="carousel-item h-full">
                  <img src="/pictures/repre.jpg"/>
                </div>
              </div>
            </div>
            <div>
              <div>
                <h3 class="text-xl">A - team statistics</h3>
                <RepreStatistics/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
