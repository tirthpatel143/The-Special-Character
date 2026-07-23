# QA Auto-Fix Report [BH-112]

- **Severity:** CRITICAL
- **Issue Type:** HTTP 500 Server Crash
- **Target Page:** [https://iboon.io/career](https://iboon.io/career)
- **Auditing Skill:** `qa-bughunter`

## Log Reference
```
GET https://iboon.io/career HTTP/1.1
Status: 500 Internal Server Error
Referrer: https://iboon.io/
```

## Proposed Fix / Diff
```diff
- <a href="https://iboon.io/career">Broken Link</a>
+ Verify route handler exists in backend routing table.
```

*Generated automatically by Hermes QA Orchestrator using Personal Access Token.*
