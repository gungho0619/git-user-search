import { Component, OnInit } from '@angular/core';

import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss'],
})
export class SearchUsersComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  search(keyword: string) {
    console.log(keyword);
    this.userService.search(keyword).subscribe((res) => console.log(res));
  }
}
