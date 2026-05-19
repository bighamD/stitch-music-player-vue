<script setup lang="ts">
defineProps<{
  isPlaying: boolean
}>()

const emit = defineEmits<{
  togglePlayback: []
  next: []
  previous: []
}>()
</script>

<template>
  <div class="mb-xl flex items-center justify-between">
    <button class="flex h-11 w-11 items-center justify-center text-on-surface-variant transition-colors hover:text-on-surface active:scale-95" aria-label="随机播放">
      <span class="material-symbols-outlined">shuffle</span>
    </button>
    <div class="flex items-center gap-lg">
      <button class="flex h-14 w-14 items-center justify-center text-on-surface transition-opacity hover:opacity-80 active:scale-95" aria-label="上一首" @click="emit('previous')">
        <span class="material-symbols-outlined text-[32px]" style="font-variation-settings: 'FILL' 1;">skip_previous</span>
      </button>
      <button
        class="group relative flex h-20 w-20 items-center justify-center rounded-full bg-primary-container text-white transition-transform active:scale-95"
        :aria-label="isPlaying ? '暂停' : '播放'"
        @click="emit('togglePlayback')"
      >
        <span class="absolute inset-0 rounded-full bg-primary-container opacity-60 blur-[24px] transition-opacity group-hover:opacity-80"></span>
        <span class="material-symbols-outlined relative z-10 text-[40px]" style="font-variation-settings: 'FILL' 1;">
          {{ isPlaying ? 'pause' : 'play_arrow' }}
        </span>
      </button>
      <button class="flex h-14 w-14 items-center justify-center text-on-surface transition-opacity hover:opacity-80 active:scale-95" aria-label="下一首" @click="emit('next')">
        <span class="material-symbols-outlined text-[32px]" style="font-variation-settings: 'FILL' 1;">skip_next</span>
      </button>
    </div>
    <button class="flex h-11 w-11 items-center justify-center text-primary-container transition-colors hover:text-primary active:scale-95" aria-label="循环播放">
      <span class="material-symbols-outlined">repeat</span>
    </button>
  </div>
</template>
