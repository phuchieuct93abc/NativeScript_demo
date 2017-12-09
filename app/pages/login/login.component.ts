import { UserService } from './../../shared/user/user.service';
import { User } from './../../shared/user/user';
import { Component } from "@angular/core";
@Component({
  selector: "my-app",
  templateUrl: "./pages/login/login.html",
  styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
  providers: [UserService]
})
export class LoginComponent {
  user: User;
  isLoggingIn = true;
  constructor(private userService: UserService) {
    this.user = new User();
    this.user.email = "my.test.account@nativescript.org";
    this.user.password = "password";

  }

  submit() {
    if (this.isLoggingIn) {
      this.signUp();
    }
  }
  login() {

  }
  signUp() {
    this.userService.register(this.user)
      .subscribe(
      () => {
        alert("Your account was successfully created.");
        this.toggleDisplay();
      },
      () => alert("Unfortunately we were unable to create your account.")
      );
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}