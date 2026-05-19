import { computed, readonly, shallowRef } from 'vue'
import type { ScreenName, Track } from '../types/music'

const tracks: Track[] = [
  {
    id: 'dream-it-possible',
    title: 'Dream It Possible',
    artist: 'Delacey',
    album: 'Dream It Possible',
    duration: '3:24',
    durationSeconds: 204,
    artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwR2m3fzaVLLTHmKDTxAST31fE80nOHwbQu5jeG8KvxsRbOpEalLp4aRmUpBIJ-IaGbh0PZ6DwGi-g71s1oey8X7AhCNYTqEtqWPUCQDZzvsiVGfLLIN7jKVC12FfmSsciin9eXwV4fwHTnKB7DjbjlAjhmeE5YXco5CkWlx95GedtM00bBjvIVVQB-2x354L4t8sLI-5HLs8EqBuaI-I4Ba_bsOaFgRapfzRh0IuwTves9uvnmUisUUnbuEvw_ug8Niq10cuiG20',
    alt: 'A solitary figure standing on a dark misty peak under a starry night sky.'
  },
  {
    id: 'way-back-home',
    title: 'Way Back Home',
    artist: 'SHAUN',
    album: 'Take',
    duration: '3:35',
    durationSeconds: 215,
    artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_5ANlVxwRlD04Duh-gJk2wTh98Ok5zCzTkKtCY6MLdW5ewSxqkc-jday_-qZD3f912aB91mea4cMkw5E2vl17jhNnA0dWYS3bjJSdE4X7kiq5EcxxdOdJ730zdf-P7Z90t0rVOfwfLULDtdNTqUxn8SsccLIGOmasjTUKY7oVRb1kb-47PZ0GjeU9dGKkr0P-FheFvFVezzUGWChoZcmPt6_ru6-9JsGAaKxa2lIWy4U1JL-hlRFU-4rDF5fqdbz7OG8BJOuWNF0',
    alt: 'A stylized synthwave sunset over calm water.'
  },
  {
    id: 'stargazing',
    title: 'Stargazing',
    artist: 'Kygo, Justin Jesso',
    album: 'Kids in Love',
    duration: '3:44',
    durationSeconds: 224,
    artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRSZE3oLy5_9K96up2xFLCa_eUaVGkzMLSP_yz9rctYkUx1ZhpiKsNAY4DOpU6M4dwmRNyBKB-77tbri68ZhIwKfBY8NUr_GTmudd1-VCf8cpeWhMPLQlYJ5VGIpJR1yV1_Oynl14gR6SR9mS-GFjF_JSGILSnwRmkAvlGszCx2DrybdVqfUKaaNoBP8uUgIQ51dU-RK_q5n8U4KImgfBuHDorsV24MrAX0w4DQzFN-sQMn19U5nF46WXuyg9qgEwIYdLTtIA5Yww',
    nowPlayingArtwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9bK6_2SSeVSIcPG9tLLcsF4Wiid9PGv6HYouxVjPOr-J-dTHAm3fffU3EblqCi-pD6Zl_Segr3xP7uY7j0F4dAgL8G_y80VcdFnYdHm33ZmKSxCNCzceLn9hfdnJ9kIvh4wlZEz24l6-6-nc_yywUpUwaInJrWywiemRa-wmEzlmhdqLfmHmknIdlGZDRnOKBV68ORVYfWSOK5lorVfal4gGsvbk55i6mnSa1rP1KUxShivrYnhvbsuyeoPno7RqAi9DA6d3wrco',
    alt: 'A dark cosmic scene with a glowing planetary ring and deep starfield.'
  },
  {
    id: 'faded',
    title: 'Faded',
    artist: 'Alan Walker',
    album: 'Different World',
    duration: '3:32',
    durationSeconds: 212,
    artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI5WVKORR3oBQbfPa2hsl0CjjmNThNX_a51XgVSUTq1sxbwdlqIokMIYnS2Jxs8rwk1gIWrdna7Js1TGpAVgPTL_1h8kbaY-PZq8VMpQvcw0M2bOt0HHxOMGN-WTwgwJrnMo-6_cZyHoE7m3BARXTL5iw-VWWMBeVGulxtpHYP7zsEETB5DmLUIxn8EzPM2s9sQt2YAozmoAttPGWMZSnwfJV-HfhqgLI_9q-waW29kC4868TYCdSOKkD_gnKTBhkyetuVUe4nBaI',
    alt: 'A shadowy figure walking away into deep fog.'
  },
  {
    id: 'the-scientist',
    title: 'The Scientist',
    artist: 'Coldplay',
    album: 'A Rush of Blood to the Head',
    duration: '5:09',
    durationSeconds: 309,
    artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5-zuthxCaTjRuZEPVR8p9YgB_KU-ljuXWu55c0MNhtGGJnJ0N1gKkB3yoKAWALejqCJ4O8d6azn_PHMj29iXY_cqPuTjEZL_eUmo0GzEPi0WbKeXgMVbPid7A5RihjQ2SfFt53_CpDHcTnuga_WuICVNu8mYqQIMehyZUYofznK0R4ERo0bI2Y7qFLiWeDGq-9hpiERGgVCEaXjASLrOU2azBuxJjwXJBsNUhnhV2etkw1sG65vQho08GPzAGR3imCqQRho6-uZY',
    alt: 'A delicate white geometric flower shape on a dark grey background.'
  },
  {
    id: 'lose-you-to-love-me',
    title: 'Lose You To Love Me',
    artist: 'Selena Gomez',
    album: 'Rare',
    duration: '3:26',
    durationSeconds: 206,
    artwork: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxk2mRauzEGzWSqX8viRCJPs966myewhvntFdI5myCnepRcfO01Jv8yuOL1PuBbAtNeAiXEpq_-LaFtbBvSUls3vkFJJcqpiS5cu3w9PaKWjLmKEwxIWrr_YvlZJPTAvZrYqz2Q72xI0SsGQh3JWs4ABTxCloMG4byZ1N8ISWRDOSSGPGVc3kcWrZAs5vjAUoC1STqClZQPgIaFR-qjfqTG8hW4gKFA9gRleVMaRppNCutoPo3QAfXueJERd7adnRvVnDoU4XDRtg',
    alt: 'Dark abstract art with vibrant red organic splatters.'
  }
]

