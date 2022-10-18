import { ToastrService } from 'ngx-toastr';
import { InterceptorService } from './../../core/services/interceptor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserData } from './../../core/models/user-data';
import { ChartService } from 'src/app/core/services/chart.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserDataService } from 'src/app/core/services/user-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HhtpHandlerService } from 'src/app/core/services/hhtp-handler.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  public getUserInformation!: FormGroup;
  public users: UserData[] = [];
  public name: string = '';
  public p: number = 1;
  public key: string = 'id';
  public reverse: boolean = false;
  public emptySearchData: boolean = false;
  public getUserData: string[] = [];
  public closeResult: string = '';
  public userInfos: any;
  public addNewClicked : boolean = false;
  constructor(
    private restService: ChartService,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private route : ActivatedRoute,
    private userDataService: UserDataService,
    public loaderService: HhtpHandlerService,
    public router: Router,
    public location: Location,
    public interceptor: InterceptorService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getUserTableData();
    this.initialize();
  }

  initialize(): void {
    this.getUserInformation = this.formBuilder.group({
      name: ['', [Validators.required]],
      salary: ['' ,[Validators.required]],
      year: ['', [Validators.required]],
      phone: [ , [Validators.required,  Validators.minLength(10)]],
      intrest: ['', [Validators.required]],
      field: ['', [Validators.required]],
    })
  }

  getUserTableData(): void {
    this.restService.getChartInfo().subscribe((res) => {
      this.users = res;
    });
  }

  Search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.users = this.users.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  sort(key: any) : void {
    this.key = key;
    this.reverse = !this.reverse;
  }

  deleteUser(employeeInfo: string[]): void {
    this.userDataService.deleteUser(employeeInfo).subscribe((status) => {
      this.toastr.success('Employee Data Deleted Successfully', 'Delete', {});
      this.refreshApiData();
    })
  }

  getEmployeeInfo(employeeData: string[]): void {
    if (this.loaderService.isLoading) {
      this.userDataService.getIndividualUser(employeeData).subscribe(
        (res) => {
          this.userInfos = res;
          this.getUserInformation = this.formBuilder.group({
            name: [this.userInfos.name],
            salary: [this.userInfos.salary],
            year: [this.userInfos.year],
            phone: [this.userInfos.phone],
            intrest: [this.userInfos.intrest],
            field: [this.userInfos.field],
          });
        }
      )
    }
  }

  updateUser(): void {
    if (this.getUserInformation.valid) {
      this.userDataService.updateUserInformation(
        this.userInfos.id, this.getUserInformation.value
      )
        .subscribe(res => {
          this.toastr.success('Employee Data Updated Successfully', 'Updated', {});
          this.refreshApiData()
        })
    }
  }

  open(content: any): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.getUserInformation.reset();
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.getUserInformation.reset();
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  get updateFormController() {
    return this.getUserInformation.controls;
  }

  refreshApiData() : void {
    this.router.routeReuseStrategy.shouldReuseRoute = () =>false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/dashboard'],{
      relativeTo : this.route,
      queryParamsHandling : 'merge',
    })
  }

  addNewUser(testContent:any) : void {
    this.addNewClicked = true;
    if(this.addNewClicked = true){
      this.modalService.open(testContent, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.getUserInformation.reset();
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
      this.getUserInformation.reset();
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }    
  }

  addNewEmployee(): void{
    if (this.getUserInformation.valid) {
      this.userDataService.addNewEmployee(
        this.getUserInformation.value
      )
        .subscribe(res => {
          this.getUserInformation.reset();
          this.toastr.success('Employee Data Added Successfully', 'New Employee Added', {});
          this.refreshApiData()
        })
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      this.getUserInformation.reset();
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      this.getUserInformation.reset();
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  numberOnly(event: { key: string }): boolean {
    let pattern = /^([0-9])$/;
    let result = pattern.test(event.key);
    return result;
  }

  textOnly(event: { key: string }): boolean {
    let textPattern = /^[A-Za-z\s]*$/;
    let res = textPattern.test(event.key);
    return res;
  }

}
