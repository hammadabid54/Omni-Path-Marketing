#!/usr/bin/env bash
# Copy verify script to VPS via heredoc over SSH, then run it.
set -e

SSH_KEY="/c/Users/hamma/.ssh/id_rsa"
HOST="root@13.140.132.52"
SCRIPT="/tmp/verify-seo.sh"
LOCAL="C:/Users/hamma/OneDrive/Documents/Omni Path Marketing/omni-path-marketing/deploy/verify-seo-waves.sh"

# Use the simpler approach: scp with a converted path
scp -i "$SSH_KEY" -o StrictHostKeyChecking=no "/c/Users/hamma/OneDrive/Documents/Omni Path Marketing/omni-path-marketing/deploy/verify-seo-waves.sh" "$HOST:$SCRIPT"

echo "=== File copied, running now ==="
ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no "$HOST" "bash $SCRIPT"
