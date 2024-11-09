import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgrammeService } from '../Service/programmeService';
import { Programme } from '../Model/programme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import FormBuilder and FormGroup

@Component({
  selector: 'app-modif-programme',
  templateUrl: './modif-programme.component.html',
  styleUrls: ['./modif-programme.component.css']
})
export class ModifProgrammeComponent implements OnInit {
  programme!: Programme;
  programmeForm!: FormGroup; // Declare the form group
  errorMessage: string = ''; // Declare the error message property

  // Define the possible types for programme and exercise
  programmeTypes = ['FITNESS', 'MENTAL', 'CROSSFIT', 'YOGA', 'STRENGTH', 'ENDURANCE', 'FLEXIBILITY'];
  exerciseTypes = ['CARDIO', 'CROSS', 'GYMNAS', 'MEDITATION'];

  constructor(
    private route: ActivatedRoute,
    private programmeService: ProgrammeService,
    private fb: FormBuilder // Inject FormBuilder
  ) {}

  ngOnInit(): void {
    // Initialize the form
    this.programmeForm = this.fb.group({
      titre: ['', [Validators.required]],  // Add your form controls with validation
      type: ['', [Validators.required]],
      description: [''],
      exerciseType: ['', [Validators.required]],
    });

    // Retrieve the programmeId from the route parameter
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.getProgramme(id);
  }

  // Fetch the programme data based on the id
  getProgramme(id: number): void {
    this.programmeService.getProgrammeById(id).subscribe(
      (data) => {
        this.programme = data;
        this.programmeForm.patchValue(data);  // Patch the form with existing programme data
      },
      (error) => {
        this.errorMessage = 'Error fetching programme data.';
        console.error('Error fetching programme:', error);
      }
    );
  }

  // Update the programme
  onUpdate(): void {
    if (this.programmeForm.valid) {
      this.programmeService.updateProgramme(this.programme.idProgramme, this.programmeForm.value).subscribe(
        (data) => {
          alert('Programme updated successfully!');
        },
        (error) => {
          this.errorMessage = 'Error updating programme.';
          console.error('Error updating programme:', error);
        }
      );
    } else {
      this.errorMessage = 'Please fill in all required fields.';
    }
  }
}
