# KeywordLens E2E Tests

This directory contains comprehensive end-to-end tests for the KeywordLens landing page using Playwright.

## Test Structure

### 📄 `landing-page-core.spec.ts`
Tests core landing page functionality including:
- Page title and meta descriptions
- Brand logo and messaging display
- Hero section with highlighted text
- Pain points section
- Features overview
- Social proof section
- Footer information
- Navigation functionality
- Mobile responsiveness
- Accessibility checks
- Console error detection

### 🎛️ `interactive-dashboard.spec.ts`
Tests the interactive dashboard showcase including:
- Dashboard preview section display
- Feature tab functionality (4 tabs)
- Auto-play feature (4-second intervals)
- Manual tab interaction (stops auto-play)
- Feature description updates
- Floating callouts display
- Component highlighting based on active feature
- Browser mockup frame
- Stats and metrics display
- Call-to-action section
- Mobile responsiveness
- Rapid interaction handling

### 📧 `email-signup.spec.ts`
Tests the email signup flow including:
- Modal opening from different entry points (hero, nav, CTA)
- Email input validation
- Valid email submission success flow
- Invalid/empty email handling
- Modal closing (X button, outside click, Escape key)
- Creator count updates after signup
- Progress bar animation
- Multiple signups from different locations
- Keyboard accessibility
- Mobile device compatibility

## Running Tests

### Prerequisites
1. Make sure the development server is running:
   ```bash
   npm run dev
   ```
   The tests are configured to start the dev server automatically, but you can run it manually if needed.

### Test Commands

```bash
# Run all E2E tests
npm run test:e2e

# Run tests with UI mode (interactive)
npm run test:e2e:ui

# Run tests in debug mode
npm run test:e2e:debug

# Show test report (after running tests)
npm run test:e2e:report

# Run specific test file
npx playwright test landing-page-core.spec.ts

# Run tests in headed mode (see browser)
npx playwright test --headed

# Run tests on specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Test Configuration

The tests are configured to run on:
- **Desktop**: Chrome, Firefox, Safari
- **Mobile**: Chrome (Pixel 5), Safari (iPhone 12)

Configuration is in `playwright.config.ts`:
- Base URL: `http://localhost:3000`
- Auto-starts dev server
- Captures screenshots on failure
- Records traces on retry

## Key Features Tested

### ✅ Core Functionality
- [x] Page loads correctly with proper title/meta
- [x] All sections render properly
- [x] Navigation works (smooth scroll to sections)
- [x] Mobile responsiveness
- [x] Accessibility compliance
- [x] No console errors

### ✅ Interactive Dashboard
- [x] Feature tabs display and function
- [x] Auto-play cycles through features (4s intervals)
- [x] Manual interaction stops auto-play
- [x] Dashboard components highlight correctly
- [x] Floating callouts appear for active features
- [x] Browser mockup frame displays
- [x] Responsive on mobile

### ✅ Email Signup Flow
- [x] Modal opens from all CTA buttons
- [x] Email validation works
- [x] Success flow displays properly
- [x] Modal closes via multiple methods
- [x] Creator count updates after signup
- [x] Progress bar animates
- [x] Keyboard accessible
- [x] Mobile friendly

## Test Data

The tests use realistic test data:
- Email addresses: `test@example.com`, `mobile@example.com`, etc.
- Creator count validation (starts around 187+ base count)
- Feature descriptions and UI text matching actual content

## Debugging Tests

### View Test Results
After running tests, view the HTML report:
```bash
npm run test:e2e:report
```

### Debug Failed Tests
1. Run with `--debug` flag to pause execution
2. Use `--headed` to see browser actions
3. Check screenshots in `test-results/` folder
4. Review traces in the HTML report

### Common Issues
- **Tests fail to find elements**: Check if UI text changed
- **Timing issues**: Adjust `waitForTimeout` values
- **Modal doesn't open**: Verify button selectors match current markup
- **Mobile tests fail**: Check viewport-specific styling

## Continuous Integration

These tests are designed to run in CI/CD environments:
- Headless by default
- Retry failed tests (2x on CI)
- Generate artifacts (screenshots, traces, reports)
- Exit codes for build pipeline integration

## Maintenance

When updating the landing page:
1. **Text changes**: Update test assertions to match new copy
2. **UI changes**: Update selectors if component structure changes
3. **New features**: Add corresponding test cases
4. **Performance**: Monitor test execution time and optimize selectors

## Best Practices

The tests follow Playwright best practices:
- Use semantic selectors (`getByRole`, `getByText`)
- Wait for elements properly (`expect().toBeVisible()`)
- Test user interactions, not implementation details
- Keep tests independent and isolated
- Use descriptive test names and groupings