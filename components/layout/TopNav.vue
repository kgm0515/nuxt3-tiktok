<template>
  <div id="TopNav" class="fixed bg-white z-30 flex items-center w-full border-b h-[61px]">
    <div :class="route.fullPath === '/' ? 'max-w-[1150px]' : ''" class="flex items-center justify-between w-full px-6 mx-auto">
      <div :class="route.fullPath === '/' ? 'w-[80%]' : 'lg:w-[20%] w-[70%]'">
        <NuxtLink to="/">
          <img width="115" src="~/assets/images/tiktok-logo.png" />
        </NuxtLink>
      </div>
      <div class="hidden md:flex items-center bg-[#f1f2f3] p-1 rounded-full max-w-[300px] w-full">
        <input type="text" class="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none" placeholder="Search accounts" />
        <div class="px-3 py-1 flex items-center border-l border-l-gray-300">
          <Icon name="ic:sharp-search" color="#a1a2a7" size="22" />
        </div>
      </div>
      <div class="flex items-center justify-end gap-3 min-w-[275px] max-w-[320px] w-full">
        <button class="flex items-center border rounded-sm px-3 py-[6px] hover:bg-gray-100">
          <Icon name="ic:outline-plus" color="#000000" size="22" />
          <span class="px-2 font-medium text-[15px]">Upload</span>
        </button>
        <div class="flex items-center" v-if="false">
          <button class="flex items-center bg-[#f02c56] text-white border rounded-md px-3 py-[6px]">
            <span class="mx-4 font-medium text-[15px]">Login</span>
          </button>
          <Icon name="ph:dots-three-vertical-bold" color="#161724" size="25" />
        </div>
        <div class="flex items-center">
          <Icon name="carbon:send-alt" color="#161724" size="30" class="ml-1 mr-4" />
          <Icon name="bx:message-detail" color="#161724" size="27" class="mr-5" />
          <div class="relative">
            <button class="mt-1" @click="showMenu = !showMenu">
              <img class="rounded-full" width="33" src="https://picsum.photos/id/83/300/320" />
            </button>
            <div v-if="showMenu" id="PopupMenu" class="absolute bg-white rounded-lg py-1.5 w-[200px] shadow-xl border top-[43px] -right-2">
              <NuxtLink @click="showMenu = false" class="flex items-center justify-start py-3 px-2 hover:bg-gray-100 cursor-pointer">
                <Icon name="ph:user" color="#161724" size="20" />
                <span class="pl-2 font-medium text-sm">Profile</span>
              </NuxtLink>
              <div @click="showMenu = false" class="flex items-center justify-start py-3 px-2.5 hover:bg-gray-100 border-t cursor-pointer">
                <Icon name="teenyicons:logout-outline" color="#161724" size="18" />
                <span class="pl-2 font-medium text-sm">Log out</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const route = useRoute()
  // 菜单是否显示
  const showMenu = ref(false)
</script>

<style scoped></style>
