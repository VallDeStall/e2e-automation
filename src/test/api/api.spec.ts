import { test, expect } from '@playwright/test';

test('simple API test', async () => {
  const response = await fetch('https://api.example.com/resource');
  expect(response.status).toBe(200);
  const data = await response.json();
  expect(data).toHaveProperty('id');
});