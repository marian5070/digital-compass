module.exports = {
  apps: [
    {
      name: 'digital-compass-mcp',
      script: 'src/server.mjs',
      cwd: __dirname,
      exec_mode: 'fork',
      instances: 1,
      max_memory_restart: '256M',
      kill_timeout: 5000,
      time: true,
      env: {
        PORT: 3050,
        RATE_LIMIT_RPM: 60,
      },
      error_file: '/home/marian/.pm2/logs/digital-compass-mcp-error.log',
      out_file: '/home/marian/.pm2/logs/digital-compass-mcp-out.log',
    },
  ],
};
