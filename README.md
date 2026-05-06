# zenith-net-route-gate

`zenith-net-route-gate` is a compact TypeScript repository for networking, centered on this goal: Design a TypeScript verification harness for route systems, covering diagnostic reporting, negative fixtures, and failure-oriented tests.

## Project Rationale

I want this repository to be useful as a quick reading exercise: fixtures first, implementation second, verifier last.

## Zenith Net Route Gate Review Notes

The first comparison I would make is `socket risk` against `route drift` because it shows where the rule is most opinionated.

## Feature Set

- `fixtures/domain_review.csv` adds cases for packet span and retry pressure.
- `metadata/domain-review.json` records the same cases in structured form.
- `config/review-profile.json` captures the read order and the two review questions.
- `examples/zenith-net-route-walkthrough.md` walks through the case spread.
- The TypeScript code includes a review path for `socket risk` and `route drift`.
- `docs/field-notes.md` explains the strongest and weakest cases.

## Architecture

The repository has two validation layers: the original compact policy fixture and the domain review fixture. They are separate so one can change without hiding failures in the other.

The TypeScript code keeps the review rule close to the tests.

## Usage

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File scripts/verify.ps1
```

## Test Command

The check exercises the source code and the review fixture. `recovery` is the high score at 171; `edge` is the low score at 148.

## Next Improvements

The repository is intentionally scoped to local checks. I would expand it by adding adversarial fixtures before adding features.
