#!/usr/bin/env zx

await cd('/srv/test-webservice')
await $`git pull`
await $`pm2 restart all`
