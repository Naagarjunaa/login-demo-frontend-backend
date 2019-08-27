import { MessageService } from './../message.service';
import { StudentService } from './student.service';
import { Student } from './student.interface';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AdddataComponent } from './adddata/adddata.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'standard', 'action'];
  data: any;
  sid: number;
  name: String;
  standard: String;

  dataSource = new MatTableDataSource<Student>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public dialog: MatDialog, private studentservice: StudentService, private messageService : MessageService) { }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    this.loadData();
  }
  addData() {
    this.openDialog();
  }
  loadData() {
    this.studentservice.getStudent().subscribe((response) => {
      this.messageService.showSuccessMessage('success')
      this.data = response;
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
    })
  }
  deleteData(id) {
    this.data.splice(id, 1);
    this.studentservice.deleteStudent(id).subscribe((response) => {
      this.messageService.showSuccessMessage('success')
      this.dataSource.data = response;
    })
  }

  editData(element) {
    console.log(element);
    this.openUpdateDialog(element);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AdddataComponent, {
      width: '250px',
      data: { sid: this.sid, name: this.name, standard: this.standard }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      
      this.studentservice.postStudent(result).subscribe(
        res => { console.log(res) ,
        this.messageService.showSuccessMessage('success')},
        err => { console.log(err) }
      )
    });
  }

  openUpdateDialog(element): void{
    const dialogRef = this.dialog.open(AdddataComponent, {
      width: '250px',
      data: {sid: element.sid, name: element.name, standard: element.standard }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.studentservice.updateStudent(result.sid,result).subscribe(
        res => { console.log(res),this.messageService.showSuccessMessage('success') },
        err => { console.log(err) }
      )
    });
  }
}
