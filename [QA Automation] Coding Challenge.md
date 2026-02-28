[QA Automation] Coding Challenge
Target Application: https://trade.multibank.io/
Task 1: Web UI Automation Framework
Objective
Build a production-grade web automation framework to test critical user flows on the MultiBank trading platform. Your solution should demonstrate professional engineering practices, scalability, and maintainability.
What We're Looking For
Clean architecture that separates concerns and promotes reusability
Robust test design that handles real-world flakiness and timing issues
Professional code quality with clear structure and documentation
Data-driven approach that avoids hard-coded values
Cross-browser compatibility with proper isolation
Core Test Scenarios
Your framework should validate:
Navigation & Layout
Top navigation menu displays correctly with all expected options
Navigation items are functional and link to appropriate destinations
Trading Functionality
Spot trading section displays trading pairs across different categories
Trading pair data structure and presentation is correct
Content Validation
Marketing banners appear at the page bottom
Download section links correctly to App Store and Google Play
About Us → Why MultiLink page renders all expected components with correct text
Technical Requirements
Must Have:
Modern automation tool (Selenium, Playwright, Cypress, or equivalent)
Page Object Model or similar design pattern
External test data management (no hard-coded assertions)
Cross-browser execution capability
Proper wait strategies (no fixed sleeps)
Test reporting with failure diagnostics
Build automation (Maven, Gradle, npm, etc.)
Your Choice:
Programming language and testing framework
Specific architectural patterns beyond basic separation of concerns
Parallel execution strategy
Retry/stability mechanisms
Additional quality measures you deem important
Test Coverage Guidelines
Design test cases covering:
Visual element presence and visibility
Navigation and user flow completion
Content accuracy against expected values
Cross-browser consistency
Link validation and page transitions
Structure your tests to be:
Independent - no test depends on another's state
Deterministic - consistent results across runs
Maintainable - easy to update when UI changes
Debuggable - clear failures with actionable information
Bonus Points
Cloud-based or grid execution capability
CI/CD pipeline integration (GitHub Actions, Jenkins, etc.)
Advanced reporting or test analytics
Performance or accessibility checks
Creative solutions to common automation challenges
Task 2 2: String Character Frequency
Write a program that counts character occurrences in a string and outputs them in order of first appearance.
Example
Input: "hello world"
Output: h:1, e:1, l:3, o:2, w:1, r:1, d:1
Your Implementation Should
Handle edge cases appropriately
Be efficient and readable
Include brief documentation of your approach
State any assumptions (case sensitivity, whites pace treatment, special characters, etc.)
Deliverables
Source Code Repository
Well-organized project structure
Clear commit history showing your development process
Comprehensive README with setup and execution instructions
Documentation
Architecture decisions and rationale
How to run tests locally and in different configurations
Any assumptions or trade-offs you made
How to maintain and extend the framework
Test Evidence
Sample test execution reports
Screenshots or logs demonstrating successful runs
Evidence of cross-browser testing
Evaluation Criteria
We'll assess your submission on:
Code Quality - readability, organization, best practices
Test Design - coverage, reliability, maintainability
Problem Solving - how you handle ambiguity and edge cases
Documentation - clarity of setup instructions and architectural decisions
Professional Polish - attention to detail, error handling, user experience
Submission
Share your GitHub repository link containing all code, documentation, and test artifacts. Ensure your README provides clear instructions for reviewers to run your solution.
