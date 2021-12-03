import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Confirm } from '../shared/confirm';
import { ConfirmService } from '../shared/confirm.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  loginId: number;
  confirm: Confirm = new Confirm();
  constructor(public conService: ConfirmService, private toxterService: ToastrService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {




  }
  onSubmit(form: NgForm) {

    console.log(form.value);
    let addId = this.conService.formData.LoginId;
    //insert

    if (addId == 0 || addId == null) {
      this.insertUser(form);
      //window.location.reload();
    }
  }

  //clear all content at initialisation

  resetform(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //insert user
  insertUser(form?: NgForm) {
    console.log("inserting User...")
    console.log(form.value)
    form.value.RoleId=4;
    this.conService.insertUser(form.value).subscribe(
      (result) => {
        console.log("result" + result);
        this.resetform(form);
        sessionStorage.setItem("LoginId",result.toString())
        this.toxterService.success('Registration Successfully completed');
      }
    );
    
    this.router.navigate(['/lead'])

  }

}



