import { test, expect } from '@playwright/test';

const BASE_URL: string = process.env.TEST_BASE_URL ?? 'http://localhost:1313/es/blog/';

if (!BASE_URL.startsWith('http')) {
    throw new Error('TEST_BASE_URL must be a valid URL starting with http:// or https://');
}
console.log(`Running tests against ${BASE_URL}`);

test.describe('blog functionality', () => {
    test.beforeAll(async () => {
        // Health check
        try {
            await fetch(BASE_URL);
        } catch (error) {
            console.error(`Failed to connect to ${BASE_URL}. Is the Hugo server running?`);
            throw error;
        }
    });

    test('blog index loads correctly', async ({ page }) => {
        await page.goto(BASE_URL);
        await expect(page).toHaveTitle(/Blog/);
    });

    test('there is pagination', async ({ page }) => {
        await page.goto(BASE_URL);
        await expect(page.locator('ul.pagination')).toBeAttached();
    });

    test('nav to blog page 2 link', async ({ page }) => {
        await page.goto(BASE_URL);
        const pageTwoLink = page.locator('ul.pagination > li:nth-child(4) > a');
        await expect(pageTwoLink).toBeAttached();
        await pageTwoLink.focus();
        await expect(pageTwoLink).toBeVisible();
        await pageTwoLink.click()
        await expect(page).toHaveURL(/pagina\/2/);
    });

    test('nav to post', async ({ page }) => {
        await page.goto(`${BASE_URL}`)
        const postLink = page.locator('div.posts-list > div:nth-child(1) > article > header > h2 > a');
        await expect(postLink).toBeAttached();
        const postUrl = await postLink.getAttribute('href');
        expect(postUrl).not.toBeNull();
        await postLink.focus();
        await expect(postLink).toBeVisible();
        await postLink.click();
        await expect(page).toHaveURL(new URL(postUrl!, BASE_URL).href);
    });
});
