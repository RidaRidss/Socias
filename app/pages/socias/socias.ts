import {Page, NavController} from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Observable';
@Page({
  templateUrl: 'build/pages/socias/socias.html'
})
export class socias {
    nav : NavController;
 tasks: FirebaseListObservable<any[]>;
    constructor(nav: NavController,af: AngularFire){
        this.nav = nav; 
 this.tasks = af.list('/tasks');
   }
 addTask(task : HTMLInputElement): void {
    
        console.log(`Adding article title: ${task.value} `);        
        this.tasks.add(task.value);
    }
    
    removeTask(id){
        this.tasks.remove(id);
    }
    
           
}