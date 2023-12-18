<script setup lang="ts">
const props = defineProps<{
  id: string,
}>();

</script>
<template>
  <!-- Open the modal using ID.showModal() method -->
  <button class="btn btn-primary" :onclick="props.id +'.showModal()'">Contact me</button>
  <dialog :id="props.id" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-primary text-3xl pb-3">Contact</h3>
      <div class="mt-4 flex items-center">
        <Icon class="text-3xl" name="i-material-symbols-call" />
        <p class="text-xl ml-2">+420 777 781 718</p>
      </div>
      <div class="mt-4 flex items-center">
        <Icon class="text-3xl" name="i-material-symbols-mail" />
        <p class="text-xl ml-2">bestji@seznam.cz</p>
      </div>
      <div class="mt-4 flex items-center">
        <a href="https://www.instagram.com/bestic88/"><Icon class="text-3xl" name="i-mdi-instagram" /></a>
        <a href="https://www.instagram.com/bestic88/"><p class="text-xl ml-2">@bestic88</p></a>

      </div>

      <div class="mt-4 flex items-center">
        <a href="https://www.facebook.com/jirka.besta.12/"><Icon class="text-3xl" name="i-mdi-facebook" /></a>
        <a href="https://www.facebook.com/jirka.besta.12/"><p class="text-xl ml-2">Jirka Besta</p></a>
      </div>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
    </div>
  </dialog>
</template>
