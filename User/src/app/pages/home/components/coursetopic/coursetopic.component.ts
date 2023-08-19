import { Component } from '@angular/core';

@Component({
  selector: 'app-coursetopic',
  templateUrl: './coursetopic.component.html',
  styleUrls: ['./coursetopic.component.scss'],
})
export class CoursetopicComponent {
  chartOptions = {
    animationEnabled: true,
    data: [
      {
        type: 'doughnut',
        yValueFormatString: "#,###.##'%'",
        dataPoints: [
          { y: 40,backgroundColor: "#2A6C0D" },
          { y: 30,backgroundColor: "yellow" },
          { y: 20,backgroundColor: "pink" },
          { y: 10, backgroundColor: "red" },
        ],
      },
    ],
  };
}
