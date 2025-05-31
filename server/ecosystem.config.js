module.exports = {
  apps: [
    {
      name: "real-estate",
      script: "npm",
      args: "run dev",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
