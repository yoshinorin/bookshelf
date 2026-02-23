---
name: commit-message
description: Use this skill when the user asks to "suggest a commit message", "generate a commit message", "think of a commit message", or wants to check git diff and come up with a commit message in English.
allowed-tools: Bash
---

# Commit Message Generator

Generate a single-line English commit message by analyzing the current git diff.

## Steps

1. Run `git diff --staged` to check staged changes. If empty, also run `git diff` to check unstaged changes.
2. Analyze what has changed (files modified, additions, deletions, intent of the change).
3. Propose a single commit message in English following the Conventional Commits format.

## Commit Message Format

```
<type>(<scope>): <short description>
```

- **type**: `feat`, `fix`, `chore`, `refactor`, `docs`, `style`, `test`, `perf`, `ci`, `build`
- **scope**: optional, the area of the codebase affected (e.g., `auth`, `api`, `ui`)
- **description**: imperative mood, lowercase, no period at the end

## Output

Present exactly one commit message candidate. Do not provide multiple options unless explicitly asked.
