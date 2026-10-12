# Project Rules - IA#1 cartTotal
## Project Overview
- Course: CSC13008
- Assignment: IA#1 - cartTotal with a harness
- Language: Plain JavaScript
- Runtime: Node.js
- Module system: ES Modules
- Dependencies: None
## Project Structure
- src/cart.js: cartTotal implementation
- test/cart.test.js: Unit tests
- README.md: Project specification
- package.json: Project configuration
- CLAUDE.md: Project rules
- brief.md: Instructions given to AI
- AI-LOG.md: AI usage documentation
- SELF_ASSESSMENT_REPORT.md: Self-assessment report
## Commands
- Run unit tests: npm test
- Check formatting: npm run format:check
- Run all checks: npm run check
## Coding Rules
- Follow the specification in README.md.
- Use plain JavaScript and Node.js.
- Keep the function name cartTotal.
- Keep the existing function export.
- Never add external dependencies.
- Never delete the original test.
- Never modify tests just to make them pass.
- Never return a string instead of a number.
- Never hardcode the expected result 467400.
- Throw RangeError for invalid prices or quantities.
## Functional Requirements
1. Calculate subtotal using price * qty.
2. Calculate VAT using subtotal * vatRate.
3. Free shipping when subtotal >= freeShipFrom.
4. Otherwise, shipping equals shipFee.
5. Return 0 for an empty cart.
6. Throw RangeError for negative prices.
7. Throw RangeError for non-positive or non-integer quantities.
8. Round the final total to the nearest whole dong.
9. Return a JavaScript number.
## Development Workflow
1. Read README.md and the assignment rubric.
2. Run npm test before implementation.
3. Set up the quality gate and CI.
4. Write a detailed brief before requesting AI assistance.
5. Implement code in small steps.
6. Run tests after modifying code.
7. Run npm run check before committing.
8. Review changes using git diff.
9. Update AI-LOG.md honestly.
10. Verify CI after pushing to GitHub.
## Security Rules
- Never include API keys or passwords in AI prompts.
- Never share real user data.
- Never submit classmates' work as your own.
## Submission Rules
- Include the source code and unit tests.
- Include brief.md.
- Include AI-LOG.md.
- Include SELF_ASSESSMENT_REPORT.md.
- Include evidence for each rubric criterion.
- Name the ZIP file StudentID_total.zip.
