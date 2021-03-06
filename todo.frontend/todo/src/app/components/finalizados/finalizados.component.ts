import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Todo } from "src/app/models/todo";
import { DialogService } from "src/app/services/dialog.service";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-finalizados",
  templateUrl: "./finalizados.component.html",
  styleUrls: ["./finalizados.component.css"],
})
export class FinalizadosComponent implements OnInit {
  listFinished: Todo[] = [];

  constructor(
    private service: TodoService,
    private router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach((todo) => {
        if (todo.finalizado) {
          this.listFinished.push(todo);
        }
      });
    });
  }

  delete(id: any): void {
    this.dialogService
      .openConfirmDialog("Tem certeza que deseja deletar?")
      .afterClosed()
      .subscribe((resp) => {
        if (resp === true) {
          this.service.delete(id).subscribe((resposta) => {
            if (resposta === null) {
              this.service.message("Tarefa deletada com sucesso");
              this.listFinished = this.listFinished.filter(
                (todo) => todo.id !== id
              );
            } else this.service.message("Algo deu errado");
          });
        }
      });
  }

  voltar(): void {
    this.router.navigate([""]);
  }
}
