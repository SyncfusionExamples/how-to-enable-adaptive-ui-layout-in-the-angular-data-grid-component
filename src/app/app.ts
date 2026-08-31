import { Component, signal, OnInit } from '@angular/core';
import {
  GridModule, PageSettingsModel, PageService, SortService, FilterService,
  FilterSettingsModel, EditService, ToolbarService, EditSettingsModel, ToolbarItems, SearchService
} from '@syncfusion/ej2-angular-grids';
import { data } from './datasource';

@Component({
  selector: 'app-root',
  imports: [GridModule],
  providers: [PageService, SortService, FilterService, EditService, ToolbarService, SearchService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('my-angular-app');
  public data?: object[];
  public pageSettings?: PageSettingsModel;
  public filterOptions?: FilterSettingsModel;
  public editSettings?: EditSettingsModel;
  public toolbar?: ToolbarItems[];
  ngOnInit(): void {
    this.data = data;
    this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
    this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
    this.pageSettings = { pageSize: 12 },
      this.filterOptions = {
        type: 'CheckBox'
      }
  }
}