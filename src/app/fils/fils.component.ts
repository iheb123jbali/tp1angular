import { Component ,OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit{
  @Input() ordre: string=" ";
@Input() villeNaissance: string=" ";
constructor() { }
ngOnInit() { }

}
