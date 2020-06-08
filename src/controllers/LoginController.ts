import { BaseController } from "./BaseController";



export class LoginController extends BaseController {

    private title = this.createElement("h2", 'Please Login');
    private userName = this.createElement("label", "Username:");
    private userNameInput = this.createElement("input");
    private password = this.createElement("label", "Password:");
    private passwordInput = this.createElement("input");
    private errorLabel = this.createElement("label")

    private loginButton = this.createElement("button", 'Login', () => {
        if (this.userNameInput.value && this.passwordInput.value) {
            this.resetErrorLabel();



        } else {
            this.showErrorLabel('Please fill both fields!');
        }
    });

    private resetErrorLabel() {
        this.errorLabel.style.color = 'red';
        this.errorLabel.style.visibility = 'hidden';
    }
    private showErrorLabel(errorMessage: string) {
        this.errorLabel.innerText = errorMessage;
        this.errorLabel.style.visibility = 'visible';
    }



    public createView(): HTMLDivElement {
        this.passwordInput.type = 'Password';
        this.resetErrorLabel()





        this.container.append(
            this.title,
            this.userName,
            this.userNameInput,
            this.createElement("br"),
            this.password,
            this.passwordInput,
            this.createElement("br"),
            this.loginButton,
            this.createElement("br"),
            this.errorLabel
        )

        return this.container;
    }

}