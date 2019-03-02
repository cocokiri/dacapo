
/*type P = {
    name: string,
    extra?: number
}

//functions
type CounterFN = (start: number) => string*/

interface Couterfn {
    (name:string): number
}

interface S {
    balance: any
}

interface Pizza {
    name: string;
    toppings: string[];
}

class PizzaMaker {
    static create(event: Pizza) {
        return { name: event.name, toppings: event.toppings };
    }
}

const Water: React.SFC<{rect: Rectangle}> = (props) => (
    <p>
        {props.rect.area()}
        <br/>
        {props.rect.perimeter()}
    </p>
)


class Employee {
    private _fullName!: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (newName== "john") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}