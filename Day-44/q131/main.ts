export class student {
      name:string;
      id:number;
      constructor(name:string,id:number){
            this.name=name;
            this.id=id;
      }
      greet(){
          console.log(`Hello, Student name is ${this.name} and id is ${this.id}`)
      };
            
      }
