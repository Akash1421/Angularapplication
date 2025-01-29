import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  practiceForm: FormGroup;
  options: string[] = ['Car', 'Bus', 'Bike', 'Auto'];

  constructor(private fb: FormBuilder) {
    this.practiceForm = this.fb.group({
      experience: ['', [Validators.required]],
      vehicle: ['', [Validators.required]]
    });

    this.practiceForm.get('vehicle')?.valueChanges.subscribe(selectedVehicle => {
      const experienceControl = this.practiceForm.get('experience');

      if (selectedVehicle === 'Auto') {
        experienceControl?.setValidators([
          Validators.required,
          Validators.pattern(/^4$/) // Ensure experience is exactly 4
        ]);
      } else {
        experienceControl?.setValidators([Validators.required]);
      }

      experienceControl?.updateValueAndValidity();
      experienceControl?.markAsTouched(); // Mark as touched so errors appear immediately
    });
  }

  ngOnInit(): void {}
}
