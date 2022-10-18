import { Chart } from 'chart.js';
import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import { ChartService } from 'src/app/core/services/chart.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  @Output() public salaryEvent = new EventEmitter<string>();
  @Output() public employeeEvent = new EventEmitter<string>();

  public chartData: any;
  public labelData: string[] = [];
  public realData: string[] = [];
  public nameData: string[] = [];
  public avgemployeSalary: number = 0;
  public totalEmployee: number = 0;
  public isLoading : boolean = false;
  constructor(
    private chartDatas: ChartService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.chartDatas.getChartInfo()
      .subscribe(
        res => {
          this.chartData = res;
          if (this.chartData != null) {
            for (let i = 0; i < this.chartData.length; i++) {
              this.labelData.push(this.chartData[i].year);
              this.realData.push(this.chartData[i].salary);
              this.nameData.push(this.chartData[i].name);
            }
            this.employeeEvent.emit(this.chartData.length);
          }
          this.renderChart(this.labelData, this.realData, this.nameData);
        }
      )
  }

  renderChart(labelData: string[], realData: string[], nameData: string[]) {
    const myChart = new Chart("myChart", {
      type: 'bar',
      data: {
        labels: nameData,
        datasets: [{
          label: 'Employee Salary in thousand',
          data: realData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    var sum = 0;
    for (var i = 0; i < realData.length; i++) {
      sum += parseInt(realData[i], realData[i].length);
    }
    console.log(realData);
    
    this.avgemployeSalary = sum / realData.length;
    this.salaryEvent.emit(`${this.avgemployeSalary.toFixed(2)}`);
  }
}
