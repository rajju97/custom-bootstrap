import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selectdropdown',
  templateUrl: './selectdropdown.component.html',
  styleUrls: ['./selectdropdown.component.scss']
})
export class SelectdropdownComponent implements OnInit {

  @Input() options:any[]=[];
  @Output() selected = new EventEmitter<string>();
  filteredOptions: any[]=[];
  searchTerm = ''
  selectedOption = 'select car'
  showDropdown =false


  constructor(private elementRef:ElementRef){

  }

  ngOnInit(){
    this.filteredOptions = this.options
  }

  filterOptions(){
    this.filteredOptions=[]
    this.filteredOptions=this.options.filter(option=>option?.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
  }

  selectOption(option:string){
    this.selectedOption = option;
    this.searchTerm = option
    this.showDropdown =false
    this.selected.emit(this.searchTerm)
  }

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showDropdown = false;
    }
  }

}
