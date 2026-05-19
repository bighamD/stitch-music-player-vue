<script setup lang="ts">
import BottomNav from './BottomNav.vue'
import MiniPlayer from './MiniPlayer.vue'
import TrackRow from './TrackRow.vue'
import type { Track } from '../types/music'

defineProps<{
  tracks: readonly Track[]
  currentTrack: Track
  isPlaying: boolean
  progress: number
}>()

const query = defineModel<string>('query', { required: true })

const emit = defineEmits<{
  playAll: []
  selectTrack: [trackId: string]
  openPlayer: []
  togglePlayback: []
}>()
</script>

<template>
  <section class="relative flex h-full min-h-dvh flex-col bg-background pb-40 sm:min-h-0">
    <header class="sticky top-0 z-30 flex w-full items-center justify-between bg-background px-margin-mobile pb-4 pt-12">
      <h1 class="text-display-lg font-bold text-on-surface">我的音乐</h1>
      <button
        class="flex h-11 w-11 items-center justify-center rounded-full text-accent transition-opacity hover:opacity-80 active:scale-95"
        aria-label="打开均衡器"
      >
        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">equalizer</span>
      </button>
    </header>

    <main class="flex flex-1 flex-col">
      <div class="mb-6 px-margin-mobile">
        <label class="flex h-12 w-full items-center rounded-[16px] bg-level-1 px-4">
          <span class="material-symbols-outlined mr-3 text-muted">search</span>
          <input
            v-model="query"
            class="w-full border-none bg-transparent p-0 text-body-md text-on-surface outline-none placeholder:text-muted focus:ring-0"
            placeholder="搜索歌曲、歌手或专辑"
            type="text"
          />
        </label>
      </div>

      <div class="mb-6 flex items-center justify-between px-margin-mobile">
        <button class="flex items-center gap-3 transition-opacity hover:opacity-80 active:scale-95" @click="emit('playAll')">
          <span class="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white shadow-glow">
            <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
          </span>
          <span class="flex items-baseline gap-2">
            <span class="text-title-sm font-semibold text-on-surface">播放全部</span>
            <span class="text-body-sm text-muted">(128)</span>
          </span>
        </button>
        <div class="flex items-center gap-4 text-muted">
          <button class="transition-colors hover:text-on-surface active:scale-95" aria-label="排序">
            <span class="material-symbols-outlined">sort</span>
          </button>
          <button class="transition-colors hover:text-on-surface active:scale-95" aria-label="网格视图">
            <span class="material-symbols-outlined">grid_view</span>
          </button>
        </div>
      </div>

      <div class="flex flex-1 flex-col">
        <TrackRow
          v-for="track in tracks"
          :key="track.id"
          :track="track"
          :is-active="track.id === currentTrack.id"
          :is-playing="isPlaying"
          @select="emit('selectTrack', track.id)"
        />
        <div v-if="tracks.length === 0" class="px-margin-mobile py-xl text-body-sm text-muted">
          没有匹配的音乐
        </div>
      </div>
    </main>

    <MiniPlayer
      :track="currentTrack"
      :is-playing="isPlaying"
      :progress="progress"
      @open="emit('openPlayer')"
      @toggle-playback="emit('togglePlayback')"
    />
    <BottomNav active-tab="home" />
  </section>
</template>
