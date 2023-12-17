<script setup lang="ts">

</script>

<template>
  <div class="bg-base-200">
    <div class="container mx-auto">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src="/pictures/face.jpg" class="max-w-sm rounded-lg shadow-2xl"/>
        <div>
          <h1 class="text-4xl font-bold">Ing. Jiří Besta</h1>
          <p class="py-6">My name is Jiří Besta I am 24 years old. Currently I live in Mladá Boleslav and I am a
            software
            developer and also professional floorball player. I am a graduate of the VSB - Technical University of
            Ostrava
            in the field of software engineering.</p>

          <h2 class="text-2xl font-bold">Basic information</h2>
          <div class="mt-4 flex items-center">
            <Icon class="text-xl" name="i-material-symbols-calendar-month" />
            <p class="ml-2">Birthday: 19.4.1999</p>
          </div>
          <div class="mt-4 flex items-center">
            <Icon class="text-xl" name="i-material-symbols-call" />
            <p class="ml-2">Phone: +420 777 781 718</p>
          </div>
          <div class="mt-4 flex items-center">
            <Icon class="text-xl" name="i-material-symbols-mail" />
            <p class="ml-2">Email: bestji@seznam.cz</p>
          </div>
          <div class="mt-4 flex items-center">
            <Icon class="text-xl" name="i-ic-baseline-place" />
            <p class="ml-2">Living: Mladá Boleslav/Ostrava</p>
          </div>
          <div class="mt-4 flex items-center">
            <Icon class="text-xl" name="i-ic-sharp-directions-car" />
            <p class="ml-2">Driving license: B</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto">
    <div class="py-6 p-4">
      <div>
        <h1 class="text-2xl font-bold mb-4">Work experience</h1>
        <h3 class="text-lg font-semibold">Web application development</h3>
        <p class="text-sm w-100 text-gray-600">Hubio s.r.o, Ostrava (2020- present)</p>
        <div class="p-4">
          <ul class="list-disc pl-4">
            <li>Software engineering application in the development of websites and applications using modern web
              technologies.
            </li>
            <li>Customer communication to gather initial requirements and ongoing consultation with stakeholders during
              system development.
            </li>
            <li>Modification and maintenance of created systems.</li>
          </ul>
        </div>
        <div class="divider"></div>
        <h3 class="text-lg font-semibold">Shop manager</h3>
        <p class="text-sm w-100 text-gray-600">4sport-florbal, Ostrava (2018-2021)</p>
        <div class="p-4">
          <ul class="list-disc pl-4">
            <li>Management of the assortment in the floorball store.</li>
            <li>Selling assortment in a floorball store.</li>
            <li>Communication with customers and establishing business cooperation.</li>
            <li>Stand sales at various sports events.</li>
          </ul>
        </div>
        <div class="divider"></div>
        <h3 class="text-lg font-semibold">IT experience</h3>
        <p class="text-sm w-100 text-gray-600">RELIGIS s.r.o, Ostrava (2017)</p>
        <div class="p-4">
          <ul class="list-disc pl-4">
            <li>Professional experience during studies at the Secondary Industrial School of Electrical Engineering and
              Informatics in Ostrava.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-base-200">
    <div class="container mx-auto">
      <div class="py-6 p-4">
        <div>
          <h1 class="text-2xl font-bold mb-4">Education</h1>
          <h3 class="text-lg font-semibold">Bc, VSB - Technical University of Ostrava</h3>
          <p class="text-sm w-100 text-gray-600">(2018- 2021)</p>
          <div class="mt-2">
            <p>Successfully completed bachelor's full-time study at the prestigious VSB - Technical University of
              Ostrava.</p>
          </div>
          <div class="divider"></div>
          <h3 class="text-lg font-semibold mt-4">Ing, VSB - Technical University of Ostrava</h3>
          <p class="text-sm w-100 text-gray-600">(2021- 2023)</p>
          <div class="mt-2">
            <p>Successfully completed master's full-time study focused on software engineering.</p>
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto">
    <div class="p-4 py-6 mb-24 ">
      <div>
        <h1 class="text-2xl font-bold mb-4">Skils</h1>
        <div class="grid grid-cols-4 gap-1">
          <div>
            <p><h2 class="text-xl">Software design</h2></p>
            <p><h2 class="text-xl">PHP</h2></p>
            <p><h2 class="text-xl">JavaScript</h2></p>
            <p><h2 class="text-xl">TypeScript</h2></p>
            <p><h2 class="text-xl">Git/Jira design</h2></p>
            <p><h2 class="text-xl">HTML/CSS</h2></p>
          </div>

          <div>
            <p>
              <Rating :order='1' :rating='4'/>
            </p>
            <p>
              <Rating :order='2' :rating='4'/>
            </p>
            <p>
              <Rating :order='3' :rating='4'/>
            </p>
            <p>
              <Rating :order='4' :rating='3'/>
            </p>
            <p>
              <Rating :order='5' :rating='3'/>
            </p>
            <p>
              <Rating :order='6' :rating='5'/>
            </p>
          </div>

          <div>
            <p><h2 class="text-xl">MySQL</h2></p>
            <p><h2 class="text-xl">Python</h2></p>
            <p><h2 class="text-xl">C#</h2></p>
            <p><h2 class="text-xl">Teamwork</h2></p>
            <p><h2 class="text-xl">Communication</h2></p>
            <p><h2 class="text-xl">Agile development</h2></p>
          </div>
          <!-- ... -->
          <div>
            <p>
              <Rating :order='7' :rating='4'/>
            </p>
            <p>
              <Rating :order='8' :rating='3'/>
            </p>
            <p>
              <Rating :order='9' :rating='3'/>
            </p>
            <p>
              <Rating :order='10' :rating='5'/>
            </p>
            <p>
              <Rating :order='11' :rating='5'/>
            </p>
            <p>
              <Rating :order='12' :rating='3'/>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
