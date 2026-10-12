# AI-LOG — IA#1 cartTotal (CSC13008)

**Student ID:** 24127107

**Student:** Lê Đức Phúc

**Repository:** https://github.com/phuc-lee1/wad-cart-starter

**AI tool used:** ChatGPT (OpenAI)

## About this record

This log discloses how I used ChatGPT while completing IA#1. It follows the instructor's fields: **Tool**, **Asked for**, **Kept**, **Changed**, **Rejected**, and **By hand**. Using or adapting AI-generated suggestions is still AI assistance, even when I copied or typed the code myself.

**Accuracy note:** Some entries were reconstructed on 2026-10-12 from the ChatGPT conversation, my reported terminal results, and the repository, rather than written immediately after each action. I have not represented them as contemporaneous notes. Where the conversation does not document a separate alternative or rejection, I state that explicitly. The file paths, test results, and commit references below allow the account to be checked against the submitted project.

## 2026-10-11 — Understanding the assignment and cloning the starter

- **Tool:** ChatGPT.
- **Asked for:** Explain the IA#1 requirements, the expected `cartTotal(items, options)` function, the required submissions, and how to begin with Git, Node.js, and VS Code.
- **Kept:** The recommended workflow of cloning the starter, opening it in VS Code, running `npm test` before implementation, and examining the supplied specification in `README.md`.
- **Changed:** An initial sample clone URL containing `YOUR_USERNAME` failed because it was only a placeholder. I used the actual course URL: `https://github.com/fithcmus/wad-cart-starter.git`.
- **Rejected:** Using the non-existent placeholder repository URL.
- **By hand:** I ran the clone and setup commands in Windows CMD/VS Code. The original `npm test` run failed as expected with `Error: not implemented` (`1` test, `0` passed, `1` failed). The original starter state is recorded by commit `56048c0`.

## 2026-10-12 — Creating project rules in CLAUDE.md

- **Tool:** ChatGPT.
- **Asked for:** Explain the harness/rules-file criterion and help write project-specific instructions for the cartTotal assignment.
- **Kept:** Rules describing the JavaScript/Node.js ES-module stack, repository structure, supported commands, functional requirements, development process, and explicit restrictions.
- **Changed:** I saved and reviewed the rules as the root-level `CLAUDE.md`, reflecting the actual assignment rather than a generic agent-rules example.
- **Rejected:** Adding external dependencies, hardcoding `467400`, or changing the original test merely to make it pass; these are explicit prohibitions in the rules, not claims that I tested separate implementations.
- **By hand:** I created/saved the Markdown file in VS Code and reviewed the project-specific commands and restrictions. The harness setup is represented in commit `fe18234`.

## 2026-10-12 — Creating a dependency-free formatting quality gate

- **Tool:** ChatGPT.
- **Asked for:** Show how to add a format check using built-in Node.js APIs and combine it with unit testing.
- **Kept:** The design of `scripts/check-format.mjs` using `node:fs`, checking for trailing whitespace and a final newline, and the `package.json` scripts `npm run format:check` and `npm run check`.
- **Changed:** I created the script and configured the project's npm commands. The final `check` script runs the format check before `npm test`, while `npm test` uses Node.js's built-in test runner.
- **Rejected:** Installing a third-party formatter/linter for this small exercise; no external dependency was needed for the selected check.
- **By hand:** I created the file structure, edited `package.json`, and ran the commands locally. Relevant files: `scripts/check-format.mjs` and `package.json`; setup commit: `fe18234`.

## 2026-10-12 — Resolving the first format-check failure in CLAUDE.md

- **Tool:** ChatGPT.
- **Asked for:** Explain why the local quality gate printed `Format failed: CLAUDE.md` and how to correct the formatting in VS Code.
- **Kept:** The advice to remove trailing whitespace, ensure a final newline, save the file, and rerun the check.
- **Changed:** I corrected the Markdown formatting instead of changing the functional specification or disabling the checker.
- **Rejected:** Ignoring the failing quality gate or rewriting unrelated source code to address a Markdown-formatting error.
- **By hand:** I inspected the file in VS Code, applied the formatting correction, and reran the relevant npm commands. The exact invisible character that originally caused the problem was not independently identified.

## 2026-10-12 — Configuring GitHub Actions CI

- **Tool:** ChatGPT.
- **Asked for:** Explain how to create a CI workflow that runs the quality gate automatically when code is pushed.
- **Kept:** The workflow structure in `.github/workflows/ci.yml`: checkout, Node.js setup, and a `Run quality checks` step executing `npm run check` on `push` and `pull_request`.
- **Changed:** I saved the workflow as a repository file so GitHub Actions could use it after I pushed my commits.
- **Rejected:** Relying only on a local successful test run as evidence of CI. A configured YAML file alone does not demonstrate that CI has executed.
- **By hand:** I added the workflow to the project and later inspected actual results in the repository's Actions tab. The final workflow uses Node.js 22; see `.github/workflows/ci.yml`.

