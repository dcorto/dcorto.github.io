import { test, expect } from '@playwright/test';

const BASE_URL: string = process.env.TEST_BASE_URL ?? 'http://localhost:1313';

if (!BASE_URL.startsWith('http')) {
    throw new Error('TEST_BASE_URL must be a valid URL starting with http:// or https://');
}
console.log(`Running tests against ${BASE_URL}`);

test.describe('theme basic functionality', () => {
    test.beforeAll(async () => {
        // Health check
        try {
            await fetch(BASE_URL);
        } catch (error) {
            console.error(`Failed to connect to ${BASE_URL}. Is the Hugo server running?`);
            throw error;
        }
    });

    test('homepage loads correctly', async ({ page }) => {
        await page.goto(BASE_URL);
        await expect(page).toHaveTitle(/David Corto Camacho/);
    });

    test('navigation is visible', async ({ page }) => {
        await page.goto(BASE_URL);
        await expect(page.locator('nav.navbar')).toBeVisible();
    });

    test('footer links work', async ({ page }) => {
        await page.goto(BASE_URL);
        await expect(page.locator('.footer_links')).toBeVisible();
    });

    test('skip to content link works', async ({ page }) => {
        // Navigate to a content page
        await page.goto(`${BASE_URL}/es/blog`);

        // The skip link should be initially hidden but in the DOM
        const skipLink = page.locator('.skip-to-content-link');
        await expect(skipLink).toBeAttached();

        // Focus the skip link (simulates tabbing to it)
        await skipLink.focus();

        // Now it should be visible
        await expect(skipLink).toBeVisible();

        // Press Enter key on the skip link
        await skipLink.press('Enter');

        // Verify we jumped to the main content
        // Check URL hash
        await expect(page).toHaveURL(/#main-content$/);

        // Verify focus is moved to main content
        const mainContent = page.locator('#main-content');
        await expect(mainContent).toBeFocused();
    });
});

test('footer_right should contain exactly 2 dropdown element for language and theme', async ({ page }) => {
    await page.goto(`${BASE_URL}`);

    // Verify footer and footer_right exist
    await expect(page.locator('footer')).toBeAttached();
    await expect(page.locator('footer .footer_right')).toBeAttached();

    // Verify exactly 2 dropdown elements exist within footer_right
    await expect(page.locator('footer .footer_right .dropdown')).toHaveCount(2);
});

test('should load all homepage images correctly', async ({ page }) => {
    await page.goto(`${BASE_URL}`);

    // Wait for network to be idle (most images loaded)
    await page.waitForLoadState('networkidle');

    // Helper function to check images - handles both regular and lazy-loaded images
    const checkImageElements = async (selector: string) => {
        const elements = page.locator(selector);
        const count = await elements.count();

        console.log(`Checking images with selector "${selector}" - found ${count} elements`);
        await expect(count).toBeGreaterThan(0);
        if (count === 0) throw new Error(`Expected to find at least one element matching "${selector}"`);

        for (let i = 0; i < count; i++) {
            const element = elements.nth(i);
            await expect(element).toBeVisible();

            const isLazyLoaded = await element.evaluate(el =>
                el.classList.contains('lozad') || el.hasAttribute('data-src'));

            if (isLazyLoaded) {
                // For lazy-loaded images, check that data attributes exist
                const dataSrc = await element.getAttribute('data-src');
                expect(dataSrc).toBeTruthy();
            } else {
                // For regular images, check naturalWidth
                const naturalWidth = await element.evaluate(el => (el as HTMLImageElement).naturalWidth);
                await expect(naturalWidth).toBeGreaterThan(0);
                if (naturalWidth === 0) throw new Error('Image should have loaded (naturalWidth > 0)');
            }
        }
    };

    // Check profile image
    await checkImageElements('.profile-image img');
});
