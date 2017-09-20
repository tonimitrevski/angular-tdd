import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UsersService} from "../dependency/user.service";


@Component({
  selector: 'app-input-and-output',
  templateUrl: './input-and-output.component.html',
  styleUrls: ['./input-and-output.component.css']
})
export class InputAndOutputComponent implements OnInit {

  constructor(
      private userService: UsersService) {
  }

  ngOnInit() {
  }

}
