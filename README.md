## Getting Started
First, install the dependencies of the project
```bash
npm i
```
then
```bash
npx prisma migrate dev
```
and finally run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For db integration install mySql and run it in the background.
maybe one day I handle this using docker, but not now.
and do not forget to run prisma migration.

### .env file
you should add this data to this file
```
DATABASE_URL=mysql://root:password@localhost:3306/issue-tracker
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=thisIsAPrivateKeyForThisProject 
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```
you can use openssl to generate a secret key:
```
openssl rand -base64 64
```