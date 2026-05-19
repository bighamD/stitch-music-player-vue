<script setup lang="ts">
import type { Track } from '../types/music'

defineProps<{
  track: Track
  isPlaying: boolean
  progress: number
}>()

const emit = defineEmits<{
  open: []
  togglePlayback: []
}>()
</script>

<template>
  <div class="absolute bottom-20 left-0 z-40 w-full px-2 pb-2">
    <div class="glass-nav relative mx-auto flex w-full max-w-md items-center justify-between overflow-hidden rounded-2xl border-t border-white/5 p-3">
      <button class="absolute inset-y-0 left-0 right-24 z-10" aria-label="打开正在播放" @click="emit('open')"></button>
      <div class="absolute left-0 top-0 h-[2px] w-full bg-level-2">
        <div class="h-full bg-accent" :style="{ width: `${Math.round(progress * 100)}%` }"></div>
      </div>
      <div class="flex min-w-0 flex-1 items-center gap-3 pl-1">
        <div class="h-10 w-10 shrink-0 overflow-hidden rounded-md bg-surface-container-highest">
          <img class="h-full w-full object-cover" :src="track.artwork" :alt="track.alt" />
        </div>
        <div class="flex min-w-0 flex-col justify-center pr-2">
          <span class="truncate text-[15px] font-semibold leading-5 text-on-surface">{{ track.title }}</span>
          <span class="truncate text-[12px] leading-4 text-muted">{{ track.artist }}</span>
        </div>
      </div>
      <div class="relative z-20 flex shrink-0 items-center gap-4 pr-1">
        <button
          class="flex h-10 w-10 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-white/10 active:scale-95"
          :aria-label="isPlaying ? '暂停' : '播放'"
          @click="emit('togglePlayback')"
        >
          <span class="material-symbols-outlined text-2xl">{{ isPlaying ? 'pause_circle' : 'play_circle' }}</span>
        </button>
        <button class="flex h-10 w-10 items-center justify-center rounded-full text-on-surface transition-colors hover:bg-white/10 active:scale-95" aria-label="下一首">
          <span class="material-symbols-outlined">skip_next</span>
        </button>
        <button class="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-white/10 active:scale-95" aria-label="播放列表">
          <span class="material-symbols-outlined">playlist_play</span>
        </button>
      </div>
    </div>
  </div>
</template>