## 2026-10-12 — Writing the implementation brief

- **Tool:** ChatGPT.
- **Asked for:** Explain the purpose of the AI implementation brief and help describe the permitted files, behavior, error cases, and constraints for `cartTotal`.
- **Kept:** A scoped brief specifying `src/cart.js` and `test/cart.test.js`, the `items`/`options` contract, subtotal and VAT calculation, shipping threshold, empty-cart handling, `RangeError` conditions, whole-dong rounding, and no external dependencies.
- **Changed:** I saved the task description in `brief.md`. During repository preparation, I corrected its location from `.github/workflows/brief.md` to the repository root.
- **Rejected:** A vague instruction such as merely asking the assistant to 'write cartTotal', without a contract or error cases.
- **By hand:** I placed and reviewed the file in VS Code. The current `brief.md` documents the allowed files and verification commands. The repository file proves the brief was prepared, but does not independently establish that its complete text was sent as one separate prompt before implementation.

## 2026-10-12 — Implementing cartTotal in src/cart.js

- **Tool:** ChatGPT.
- **Asked for:** Explain the algorithm and provide a plain-JavaScript implementation satisfying the README specification.
- **Kept:** The subtotal loop over `items`, negative-price and non-positive/non-integer-quantity validation using `RangeError`, VAT and shipping calculations, the empty-cart special case, and `Math.round` to return a number.
- **Changed:** I inserted the suggested implementation into my working `src/cart.js`. The initial edit mistakenly left the original stub in place; this caused a syntax error and required the next correction.
- **Rejected:** Hardcoding the worked-example result or using `toFixed()` as the return value, because the contract requires a numeric total. I did not separately compare multiple full implementation proposals.
- **By hand:** I edited the source in VS Code, saved it, ran `npm test`, and examined the failure. Final implementation: `src/cart.js`; implementation-and-tests commit: `e9c43db`.

## 2026-10-12 — Fixing the duplicate cartTotal declaration

- **Tool:** ChatGPT.
- **Asked for:** Diagnose `SyntaxError: Identifier 'cartTotal' has already been declared` from the editor and terminal output.
- **Kept:** The explanation that the starter stub and new code both contained `export function cartTotal(items, options)`.
- **Changed:** I removed the obsolete `throw new Error('not implemented')` starter implementation and kept a single exported function with the intended calculation.
- **Rejected:** Leaving both declarations in the file; this prevented the tests from even loading the module.
- **By hand:** I inspected `src/cart.js`, applied the correction in VS Code, and continued with unit tests. The final file has one `cartTotal` declaration.

## 2026-10-12 — Adding unit tests and reviewing the implementation

- **Tool:** ChatGPT.
- **Asked for:** Help write and explain Node.js tests for the worked example, empty cart, shipping thresholds, invalid data, rounding, and the return type, and explain how to review Git changes.
- **Kept:** The use of `node:test` and `node:assert/strict`, separate checks for observable behavior, and the review commands `git diff`, `git status`, `npm test`, and `npm run check`.
- **Changed:** I expanded `test/cart.test.js` while preserving the original example test. The final suite contains 10 tests: the worked example, empty cart, exact free-shipping threshold, shipping below the threshold, negative price, fractional quantity, zero quantity, negative quantity, rounding, and numeric return type.
- **Rejected:** Modifying the original `467400` expectation to conceal an incorrect implementation. No separately tested alternative test-suite design is documented.
- **By hand:** I saved the tests, ran checks, and reviewed my changes. `evidence/01-npm-test.txt` records **10 passed, 0 failed**; the implementation and tests are included in commit `e9c43db`.

## 2026-10-12 — Saving local test, quality-gate, and commit evidence

- **Tool:** ChatGPT.
- **Asked for:** Explain how to preserve command output as checkable evidence for the rubric and self-assessment.
- **Kept:** The commands to create an `evidence/` directory and redirect `npm test`, `npm run check`, and `git log --oneline -8` output into text files.
- **Changed:** The initial attempt to redirect output failed because `evidence/` did not exist. I created the directory before rerunning the commands and later refreshed `03-commits.txt`.
- **Rejected:** Redirecting output into a path whose parent directory does not exist.
- **By hand:** I ran the commands in Windows CMD, checked the resulting files, and committed them. Evidence: `evidence/01-npm-test.txt`, `evidence/02-quality-gate.txt`, `evidence/03-commits.txt`, and `evidence/04-quality-gate.png`. The captured commit list includes `56048c0`, `fe18234`, `e9c43db`, and `6ec6d3f`; it is a snapshot, not a live complete Git history.

## 2026-10-12 — Drafting the first AI-LOG.md from conversation history

