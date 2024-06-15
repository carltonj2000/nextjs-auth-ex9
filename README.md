# Next Auth Example 9

Run via `npm run dev`.

## Code History

The code in this repository is based on:

- https://youtu.be/N_sUsq_y10U?si=SENUE2tRUDu17yua

## Creation History

```bash
npx create-next-app@latest
cd nextjs-auth-ex9

npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add label

npm i zod

npm i kysely @vercel/postgres-kysely
npm i dotenv
npm i tsx
npm i bcrypt
```

## SQL Commands

| Command                   | Description                |
| ------------------------- | -------------------------- |
| truncate table table_name | delete contents of a table |
