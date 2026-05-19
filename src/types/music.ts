export interface Track {
  id: string
  title: string
  artist: string
  album: string
  duration: string
  durationSeconds: number
  artwork: string
  nowPlayingArtwork?: string
  alt: string
}

export type ScreenName = 'library' | 'nowPlaying'
