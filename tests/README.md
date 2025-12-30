# Sauce Demo – Playwright Smoke Tests

This folder contains smoke-level Playwright tests for the Sauce Demo application.

## Scope
These tests focus on:
- Authentication (login success and failure)
- Core shopping flow (add item to cart, view cart)

They intentionally validate **user-visible behavior** rather than internal implementation details.

## Known Non-Functional Noise
During test execution, the application may attempt to submit telemetry to:

- `https://events.backtrace.io`

This request may return `401 Unauthorized` in test runs.
The failure is non-user-facing and does not affect core application behavior, so it is intentionally ignored by these tests.