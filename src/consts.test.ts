import { describe, expect, test } from 'vitest';

import { SITE_TITLE, SITE_DESCRIPTION } from './consts';

describe('site constants', () => {
  test('SITE_TITLE has the expected value', () => {
    expect(SITE_TITLE).toBe("Daniil Dyachenko's blog.");
  });

  test('SITE_DESCRIPTION has the expected value', () => {
    expect(SITE_DESCRIPTION).toBe('Welcome to my website!');
  });
});

