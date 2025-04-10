# Mandarin Learning App

A modern, interactive web application designed to help users learn Mandarin Chinese through flashcards and practice exercises. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Interactive flashcards for learning Mandarin
- Progress tracking
- Multiple learning modes (English, Pinyin, Chinese)
- Responsive design for all devices
- Optimized performance with React Server Components

## Live Demo

Check out the live version at: [https://mandarin-learning-app.vercel.app/](https://mandarin-learning-app.vercel.app/)

## Tech Stack

- **Framework**: Next.js 15.2.3
- **Language**: TypeScript, React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: Shadcn UI, Radix UI
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/TonyKYC/mandarin-learning-app.git
cd mandarin-learning-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
mandarin-learning-app/
├── app/                 # Next.js app directory
├── public/             # Static assets
├── src/                # Source files
│   ├── components/     # Reusable UI components
│   ├── db/            # Database utilities and queries
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions and helpers
│   ├── mock-data/     # Mock data for development
│   └── types/         # TypeScript type definitions
└── styles/            # Global styles
```

## Next Steps

### Authentication & User Management

- Implement user authentication using NextAuth.js
- Add user profiles and settings
- Enable social login options (Google, GitHub)

### Card Ownership & Personalization

- Allow users to create and manage their own flashcard sets
- Implement card sharing functionality
- Add card categorization and tagging

### Progress Tracking

- Detailed learning statistics and analytics
- Personalized learning paths
- Achievement system and milestones

### Community Features

- Comments and discussions on cards
- Like and bookmark functionality
- User-generated content sharing
- Community leaderboards

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
