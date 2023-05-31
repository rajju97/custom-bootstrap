import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  Validators,
} from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'custom-bootstrap';
  carName=''
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab' },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  users = [
    {
      name: 'rajveer',
      email: 'rajveer@gmail.com',
      state: 3,
      gender: 'male',
    },
    {
      name: 'ranveer',
      email: 'rajveer@gmail.com',
      state: 3,
      gender: 'male',
    },
    {
      name: 'papa',
      email: 'rajveer@gmail.com',
      state: 3,
      gender: 'male',
    },
  ];

  myform: FormGroup

  constructor(private fb: FormBuilder, private ds:DataService) {

    // this.getMockUser()
    // this.addUser()

      this.myform =  this.fb.group({
        user:fb.array([
          fb.group(
            {
              name: new FormControl('', Validators.required),
              email: new FormControl(
                '',
                Validators.compose([Validators.required, Validators.email])
              ),
              gender: new FormControl('male', Validators.required),
              state: new FormControl('', Validators.required),
              skill:this.fb.array([])
            }
          )
        ])
      });


  }

  // populatedetails(users:any) {
  //   if (users) {
  //     users.forEach((user:any) => {
  //       const userFormGroup = this.fb.group({
  //         name: [user.name],
  //         email: [user.email],
  //         state: [user.state],
  //         gender: [user.gender],
  //       });
  //       this.user.push(userFormGroup);
  //     });
  //   }
  //   let obj = {
  //     user: [
  //       {
  //         name: 'rajveer',
  //         email: 'rajveer@gmail.com',
  //         state: 3,
  //         gender: 'male',
  //       },
  //       {
  //         name: 'ranveer',
  //         email: 'rajveer@gmail.com',
  //         state: 3,
  //         gender: 'male',
  //       },
  //       {
  //         name: 'papa',
  //         email: 'rajveer@gmail.com',
  //         state: 3,
  //         gender: 'male',
  //       },
  //     ],
  //   };
  //   console.log(JSON.stringify(obj));
  // }

  get user() {
    return this.myform.get('user') as FormArray;
  }

  addUser() {
    let newuser = this.fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      gender: new FormControl('male', Validators.required),
      state: new FormControl('', Validators.required),
      skill:this.fb.array([])
    });
    this.user.push(newuser);
  }

  skills(index:any){
    return this.user.at(index).get('skill') as FormArray
  }

  addSkill(index:any){
    this.skills(index).push(this.fb.control("",Validators.required))
  }

  delUser(index: any) {
    this.user.removeAt(index);
  }

  onSubmit() {
    console.log('hello', this.myform.get('user')?.value);
  }

  // getMockUser(){
  //   this.ds.getMockUser().subscribe((res:any)=>{
  //     console.log(res);
  //     this.populatedetails(res?.user)

  //   })
  // }

  getValue(event:any,index:any)
  {
    this.user.at(index).get('state')?.setValue(event)
  }
}
