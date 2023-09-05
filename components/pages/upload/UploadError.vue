<template>
  <div class="w-[100%] relative flex justify-center">
    <div class="absolute top-6 z-50 mx-auto bg-black bg-opacity-70 text-white px-14 py-3 rounded-sm" :class="props.errorType ? 'visible' : 'invisible'">
      {{ error }}
    </div>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps({
    /** 错误类型 */
    errorType: {
      type: String as PropType<'' | null | 'caption' | 'bio' | 'file'>,
      default: ''
    }
  })
  // 错误提示
  const error = computed(() => {
    const errorType = props.errorType
    if (errorType === 'caption') return 'Maximum 150 characters'
    if (errorType === 'bio') return 'Maximum 80 characters'
    if (errorType === 'file') return 'Unsupported file. use MP4 instead.'
    return ''
  })
</script>
