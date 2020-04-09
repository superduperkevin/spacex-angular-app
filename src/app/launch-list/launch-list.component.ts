import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PastLaunchesListGQL } from '../services/spacexGraphql.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-launch-list',
  templateUrl: './launch-list.component.html',
  styleUrls: ['./launch-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LaunchListComponent implements OnInit {

  constructor(private pastLaunchService: PastLaunchesListGQL) { }


    //Please be careful not too fetch too much, but this amount lets us see lazy loading imgs in action
    pastLaunches$ = this.pastLaunchService
    
      .fetch({ limit: 30 })

        //Here we extract our query data
        //We can also get info like errors or loading state from res
      .pipe(
        map(
          res => res.data.launchesPast
        )
      )

    


  ngOnInit(): void {
  }

}
