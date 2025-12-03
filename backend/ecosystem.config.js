export default {
  apps: [
    {
      name: "equal-type-backend",
      script: "src/index.js",
      watch: false,
      env: {
        NODE_ENV: "production",
        OPENAI_API_KEY: process.env.OPENAI_API_KEY
      }
    }
  ]
}
