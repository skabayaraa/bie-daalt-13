# AI Usage Report

## Introduction

This project was developed as part of the F.CSM311 Software Construction course assignment focused on AI-Assisted Software Construction. The goal of the assignment was not only to build a working software project, but also to understand how modern AI tools can participate in the software development workflow. During this project I used AI tools to assist with planning, implementation, debugging, testing, and documentation.

The selected project was a simple Task Tracker REST API built using Node.js and Express. The system supports basic CRUD operations such as creating tasks, retrieving tasks, updating tasks, and deleting tasks. The project also includes automated unit tests using Jest and Supertest.

Throughout development I followed the workflow discussed in the lecture:
Spec → Generate → Review → Integrate.

This report explains how AI was used, what problems occurred, how hallucinations were identified, what security considerations appeared, and what I learned from the experience.

---

# 1. What AI Did vs What I Did

## What AI Helped With

AI was mainly used for:
- generating project structure
- generating Express boilerplate code
- suggesting API routes
- helping configure Jest testing
- generating unit test examples
- helping create markdown documentation
- explaining debugging errors
- suggesting commit message formats
- creating slash command templates

AI accelerated the initial setup process significantly. Instead of manually searching documentation for every configuration step, I was able to ask the AI directly for guidance. For example, AI generated the initial Express server setup including:

- app.js
- server.js
- Express middleware
- route setup

AI also helped create CRUD route examples for:
- GET /tasks
- POST /tasks
- PUT /tasks/:id
- DELETE /tasks/:id

Another major benefit was testing support. AI generated Jest and Supertest examples which helped me understand how API testing works in Node.js applications.

AI also helped organize the repository structure according to the assignment requirements. This included:
- partA
- partB
- partC
- .claude/commands
- ai-session logs
- ADR files

The AI-generated templates helped reduce repetitive work.

## What I Did Myself

Although AI generated many examples, I still had to:
- understand the code
- debug syntax errors
- connect modules correctly
- fix incorrect paths
- test APIs manually
- verify server behavior
- organize Git commits
- understand PowerShell errors
- edit markdown files
- ensure the project followed assignment requirements

For example, when PowerShell produced errors because I executed JavaScript code directly in the terminal, I had to understand the difference between terminal commands and JavaScript source code files.

I also manually verified:
- routes were working correctly
- test cases were passing
- Express server started properly
- folder structure matched the assignment
- slash command files existed in correct location

The final integration and debugging process required human understanding and verification.

---

# 2. Hallucination Examples

AI systems are helpful, but they sometimes generate incorrect or misleading information. During this project I experienced multiple hallucination examples.

## Hallucination Example 1: Incorrect File Path Usage

At one point the AI suggested commands like:

```powershell
New-Item partC\AI-USAGE-REPORT.md