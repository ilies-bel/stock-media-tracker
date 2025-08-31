const fs = require('fs');
const path = require('path');

async function generateResponsiveReport() {
  const reportPath = './e2e/responsive-analysis-report.md';
  const screenshotsDir = './e2e/screenshots';
  
  // Ensure screenshots directory exists
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  const report = `# Responsive Design Analysis Report

Generated on: ${new Date().toISOString()}

## Overview
This report analyzes the responsive design of KeywordLens landing page across multiple viewports and devices.

## Test Methodology
- **Viewports Tested:** Mobile Portrait (375px), Mobile Large (414px), Tablet Portrait (768px), Tablet Landscape (1024px), Desktop Small (1280px), Desktop Large (1920px)
- **Sections Analyzed:** Hero, Pain Points, Interactive Dashboard, Social Proof, CTA, Navigation, Footer
- **Tests Performed:** Visual screenshots, text readability, touch targets, overflow detection

## Viewport Breakdown

### Mobile Portrait (375px x 667px)
**Target Device:** iPhone SE, iPhone 12 mini
**Critical Issues to Check:**
- [ ] Text readability (minimum 14px font size)
- [ ] Button touch targets (minimum 44x44px)
- [ ] Horizontal scrolling
- [ ] Navigation menu functionality
- [ ] Dashboard tabs layout
- [ ] Social proof stats alignment

### Mobile Large (414px x 896px)
**Target Device:** iPhone 11 Pro Max
**Critical Issues to Check:**
- [ ] Content scaling appropriately
- [ ] Dashboard mockup visibility
- [ ] Feature tabs wrapping correctly
- [ ] Modal dialog sizing

### Tablet Portrait (768px x 1024px)
**Target Device:** iPad
**Critical Issues to Check:**
- [ ] Transition from mobile to desktop layout
- [ ] Dashboard content utilization
- [ ] Navigation menu behavior
- [ ] Social proof section layout

### Desktop (1280px+ x 720px+)
**Target Device:** Desktop/Laptop
**Critical Issues to Check:**
- [ ] Full layout expansion
- [ ] Interactive dashboard optimal display
- [ ] All content visible without scrolling issues

## Identified Issues

### Navigation Issues
- **Mobile Hamburger Menu:** 
  - [ ] Menu opens/closes properly
  - [ ] Menu items are easily tappable
  - [ ] No content overflow in mobile menu

### Interactive Dashboard Issues
- **Feature Tabs:**
  - [ ] Tabs display in grid on mobile (2x2)
  - [ ] Tab content switches properly on all devices
  - [ ] Dashboard mockup fits within viewport
  - [ ] Browser mockup frame displays correctly

- **Keyword Research Tab:**
  - [ ] Search bar responsive (vertical stack on mobile)
  - [ ] Platform checkboxes wrap properly
  - [ ] Results panels stack on mobile

- **Seasonal Calendar:**
  - [ ] Calendar months display in 2 rows on mobile
  - [ ] Month cards are readable and tappable
  - [ ] Legend items wrap properly

- **Competition Analysis:**
  - [ ] Performer cards stack vertically on mobile
  - [ ] Revenue information clearly visible
  - [ ] "More Details" buttons accessible

### Social Proof Section Issues
- **Stats Display:**
  - [ ] Three stats display horizontally on mobile
  - [ ] Numbers and labels are readable
  - [ ] Progress bar and percentage visible

- **Spots Filling Fast Card:**
  - [ ] Content stacks vertically on mobile
  - [ ] Creator count prominently displayed
  - [ ] Progress bar functions correctly

### Content and Typography Issues
- **Font Sizes:**
  - [ ] All body text is at least 14px on mobile
  - [ ] Headings scale appropriately across devices
  - [ ] No text truncation issues

- **Spacing and Layout:**
  - [ ] Consistent padding across sections (px-2 on mobile)
  - [ ] No horizontal scrolling
  - [ ] Elements don't overflow viewport

### Touch Target Issues
- **Buttons and Links:**
  - [ ] All buttons meet 44x44px minimum
  - [ ] Navigation links easily tappable
  - [ ] Tab switching buttons accessible
  - [ ] Modal close buttons reachable

### Form and Modal Issues
- **Email Signup Modal:**
  - [ ] Modal centers properly on all devices
  - [ ] Form fields sized appropriately
  - [ ] Close button accessible
  - [ ] Input validation visible

## Screenshots Reference

### Full Page Screenshots
${generateScreenshotList('full-page')}

### Section Screenshots
${generateScreenshotList('section')}

### Interactive Elements
${generateScreenshotList('dashboard-tab')}
${generateScreenshotList('navigation')}

## Recommendations

### High Priority Fixes
1. **Mobile Navigation:** Ensure hamburger menu is fully functional
2. **Dashboard Tabs:** Verify 2x2 grid layout on mobile devices
3. **Touch Targets:** Confirm all buttons meet minimum size requirements
4. **Text Readability:** Check for any text smaller than 14px on mobile

### Medium Priority Improvements
1. **Content Spacing:** Optimize padding and margins for mobile
2. **Image Optimization:** Ensure dashboard mockups scale properly
3. **Animation Performance:** Test tab transitions on slower devices

### Low Priority Enhancements
1. **Progressive Enhancement:** Consider advanced features for larger screens
2. **Loading Performance:** Optimize for mobile network conditions
3. **Accessibility:** Add keyboard navigation testing

## Testing Checklist

### Manual Testing Required
- [ ] Test on actual devices (iPhone, Android, iPad)
- [ ] Verify touch interactions work smoothly
- [ ] Check loading performance on mobile networks
- [ ] Test form submissions on various devices
- [ ] Validate screen reader compatibility

### Automated Testing Coverage
- [x] Visual regression testing
- [x] Viewport overflow detection
- [x] Touch target size validation
- [x] Font size compliance checking

## Next Steps
1. Run the Playwright tests: \`npm run test:responsive\`
2. Review generated screenshots in \`./e2e/screenshots/\`
3. View HTML report: \`npm run test:e2e:report\` (opens ./e2e/playwright-report/)
4. Address identified issues in order of priority
5. Re-run tests after fixes to verify improvements
6. Conduct manual testing on actual devices

---
*Report generated by Playwright responsive testing suite*
`;

  // Write the report
  fs.writeFileSync(reportPath, report);
  console.log(`Responsive analysis report generated: ${reportPath}`);
  
  return reportPath;
}

function generateScreenshotList(prefix) {
  const screenshotsDir = 'e2e/screenshots';
  if (!fs.existsSync(screenshotsDir)) {
    return `- Screenshots will be generated after running tests`;
  }
  
  try {
    const files = fs.readdirSync(screenshotsDir)
      .filter(file => file.startsWith(prefix) && file.endsWith('.png'))
      .sort();
    
    if (files.length === 0) {
      return `- No ${prefix} screenshots found yet`;
    }
    
    return files.map(file => `- ![${file}](${screenshotsDir}/${file})`).join('\n');
  } catch (error) {
    return `- Error reading screenshots directory`;
  }
}

// Add this to package.json scripts
const packageJsonPath = 'package.json';
if (fs.existsSync(packageJsonPath)) {
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  if (!packageJson.scripts) {
    packageJson.scripts = {};
  }
  
  packageJson.scripts['test:responsive'] = 'playwright test e2e/responsive-visual-test.spec.ts';
  packageJson.scripts['report:responsive'] = 'node scripts/generate-responsive-report.js';
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('Added responsive testing scripts to package.json');
}

if (require.main === module) {
  generateResponsiveReport();
}

module.exports = { generateResponsiveReport };