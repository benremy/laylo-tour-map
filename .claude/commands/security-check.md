Perform a security audit of the current codebase or specified files.

## Scope

If the user specifies files or a module, audit those. Otherwise audit all recently changed files (`git diff main...HEAD --name-only`) plus any files they import.

## Checklist

Work through each category. For every finding, note the file, line, severity, and a concrete fix.

### Injection
- [ ] SQL injection — raw string interpolation in queries
- [ ] Command injection — user input passed to shell commands
- [ ] XSS — unsanitised user content rendered as HTML (`dangerouslySetInnerHTML`, etc.)
- [ ] Path traversal — user-controlled file paths

### Authentication & authorisation
- [ ] Missing auth checks on protected routes or API handlers
- [ ] Broken access control — can user A access user B's data?
- [ ] JWT/session tokens stored insecurely (localStorage vs httpOnly cookies)
- [ ] Missing CSRF protection on state-mutating endpoints

### Secrets & data exposure
- [ ] Hardcoded API keys, passwords, or tokens in source code
- [ ] Secrets logged to console or error messages
- [ ] Sensitive data returned in API responses that should be filtered
- [ ] `.env` files or secrets accidentally committed

### Input validation
- [ ] Missing validation at API/form boundaries
- [ ] Client-side-only validation (must be enforced server-side too)
- [ ] File upload type/size not validated

### Dependencies
- [ ] Run `npm audit` or `pnpm audit` — flag any high/critical CVEs
- [ ] Packages with known vulnerabilities that should be upgraded

### Supabase / RLS (if applicable)
- [ ] RLS policies enabled on all user-data tables
- [ ] Service role key never exposed to the client
- [ ] Storage bucket policies restrict access correctly

## Output format

For each finding:
```
[SEVERITY] File:line
Problem: ...
Fix: ...
```

Severity levels: `CRITICAL` | `HIGH` | `MEDIUM` | `LOW` | `INFO`

End with a summary count by severity.
