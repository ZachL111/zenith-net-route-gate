# Review Journal

This journal records the domain cases that matter before widening the public API.

The local checks classify each case as `ship`, `watch`, or `hold`. That gives the project a small review vocabulary that matches its networking focus without claiming live deployment or external usage.

## Cases

- `baseline`: `packet span`, score 163, lane `ship`
- `stress`: `retry pressure`, score 169, lane `ship`
- `edge`: `route drift`, score 148, lane `ship`
- `recovery`: `socket risk`, score 171, lane `ship`
- `stale`: `packet span`, score 148, lane `ship`

## Note

A future change should add new cases before it changes the scoring rule.
