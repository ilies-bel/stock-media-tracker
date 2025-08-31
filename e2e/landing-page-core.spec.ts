import { test, expect } from '@playwright/test';

test.describe('KeywordLens Landing Page - Core Functionality', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the correct page title and meta description', async ({ page }) => {
    await expect(page).toHaveTitle(/KeywordLens - Stock Photo Keyword Planner/);
    
    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute(
      'content', 
      /Optimize your stock photo keywords for better discoverability and sales with AI-powered keyword planning/
    );
  });

  test('should display the KeywordLens logo and brand name', async ({ page }) => {
    // Check for KeywordLens text in navigation
    const navBrand = page.getByText('KeywordLens').first();
    await expect(navBrand).toBeVisible();
    
    // Check for logo SVG in navigation
    const logoSvg = page.locator('nav svg').first();
    await expect(logoSvg).toBeVisible();
  });

  test('should display the main hero section with correct messaging', async ({ page }) => {
    // Check main headline
    await expect(page.getByRole('heading', { 
      name: /Find high-demand, low-competition niches that earn more/ 
    })).toBeVisible();
    
    // Check highlighted text in hero
    await expect(page.getByText('high-demand, low-competition')).toBeVisible();
    await expect(page.getByText('earn more')).toBeVisible();
    
    // Check CTA button
    const ctaButton = page.getByRole('button', { name: /Get Early Access/i });
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toBeEnabled();
  });

  test('should display all pain points section', async ({ page }) => {
    // Check pain points heading
    await expect(page.getByRole('heading', { 
      name: /Stop shooting in the dark/i 
    })).toBeVisible();
    
    // Check all three pain points
    await expect(page.getByText('Spending hours researching what to shoot?')).toBeVisible();
    await expect(page.getByText('Uploading photos that never sell?')).toBeVisible();
    await expect(page.getByText('Missing trending topics?')).toBeVisible();
  });

  test('should display features overview section', async ({ page }) => {
    // Scroll to features section
    await page.getByText('See what powers KeywordLens').scrollIntoViewIfNeeded();
    
    await expect(page.getByRole('heading', { 
      name: /See what powers KeywordLens/ 
    })).toBeVisible();
    
    // Check feature cards
    await expect(page.getByText('AI-Powered Opportunity Detection')).toBeVisible();
    await expect(page.getByText('Smart Keyword Research')).toBeVisible();
    await expect(page.getByText('Seasonal Trend Forecasting')).toBeVisible();
    await expect(page.getByText('Competitor Intelligence')).toBeVisible();
  });

  test('should display social proof section with creator count', async ({ page }) => {
    // Scroll to social proof section
    await page.locator('#social-proof').scrollIntoViewIfNeeded();
    
    // Check heading
    await expect(page.getByRole('heading', { 
      name: /Join the waitlist of successful creators/ 
    })).toBeVisible();
    
    // Check creator count (should be dynamic)
    const creatorCount = page.getByText(/\d+ creators/);
    await expect(creatorCount).toBeVisible();
    
    // Check progress indicator
    await expect(page.getByText(/early access spots taken/)).toBeVisible();
  });

  test('should display footer with correct information', async ({ page }) => {
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();
    
    // Check brand in footer
    await expect(page.locator('footer').getByText('KeywordLens')).toBeVisible();
    
    // Check description
    await expect(page.getByText('AI-powered keyword optimization for stock photographers')).toBeVisible();
    
    // Check copyright
    await expect(page.getByText('© 2024 KeywordLens. All rights reserved.')).toBeVisible();
  });

  test('should have working navigation menu', async ({ page }) => {
    // Check navigation items
    const featuresLink = page.getByRole('link', { name: 'Features' });
    const dashboardLink = page.getByRole('link', { name: 'Dashboard' });
    const testimonialsLink = page.getByRole('link', { name: 'Testimonials' });
    const getStartedLink = page.getByRole('link', { name: 'Get Started' });
    
    await expect(featuresLink).toBeVisible();
    await expect(dashboardLink).toBeVisible();
    await expect(testimonialsLink).toBeVisible();
    await expect(getStartedLink).toBeVisible();
    
    // Test navigation functionality
    await featuresLink.click();
    await expect(page.url()).toContain('#features');
    
    await dashboardLink.click();
    await expect(page.url()).toContain('#dashboard');
  });

  test('should be responsive on mobile devices', async ({ page, browserName }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check that key elements are still visible on mobile
    await expect(page.getByText('KeywordLens')).toBeVisible();
    await expect(page.getByRole('button', { name: /Get Early Access/i })).toBeVisible();
    
    // Check that text is readable (not too small)
    const heroHeading = page.getByRole('heading').first();
    await expect(heroHeading).toBeVisible();
  });

  test('should have proper accessibility', async ({ page }) => {
    // Check for main landmark
    await expect(page.locator('main')).toBeVisible();
    
    // Check for proper heading hierarchy
    const h1 = page.locator('h1');
    await expect(h1).toHaveCount(1);
    
    // Check that buttons have accessible names
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();
    
    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i);
      await expect(button).toHaveAttribute('aria-label');
    }
  });

  test('should load without console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Allow for some time for any async errors to surface
    await page.waitForTimeout(2000);
    
    // Filter out known acceptable errors (if any)
    const significantErrors = consoleErrors.filter(error => 
      !error.includes('favicon') && 
      !error.includes('Analytics') &&
      !error.includes('404')
    );
    
    expect(significantErrors).toHaveLength(0);
  });
});