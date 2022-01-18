import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private service:PostService){ }

  ngOnInit(): void {

    this.form = this.fb.group({
      title: [null,[Validators.required]],
      body: [null,[Validators.required]]
    });
  }

  onSubmit(){
    console.log(this.form.value);
    if(this.form.valid){
      console.log('submit');
      this.service.create(this.form.value).subscribe(
        success => console.log('sucesso'),
        error => console.error(error),
        ()=> console.log('request completo')
      );
    }

  }

  onCancel(){
    console.log('onCancel')

  }

}
