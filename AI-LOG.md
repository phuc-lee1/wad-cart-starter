# AI-LOG — IA#1 cartTotal (CSC13008)

> **Record note:** This log was prepared with ChatGPT on 2026-10-12 using our earlier conversation. Some entries were reconstructed after the work rather than written at the time. I must verify the details against my local files, terminal output, and Git history before submitting. AI assistance is reported even when I manually typed or pasted its suggestions.

## 2026-10-11 — Understanding the assignment and setting up the starter repository
Tool: ChatGPT
Asked for: Explain the IA#1 specification, the required workflow and submission files, and how to clone and run the starter project in VS Code.
Kept: The explanation that the project is a plain-JavaScript `cartTotal(items, options)` function, not a complete shopping website; the instructions for `git clone`, `code .`, and `npm test`; and the requirement to observe the initial failing test before implementing the function.
Changed: The first example clone command used `YOUR_USERNAME` and produced `Repository not found`; I switched to the actual course repository URL, `https://github.com/fithcmus/wad-cart-starter.git`.
Rejected: The literal `YOUR_USERNAME` placeholder URL because it was not an existing repository URL.
By hand: I ran Git and npm commands, opened the cloned folder in VS Code, and observed the original test failing with `Error: not implemented` (`tests 1`, `pass 0`, `fail 1`).

## 2026-10-12 — Preparing the project rules in CLAUDE.md
Tool: ChatGPT
Asked for: Explain the harness rules requirement and draft a project-specific `CLAUDE.md` using the assignment rubric.
Kept: The sections for project overview, project structure, commands, coding rules, functional requirements, workflow, security rules, and submission rules; especially the constraints to use plain JavaScript, add no external dependencies, and preserve the original test.
Changed: I placed the Markdown content in the repository's root `CLAUDE.md` and reviewed its organization in VS Code; no independent change to the functional specification was reported.
Rejected: None documented for this task.
By hand: I created or saved `CLAUDE.md` in VS Code and checked that its contents matched the required rules and assignment context.

## 2026-10-12 — Building the formatting quality gate
Tool: ChatGPT
Asked for: Give step-by-step instructions for implementing a dependency-free formatting check and configuring npm scripts for the quality gate.
Kept: The suggested `scripts/check-format.mjs` checker using Node.js `fs`, the checks for final newlines and trailing whitespace, and the `package.json` commands `npm run format:check` and `npm run check` (format check followed by tests).
Changed: I added the checker file and updated my project's `package.json` to make these commands available. Any edits beyond the suggested checker should be confirmed from the actual file before submission.
Rejected: No alternative formatting tool is documented as having been tried or rejected. No external dependency was added for this checker.
By hand: I created the file structure, saved the configuration, and executed the local quality-gate commands to check their behavior.

## 2026-10-12 — Diagnosing the CLAUDE.md format failure
Tool: ChatGPT
Asked for: Diagnose why both `npm run format:check` and `npm run check` reported `Format failed: CLAUDE.md`.
Kept: The explanation that the checker rejects a missing final newline or whitespace at the end of a line, and the suggested VS Code operations `Trim Trailing Whitespace`, add a final newline, and save.
Changed: I corrected the formatting of `CLAUDE.md` and reran the quality gate, which I later reported as working. The exact hidden whitespace issue was not independently proven from the screenshot.
Rejected: Rewriting the whole file was unnecessary; the issue concerned formatting rather than the functional rules.
By hand: I inspected `CLAUDE.md` in VS Code, applied the formatting fix, and reran the commands to confirm the quality gate worked.

## 2026-10-12 — Adding GitHub Actions configuration
Tool: ChatGPT
Asked for: Explain how to add a CI workflow in `.github/workflows/ci.yml` that runs the project's quality gate on push.
Kept: The example workflow using `actions/checkout`, `actions/setup-node` with Node.js 22, and `npm run check`, triggered by push and pull requests.
Changed: I followed the instructions to add the workflow to the repository as part of the harness work. The exact workflow content should be checked against `.github/workflows/ci.yml`.
Rejected: None documented for this task.
By hand: I worked through the VS Code file-creation and Git instructions; the successful execution of GitHub Actions has **not yet been evidenced** in this conversation and must be checked before I claim a green CI run.

## 2026-10-12 — Preparing the implementation brief
Tool: ChatGPT
Asked for: Explain what `brief.md` must contain and draft a scoped task brief for implementing `cartTotal()`.
Kept: The proposed brief structure: objective, allowed files (`src/cart.js` and `test/cart.test.js`), input contract, subtotal/VAT/shipping rules, invalid-input behavior, no dependencies, and verification commands.
Changed: I created a `brief.md` file in the repository; I must check its saved content against the final requirements. No independent modifications to the brief have been confirmed in the chat.
Rejected: None documented for this task.
By hand: I created or edited the file in VS Code. **Verification needed:** record whether and when I actually submitted this brief to an AI tool, rather than assuming the file's existence proves it was used beforehand.

