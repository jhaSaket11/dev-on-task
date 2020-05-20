import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDetailsModel } from './user-details.model';

@Injectable({
    providedIn: 'root'
})
export class AppService {
    public totalUsers: UserDetailsModel[] = [];
    public userChecked: UserDetailsModel;
    public isFromeditMode: boolean;
    private usersObservable = new BehaviorSubject<UserDetailsModel[]>(this.totalUsers);

    public getUsers(): Observable<UserDetailsModel[]> {
        return this.usersObservable.asObservable();
    }

    public addUser(user: UserDetailsModel) {
        this.totalUsers.push(user);
        this.usersObservable.next(this.totalUsers);
    }

    public deleteUser(index: number) {
        this.totalUsers.splice(index, 1);
        this.usersObservable.next(this.totalUsers);
    }

    public editUser(index: number, user: UserDetailsModel) {
        this.totalUsers.splice(index, 1, user);
        this.usersObservable.next(this.totalUsers);
    }

    public getTempUser(): UserDetailsModel {
        const tempUser =  new UserDetailsModel();
        tempUser.name = 'Saket Jha',
        tempUser.emailId = 'saket.jha@gmail.com',
        tempUser.gender = 'Male',
        tempUser.phoneNum = '+91-9981652223',
        tempUser.location = ['Delhi', 'Bangalore'];
        return tempUser;
    }
}
