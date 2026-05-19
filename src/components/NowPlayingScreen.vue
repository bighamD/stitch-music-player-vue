<script setup lang="ts">
import PlayerControls from './PlayerControls.vue'
import type { Track } from '../types/music'

const props = defineProps<{
  track: Track
  isPlaying: boolean
  isFavorite: boolean
  progress: number
  elapsedLabel: string
}>()

const emit = defineEmits<{
  back: []
  togglePlayback: []
  toggleFavorite: []
  next: []
  previous: []
}>()
</script>

<template>
  <section class="flex h-full min-h-dvh flex-col bg-background text-on-surface sm:min-h-0">
    <header class="flex h-14 w-full items-center justify-between bg-background px-margin-mobile">
      <button class="flex h-11 w-11 items-center justify-center text-on-surface transition-transform hover:opacity-80 active:scale-95" aria-label="返回列表" @click="emit('back')">
        <span class="material-symbols-outlined">expand_more</span>
      </button>
      <h1 class="text-title-sm font-semibold text-on-surface">正在播放</h1>
      <button class="flex h-11 w-11 items-center justify-center text-on-surface transition-transform hover:opacity-80 active:scale-95" aria-label="更多">
        <span class="material-symbols-outlined">more_vert</span>
      </button>
    </header>

    <main class="flex flex-1 flex-col overflow-y-auto px-margin-mobile pb-xl">
      <div class="flex flex-1 items-center justify-center py-xl">
        <div class="relative aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl shadow-2xl">
          <img class="h-full w-full object-cover" :src="track.nowPlayingArtwork ?? track.artwork" :alt="track.alt" />
          <div class="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10"></div>
        </div>
      </div>

      <div class="mb-xl flex items-center justify-between">
        <div class="flex min-w-0 flex-col pr-4">
          <h2 class="mb-xs truncate text-display-lg font-bold text-on-surface">{{ track.title }}</h2>
          <p class="truncate text-body-md text-on-surface-variant">{{ track.artist }}</p>
        </div>
        <button
          class="flex h-11 w-11 shrink-0 items-center justify-center transition-transform hover:opacity-80 active:scale-95"
          :class="isFavorite ? 'text-primary-container' : 'text-on-surface-variant'"
          :aria-label="isFavorite ? '取消喜欢' : '喜欢'"
          @click="emit('toggleFavorite')"
        >
          <span class="material-symbols-outlined" :style="isFavorite ? `font-variation-settings: 'FILL' 1;` : ''">favorite</span>
        </button>
      </div>

      <div class="mb-xl">
        <div class="relative mb-sm h-1 w-full rounded-full bg-surface-container-highest">
          <div class="absolute left-0 top-0 h-full rounded-full bg-primary-container" :style="{ width: `${Math.round(progress * 100)}%` }"></div>
          <div
            class="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-primary-container bg-white shadow-[0_0_8px_rgba(255,81,103,0.8)]"
            :style="{ left: `calc(${Math.round(progress * 100)}% - 6px)` }"
          ></div>
        </div>
        <div class="flex justify-between text-label-caps font-semibold text-on-surface-variant">
          <span>{{ elapsedLabel }}</span>
          <span>{{ props.track.duration }}</span>
        </div>
      </div>

      <PlayerControls
        :is-playing="isPlaying"
        @toggle-playback="emit('togglePlayback')"
        @next="emit('next')"
        @previous="emit('previous')"
      />

      <div class="flex items-center justify-between px-lg pb-lg">
        <button class="flex h-11 w-11 items-center justify-center text-on-surface-variant transition-colors hover:text-on-surface active:scale-95" aria-label="加入播放列表">
          <span class="material-symbols-outlined">playlist_add</span>
        </button>
        <button class="flex h-11 w-11 items-center justify-center text-on-surface-variant transition-colors hover:text-on-surface active:scale-95" aria-label="下载">
          <span class="material-symbols-outlined">download</span>
        </button>
        <button class="flex h-11 w-11 items-center justify-center text-on-surface-variant transition-colors hover:text-on-surface active:scale-95" aria-label="歌词">
          <span class="material-symbols-outlined">lyrics</span>
        </button>
        <button class="flex h-11 w-11 items-center justify-center text-on-surface-variant transition-colors hover:text-on-surface active:scale-95" aria-label="更多操作">
          <span class="material-symbols-outlined">more_horiz</span>
        </button>
      </div>
    </main>
  </section>
</template>
