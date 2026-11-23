const { test, expect } = require("@playwright/test");

test('bank account creation and deletion', async ({ page }) => {

    await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');

    await page.getByRole('button', { name: "Bank Manager Login" }).click();

    const currenturl = page.url();
    await expect(currenturl).toContain('manager');

    // Add Customer
    await page.getByRole('button', { name: "Add Customer" }).click();

    await page.getByPlaceholder('First Name').fill('John');
    await page.getByPlaceholder('Last Name').fill('Any name');
    await page.getByPlaceholder('Post Code').fill('682001');

    page.once("dialog", async (dialog) => {
        await expect(dialog.message()).toContain('Customer added successfully with customer id');

        console.log(dialog.message());
        await dialog.accept();
    });

    await page.getByText('Add Customer').nth(1).click();

    // Open Account
    await page.getByText('Open Account').click();

    await page.locator("#userSelect").selectOption({ label: 'John Any name' });
    await page.locator('#currency').selectOption('Dollar');

    page.once('dialog', async (dialog) => {
        await expect(dialog.message()).toContain('Account created successfully with account Number');

        console.log(dialog.message());
        await dialog.accept();
    });

    await page.getByRole('button', { name: "Process" }).click();

    // Navigate to Customers
    await page.getByRole('button', { name: "Customers" }).click();

    // Search Customer
    await page.getByPlaceholder('Search Customer').fill('Any name');

    // Verify customer record
    const row = page.locator('table tbody tr');

    await expect(row).toHaveCount(1);

    // Get column headings
    const headings = await page.locator('table thead td').allInnerTexts();

    // Get customer details
    const customerData = await row.first().locator('td').allTextContents();

    // Print customer details
    console.log("Customer Details:");
    console.log("Headings count:", headings.length);
console.log("Data count:", customerData.length);

console.log("Headings:", headings);
console.log("Data:", customerData);

    /*for (let i = 0; i < headings.length; i++) {
        console.log(`${headings[i]} : ${customerData[i]}`);
    }*/

});