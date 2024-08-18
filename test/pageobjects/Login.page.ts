
export class LoginPage {
  public get inputUsername() {
    return $("~username-input");
  }

  public get inputPassword() {
    return $("~password-input");
  }

  public get continueButton() {
    return $("~continue-button");
  }

  public async login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.continueButton.click();
  }
}
export default new LoginPage();
