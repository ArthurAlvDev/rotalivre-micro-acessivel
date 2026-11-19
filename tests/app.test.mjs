import test from 'node:test';
import assert from 'node:assert/strict';
import { scoreSegmentAccessibility, BARRIER_TYPES } from '../app.js';

test('returns 100 ACESSIVEL when no barriers', () => {
  const res = scoreSegmentAccessibility([]);
  assert.equal(res.score, 100);
  assert.equal(res.classification, 'ACESSÍVEL');
});

test('blocks wheelchair when high severity barrier exists', () => {
  const res = scoreSegmentAccessibility([BARRIER_TYPES[0]]);
  assert.equal(res.passableWheelchair, false);
});
