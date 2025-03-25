# CLAUDE.md - Repository Guidelines

## Commands
- Build: `npm run build` - Production build
- Dev: `npm run dev --turbopack` - Development mode with Turbopack
- Start: `npm run start` - Start production server
- Lint: `npm run lint` - Run ESLint checks

## Code Style
- **TypeScript**: Use strict typing with proper interfaces and types
- **Naming**: camelCase for variables/functions, PascalCase for components/classes
- **Imports**: Group imports by external libraries first, then internal paths
- **Path Aliases**: Use `@/*` for src directory imports
- **Component Structure**: "use client" at top of client components
- **State Management**: React hooks, with custom hooks for complex logic

## Architecture
- Next.js 15+ app router structure
- Fabric.js for canvas manipulation
- Tailwind CSS for styling (use cn utility for merging classes)
- Feature-based directory structure in src/features

## Error Handling
- Use TypeScript non-null assertions (!) judiciously
- Prefer early returns and proper error handling in async code
- Add appropriate cleanup in useEffect return functions

## Best Practices
- Follow React's functional component patterns
- Use proper type annotations for all parameters and return values
- Maintain consistent styling with Tailwind utility classes
- Keep components focused on a single responsibility