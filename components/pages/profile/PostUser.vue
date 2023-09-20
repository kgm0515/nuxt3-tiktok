<template>
  <div @mouseenter="isHover(true)" @mouseleave="isHover(false)" class="relative brightness-90 hover:brightness-[1.1] cursor-pointer">
    <div v-if="true" class="absolute flex items-center justify-center top-0 left-0 aspect-[3/4] w-full object-cover rounded-md bg-black">
      <Icon class="animate-spin ml-1" name="mingcute:loading-line" size="100" color="#ffffff" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const isHover = (val: boolean) => {
    return val
  }
</script>
