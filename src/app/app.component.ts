import { Component, Injectable, OnInit} from '@angular/core';
import { GeneDataService } from './gene-data.service';
import { Gene } from './gene';
import { Consequence } from './consequence';
import { OncoDatum } from './onco-datum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private geneUrl = 'http://oncokb.org/api/v1/genes/673/variants';
  title = 'OncoKB Gene Table';
  gene: Gene;
  consequence: Consequence;
  oncoData: OncoDatum[] = [];
  errorMessage: string;
  providers: [ GeneDataService ]

  constructor( private geneService: GeneDataService ) { }

  ngOnInit() { 
  	this.fetchGeneData(); 
  	}

  fetchGeneData() {
     this.geneService.getGenes( this.geneUrl )
      .subscribe(
            data => {
                this.oncoData = data;
            },
            error => {
                this.errorMessage = <any>error;
            }
      );
  }

}
