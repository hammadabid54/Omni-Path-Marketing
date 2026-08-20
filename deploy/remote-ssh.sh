#!/usr/bin/env bash
# Probe SSH + Git on the VPS.
set -e

SSH_KEY="/c/Users/hamma/.ssh/id_rsa"
HOST="root@13.140.132.52"

echo "=== SSH key exists? ==="
ls -la "$SSH_KEY" 2>&1 | head -2

echo ""
echo "=== Test SSH connectivity ==="
ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no -o ConnectTimeout=10 -o BatchMode=yes "$HOST" "echo connected; uname -a; cd /var/www/omnipathmarketing.com && pwd && git log --oneline -1" 2>&1
