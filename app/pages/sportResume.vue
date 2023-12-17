<script setup lang="ts">

</script>

<template>
  <div class="bg-base-200">
    <div class="container mx-auto">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src="/pictures/face.jpg" class="max-w-sm rounded-lg shadow-2xl"/>
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
        <h1 class="text-2xl font-bold mb-4">Club history</h1>
        <h3 class="text-lg font-semibold">FBK Škorpioni Ostrava</h3>
        <p class="text-sm w-100 text-gray-600">2005-2013</p>
        <div class="p-4">
          <ul class="list-disc pl-4">
            <li>Original club.</li>
          </ul>
        </div>

        <div class="divider"></div>

        <div class="grid grid-flow-col">
          <div>
            <h3 class="text-lg font-semibold">1. SC. Vítkovice</h3>
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
          </div>

          <div>
            <div>
              <h3 class="text-xl">A - team statistics</h3>
              <div class="overflow-x-auto">
                <table class="table table-md">
                  <thead>
                  <tr>
                    <th>Season</th>
                    <th class="text-center">Matches</th>
                    <th class="text-center">Goals</th>
                    <th class="text-center">Assists</th>
                    <th class="text-center">Points</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th>2023/2024</th>
                    <td class="text-center">11</td>
                    <td class="text-center">7</td>
                    <td class="text-center">4</td>
                    <td class="text-center">11</td>
                  </tr>
                  <tr>
                    <th>2022/2023</th>
                    <td class="text-center">35</td>
                    <td class="text-center">19</td>
                    <td class="text-center">15</td>
                    <td class="text-center">34</td>
                  </tr>
                  <tr>
                    <th>2021/2022</th>
                    <td class="text-center">35</td>
                    <td class="text-center">14</td>
                    <td class="text-center">15</td>
                    <td class="text-center">29</td>
                  </tr>
                  <tr>
                    <th>2020/2021</th>
                    <td class="text-center">34</td>
                    <td class="text-center">17</td>
                    <td class="text-center">13</td>
                    <td class="text-center">30</td>
                  </tr>
                  <tr>
                    <th>2019/2020</th>
                    <td class="text-center">28</td>
                    <td class="text-center">16</td>
                    <td class="text-center">18</td>
                    <td class="text-center">32</td>
                  </tr>
                  <tr>
                    <th>2018/2019</th>
                    <td class="text-center">33</td>
                    <td class="text-center">9</td>
                    <td class="text-center">20</td>
                    <td class="text-center">29</td>
                  </tr>
                  <tr>
                    <th>2017/2018</th>
                    <td class="text-center">31</td>
                    <td class="text-center">7</td>
                    <td class="text-center">9</td>
                    <td class="text-center">16</td>
                  </tr>
                  <tr>
                    <th>2016/2017</th>
                    <td class="text-center">13</td>
                    <td class="text-center">2</td>
                    <td class="text-center">3</td>
                    <td class="text-center">5</td>
                  </tr>
                  <tr class="text font-bold">
                    <th class="font-normal">Sumarry</th>
                    <td class="text-center">209</td>
                    <td class="text-center">91</td>
                    <td class="text-center">97</td>
                    <td class="text-center">186</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


        <div class="divider"></div>
        <h3 class="text-lg font-semibold">Florbal MB</h3>
        <p class="text-sm w-100 text-gray-600">2023-present</p>
        <div class="p-4">
          <ul class="list-disc pl-4">
            <li>Season is still running.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-base-200">
    <div class="container mx-auto">
      <div class="py-6 p-4 mb-24">
        <div>
          <div class="grid grid-flow-col">
            <div>
              <h1 class="text-2xl font-bold mb-4">National teams</h1>
              <h3 class="text-lg font-semibold">Junior national team</h3>
              <p class="text-sm w-100 text-gray-600">2017</p>
              <div class="p-4">
                <ul class="list-disc pl-4">
                  <li>First matches in national team.</li>
                </ul>
              </div>


              <h3 class="text-lg font-semibold mt-4">Men's national team</h3>
              <p class="text-sm w-100 text-gray-600">(2019 - present)</p>
              <div class="p-4">
                <ul class="list-disc pl-4">
                  <li>Stable player of Czech national team.</li>
                  <li>1x World Championships runner up.</li>
                  <li>1x World Championships bronze medal.</li>
                </ul>
              </div>
            </div>
            <div>
              <div>
                <h3 class="text-xl">A - team statistics</h3>
                <div class="overflow-x-auto">
                  <table class="table table-md">
                    <thead>
                    <tr class="border-black">
                      <th>Season</th>
                      <th class="text-center">Matches</th>
                      <th class="text-center">Goals</th>
                      <th class="text-center">Assists</th>
                      <th class="text-center">Points</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="border-black">
                      <th>2023/2024</th>
                      <td class="text-center">5</td>
                      <td class="text-center">1</td>
                      <td class="text-center">1</td>
                      <td class="text-center">2</td>
                    </tr>
                    <tr class="border-black">
                      <th>2022/2023</th>
                      <td class="text-center">14</td>
                      <td class="text-center">10</td>
                      <td class="text-center">2</td>
                      <td class="text-center">12</td>
                    </tr>
                    <tr class="border-black">
                      <th>2021/2022</th>
                      <td class="text-center">16</td>
                      <td class="text-center">4</td>
                      <td class="text-center">1</td>
                      <td class="text-center">5</td>
                    </tr>
                    <tr class="border-black">
                      <th>2019/2020</th>
                      <td class="text-center">12</td>
                      <td class="text-center">2</td>
                      <td class="text-center">0</td>
                      <td class="text-center">2</td>
                    </tr>
                    <tr class="text font-bold border-black">
                      <th class="font-normal">Sumarry</th>
                      <td class="text-center">47</td>
                      <td class="text-center">17</td>
                      <td class="text-center">4</td>
                      <td class="text-center">21</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
