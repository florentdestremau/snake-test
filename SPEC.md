# Snake 2 - Specification

## Project Overview
- **Type**: Browser-based arcade game (single HTML file)
- **Core**: Classic snake game with wall-passing mechanic
- **Target**: Casual players

## UI/UX Specification

### Layout
- Centered game canvas (400x400px)
- Score display above canvas
- Dark theme with neon aesthetics

### Visual Design
- **Background**: Deep black (#0a0a0a)
- **Canvas**: Dark gray (#1a1a2e) with subtle grid
- **Snake head**: Bright cyan (#00fff5) with glow
- **Snake body**: Gradient from cyan to purple (#bf00ff)
- **Food**: Pulsing red (#ff3366) with glow effect
- **Text**: White (#ffffff), font: "Orbitron" (Google Fonts)
- **Score**: Large, glowing cyan numbers

### Effects
- Snake segments have rounded corners
- Food pulses with CSS animation
- Trail effect on snake movement
- Screen flash on eating food

## Functionality

### Core Mechanics
- Snake moves continuously in current direction
- Arrow keys / WASD control direction
- **Wall wrapping**: Going through one edge appears on opposite side
- Food spawns randomly (not on snake)
- Eating food: snake grows +1, score +10
- Self-collision = game over
- Speed increases slightly as score grows

### Game States
- Start screen: "Press SPACE to start"
- Playing: active gameplay
- Game over: show final score, "Press SPACE to restart"

## Acceptance Criteria
- [ ] Snake wraps through walls seamlessly
- [ ] Food spawns randomly and adds to score
- [ ] Game over on self-collision
- [ ] Smooth 60fps gameplay
- [ ] Responsive controls
