# Next-Auth Service

This repository is a custom implementation of **NextAuth.js v5**, focused on providing a complete authentication system with email verification, OAuth, and 2FA support. The project is inspired by [Antonio Erdeljac's work](https://github.com/AntonioErdeljac).

**Live documentation for NextAuth.js v5 can be found here**: [authjs.dev](https://authjs.dev/).

## Features

- **Email & Password Authentication**: Users can sign up and log in with email and password.
- **OAuth Support**: Sign in with external providers like Google and GitHub (configurable).
- **Email Verification**: Integrated email verification using the [Resend](https://resend.com/) service (local testing only).
- **Password Reset**: Implemented password reset functionality (testable locally).
- **Two-Factor Authentication (2FA)**: Added 2FA for an extra layer of security (local testing available).
- **Protected Routes**: Only authenticated users can access certain parts of the application.
- **Account Management**: Allows users to update their profile information.

## Setup

### Clone the repository

```bash
git clone https://github.com/your-username/next-auth-service.git
cd next-auth-service
```

### Install dependencies

```bash
pnpm install
```

### Environment Variables

To enable email verification and OAuth, you need to configure the following environment variables in your `.env` file:

```env
# Database connection
DATABASE_URL=your_postgresql_connection_string

# NextAuth.js settings
NEXTAUTH_SECRET=your_nextauth_secret

# Resend API (for local email testing)
RESEND_API_KEY=your_resend_api_key

# OAuth credentials
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

### Local Email Testing (Resend)

To test email verification locally:
1. Sign up on [Resend](https://resend.com/).
2. Add your Resend API key to `.env`.
3. Emails can only be sent to the email address associated with your Resend account unless you purchase a domain.

### Run the application

```bash
pnpm dev
```

### Database Setup

1. Create a PostgreSQL database (e.g., using Neon).
2. Run migrations:

```bash
pnpm prisma migrate dev
```

## Project Structure

- **Custom Hooks**: Reusable hooks for fetching session data and other client-side operations.
- **Server Components**: Optimized components for server-side logic and session management.
- **Client Components**: Components that handle user interactions and UI updates.
- **Lib Folder**: Contains async functions used in server components (e.g., authentication handling).
- **TailwindCSS & shadcn/ui**: For UI styling and component management.
- **Prisma ORM**: Handles database communication with PostgreSQL.

## Highlights

- **Server Actions**: Early adoption of server actions in Next.js for optimized data fetching.
- **Session Handling**: Sessions are managed differently in server and client components. Check the `lib` folder for a clean and organized implementation.
- **Account Update**: Users can update their account information through the profile settings.

## How to Contribute

Feel free to clone the repo, test the features locally, and submit PRs for improvements. Check the project structure for reference, especially the integration of server actions, custom hooks, and session management.

## License

This project is open-source and available under the MIT License.
