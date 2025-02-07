import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css',
})
export class StudentComponent {
  @ViewChild('studentIdInput') inputId!: ElementRef;

  constructor(private http: HttpClient) {}

  requestStudent() {
    var id = this.inputId.nativeElement.value;
    console.log(id);

    var result = this.http.get(`http://localhost:8080/${id}`);
    result.subscribe((value) => {
      console.log(value);
    });
  }
}
