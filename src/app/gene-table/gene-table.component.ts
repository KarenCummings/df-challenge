import { Component, Input, OnChanges } from '@angular/core';
import { Gene } from '../gene';
import { Consequence } from '../consequence';
import { OncoDatum  } from '../onco-datum';
import { SearchPipe } from '../search-pipe';

export class consequenceTerm {
  term: string;
  termCount: number;
}

@Component({
  selector: 'app-gene-table',
  templateUrl: './gene-table.component.html',
  styleUrls: ['../app.component.css']
})

export class GeneTableComponent implements OnChanges {
  @Input() oncoData: OncoDatum[];

  search: SearchPipe;
  gene: Gene;
  consequence: Consequence;
  consequenceTerms: consequenceTerm[];
 
  ngOnChanges() {
/* *** TODO  - create new table of consequenceTerms to be used in bar chart. Initially display as separate table 

    if ( this.oncoData.length > 0 ) {
      this.consequenceTerms = this.tallyConsequenceTerms(this.oncoData);
    };
*/
  }


  tallyConsequenceTerms( data ) {
    var termTally = data
      .sort((a, b) => a.item.consquence.term > b.item.consequence.term ?1:-1)
      .map(term => (term.consquence.term))
      .reduce(function(obj,item) {
          if (!obj[item]) {
            obj[item] = 0;
          }
          obj[item]++;
          return obj;
          }, {});
    // console.table(termTally);
    return termTally;    
  }
}
