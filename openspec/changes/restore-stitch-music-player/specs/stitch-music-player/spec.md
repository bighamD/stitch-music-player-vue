## ADDED Requirements

### Requirement: Restore Stitch music screens
The system SHALL render the Stitch `Music List` and `Now Playing` mobile screens using the project design system, exported copy, color palette, icon style, album artwork, and layout proportions.

#### Scenario: Music list is rendered
- **WHEN** the user opens the application
- **THEN** the system displays the `我的音乐` list screen with search, play-all controls, track rows, mini player, and bottom navigation.

#### Scenario: Now playing is rendered
- **WHEN** the user opens the now playing view from the mini player or a selected track
- **THEN** the system displays the `正在播放` screen with album artwork, title, artist, progress, primary controls, and secondary actions.

### Requirement: Provide local music interactions
The system SHALL provide client-side interactions for selecting a track, filtering tracks, toggling playback, toggling favorite state, and navigating between restored screens.

#### Scenario: Track selection updates player state
- **WHEN** the user selects a track row
- **THEN** the mini player and now playing screen update to that track.

#### Scenario: Search filters the list
- **WHEN** the user types a title, artist, or album query in the search input
- **THEN** the list displays only matching tracks while preserving the restored visual treatment.

### Requirement: Support static deployment targets
The system SHALL build as a static frontend that can be deployed to Vercel and GitHub Pages.

#### Scenario: Vercel build
- **WHEN** the Vercel deployment builds the project
- **THEN** the generated static app resolves assets from the root path.

#### Scenario: GitHub Pages build
- **WHEN** the GitHub Pages workflow builds the project
- **THEN** the generated static app resolves assets under `/stitch-music-player-vue/`.
