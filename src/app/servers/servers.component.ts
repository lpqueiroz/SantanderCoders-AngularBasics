import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <h1>busboy</h1>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  permitirAdicaoServidor = false;
  statusAdicaoServidor = 'Nenhum servidor foi criado';
  serverName = 'Testserver';

  constructor() {
    setTimeout(() => {
      this.permitirAdicaoServidor = true;
    }, 3000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.statusAdicaoServidor = 'Servidor criado! Nome do servidor é ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    console.log(event);
    this.serverName = event.target.value;
  }

}
