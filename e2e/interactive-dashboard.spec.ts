import { test, expect } from '@playwright/test';

test.describe('KeywordLens Interactive Dashboard', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Scroll to dashboard section
    await page.locator('#dashboard').scrollIntoViewIfNeeded();
  });

  test('should display the dashboard preview section with correct heading', async ({ page }) => {
    await expect(page.getByRole('heading', { 
      name: /Your Command Center For Stock Success/ 
    })).toBeVisible();
    
    await expect(page.getByText('Live Dashboard Preview')).toBeVisible();
    await expect(page.getByText('See how top photographers are earning 5x more')).toBeVisible();
  });

  test('should display all four feature tabs', async ({ page }) => {
    const featureTabs = [
      'Find Profitable Niches',
      'Smart Keyword Research', 
      'Seasonal Planning',
      'Competition Analysis'
    ];
    
    for (const tab of featureTabs) {
      const tabButton = page.getByRole('button', { name: tab });
      await expect(tabButton).toBeVisible();
      await expect(tabButton).toBeEnabled();
    }
  });

  test('should show the default active feature (Opportunities)', async ({ page }) => {
    // Check that first tab is active by default
    const activeTab = page.locator('button').filter({ hasText: 'Find Profitable Niches' });
    await expect(activeTab).toHaveClass(/bg-primary/);
    
    // Check active indicator (green dot)
    await expect(page.locator('.animate-pulse')).toBeVisible();
    
    // Check description matches active feature
    await expect(page.getByText('AI scans all major platforms to find high-demand topics')).toBeVisible();
  });

  test('should display dashboard components', async ({ page }) => {
    // Check for dashboard header
    await expect(page.getByText('KeywordLens')).toBeVisible();
    await expect(page.getByText('Market Intelligence Dashboard')).toBeVisible();
    
    // Check for main dashboard sections
    await expect(page.getByText('Opportunity Radar')).toBeVisible();
    await expect(page.getByText('Smart Keyword Generator')).toBeVisible();
    await expect(page.getByText('Seasonal Planner')).toBeVisible();
  });

  test('should auto-play through features every 4 seconds', async ({ page }) => {
    // Wait for initial state
    await page.waitForTimeout(500);
    
    // Check that first feature is active
    let activeTab = page.locator('button').filter({ hasText: 'Find Profitable Niches' });
    await expect(activeTab).toHaveClass(/bg-primary/);
    
    // Wait for auto-play transition (4 seconds + buffer)
    await page.waitForTimeout(4500);
    
    // Check that second feature is now active
    activeTab = page.locator('button').filter({ hasText: 'Smart Keyword Research' });
    await expect(activeTab).toHaveClass(/bg-primary/);
  });

  test('should stop auto-play when user clicks a tab', async ({ page }) => {
    // Wait for initial state
    await page.waitForTimeout(500);
    
    // Click on third tab (Seasonal Planning)
    const seasonalTab = page.getByRole('button', { name: 'Seasonal Planning' });
    await seasonalTab.click();
    
    // Verify it's now active
    await expect(seasonalTab).toHaveClass(/bg-primary/);
    await expect(page.getByText('Never miss trending moments with 12-month forecasting')).toBeVisible();
    
    // Wait longer than auto-play interval to ensure it stopped
    await page.waitForTimeout(5000);
    
    // Verify it's still on the same tab (auto-play stopped)
    await expect(seasonalTab).toHaveClass(/bg-primary/);
  });

  test('should update feature description when switching tabs', async ({ page }) => {
    const features = [
      {
        name: 'Find Profitable Niches',
        description: 'AI scans all major platforms to find high-demand topics with low competition'
      },
      {
        name: 'Smart Keyword Research',
        description: 'Get platform-optimized keywords that actually convert to sales'
      },
      {
        name: 'Seasonal Planning', 
        description: 'Never miss trending moments with 12-month forecasting and alerts'
      },
      {
        name: 'Competition Analysis',
        description: 'Track top performers and find gaps in their portfolios'
      }
    ];
    
    for (const feature of features) {
      await page.getByRole('button', { name: feature.name }).click();
      await expect(page.getByText(feature.description)).toBeVisible();
      await page.waitForTimeout(500); // Small delay between clicks
    }
  });

  test('should display floating callouts for active features', async ({ page }) => {
    // Click on opportunities tab
    await page.getByRole('button', { name: 'Find Profitable Niches' }).click();
    await page.waitForTimeout(500);
    
    // Check for opportunity-specific callouts
    await expect(page.getByText('$3,450 potential/month!')).toBeVisible();
    await expect(page.getByText('Only 23 images exist!')).toBeVisible();
    
    // Click on keywords tab
    await page.getByRole('button', { name: 'Smart Keyword Research' }).click();
    await page.waitForTimeout(500);
    
    // Check for keyword-specific callouts
    await expect(page.getByText('+67% Better CTR!')).toBeVisible();
    await expect(page.getByText('Rank #1 on 5 platforms!')).toBeVisible();
  });

  test('should highlight correct dashboard components based on active feature', async ({ page }) => {
    // Test Opportunities feature highlighting
    await page.getByRole('button', { name: 'Find Profitable Niches' }).click();
    await page.waitForTimeout(500);
    
    // Should highlight opportunity radar component
    const opportunityRadar = page.locator('[class*="ring-4"][class*="ring-primary"]').first();
    await expect(opportunityRadar).toBeVisible();
    
    // Test Keywords feature highlighting  
    await page.getByRole('button', { name: 'Smart Keyword Research' }).click();
    await page.waitForTimeout(500);
    
    // Should highlight keyword generator component
    const keywordGenerator = page.locator('[class*="ring-4"][class*="ring-primary"]');
    await expect(keywordGenerator).toBeVisible();
  });

  test('should display browser mockup frame', async ({ page }) => {
    // Check for browser window controls (red, yellow, green dots)
    const browserControls = page.locator('.bg-red-500, .bg-yellow-500, .bg-green-500');
    await expect(browserControls).toHaveCount(3);
    
    // Check for browser frame styling
    await expect(page.locator('.bg-slate-900')).toBeVisible();
  });

  test('should display dashboard stats and metrics', async ({ page }) => {
    // Check for revenue/stats information in the dashboard
    await expect(page.getByText('$3,450 potential/month')).toBeVisible();
    await expect(page.getByText('Valentine +890% in 45 days')).toBeVisible();
    await expect(page.getByText('+67% Better CTR')).toBeVisible();
  });

  test('should display call-to-action section below dashboard', async ({ page }) => {
    // Scroll to bottom of dashboard section
    await page.locator('#dashboard').scrollIntoViewIfNeeded();
    await page.getByText('Join 2,400+ photographers earning 5x more').scrollIntoViewIfNeeded();
    
    await expect(page.getByText('Join 2,400+ photographers earning 5x more with KeywordLens')).toBeVisible();
    
    // Check for CTA buttons
    await expect(page.getByRole('button', { name: /Start Free Trial/i })).toBeVisible();
    await expect(page.getByRole('button', { name: /Watch Demo/i })).toBeVisible();
  });

  test('should be responsive on mobile devices', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Scroll to dashboard
    await page.locator('#dashboard').scrollIntoViewIfNeeded();
    
    // Check that feature tabs are still visible and clickable on mobile
    await expect(page.getByRole('button', { name: 'Find Profitable Niches' })).toBeVisible();
    
    // Check that dashboard content is readable
    await expect(page.getByText('Opportunity Radar')).toBeVisible();
    
    // Test tab interaction on mobile
    await page.getByRole('button', { name: 'Smart Keyword Research' }).click();
    await expect(page.getByText('Get platform-optimized keywords')).toBeVisible();
  });

  test('should handle multiple rapid tab clicks gracefully', async ({ page }) => {
    const tabs = [
      'Find Profitable Niches',
      'Smart Keyword Research', 
      'Seasonal Planning',
      'Competition Analysis'
    ];
    
    // Rapidly click through all tabs
    for (let i = 0; i < 3; i++) {
      for (const tab of tabs) {
        await page.getByRole('button', { name: tab }).click();
        await page.waitForTimeout(100); // Small delay
      }
    }
    
    // Verify the last tab is active
    const lastTab = page.getByRole('button', { name: 'Competition Analysis' });
    await expect(lastTab).toHaveClass(/bg-primary/);
    await expect(page.getByText('Track top performers and find gaps')).toBeVisible();
  });
});