export function useMusicPlayer() {
  const currentTrackId = shallowRef('stargazing')
  const query = shallowRef('')
  const isPlaying = shallowRef(true)
  const isFavorite = shallowRef(true)
  const activeScreen = shallowRef<ScreenName>('library')
  const progress = shallowRef(0.41)

  const currentTrack = computed(() => {
    return tracks.find((track) => track.id === currentTrackId.value) ?? tracks[0]
  })

  const filteredTracks = computed(() => {
    const normalizedQuery = query.value.trim().toLowerCase()

    if (!normalizedQuery) {
      return tracks
    }

    return tracks.filter((track) => {
      return [track.title, track.artist, track.album].some((value) =>
        value.toLowerCase().includes(normalizedQuery)
      )
    })
  })

  const elapsedLabel = computed(() => {
    const elapsedSeconds = Math.round(currentTrack.value.durationSeconds * progress.value)
    const minutes = Math.floor(elapsedSeconds / 60)
    const seconds = String(elapsedSeconds % 60).padStart(2, '0')
    return `${minutes}:${seconds}`
  })

  function selectTrack(trackId: string, screen: ScreenName = 'nowPlaying') {
    currentTrackId.value = trackId
    activeScreen.value = screen
    isPlaying.value = true
    progress.value = trackId === 'stargazing' ? 0.41 : 0.24
  }

  function togglePlayback() {
    isPlaying.value = !isPlaying.value
  }

  function toggleFavorite() {
    isFavorite.value = !isFavorite.value
  }

  function setScreen(screen: ScreenName) {
    activeScreen.value = screen
  }

  function playAll() {
    selectTrack(filteredTracks.value[0]?.id ?? tracks[0].id, 'nowPlaying')
  }

  return {
    tracks: readonly(tracks),
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
  }
}
