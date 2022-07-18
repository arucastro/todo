import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Todo } from "src/app/models/todo";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-read-all",
  templateUrl: "./read-all.component.html",
  styleUrls: ["./read-all.component.css"],
})
export class ReadAllComponent implements OnInit {
  closed = 0;

  list: Todo[] = [];
  listFinished: Todo[] = [];

  constructor(private service: TodoService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach((todo) => {
        if (todo.finalizado) {
          this.listFinished.push(todo);
        } else this.list.push(todo);
      });
      this.closed = this.listFinished.length;
    });
  }

  finalizar(item: Todo): void {
    item.finalizado = true;
    this.service.update(item).subscribe(() => {
      this.service.message("Tarefa finalizada!");
      this.list = this.list.filter((todo) => todo.id !== item.id);
      this.closed++;
    });
  }

  delete(id: any): void {
    if (window.confirm("Temm certeza de que deseja deletar?")) {
      this.service.delete(id).subscribe((resposta) => {
        if (resposta === null) {
          this.service.message("Tarefa deletada com sucesso");
          this.list = this.list.filter((todo) => todo.id !== id);
        } else this.service.message("Algo deu errado");
      });
    }
  }

  navegaParaFinalizados(): void {
    this.router.navigate(["finalizados"]);
  }

  navegaParaNovoTodo(): void {
    this.router.navigate(["novotodo"]);
  }
}
