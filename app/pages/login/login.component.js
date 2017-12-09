"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("./../../shared/user/user.service");
var user_1 = require("./../../shared/user/user");
var core_1 = require("@angular/core");
var LoginComponent = (function () {
    function LoginComponent(userService) {
        this.userService = userService;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "my.test.account@nativescript.org";
        this.user.password = "password";
    }
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Unfortunately we were unable to create your account."); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        templateUrl: "./pages/login/login.html",
        styleUrls: ["pages/login/login-common.css", "pages/login/login.css"],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUVBQStEO0FBQy9ELGlEQUFnRDtBQUNoRCxzQ0FBMEM7QUFPMUMsSUFBYSxjQUFjO0lBR3pCLHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUQ1QyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUVqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsa0NBQWtDLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBRWxDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUM7SUFDSCxDQUFDO0lBQ0QsOEJBQUssR0FBTDtJQUVBLENBQUM7SUFDRCwrQkFBTSxHQUFOO1FBQUEsaUJBU0M7UUFSQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2pDLFNBQVMsQ0FDVjtZQUNFLEtBQUssQ0FBQyx3Q0FBd0MsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLEVBQ0QsY0FBTSxPQUFBLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxFQUE3RCxDQUE2RCxDQUNsRSxDQUFDO0lBQ04sQ0FBQztJQUNELHNDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBL0JELElBK0JDO0FBL0JZLGNBQWM7SUFOMUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsU0FBUyxFQUFFLENBQUMsOEJBQThCLEVBQUUsdUJBQXVCLENBQUM7UUFDcEUsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztLQUN6QixDQUFDO3FDQUlpQywwQkFBVztHQUhqQyxjQUFjLENBK0IxQjtBQS9CWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi8uLi8uLi9zaGFyZWQvdXNlci91c2VyJztcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9sb2dpbi9sb2dpbi5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9sb2dpbi9sb2dpbi1jb21tb24uY3NzXCIsIFwicGFnZXMvbG9naW4vbG9naW4uY3NzXCJdLFxyXG4gIHByb3ZpZGVyczogW1VzZXJTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQge1xyXG4gIHVzZXI6IFVzZXI7XHJcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgdGhpcy51c2VyLmVtYWlsID0gXCJteS50ZXN0LmFjY291bnRAbmF0aXZlc2NyaXB0Lm9yZ1wiO1xyXG4gICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJwYXNzd29yZFwiO1xyXG5cclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpIHtcclxuICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XHJcbiAgICAgIHRoaXMuc2lnblVwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxvZ2luKCkge1xyXG5cclxuICB9XHJcbiAgc2lnblVwKCkge1xyXG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXHJcbiAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIilcclxuICAgICAgKTtcclxuICB9XHJcbiAgdG9nZ2xlRGlzcGxheSgpIHtcclxuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcclxuICB9XHJcbn0iXX0=