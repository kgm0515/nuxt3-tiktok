<template>
  <div id="SideNavMain" :class="route.fullPath === '/' ? 'lg:w-[310px]' : 'lg:w-[220px]'" class="fixed z-20 bg-white pt-[70px] h-full lg:border-r-0 border-r w-[75px] overflow-auto">
    <div class="lg:w-full w-[55px] mx-auto">
      <NuxtLink to="/">
        <MenuItem iconString="For You" colorString="#f02c56" sizeString="30"></MenuItem>
      </NuxtLink>
      <MenuItem iconString="Following" colorString="#000000" sizeString="27"></MenuItem>
      <MenuItem iconString="LIVE" colorString="#000000" sizeString="27"></MenuItem>
      <div class="border-b lg:ml-2 mt-2"></div>
      <div class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">Suggested accounts</div>
      <div class="lg:hidden block pt-3"></div>
      <div class="cursor-pointer">
        <MenuItemFollow />
      </div>
      <div class="lg:block hidden text-[#f02c56] pt-1.5 pl-2 text-[13px]">See all</div>
      <div class="border-b lg:ml-2 mt-2"></div>
      <div class="lg:block hidden text-xs text-gray-600 font-semibold pt-4 pb-2 px-2">Following accounts</div>
      <div class="lg:hidden block pt-3"></div>
      <div class="cursor-pointer">
        <MenuItemFollow />
      </div>
      <div class="lg:block hidden text-[#f02c56] pt-1.5 pl-2 text-[13px]">See more</div>
      <div class="lg:block hidden text-[11px] text-gray-500">
        <div class="pt-4 px-2">About News TikTok Shop Contack Careers ByteDance</div>
        <div class="pt-4 px-2">TikTok for Good Advertise Developers Transparency TikTok Rewards TikTok Browse TikTok Embeds</div>
        <div class="pt-4 px-2">Help Safety Terms Privacy Creater Portal Community Guidelines</div>
        <div class="pt-4 px-2">@ 2023 TikTok</div>
      </div>
      <div class="pb-14"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import MenuItem from '@/components/layout/MenuItem.vue'
  import MenuItemFollow from '@/components/layout/MenuItemFollow.vue'
  const route = useRoute()
</script>

<style scoped></style>
