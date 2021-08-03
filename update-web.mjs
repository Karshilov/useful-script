#!/usr/bin/env zx

await cd('/srv/eb-management-web')
await $`git pull`
await $`yarn && yarn build`
