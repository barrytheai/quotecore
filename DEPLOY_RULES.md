# ⚠️ LIVE PROJECT — quote-core.com

This directory deploys DIRECTLY to quote-core.com.

## Rules

- NEVER deploy from this directory unless Cece has explicitly said "push to live" or "push staging to live"
- ALL changes go to `../quotecore-staging/` first
- Only promote here after explicit approval
- If unsure: use staging, not this

## Correct workflow

1. Build/test in `../quotecore-staging/` → deploys to staging URL only
2. Cece reviews staging URL
3. Cece says "push to live" → THEN deploy from this directory

## Wrong workflow (do not do this)

- Building a feature and deploying here directly
- Copying quotecore-staging changes here without approval
- Using this directory for testing or iteration
