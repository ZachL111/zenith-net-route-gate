import * as assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview";

const item = { signal: 54, slack: 24, drag: 15, confidence: 76 };
assert.equal(domainReviewScore(item), 163);
assert.equal(domainReviewLane(item), "ship");
