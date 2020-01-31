module.exports = {
  apps: [
    {
      name: 'figma-react',
      script: './app.js',
      watch: true,
      env: {
        NODE_ENV: 'development',
        FIGMA_API_TOKEN: 'FIGMA TOKEN HERE'
      }
    },
    {
      name: 'parcel-worker',
      script: 'npm',
      exec_mode: 'fork',
      interpreter: 'node',
      args: 'start',
      watch: false,
      env: {
        INTERVAL: 1000
      }
    }
  ]
};
