import {test} from '@playwright/test';

const viewports = [
    {name: 'Mobile Portrait', width: 375, height: 667}, // iPhone SE
    {name: 'Mobile Large', width: 414, height: 896}, // iPhone 11 Pro Max
    {name: 'Tablet Portrait', width: 768, height: 1024}, // iPad
    {name: 'Tablet Landscape', width: 1024, height: 768}, // iPad Landscape
    {name: 'Desktop Small', width: 1280, height: 720}, // Small Desktop
    {name: 'Desktop Large', width: 1920, height: 1080}, // Large Desktop
];

const sections = [
    {name: 'Hero Section', selector: 'section:has(h1)'},
    {name: 'Pain Points Section', selector: 'section:has(h2:text("Sound familiar"))'},
    {name: 'Interactive Dashboard', selector: 'section#dashboard'},
    {name: 'Social Proof Section', selector: 'section#social-proof'},
    {name: 'CTA Section', selector: 'section#cta'},
    {name: 'Navigation', selector: 'nav'},
    {name: 'Footer', selector: 'footer'},
];

test.describe('Responsive Visual Testing', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');
    });

    for (const viewport of viewports) {
        test(`Full page screenshots - ${viewport.name}`, async ({page}) => {
            await page.setViewportSize({width: viewport.width, height: viewport.height});

            // Take full page screenshot
            await page.screenshot({
                path: `./e2e/screenshots/full-page-${viewport.name.toLowerCase().replace(/\s+/g, '-')}.png`,
                fullPage: true
            });

            // Take viewport screenshot (above the fold)
            await page.screenshot({
                path: `./e2e/screenshots/above-fold-${viewport.name.toLowerCase().replace(/\s+/g, '-')}.png`,
                fullPage: false
            });
        });

        test(`Section screenshots - ${viewport.name}`, async ({page}) => {
            await page.setViewportSize({width: viewport.width, height: viewport.height});

            for (const section of sections) {
                try {
                    const element = await page.locator(section.selector).first();
                    if (await element.isVisible()) {
                        await element.screenshot({
                            path: `./e2e/screenshots/section-${section.name.toLowerCase().replace(/\s+/g, '-')}-${viewport.name.toLowerCase().replace(/\s+/g, '-')}.png`
                        });
                    }
                } catch (error) {
                    console.log(`Could not screenshot ${section.name} for ${viewport.name}: ${error}`);
                }
            }
        });
    }

    test('Interactive Dashboard Tabs - Mobile', async ({page}) => {
        await page.setViewportSize({width: 375, height: 667});

        // Navigate to dashboard section
        await page.locator('section#dashboard').scrollIntoViewIfNeeded();

        const tabs = [
            'Find Profitable Niches',
            'Smart Keyword Research',
            'Seasonal Planning',
            'Competition Analysis'
        ];

        for (const tab of tabs) {
            // Click on tab
            await page.locator(`button:has-text("${tab}")`).click();
            await page.waitForTimeout(1000); // Wait for tab animation

            // Screenshot the active tab content
            await page.locator('section#dashboard').screenshot({
                path: `./e2e/screenshots/dashboard-tab-${tab.toLowerCase().replace(/\s+/g, '-')}-mobile.png`
            });
        }
    });

    test('Navigation Menu - Mobile', async ({page}) => {
        await page.setViewportSize({width: 375, height: 667});

        // Screenshot closed navigation
        await page.locator('nav').screenshot({
            path: './e2e/screenshots/navigation-closed-mobile.png'
        });

        // Open mobile menu
        const menuButton = page.locator('button:has(svg)').first(); // Hamburger menu
        if (await menuButton.isVisible()) {
            await menuButton.click();
            await page.waitForTimeout(500);

            // Screenshot open navigation
            await page.screenshot({
                path: './e2e/screenshots/navigation-open-mobile.png',
                fullPage: false
            });
        }
    });

    test('Form Elements - Mobile', async ({page}) => {
        await page.setViewportSize({width: 375, height: 667});

        // Test email signup modal
        const getEarlyAccessBtn = page.locator('button:has-text("Get Early Access")').first();
        if (await getEarlyAccessBtn.isVisible()) {
            await getEarlyAccessBtn.click();
            await page.waitForTimeout(500);

            // Screenshot modal
            await page.screenshot({
                path: './e2e/screenshots/email-modal-mobile.png',
                fullPage: false
            });

            // Close modal
            await page.keyboard.press('Escape');
        }
    });

    test('Text Readability Check', async ({page}) => {
        const issues = [];

        for (const viewport of viewports.slice(0, 2)) { // Test only mobile viewports
            await page.setViewportSize({width: viewport.width, height: viewport.height});

            // Check for text that might be too small
            const smallText = await page.locator('*').evaluateAll((elements) => {
                const issues = [];
                elements.forEach((el) => {
                    const style = window.getComputedStyle(el);
                    const fontSize = parseFloat(style.fontSize);
                    const textContent = el.textContent?.trim();

                    if (textContent && textContent.length > 10 && fontSize < 14) {
                        issues.push({
                            text: textContent.substring(0, 50),
                            fontSize: fontSize,
                            tagName: el.tagName
                        });
                    }
                });
                return issues;
            });

            if (smallText.length > 0) {
                issues.push(`${viewport.name}: Found ${smallText.length} elements with small text (< 14px)`);
            }

            // Check for horizontal scrollbars
            const hasHorizontalScroll = await page.evaluate(() => {
                return document.body.scrollWidth > window.innerWidth;
            });

            if (hasHorizontalScroll) {
                issues.push(`${viewport.name}: Horizontal scrollbar detected`);
            }

            // Check for elements that overflow
            const overflowElements = await page.evaluate(() => {
                const elements = Array.from(document.querySelectorAll('*'));
                return elements.filter(el => {
                    const rect = el.getBoundingClientRect();
                    return rect.right > window.innerWidth;
                }).length;
            });

            if (overflowElements > 0) {
                issues.push(`${viewport.name}: ${overflowElements} elements overflow the viewport`);
            }
        }

        // Log issues to console for now (will be written to file after)
        if (issues.length > 0) {
            console.log('Responsive Issues Found:', issues);
        }
    });

    test('Interactive Elements Touch Targets', async ({page}) => {
        await page.setViewportSize({width: 375, height: 667});

        const touchTargetIssues = [];

        // Check button sizes
        const buttons = await page.locator('button').evaluateAll((buttons) => {
            return buttons.map(btn => {
                const rect = btn.getBoundingClientRect();
                return {
                    text: btn.textContent?.substring(0, 30),
                    width: rect.width,
                    height: rect.height,
                    area: rect.width * rect.height
                };
            });
        });

        buttons.forEach(btn => {
            if (btn.height < 44 || btn.width < 44) { // Apple's recommended minimum
                touchTargetIssues.push(`Button "${btn.text}" is too small: ${btn.width}x${btn.height}px`);
            }
        });

        // Check link sizes
        const links = await page.locator('a').evaluateAll((links) => {
            return links.map(link => {
                const rect = link.getBoundingClientRect();
                return {
                    text: link.textContent?.substring(0, 30),
                    width: rect.width,
                    height: rect.height
                };
            });
        });

        links.forEach(link => {
            if (link.height < 44) {
                touchTargetIssues.push(`Link "${link.text}" height is too small: ${link.height}px`);
            }
        });

        if (touchTargetIssues.length > 0) {
            console.log('Touch Target Issues:', touchTargetIssues);
        }
    });
});