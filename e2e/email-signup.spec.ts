import { test, expect } from '@playwright/test';

test.describe('Email Signup Flow', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should open email modal when clicking Get Early Access from hero', async ({ page }) => {
    // Click Get Early Access button from hero section
    const heroCtaButton = page.getByRole('button', { name: /Get Early Access/i }).first();
    await heroCtaButton.click();
    
    // Check that modal is visible
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByText('Join the Early Access List')).toBeVisible();
    await expect(page.getByText('Be first to know when we launch')).toBeVisible();
    await expect(page.getByText('50% off for early adopters')).toBeVisible();
  });

  test('should open email modal when clicking Get Early Access from navigation', async ({ page }) => {
    // Click Get Early Access button from navigation
    const navCtaButton = page.locator('nav').getByRole('button', { name: /Get Early Access/i });
    await navCtaButton.click();
    
    // Check that modal is visible
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByText('Join the Early Access List')).toBeVisible();
  });

  test('should open email modal from CTA section', async ({ page }) => {
    // Scroll to CTA section
    await page.locator('#cta').scrollIntoViewIfNeeded();
    
    // Click Get Early Access button from CTA section
    const ctaButton = page.locator('#cta').getByRole('button', { name: /Get Early Access/i });
    await ctaButton.click();
    
    // Check that modal is visible
    await expect(page.getByRole('dialog')).toBeVisible();
  });

  test('should validate email input field', async ({ page }) => {
    // Open modal
    await page.getByRole('button', { name: /Get Early Access/i }).first().click();
    
    // Check email input field exists and is properly configured
    const emailInput = page.getByRole('textbox', { name: /email/i });
    await expect(emailInput).toBeVisible();
    await expect(emailInput).toHaveAttribute('type', 'email');
    await expect(emailInput).toHaveAttribute('placeholder');
    
    // Test that submit button exists
    const submitButton = page.getByRole('button', { name: /join early access/i });
    await expect(submitButton).toBeVisible();
    await expect(submitButton).toBeEnabled();
  });

  test('should handle valid email submission successfully', async ({ page }) => {
    // Open modal
    await page.getByRole('button', { name: /Get Early Access/i }).first().click();
    
    // Fill in email
    const emailInput = page.getByRole('textbox', { name: /email/i });
    await emailInput.fill('test@example.com');
    
    // Submit form
    await page.getByRole('button', { name: /join early access/i }).click();
    
    // Check for success state
    await expect(page.getByText('Welcome aboard!')).toBeVisible();
    await expect(page.getByText("You're on the early access list")).toBeVisible();
    await expect(page.getByText("We'll notify you as soon as KeywordLens is ready")).toBeVisible();
  });

  test('should handle invalid email gracefully', async ({ page }) => {
    // Open modal
    await page.getByRole('button', { name: /Get Early Access/i }).first().click();
    
    // Test with invalid email
    const emailInput = page.getByRole('textbox', { name: /email/i });
    await emailInput.fill('invalid-email');
    
    // Try to submit
    await page.getByRole('button', { name: /join early access/i }).click();
    
    // Should show HTML5 validation error (browser native validation)
    const validityState = await emailInput.evaluate((input: HTMLInputElement) => input.validity.valid);
    expect(validityState).toBe(false);
  });

  test('should handle empty email submission', async ({ page }) => {
    // Open modal
    await page.getByRole('button', { name: /Get Early Access/i }).first().click();
    
    // Try to submit without email
    await page.getByRole('button', { name: /join early access/i }).click();
    
    // Should show HTML5 validation error for required field
    const emailInput = page.getByRole('textbox', { name: /email/i });
    const validityState = await emailInput.evaluate((input: HTMLInputElement) => input.validity.valid);
    expect(validityState).toBe(false);
  });

  test('should close modal when clicking X button', async ({ page }) => {
    // Open modal
    await page.getByRole('button', { name: /Get Early Access/i }).first().click();
    await expect(page.getByRole('dialog')).toBeVisible();
    
    // Click close button (X)
    await page.getByRole('button', { name: /close/i }).click();
    
    // Modal should be closed
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('should close modal when clicking outside', async ({ page }) => {
    // Open modal
    await page.getByRole('button', { name: /Get Early Access/i }).first().click();
    await expect(page.getByRole('dialog')).toBeVisible();
    
    // Click outside the modal (on overlay)
    await page.locator('[role="dialog"]').locator('..').click({ position: { x: 0, y: 0 } });
    
    // Modal should be closed
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('should close modal with Escape key', async ({ page }) => {
    // Open modal
    await page.getByRole('button', { name: /Get Early Access/i }).first().click();
    await expect(page.getByRole('dialog')).toBeVisible();
    
    // Press Escape key
    await page.keyboard.press('Escape');
    
    // Modal should be closed
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('should update creator count after successful signup', async ({ page }) => {
    // Get initial creator count
    await page.locator('#social-proof').scrollIntoViewIfNeeded();
    const initialCountText = await page.getByText(/\d+ creators/).textContent();
    const initialCount = parseInt(initialCountText?.match(/\d+/)?.[0] || '0');
    
    // Open modal and submit email
    await page.getByRole('button', { name: /Get Early Access/i }).first().click();
    await page.getByRole('textbox', { name: /email/i }).fill('newuser@example.com');
    await page.getByRole('button', { name: /join early access/i }).click();
    
    // Wait for success state
    await expect(page.getByText('Welcome aboard!')).toBeVisible();
    
    // Close modal (click on close button or outside)
    await page.getByRole('button', { name: /close/i }).click();
    
    // Check that creator count has increased
    await page.locator('#social-proof').scrollIntoViewIfNeeded();
    const newCountText = await page.getByText(/\d+ creators/).textContent();
    const newCount = parseInt(newCountText?.match(/\d+/)?.[0] || '0');
    
    expect(newCount).toBe(initialCount + 1);
  });

  test('should show progress bar animation after signup', async ({ page }) => {
    // Navigate to social proof section
    await page.locator('#social-proof').scrollIntoViewIfNeeded();
    
    // Open modal and submit email
    await page.getByRole('button', { name: /Get Early Access/i }).first().click();
    await page.getByRole('textbox', { name: /email/i }).fill('progresstest@example.com');
    await page.getByRole('button', { name: /join early access/i }).click();
    
    // Wait for success and close modal
    await expect(page.getByText('Welcome aboard!')).toBeVisible();
    await page.getByRole('button', { name: /close/i }).click();
    
    // Check that progress bar exists and shows percentage
    await page.locator('#social-proof').scrollIntoViewIfNeeded();
    await expect(page.getByText(/early access spots taken/)).toBeVisible();
    
    // Check for progress bar element
    const progressBar = page.locator('[role="progressbar"], .bg-primary').first();
    await expect(progressBar).toBeVisible();
  });

  test('should handle multiple signups from different entry points', async ({ page }) => {
    // Test signup from hero
    await page.getByRole('button', { name: /Get Early Access/i }).first().click();
    await page.getByRole('textbox', { name: /email/i }).fill('hero@example.com');
    await page.getByRole('button', { name: /join early access/i }).click();
    await expect(page.getByText('Welcome aboard!')).toBeVisible();
    await page.getByRole('button', { name: /close/i }).click();
    
    // Test signup from navigation
    await page.locator('nav').getByRole('button', { name: /Get Early Access/i }).click();
    await page.getByRole('textbox', { name: /email/i }).fill('nav@example.com');
    await page.getByRole('button', { name: /join early access/i }).click();
    await expect(page.getByText('Welcome aboard!')).toBeVisible();
    await page.getByRole('button', { name: /close/i }).click();
    
    // Check that count increased by 2
    await page.locator('#social-proof').scrollIntoViewIfNeeded();
    const countText = await page.getByText(/\d+ creators/).textContent();
    const count = parseInt(countText?.match(/\d+/)?.[0] || '0');
    expect(count).toBeGreaterThanOrEqual(189); // Base count + 2 new signups
  });

  test('should be accessible with keyboard navigation', async ({ page }) => {
    // Tab to Get Early Access button
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab'); // May need multiple tabs to reach the button
    
    // Press Enter to open modal
    await page.keyboard.press('Enter');
    
    // Check that modal opened
    await expect(page.getByRole('dialog')).toBeVisible();
    
    // Tab to email input
    await page.keyboard.press('Tab');
    
    // Type email
    await page.keyboard.type('keyboard@example.com');
    
    // Tab to submit button and press Enter
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');
    
    // Check success state
    await expect(page.getByText('Welcome aboard!')).toBeVisible();
  });

  test('should work correctly on mobile devices', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Open modal from mobile
    await page.getByRole('button', { name: /Get Early Access/i }).first().click();
    
    // Check modal is properly displayed on mobile
    await expect(page.getByRole('dialog')).toBeVisible();
    await expect(page.getByText('Join the Early Access List')).toBeVisible();
    
    // Test form submission on mobile
    await page.getByRole('textbox', { name: /email/i }).fill('mobile@example.com');
    await page.getByRole('button', { name: /join early access/i }).click();
    
    // Check success state
    await expect(page.getByText('Welcome aboard!')).toBeVisible();
  });
});