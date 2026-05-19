<script setup lang="ts">
import type { Track } from '../types/music'

defineProps<{
  track: Track
  isActive: boolean
  isPlaying: boolean
}>()

const emit = defineEmits<{
  select: []
}>()
</script>

<template>
  <button
    class="group relative flex w-full cursor-pointer items-center justify-between px-margin-mobile py-3 text-left transition-colors hover:bg-level-1"
    :class="isActive ? 'bg-[rgba(255,45,85,0.05)]' : ''"
    @click="emit('select')"
  >
    <span v-if="isActive" class="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-accent"></span>
    <span class="flex min-w-0 items-center gap-4">
      <span v-if="isActive" class="flex w-6 shrink-0 items-center justify-center text-accent">
        <span class="material-symbols-outlined text-lg" style="font-variation-settings: 'FILL' 1;">{{ isPlaying ? 'equalizer' : 'graphic_eq' }}</span>
      </span>
      <span class="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-surface-container-highest" :class="isActive ? 'shadow-lg' : ''">
        <img class="h-full w-full object-cover" :src="track.artwork" :alt="track.alt" />
      </span>
      <span class="flex min-w-0 flex-col justify-center">
        <span class="truncate text-title-sm font-semibold" :class="isActive ? 'text-accent' : 'text-on-surface'">
          {{ track.title }}
        </span>
        <span class="truncate text-body-sm text-muted">{{ track.artist }}</span>
      </span>
    </span>
    <span class="ml-3 flex shrink-0 items-center gap-4">
      <span class="text-body-sm text-muted">{{ track.duration }}</span>
      <span class="flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors group-hover:text-on-surface">
        <span class="material-symbols-outlined">more_horiz</span>
      </span>
    </span>
  </button>
</template>
