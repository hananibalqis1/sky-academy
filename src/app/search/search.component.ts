import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  searchTerm: string = "";

  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if(params.searchTerm){        //if the searchTerm have any values
        this.searchTerm = params.searchTerm;
      }
    })
  }

  search(): void {    //want to able to change the route
    if(this.searchTerm){
      this.router.navigateByUrl(`/search/${this.searchTerm}`);
    }
  }

}
