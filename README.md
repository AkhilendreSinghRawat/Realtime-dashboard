# Next.js Realtime Dashboard

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/AkhilendreSinghRawat/Realtime-dashboard.git
cd Realtime-dashboard
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Firebase Realtime Database

- Go to [Firebase Console](https://console.firebase.google.com/).
- Create a new project.
- Enable Realtime Database and set up the necessary rules.
- Generate the Firebase config keys.
- Copy the environment variables from Firebase.

### 4️⃣ Set Up Environment Variables

- Create a `.env.local` file in the root directory.
- Copy the contents from `.env.example` and update the values with the Firebase config.

```sh
cp .env.example .env.local
```

### 5️⃣ Run the Development Server

```sh
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### 🌍 Live Demo

You can also check out the deployed version here:\
🔗 **[Realtime Dashboard](https://realtime-dashboard-two.vercel.app/)**
