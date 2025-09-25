// Test setup file for Vitest
// This file runs before all tests

// Setup DOM environment
import { beforeAll, afterAll, afterEach } from 'vitest';

// Mock matchMedia for tests that use responsive hooks
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => {},
    }),
  });
});

// Cleanup after each test
afterEach(() => {
  // Cleanup any global state if needed
});

// Global test teardown
afterAll(() => {
  // Global cleanup if needed
});