#!/usr/bin/env zx

let courses = Json.parse(await fs.readFile('./course.json'))["course"].split('@@')

await Promise.all([
  ...courses.map(course => $`sleep 1; ${course}`)
])