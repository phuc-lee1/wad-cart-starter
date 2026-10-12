# Self-assessment — IA#1

**Course:** CSC13008 — Web Application Development

**Assignment:** IA#1 — cartTotal with a harness

**Submitted by:** 24127107 — Lê Đức Phúc

**Repository:** https://github.com/phuc-lee1/wad-cart-starter

**Submission filename:** `24127107_85.zip`

**Total I claim: 85 / 100**

## Rubric self-assessment

| Criterion | Max | I claim | Evidence |
|---|---:|---:|---|
| Behaviour | 30 | 26 | [`src/cart.js`](src/cart.js) implements subtotal, VAT, shipping, the free-shipping threshold, empty-cart handling, `RangeError` validation and numeric rounding. The original worked-example test expects `467400`; see [`test/cart.test.js`](test/cart.test.js) and [`evidence/01-npm-test.txt`](evidence/01-npm-test.txt). |
| Tests | 20 | 17 | [`test/cart.test.js`](test/cart.test.js) contains 10 distinct tests covering the worked example, empty cart, free shipping at the exact threshold, shipping below it, invalid prices and quantities, rounding and the numeric result type. [`evidence/01-npm-test.txt`](evidence/01-npm-test.txt) records **10 passed, 0 failed**. |
| Harness | 20 | 19 | [`CLAUDE.md`](CLAUDE.md) provides project-specific rules and explicit prohibitions; [`package.json`](package.json) defines `npm test`, `npm run format:check` and `npm run check`; [`scripts/check-format.mjs`](scripts/check-format.mjs) provides the formatting gate; [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs the checks on push. [Cart CI #2 — Success](https://github.com/phuc-lee1/wad-cart-starter/actions/runs/38220880009), commit [`2db5a03`](https://github.com/phuc-lee1/wad-cart-starter/commit/2db5a03); [`evidence/02-quality-gate.txt`](evidence/02-quality-gate.txt). |
| Brief | 15 | 13 | [`brief.md`](brief.md) is at the repository root and specifies the two allowed implementation/test files, input/output contract, calculation rules, required `RangeError` cases, no external dependencies, and verification commands. |
| AI-LOG.md | 15 | 10 | [`AI-LOG.md`](AI-LOG.md) identifies ChatGPT as the tool and records tasks, suggestions kept, modifications, rejections and hands-on work, including the duplicate-function and formatting errors. **Some entries were reconstructed retrospectively**, which is disclosed in the log and limits the strength of the evidence. Compare with [`evidence/03-commits.txt`](evidence/03-commits.txt) and actual Git history. |
| **Total** | **100** | **85** | **26 + 17 + 19 + 13 + 10 = 85**. |

## Detailed evidence and justification

### 1. Behaviour — 26/30

The implementation in `src/cart.js` preserves the exported `cartTotal(items, options)` function and uses plain JavaScript without external dependencies. It calculates the subtotal as the sum of `item.price * item.qty`, adds VAT using `subtotal * options.vatRate`, and charges `options.shipFee` only when the subtotal is below `options.freeShipFrom`.

The function returns `0` for an empty cart, throws `RangeError` for a negative price or a quantity that is not a positive integer, and uses `Math.round` to return the final amount in whole đồng as a JavaScript `number`. The official example expects `467400`; the corresponding original test remains in `test/cart.test.js`.

I claim 26/30 because the required cases were implemented and verified by the supplied tests, while avoiding an unsupported claim that every possible input combination was exhaustively tested.

**Evidence:** `src/cart.js`, `test/cart.test.js`, and `evidence/01-npm-test.txt`.

### 2. Tests — 17/20

The test suite uses Node.js's built-in `node:test` and `node:assert/strict` modules. The following 10 test cases are present in `test/cart.test.js`:

1. `the example from the slides`
2. `empty cart returns zero`
3. `free shipping at exact threshold`
4. `shipping applies below threshold`
5. `negative price throws RangeError`
6. `fractional quantity throws RangeError`
7. `zero quantity throws RangeError`
8. `negative quantity throws RangeError`
9. `rounds final total`
10. `returns a number`

The recorded local test output reports **10 tests, 10 passes and 0 failures**. The tests assert externally observable behavior rather than internal implementation details. I claim 17/20 because the suite covers all required rubric cases while recognizing that it is not exhaustive.

**Evidence:** `test/cart.test.js`, `evidence/01-npm-test.txt`, and `evidence/02-quality-gate.txt`.

### 3. Harness — 19/20

I created the project-specific rules file `CLAUDE.md`. It defines the stack (Node.js, ES modules and plain JavaScript), the repository structure, supported commands, functional requirements, development workflow and explicit restrictions such as never installing external dependencies, never changing the original test simply to pass, and never hardcoding the example result.

The quality gate combines `npm run format:check` and `npm test` through `npm run check`. The checker in `scripts/check-format.mjs` checks basic file-format issues, such as trailing whitespace and a missing final newline. It is a formatting check, not a full linter.

The GitHub Actions workflow in `.github/workflows/ci.yml` was triggered by pushes to the repository. The first run failed because the checker reported `Format failed: brief.md`. I corrected the formatting and committed the fix as [`2db5a03`](https://github.com/phuc-lee1/wad-cart-starter/commit/2db5a03). The subsequent run, **Cart CI #2 — Fix brief formatting for CI**, completed with **Success**. This provides evidence that the quality gate works in GitHub Actions, not only locally.

**Evidence:** `CLAUDE.md`, `scripts/check-format.mjs`, `package.json`, `.github/workflows/ci.yml`, `evidence/02-quality-gate.txt`, commit `fe18234` for harness setup, and the [successful CI run](https://github.com/phuc-lee1/wad-cart-starter/actions/runs/38220880009).

### 4. Brief — 13/15

The file `brief.md` is located at the repository root. It describes the objective of implementing `cartTotal(items, options)` and limits code changes to `src/cart.js` and `test/cart.test.js`. It explains the shape of `items` and `options`, subtotal, VAT, shipping rules, empty-cart behavior, `RangeError` cases, rounding, numeric return type, and the prohibition against external dependencies or hardcoded answers.

The brief also requires preserving the original test, adding relevant edge-case tests, running `npm test` and `npm run check`, and reviewing the diff. The brief itself was prepared with ChatGPT assistance, as disclosed in `AI-LOG.md`; the file alone does not establish the exact moment it was supplied to an AI assistant.

**Evidence:** `brief.md`, `CLAUDE.md`, and the brief-related entry in `AI-LOG.md`.

### 5. AI-LOG.md — 10/15

The `AI-LOG.md` describes the use of ChatGPT across the development workflow, including cloning the starter repository, understanding the specification, preparing project rules, configuring formatting checks and CI, writing the implementation brief, implementing `cartTotal`, expanding tests, troubleshooting errors, and collecting evidence.

The entries distinguish between the assistant's suggestions, the suggestions I kept, changes I made, recommendations or approaches I rejected, and work performed manually. Specific examples include correcting the initial clone URL, deleting the duplicate original `cartTotal` stub, fixing trailing-whitespace/final-newline problems, and collecting command output as evidence.

**Limitation acknowledged:** Part of the log was written retrospectively using the conversation history, rather than contemporaneously after every action. The record does not demonstrate every intermediate prompt or every independent edit. I retain the claimed 10 points as my own assessment of the detail and transparency of the log, recognizing that the instructor may score retrospective entries lower under the rubric.

**Evidence:** `AI-LOG.md`, `src/cart.js`, `scripts/check-format.mjs`, and `evidence/03-commits.txt`.

## What I did not manage

I did not consistently complete `AI-LOG.md` entries immediately after each development action. Several entries had to be reconstructed from the conversation, so their sequence and wording may not capture every intermediate decision. I also did not build a more comprehensive test suite beyond the 10 recorded checks. The original formatting failures in `CLAUDE.md` and `brief.md` were subsequently corrected, and a successful GitHub Actions run was verified; they are therefore not being presented as unresolved issues.

## What I would do differently

I would read the original starter implementation and inspect the diff more carefully before inserting a replacement function. During this assignment, retaining the original `cartTotal` declaration alongside the implementation caused a syntax error that could have been avoided. I would also create AI-LOG entries immediately after each AI-assisted task instead of reconstructing them later, and run the complete quality gate after each documentation change. Finally, I would confirm the correct location of files such as `brief.md` at creation time and test GitHub Actions earlier, leaving more time to respond to failures before submission.

## Submission consistency

- **Student ID:** `24127107`
- **Student name:** Lê Đức Phúc
- **Claimed score:** `85 / 100`
- **Sum of rubric scores:** `26 + 17 + 19 + 13 + 10 = 85`
- **Required ZIP name:** `24127107_85.zip`
- **Repository:** https://github.com/phuc-lee1/wad-cart-starter
- **Verified successful CI run:** https://github.com/phuc-lee1/wad-cart-starter/actions/runs/38220880009

The ZIP should contain this report at the repository root, together with the implementation, tests, project rules, brief, AI log, workflow and available evidence.
