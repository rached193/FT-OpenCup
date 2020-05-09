import { Component, OnInit, Input } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() url: string;
  @Input() set data(value: any[]) {
    if (value.length > 0) {
      this.buildTable(value);
    }
  }
  @Input() title: string;

  displayedColumns: string[];
  dataSource = [];


  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    if (this.url) {
      this.tableService.getTable(this.url).subscribe(data => {
        this.buildTable(data);
      });
    }
  }

  private buildTable(content: any[]) {
    this.displayedColumns = Object.keys(content[0]);
    this.dataSource = content;
  }

}
