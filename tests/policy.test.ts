import * as assert from "node:assert/strict";
import { classify, score, Signal } from "../src/policy";

const cases: Array<Signal & { score: number; decision: "accept" | "review" }> = [
  {
    "name": "case_1",
    "demand": 90,
    "capacity": 90,
    "latency": 12,
    "risk": 6,
    "weight": 12,
    "score": 246,
    "decision": "accept"
  },
  {
    "name": "case_2",
    "demand": 66,
    "capacity": 78,
    "latency": 11,
    "risk": 15,
    "weight": 11,
    "score": 131,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 67,
    "capacity": 105,
    "latency": 25,
    "risk": 14,
    "weight": 13,
    "score": 144,
    "decision": "review"
  }
];

for (const item of cases) {
  assert.equal(score(item), item.score);
  assert.equal(classify(item), item.decision);
}
