import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
  moyenne: number = 0;
somme: number = 0;
nbr: number = 0;
enfants = ['Wick', 'Hoffman','Abruzzi'];
constructor() { }
ngOnInit() { }
computeAvg(note: number) {
this.somme += note;
this.nbr++;
this.moyenne = this.somme / this.nbr;
}

}
