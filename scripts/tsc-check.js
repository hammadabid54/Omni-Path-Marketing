const { execSync } = require('child_process');
try {
  const out = execSync('npx tsc --noEmit', { cwd: 'C:/Users/hamma/OneDrive/Documents/Omni Path Marketing/omni-path-marketing', stdio: ['ignore', 'pipe', 'pipe'] });
  console.log('TSC OK');
} catch (e) {
  console.log('TSC FAILED');
  console.log(e.stdout?.toString() || '');
  console.log(e.stderr?.toString() || '');
  process.exit(1);
}