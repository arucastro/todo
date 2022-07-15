import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Router, RouterLink } from "@angular/router";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-confirm-dialog",
  templateUrl: "./confirm-dialog.component.html",
  styleUrls: ["./confirm-dialog.component.css"],
})
export class ConfirmDialogComponent implements OnInit {
  id: any;

  constructor(
    private service: TodoService,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) data: any
  ) {
    this.id = data.id;

  }

  ngOnInit(): void {}

  delete(id: any): void {
    this.service.delete(id).subscribe((resposta: any) => {
      if (resposta === null) {
        this.service.message("Tarefa deletada com sucesso");
        this.router.navigate(['finalizados'])
      } else this.service.message("Algo deu errado");
    });
  }
}
