#!/usr/bin/env bash
scp -i /c/Users/hamma/.ssh/id_rsa -o StrictHostKeyChecking=no "/c/Users/hamma/OneDrive/Documents/Omni Path Marketing/omni-path-marketing/deploy/diag-fetch.sh" root@13.140.132.52:/tmp/diag-fetch.sh
ssh -i /c/Users/hamma/.ssh/id_rsa -o StrictHostKeyChecking=no root@13.140.132.52 "bash /tmp/diag-fetch.sh"
