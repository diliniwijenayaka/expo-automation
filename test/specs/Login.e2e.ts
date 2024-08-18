import LoginPage from "../pageobjects/Login.page.js";

describe("User log into the mobile app", () => {
  it("should login with valid credentials", async () => {
    const username = process.env.APP_USERNAME;
    const password = process.env.APP_PASSWORD;

    await LoginPage.login(username as string, password as string);
  });
});

