
import { readFileSync, existsSync } from 'node:fs'

// Files required at this stage
const required = [
  'src/cart.js',
  'test/cart.test.js',
  'scripts/check-format.mjs',
  'CLAUDE.md',
]

// Documentation created in later steps
const optional = [
  'brief.md',
  'AI-LOG.md',
  'SELF_ASSESSMENT_REPORT.md',
]

let hasError = false

for (const file of [...required, ...optional]) {
  if (!existsSync(file)) {
    if (required.includes(file)) {
      console.error(`Missing required file: ${file}`)
      hasError = true
    }
    continue
  }

  const content = readFileSync(file, 'utf8')
    .replace(/\r\n/g, '\n')

  const noFinalNewline = !content.endsWith('\n')
  const trailingSpaces = /[ \t]+$/m.test(content)

  if (noFinalNewline || trailingSpaces) {
    console.error(`Format failed: ${file}`)
    hasError = true
  }
}

if (hasError) {
  process.exitCode = 1
} else {
  console.log('Format check passed')
}
