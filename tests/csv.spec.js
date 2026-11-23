import{ test,expect} from "@playwright/test"
import { readCSV } from "./utils/csvreader.js"
import path from 'path'
const csvData = readCSV(path.join(process.cwd(), 'testdatacsv', 'formcsvdata.csv'));
//const csvData = readCSV(path.join(__dirname,'../../testdatacsv/formcsvdata.csv'));
csvData.forEach(data=>{
    test(`form validation-${data.firstname}`,async({page})=>{
        await page.goto('https://automationpracticehubapp.netlify.app');
        await page.getByPlaceholder('Admin').fill('Admin');
            await page.getByLabel('Password', { exact: true }).fill('Hello@123');

        await page.locator('#login-submit').click();
        await page.getByPlaceholder('Enter your first name').fill(data.firstname)
        await page.getByPlaceholder('Enter your last name').fill(data.lastname)
        await page.getByPlaceholder('Enter your email').fill(data.email)
        await page.getByPlaceholder('Enter your password').fill(data.password)
        await page.getByPlaceholder('Enter your feedback here...').fill(data.feedback)
        await page.getByRole('button',{name:"Submit"}).first();


    })
})
