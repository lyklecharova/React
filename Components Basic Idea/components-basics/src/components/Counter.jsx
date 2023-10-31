import { useState } from "react";

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const incrementClickHandler = () => {
        setCount(oldValue => oldValue + 1);
    };

    const clearCounterHandler = () => {
        setCount(0);
    }

    // if(count < 0){
    //     return(
    //         <h3>Invalid count!</h3>
    //     );
    // }

    // let warning = null;
    // if(count < 0){
    //     warning = <p>Invalid count!</p>
    // }

    let message = null;
    switch (count) {
        case 1:
            message = 'First blood';
            break;
        case 2:
            message = 'Double kill';
            break;
            case 3:
                message = 'Tripple kill';
                break;
            case 4 :
                message = 'Multi kill';
                break;
            case 5:
                message = 'Unstoppable';
                break;
            case 6:
                message = 'God like';
                break;
            default:
                message = 'M-m-m-onster kill';
          


    }

    return (
        <div>
            <h3>Counter</h3>

            {/* if condition */}
            {/* {warning} */}

            {/* ternary operator - използваме го имаме имаме if-else*/}
            {count < 0
                ? <p>Invalid count!</p>
                : <p>Valid count</p>
            }

            {/* boolean opearator - само за if*/}
            {count == 0 && <p>Please start incrementing</p>}

            <h4>{message}</h4>

            <p>Count: {count}</p>
            <button onClick={incrementClickHandler}>+</button>
            <button onClick={clearCounterHandler}>clear</button>
            <button onClick={() => setCount(count - 1)}>-</button>

        </div>
    );
}