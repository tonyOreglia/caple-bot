module.exports = {
  apps: [
    {
      name: 'caple-bot',
      script: 'npm',
      args: 'start',
      cwd: '/caple-bot',
      watch: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
