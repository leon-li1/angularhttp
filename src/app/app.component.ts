import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { User } from './interface/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public users: User[] = [];
  public id: number | string = '';

  constructor(private userService: UserService) {}

  public getUsers(): void {
    this.userService.getUsers().subscribe(
      (res: User[]) => {
        this.users = res;
        console.log(res);
      },
      (error: HttpErrorResponse) => alert(error.message)
    );
  }

  public getUser(): void {
    console.log(typeof this.id);
    this.userService.getUser(this.id as number).subscribe(
      (res: User) => console.log(res),
      (error: HttpErrorResponse) => alert(error.message)
    );
  }

  public onKey(event: any) {
    this.id = event.target.value;
  }
}
