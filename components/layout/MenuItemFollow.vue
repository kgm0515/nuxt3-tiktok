<template>
  <div class="flex items-center hover:bg-gray-100 rounded-md w-full py-1.5 px-2">
    <img class="rounded-full lg:mx-0 mx-auto" width="35" src="https://picsum.photos/id/8/300/320" />
    <div class="lg:pl-2.5 lg:block hidden">
      <div class="flex items-center">
        <div class="font-bold text-[14px]">User name</div>
        <div class="ml-1 rounded-full bg-[#58d5ec] h-[14px] relative">
          <Icon name="teenyicons:tick-small-solid" color="#ffffff" size="15" class="relative -top-[7px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
