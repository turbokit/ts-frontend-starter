import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';

export const app = () => {
  console.log('%cApp is running', 'color: green');

  ajax({
    url: 'https://my.api.mockaroo.com/session_entries.json?key=1d4d6f30',
    responseType: 'json'
  }).subscribe(response => console.log(response))
}
