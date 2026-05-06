import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Card } from "../../components/card/card";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map, tap } from 'rxjs';

const client1 = {
  name: 'Fernando',
  gender: 'male',
  age: 36,
  address: 'Ottawa, Canada'

}
const client2 = {
  name: 'Patsy',
  gender: 'female',
  age: 40,
  address: 'Mexicali, Mexico'

}

@Component({
  selector: 'app-uncommon-page',
  imports: [Card, I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, UpperCasePipe,KeyValuePipe, TitleCasePipe, AsyncPipe],
  templateUrl: './uncommon-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UncommonPage {


  //i18n Select
  client = signal(client1);

  invitationMap ={
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient(){
    if(this.client() === client1){
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  //I18n Plural
  clientsMap = signal({
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'Tenemos 1 cliente esperando',
    '=2': 'Tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando',
  })

  clients= signal([
    'Maria',
    'Pedro',
    'Fernando',
    'Javier',
    'Dany',
    'Cesar',
    'Patsy',
    'Laura',
    'Ham',
    'Renato',
  ])

  deleteClient() {
    this.clients.update(prev => prev.slice(1));
}

//keyValue pipe
  profile = {
    name: 'Fernando',
    gender: 'male',
    age: 36
  }

  //Async Pipe

  promiseValue: Promise<string> = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa.')
      console.log('Promesa finalizada');
    },3500);
  });

  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap:', value))
  );
}
