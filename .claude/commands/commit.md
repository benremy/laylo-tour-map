Review changes and create a git commit.

1. Run in parallel:
   - `git status` to see untracked files (never use -uall)
   - `git diff` to see staged and unstaged changes
   - `git log --oneline -5` to understand commit message style

2. Analyze all changes. Draft a commit message that:
   - Is concise (1–2 sentences)
   - Focuses on *why*, not just *what*
   - Uses present tense imperative ("add", "fix", "update")
   - Does NOT commit files that likely contain secrets (.env, credentials, etc.)

3. Stage specific relevant files by name. Do not use `git add -A` or `git add .`.

4. Commit using a HEREDOC:
```
git commit -m "$(cat <<'EOF'
<message>
EOF
)"
```

5. Run `git status` to confirm success.

Do NOT push unless the user explicitly asks.
