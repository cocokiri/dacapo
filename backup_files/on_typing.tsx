
/*type P = {
    name: string,
    extra?: number
}

//functions
type CounterFN = (start: number) => string*/

interface Pizza {
    name: string;
    toppings: string[];
}

type P = {}


class PizzaMaker {
    static create(event: Pizza) {
        return { name: event.name, toppings: event.toppings };
    }
}

