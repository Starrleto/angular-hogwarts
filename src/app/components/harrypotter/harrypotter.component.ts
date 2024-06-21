import { Component, inject, TemplateRef, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-harrypotter',
  standalone: true,
  imports: [ModalComponent, NgbDatepickerModule],
  templateUrl: './harrypotter.component.html',
  styleUrl: './harrypotter.component.css'
})
export class HarrypotterComponent implements OnInit {

  http = inject(HttpClient);
  allCharData: ICharacter[] | null = null;
  currentCharData: ICharacter | null | undefined = null;

  loadInfo() {
    this.getData().subscribe((stuff:any) => {
      console.log(stuff);
      this.allCharData = stuff;
    }) // Executes this function when data from our function is changed
  }

  ngOnInit(): void {
    this.loadInfo();
  }

  getData() {
    return this.http.get<ICharacter[]>('https://potterhead-api.vercel.app/api/characters');
  }

  getSpecificData(id: string) : ICharacter | null | undefined {

    if(this.allCharData != null){
      console.log(this.allCharData.find((e) => e.id == id));
      return this.allCharData.find((e) => e.id == id);
    }

    return null;
  }

  GetCurrentDOB(){
    if(this.currentCharData?.dateOfBirth != null && this.currentCharData?.yearOfBirth != null)
      return this.currentCharData.dateOfBirth + ", " + this.currentCharData.yearOfBirth;
    else if(this.currentCharData?.yearOfBirth != null)
      return this.currentCharData.yearOfBirth;
    else
      return "This character has no known Date of Birth.";
  }

  GetCurrentStatus(){
    return this.currentCharData?.alive ? "This character is alive." : "This character is not alive.";
  }

  GetCurrentStaff(){
    return this.currentCharData?.hogwartsStaff ? "This character is part of Hogwarts staff." : "This character is not part of Hogwarts staff.";
  }

  GetCurrentStudent(){
    return this.currentCharData?.hogwartsStudent ? "This character is a Hogwarts student." : "This character is not a Hogwarts student.";
  }

  GetCurrentHouse(){
    return this.currentCharData?.house != "" ? "House: " +this.currentCharData?.house : "";
  }

  GetCurrentHairColor(){
    return this.currentCharData?.eyeColour != "" ? this.currentCharData?.eyeColour : "Unknown.";
  }

  GetCurrentEyeColor(){
    return this.currentCharData?.hairColour != "" ? this.currentCharData?.hairColour : "Unknown.";
  }

  GetCurrentImage(){
    return this.currentCharData?.image != "" ? this.currentCharData?.image : "hidden";
  }

  GetCurrentSpecies(){
    return this.currentCharData?.species != "" ? this.currentCharData?.species : "Species Unknown.";
  }

  // Modal shit
  
	private modalService = inject(NgbModal);
	closeResult = '';

	open(content: TemplateRef<any>, id:string) {

    this.currentCharData = this.getSpecificData(id);
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
	}

}

interface ICharacter {
  actor: string
  alive: boolean
  alternate_actors: string[]
  alternate_names: string[]
  ancestry:string
  dateOfBirth:string
  eyeColour:string
  gender:string
  hairColour:string
  hogwartsStaff: boolean
  hogwartsStudent: boolean
  house: string
  id: string
  image: string
  name: string
  patronus: string
  species: string
  wand: object
  wizard: boolean
  yearOfBirth: number
}