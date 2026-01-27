# Assembly Endgame

Assembly Endgame is a small React game inspired by classic word-guessing mechanics (think Hangman), with a programming twist.

Your goal is simple: guess the hidden word before you run out of attempts. Every wrong guess eliminates a programming language. Lose them all, and Assembly takes over.

The project is built with React and Vite, styled with Tailwind CSS, and structured as a lightweight frontend app.

## Features

- Random word selection on each run
- On-screen keyboard for guessing letters
- Visual feedback for correct and incorrect guesses
- “Language elimination” system instead of traditional lives
- Win / lose game states
- Clean component-based React structure
- Fast dev environment powered by Vite

## Tech Stack

- React
- Vite
- Tailwind CSS
- PNPM (for package management)
- ESLint (basic linting setup)

## Project Structure

High-level overview:

- Word.jsx holds most of the game logic (random word, guesses, win/loss detection).
- Keyboard.jsx handles letter input.
- Languages.jsx displays remaining “lives.”
- Status.jsx shows game state messages.
- utils/ contains the word list and language data.

## Available Scripts

- pnpm dev – start the development server
- pnpm build – build for production
- pnpm preview – preview the production build locally
- pnpm lint – run ESLint

## Notes

- The game picks a random word on load.
- Maximum wrong guesses are tied directly to the number of languages defined in languages_object.
- Styling is handled entirely with Tailwind utility classes.
- This is a frontend-only project; there’s no backend.