## 2026-10-12 — Implementing cartTotal in src/cart.js
Tool: ChatGPT
Asked for: Explain the `cartTotal(items, options)` algorithm in detail and provide a plain-JavaScript implementation consistent with the README.
Kept: The suggested empty-cart return, subtotal accumulation using a `for...of` loop, `RangeError` for a negative price or non-positive/non-integer quantity, VAT calculation, free-shipping threshold comparison, and `Math.round` to return a number.
Changed: I inserted the new implementation into `src/cart.js`. Initially, I left the starter's original `cartTotal` stub in the file as well, which caused a duplicate-declaration error; the correction is documented in the next entry.
Rejected: I did not use hardcoded totals or a string result. The conversation does not establish that I evaluated and explicitly rejected other complete implementations.
By hand: I edited and saved `src/cart.js` in VS Code, ran `npm test`, and examined the reported error when the file contained two declarations.

## 2026-10-12 — Fixing the duplicate cartTotal declaration
Tool: ChatGPT
Asked for: Find the cause of `SyntaxError: Identifier 'cartTotal' has already been declared` from my `src/cart.js` screenshot and test output.
Kept: The diagnosis that the original four-line stub and the newly added implementation both declared `export function cartTotal(items, options)`; and the fix to remove the original stub while retaining one implemented export.
Changed: I corrected the file structure to retain only one declaration, as required to continue testing. This was a structural fix, not a change to the shopping-cart formula.
Rejected: The obsolete `throw new Error('not implemented')` starter stub and duplicate declaration, because the function had already been implemented.
By hand: I inspected the editor and terminal error and followed the correction procedure in VS Code. I later reported having finished the implementation and testing/review steps; the exact passing test count should be verified from `evidence/01-npm-test.txt`.

## 2026-10-12 — Expanding unit tests and reviewing changes
Tool: ChatGPT
Asked for: Explain how to add Node.js unit tests for the worked example, empty cart, shipping threshold, negative prices, invalid quantities, rounding, and numeric return type, and how to review changes with Git.
Kept: Test-case ideas and examples using `node:test`, `node:assert/strict`, `assert.equal`, `assert.throws`, and the suggested commands `npm test`, `npm run check`, `git status`, and `git diff`.
Changed: I worked on the test file and reported that the tasks through testing and Git Diff were completed. The precise test names and counts must be copied from my current `test/cart.test.js` and test output, not assumed from sample output in the chat.
Rejected: None documented, other than the general rule not to alter the starter's expected result to force a passing test.
By hand: I ran local checks, inspected results, and used Git commands to review project changes. **Verification needed:** confirm the final passing test count and whether the implementation/tests have been committed separately.

## 2026-10-12 — Collecting test and Git evidence
Tool: ChatGPT
Asked for: Explain how to save test output and Git history as evidence for `AI-LOG.md` and `SELF_ASSESSMENT_REPORT.md`.
Kept: The suggestion to create an `evidence/` directory and save `npm test`, `npm run check`, and `git log --oneline -8` output as text files.
Changed: The first command to save test output failed with `The system cannot find the path specified` because the `evidence/` directory did not exist. I used the guidance to create the directory before repeating the commands.
Rejected: Running the output-redirection command before creating its destination directory; that approach could not create a missing parent folder.
By hand: I executed the evidence commands and checked Git history. The reported log contained `fe18234 Set up harness and quality checks` and `56048c0 Starter for IA#1: cartTotal with one failing test`; **no implementation/test commit was shown at that time**.

## 2026-10-12 — Drafting the AI usage log and self-assessment evidence
Tool: ChatGPT
Asked for: Draft a detailed `AI-LOG.md` based on my actual conversation history and the instructor's template, while distinguishing confirmed actions from unverified claims.
Kept: This entry-by-task record, the required fields (`Tool`, `Asked for`, `Kept`, `Changed`, `Rejected`, `By hand`), and references to actual file names, observed errors, and known Git commits.
Changed: **To be completed by me:** correct any detail that does not match the local files or actual work, adjust dates as necessary, and replace tentative descriptions with verified facts.
Rejected: Unverified claims of a successful GitHub Actions run, a specific final test count, or an implementation commit that is not yet visible in the Git history supplied.
By hand: **To be completed after reviewing this draft:** inspect the source, test output, Git commits, and CI results; then save and commit the corrected log.
