function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { classify, score, Signal } from "../src/policy";

type FixtureCase = Signal & { name: string; score: number; decision: "accept" | "review" };

const cases: FixtureCase[] = [
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
  equal(score(item), item.score);
  equal(classify(item), item.decision);
}
