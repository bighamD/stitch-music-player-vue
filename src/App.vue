<script setup lang="ts">
import AppShell from './components/AppShell.vue'
import MusicListScreen from './components/MusicListScreen.vue'
import NowPlayingScreen from './components/NowPlayingScreen.vue'
import { useMusicPlayer } from './composables/useMusicPlayer'

const {
  query,
  isPlaying,
  isFavorite,
  activeScreen,
  progress,
  currentTrack,
  filteredTracks,
  elapsedLabel,
  selectTrack,
  togglePlayback,
  toggleFavorite,
  setScreen,
  playAll
} = useMusicPlayer()
</script>

<template>
  <AppShell>
    <MusicListScreen
      v-if="activeScreen === 'library'"
      v-model:query="query"
      :tracks="filteredTracks"
      :current-track="currentTrack"
      :is-playing="isPlaying"
      :progress="progress"
      @play-all="playAll"
      @select-track="selectTrack($event, 'library')"
      @open-player="setScreen('nowPlaying')"
      @toggle-playback="togglePlayback"
    />
    <NowPlayingScreen
      v-else
      :track="currentTrack"
      :is-playing="isPlaying"
      :is-favorite="isFavorite"
      :progress="progress"
      :elapsed-label="elapsedLabel"
      @back="setScreen('library')"
      @toggle-playback="togglePlayback"
      @toggle-favorite="toggleFavorite"
      @next="selectTrack('dream-it-possible', 'nowPlaying')"
      @previous="selectTrack('way-back-home', 'nowPlaying')"
    />
  </AppShell>
</template>
