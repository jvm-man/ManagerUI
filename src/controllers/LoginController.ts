import { BaseController } from "./BaseController";
import { LoginService } from "../services/LoginService";
import { LinkTextValue, classDecorator , someDecorator} from "./Decorators";


@classDecorator
@someDecorator('abcas')
export class LoginController extends BaseController {

    private loginService = new LoginService();

    private title = this.createElement("h2", 'Please Login');
    private userName = this.createElement("label", "Username:");
    private userNameInput = this.createElement("input");
    private br = this.createElement("br");
    private password = this.createElement("label", "Password:");
    private passwordInput = this.createElement("input");
    private br2 = this.createElement("br");

    private loginButton = this.createElement("button", 'Login', async () => {
        if (this.userNameInput.value && this.passwordInput.value) {
            this.resetErrorLabel();
            const result = await this.loginService.login(
                this.userNameInput.value,
                this.passwordInput.value
            )
            if (result) {
                this.router.switchToDashboardView(result);
            } else {
                this.errorLabelText = 'wrong username or password!'
            }


        } else {
            this.errorLabelText = 'Please fill both fields!';
        }
    });
    private br3 = this.createElement("br");

    private errorLabel = this.createElement("label");

    @LinkTextValue('errorLabelId')
    private errorLabelText: string = '';
    

    private resetErrorLabel() {
        this.errorLabel.style.color = 'red';
        this.errorLabel.style.visibility = 'hidden';
    }

    public createView(): HTMLDivElement {
        this.errorLabel.id = 'errorLabelId';
        this.passwordInput.type = 'Password';
        this.resetErrorLabel()

        return this.container;
    }

}