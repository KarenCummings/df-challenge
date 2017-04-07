import { Injectable } 		from '@angular/core';
import { Http, Response } 	from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

// import { geneData } from './mock-genes';
import { OncoDatum, Gene } from './onco-datum';

@Injectable()

export class GeneDataService {

	geneData: OncoDatum[] = [];
  	constructor( private http: Http ) {}

 // 	getGenes() {
 // 		return geneData;
 // 	}

 	getGenes(geneUrl): Observable< OncoDatum[] >  {
	    return this.http.get(geneUrl)
	               .map(this.extractData)
	               .catch(this.handleError);
	}

	private extractData(res: Response) {
	    let body = res.json();
	    return body;
  	}

	private handleError (error: Response | any) {
	    let errMsg: string;
	    if (error instanceof Response) {
	      const body = error.json() || '';
	      const err = body.error || JSON.stringify(body);
	      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	    } else {
	      errMsg = error.message ? error.message : error.toString();
	    }
	    console.error(errMsg);
	    return Observable.throw(errMsg);
	  }

}
