#!/usr/bin/env bash
scp -i /c/Users/hamma/.ssh/id_rsa -o StrictHostKeyChecking=no "/c/Users/hamma/OneDrive/Documents/Omni Path Marketing/omni-path-marketing/deploy/diag-sitemap.sh" root@13.140.132.52:/tmp/diag-sitemap.sh
ssh -i /c/Users/hamma/.ssh/id_rsa -o StrictHostKeyChecking=no root@13.140.132.52 "bash /tmp/diag-sitemap.sh"
