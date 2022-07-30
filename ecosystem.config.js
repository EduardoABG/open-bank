module.exports = {
  apps: [
    {
      name: "Backend - API OPENBANK",
      script: "dist/index.js",
      autorestart: true,
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