- **Tool:** ChatGPT.
- **Asked for:** Prepare a detailed AI-use log following the instructor's six-field template and reflecting the work described in our conversation.
- **Kept:** A dated, task-by-task account that states what was requested, suggested, changed, rejected, and done directly in the editor or terminal.
- **Changed:** I incorporated the log into the repository. The first draft contained verification reminders because some facts, especially final CI results, were not yet known; later entries document how those facts were established.
- **Rejected:** Claiming that all entries had been written immediately after each task, or that an unverified GitHub Actions run was successful.
- **By hand:** I supplied the history, screenshots, and command results used to reconstruct the log. Commit `6ec6d3f` records adding the initial `AI-LOG.md`. The retrospective nature of several entries is disclosed at the top of this file.

## 2026-10-12 — Forking, committing, and pushing the repository

- **Tool:** ChatGPT.
- **Asked for:** Guide me through connecting my existing local repository to my personal GitHub fork, checking untracked files, committing evidence, and pushing safely.
- **Kept:** The guidance to use `git remote -v` to confirm the destination, `git status` to inspect untracked files, `git add`/`git commit` to record changes, and `git push -u origin main` for the first push to the personal fork.
- **Changed:** I corrected the location of `brief.md`, staged additional evidence files, and pushed to `https://github.com/phuc-lee1/wad-cart-starter` rather than the instructor's upstream repository.
- **Rejected:** Pushing blindly without checking the remote or assuming untracked evidence files would be included automatically.
- **By hand:** I ran the Git commands, reviewed terminal output, and checked that the files appeared on my GitHub repository. The initial push included commit `138d4fa` (`Add test results and quality gate evidence`).

## 2026-10-12 — Diagnosing and fixing the failed GitHub Actions run

- **Tool:** ChatGPT.
- **Asked for:** Determine why the first `Cart CI` workflow failed, interpret the GitHub Actions error, and explain how to correct it.
- **Kept:** The recommendation to open the failed `Run quality checks` job and rerun `npm run format:check` locally. Both checks identified `Format failed: brief.md`.
- **Changed:** I fixed `brief.md` formatting without altering the calculation, committed it as `2db5a03` (`Fix brief formatting for CI`), and pushed again.
- **Rejected:** Treating the general Node.js deprecation warning as the cause of the failing quality gate, or ignoring the red workflow.
- **By hand:** I inspected the GitHub Actions result and Windows CMD output, edited `brief.md`, reran the checks, committed, pushed, and verified that [Cart CI #2 — Fix brief formatting for CI](https://github.com/phuc-lee1/wad-cart-starter/actions/runs/38220880009) reported **Success**. The preceding run failed; this successful run provides the CI evidence.

## 2026-10-12 — Preparing and verifying the self-assessment

- **Tool:** ChatGPT.
- **Asked for:** Draft and audit `SELF_ASSESSMENT_REPORT.md` against the instructor's template and rubric, check the student information, and reconcile the claimed marks with the evidence.
- **Kept:** The required five-criterion table, direct file/commit/CI references, and the sections `What I did not manage` and `What I would do differently`.
- **Changed:** I chose a final self-claimed total of **85/100** and provided my details: student ID **24127107**, Lê Đức Phúc, and the personal GitHub repository. The table was reconciled to `26 + 17 + 19 + 13 + 10 = 85`, and the report references the verified successful CI run.
- **Rejected:** Leaving the old 75-point total in the table, claiming CI had not been verified, or treating the self-assessment score as a guaranteed grade.
- **By hand:** I supplied my identifying details and selected the claimed score. I reviewed the report and prepared it for inclusion as `SELF_ASSESSMENT_REPORT.md`. The instructor may assess the retrospective AI log differently from my self-claimed 10/15; this limitation is not hidden.

## 2026-10-12 — Reviewing and finalizing the AI usage log

- **Tool:** ChatGPT.
- **Asked for:** Revise `AI-LOG.md` into a coherent final document using the actual repository files, Git history, completed tests, and successful CI, while preserving the instructor's template.
- **Kept:** The task-by-task structure and factual examples of assistance, including the wrong clone URL, duplicate `cartTotal` declaration, formatting corrections, added tests, evidence capture, Git push, and recovery from the failed CI run.
- **Changed:** The revised text replaces obsolete unverified-fact and unfinished-task placeholders with the supported final facts: 10/10 local tests and the successful `Cart CI #2` run. It retains an explicit disclosure that some entries were reconstructed after the events.
- **Rejected:** Fabricating independent programming work, an AI suggestion rejection that was not documented, a perfect first CI run, or a complete contemporaneous prompt history.
- **By hand:** I requested this revision after checking my repository and providing the final score and identification. The generated Markdown still needs to be reviewed, saved to the repository root, and committed by me; this entry does not claim that the final replacement has already been pushed.
