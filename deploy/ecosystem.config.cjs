/**
 * PM2 process manager config for Omni Path Marketing.
 *
 * Usage on the VPS:
 *   pm2 start ecosystem.config.cjs
 *   pm2 save
 *   pm2 startup    # follow the printed command to enable on boot
 */
module.exports = {
  apps: [
    {
      name: "omni-path-marketing",
      cwd: "/var/www/omnipathmarketing.com",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      out_file: "/var/log/omnipath/out.log",
      error_file: "/var/log/omnipath/error.log",
      merge_logs: true,
      time: true,
    },
  ],
};
