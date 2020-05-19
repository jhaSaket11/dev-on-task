import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetailsModel } from '../user-details.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {
  public locations = ['Bangalore', 'Delhi', 'Mumbai'];
  public genders = ['Male', 'Female'];
  public user: UserDetailsModel;
  public editIndex: number;
  public isFromEditMode: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private appService: AppService) {
  }

  ngOnInit() {
    this.user = new UserDetailsModel();
    if (!this.appService.isFromeditMode) { return; }
    this.route.params.subscribe((index) => {
      this.editIndex = +index.id;
      this.user = this.appService.totalUsers[this.editIndex];
    });

  }

  public goToUserTable() {
    this.router.navigate(['/user-table-component']);
  }

  public onLocationChange(input: string, event: any): void {
    if (event.currentTarget.checked) {
      this.user.location.push(input);
    } else {
      const index = this.user.location.indexOf(input);
      this.user.location.splice(index, 1);
    }
  }

  public getSelectedLocation(input: string): boolean {
    return this.user.location.indexOf(input) !== -1;
  }
  public onSubmit(): void {
    if (this.appService.isFromeditMode) {
      this.appService.editUser(this.editIndex, this.user);
    } else {
      this.appService.addUser(this.user);
    }
    this.appService.isFromeditMode = false;
    this.user = new UserDetailsModel();
    this.router.navigate(['/user-table-component']);
  }

}
