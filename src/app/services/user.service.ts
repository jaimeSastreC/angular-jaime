import {User} from '../models/User.model';
import {Subject} from 'rxjs';

export class UserService {
  // par défaut array vide
  private users: User[] = [
    {
      firstName: 'James',
      lastName: 'Sastre',
      email: 'james.sastre@sastre.com',
      drinkPreference: 'Schweppes',
      hobbies: [
        'nager',
        'voile',
        'escrime']
    }
  ];

  userSubject = new Subject <User[]>();

  emitUsers() {
    this.userSubject.next(
      // slice > copie, envoie tous les user de la liste
      this.users.slice()
    );
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
