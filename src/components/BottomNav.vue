<script setup lang="ts">
defineProps<{
  activeTab: 'home' | 'discover' | 'podcasts' | 'account'
}>()

const tabs = [
  { id: 'home', label: '我的', icon: 'home' },
  { id: 'discover', label: '发现', icon: 'explore' },
  { id: 'podcasts', label: '播客', icon: 'podcasts' },
  { id: 'account', label: '账号', icon: 'person' }
] as const
</script>

<template>
  <nav class="absolute bottom-0 left-0 z-50 flex h-20 w-full items-center justify-around border-t border-white/5 bg-surface/60 px-lg backdrop-blur-xl">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      class="group flex min-w-12 flex-col items-center justify-center gap-xs transition-all duration-200 active:scale-90"
      :class="tab.id === activeTab ? 'text-primary' : 'text-on-surface-variant'"
      :aria-current="tab.id === activeTab ? 'page' : undefined"
    >
      <span class="material-symbols-outlined text-2xl transition-colors group-hover:text-on-surface" :style="tab.id === activeTab ? `font-variation-settings: 'FILL' 1;` : ''">
        {{ tab.icon }}
      </span>
      <span class="mt-1 text-label-caps font-semibold">{{ tab.label }}</span>
      <span class="h-1 w-1 rounded-full" :class="tab.id === activeTab ? 'bg-primary' : 'bg-transparent'"></span>
    </button>
  </nav>
</template>
