import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { ConfirmDialogComponent } from "../components/confirm-dialog/confirm-dialog.component";

@Injectable({
  providedIn: "root",
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openConfirmDialog(msg: any): MatDialogRef<ConfirmDialogComponent> {
    return this.dialog.open(ConfirmDialogComponent, {
      width: "400px",
      panelClass: "confirm-dialog-container",
      disableClose: true,
      data: {
        message: msg,
      },
    });
  }

  closeConfirmDialog(): void {
    this.dialog.closeAll;
  }
}
