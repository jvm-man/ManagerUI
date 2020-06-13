

class counter {
    static objectCount: Map<string, number> = new Map();

    static increment(className: string){
        if (!this.objectCount.get(className)) {
            this.objectCount.set(className, 1);
        } else {
            const currentValue = this.objectCount.get(className);
            this.objectCount.set(className, currentValue! + 1);
        }
    }
}

export function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    console.log(constructor.name);
    counter.increment(constructor.name);
    return class extends constructor {
    }

}

export function someDecorator(componentId: string){
   return function <T extends { new (...args: any[]): {} }>(constructor: T) {
       console.log('created: ' + constructor.name);
        return constructor;
    }
}

function someDecorator2<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      aaa = 'abc'
    };
}




export function LinkTextValue(elementId: string){
        return function(target: any, key: string | symbol){

            let value = target[key];

            const getter = ()=> {
                return value;
            };

            const setter = (newVal:any)=>{
                value = newVal;
                updateElementText(elementId, newVal);
            };
            Object.defineProperty(target, key, {
                configurable: true,
                enumerable: true,
                get: getter,
                set: setter
            })
        }
}

function updateElementText(elementId: string, newText: string){

    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = newText;
        element.style.visibility = 'visible';
    }
}