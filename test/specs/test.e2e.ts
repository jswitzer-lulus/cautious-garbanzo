// import { expect } from '@wdio/globals'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const mock = await browser.mock('https://the-internet.herokuapp.com/**');
        mock.request({
            headers: (req) => {
                const headers: Record<string, string> = {}
                req.request.headers.map((header) => headers[header.name] = header.value.value);
                headers['Authorization'] = `Basic ${btoa(`admin:admin`)}`;
                headers['x-test-header'] = 'true';
                return headers;
            }
        })

        await browser.pause(10000);
        await browser.url('https://the-internet.herokuapp.com/');
        await $('/html/body/div[2]/div/ul/li[3]/a').click();
    })
})

