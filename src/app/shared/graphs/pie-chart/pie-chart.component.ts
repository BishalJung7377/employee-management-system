import { ChartService } from 'src/app/core/services/chart.service';
import { AfterViewInit, Component, EventEmitter,ChangeDetectorRef, Output, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements AfterViewInit {
  @ViewChild('pieCanvas') pieCanvas!: { nativeElement: any };
  @Output() public workingHours = new EventEmitter<string>();

  canvas: any;
  ctx: any;
  public pieChart: any;
  public pieData: any;
  public pieLabel: string[] = [];
  public pieWorkhours: string[] = [];
  public nameData: string[] = [];
  public averageHours : number = 0;
  constructor(
    private chartDatas: ChartService,
    private cdRef: ChangeDetectorRef   
  ) {
    Chart.register(...registerables)
  }

  ngOnInit() {
    this.chartDatas.getPieChartData()
      .subscribe(
        res => {
          this.pieData = res;
          for (let i = 0; i < this.pieData.length; i++) {
            this.pieLabel.push(this.pieData[i].name);
            this.pieWorkhours.push(this.pieData[i].hours);
          }
        }
      )
    this.renderPieChart(this.pieLabel, this.pieWorkhours);
  }
  ngAfterViewInit(): void {
    this.renderPieChart(this.pieLabel, this.pieWorkhours);
  }

  renderPieChart(pieLabel: string[], pieWorkhours: string[]): void {
    this.canvas = this.pieCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    this.pieChart = new Chart(this.ctx, {
      type: 'pie',
      data: {
        labels: pieLabel,
        datasets: [
          {
            backgroundColor: [
              '#2ecc71',
              '#3498db',
              '#95a5a6',
              '#9b59b6',
              '#f1c40f',
              '#e74c3c',
            ],
            data: pieWorkhours,
          },
        ],
      },
    });
    var sum = 0;
    for (var i = 0; i < this.pieWorkhours.length; i++) {
      sum += parseInt(this.pieWorkhours[i], this.pieWorkhours[i].length);
    }
    this.averageHours = sum /this.pieWorkhours.length;
    this.workingHours.emit(`${this.averageHours.toFixed(0)}hrs`);
  }
}
