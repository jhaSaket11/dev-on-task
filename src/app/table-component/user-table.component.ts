import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { UserDetailsModel } from '../user-details.model';


@Component({
  selector: 'app-table-component',
  templateUrl: './user-table.component.html',
})
export class UserTableComponent implements OnInit {
  public userDetails: UserDetailsModel[];

  constructor(private appService: AppService, private router: Router) { }

  public ngOnInit() {
    this.appService.getUsers().subscribe((users) => {
      this.userDetails = users;
    });
  }

  public editUser(index: number): void {
    this.router.navigate(['/user-form-component', {id: index}]);
    this.appService.isFromeditMode = true;
  }

  public deleteUser(index: number): void {
    this.appService.deleteUser(index);
  }

  public addUser(): void {
    this.router.navigate(['/user-form-component']);
  }

  public getUserLocation(locationInput: string[]): string {
    return locationInput.join(',');
  }


}
