function equal<T>(actual: T, expected: T): void {
  if (actual !== expected) {
    throw new Error(`expected ${expected}, got ${actual}`);
  }
}

import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 54, slack: 24, drag: 15, confidence: 76 };
equal(domainReviewScore(item), 163);
equal(domainReviewLane(item), "ship");
