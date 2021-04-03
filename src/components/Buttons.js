import React from 'react'

//Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity

//instead of hardcoding and creating buttons we will create array of numbers and map over to return the buttons for both operators and the numbers. pass in the appropriate classname to style

//use the tenary operator/condition to apply css if number is 0{`dark-gray ${num ===0 && "big-btn"}` }. first return dark-gray if num==0 also apply big btn

//also add the dot button after the map

//in css we cld use grid but here we use flex 75% and 25% to split the nums and ops in the container

//btn active , transform scale  means when you click on it, it vibrates

//separate the equal becos it uses a diff on click fxn

const numbers = [
    {
        id: "seven",
        num: 7
    },
    {
        id: "eight",
        num: 8
    },
    {
        id: "nine",
        num: 9
    },
    {
        id: "four",
        num: 4
    },
    {
        id: "five",
        num: 5
    },
    {
        id: "six",
        num: 6
    },
    {
        id: "one",
        num: 1
    },
    {
        id: "two",
        num: 2
    },
    {
        id: "three",
        num: 3
    },
    {
        id: "zero",
        num: 0
    },
]

const operators = [
    {
        id: "divide",
        op: "/"
    },
    {
        id: "multiply",
        op: "x"
    },
    {
        id: "subtract",
        op: "-"
    },
    {
        id: "add",
        op: "+"
    }
   
]

const equals = 
 {
        id: "equals",
        op: "="
    }


function Buttons (props){
    
        return (
            <div className="calculator">
                <div className="nums-container">
                    <button id="allClear" className="btns light-gray big-btn" onClick={props.allClear}>AC</button>

                    <button id="clear" className="btns light-gray big" onClick={props.clear}>C</button>
                    {
                        numbers.map(item => (
                            <button id={item.id} className={`btns dark-gray ${item.num === 0 && "big-btn"}`} key={item.num}  onClick={()=> props.click(item.num)}>{item.num}</button>
                        ))
                    }

                    <button id="decimal" className="btns light-gray" onClick={()=> props.click(".")}>.</button>
                </div>

                <div className="ops-container">
                    {
                        operators.map(item => (
                            <button id={item.id} className="btns orange" key={item.op} onClick={() => props.click(item.op)}>{item.op}</button>
                        ))
                    }
                    <button id={equals.id} className="btns orange" key={equals.op} onClick={ props.evaluate}>{equals.op}</button>
                </div>
            </div>
        )
    }


export default Buttons
