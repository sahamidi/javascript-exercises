let arrayLength = 4
fibonaci(arrayLength)

function fibonaci(arrayLength)
{

    arrayLength = Number(arrayLength)
    console.log(arrayLength)
    if (arrayLength < 0) 
    {
        console.log("OOPS")
    }
    else    
        {    
    
    let array = [1]
    let counter = arrayLength
    console.log(array.length)
    console.log(counter)
        while (array.length != arrayLength)
        {
            currentValue = array[arrayLength-counter]

            if (arrayLength-counter===0)
            {
                previousValue = 0
            }
            else 
            {
                previousValue = array[arrayLength-counter-1]
            }


            console.log(currentValue)
            counter = counter - 1
            newValue = currentValue + previousValue
            array.push(newValue)
            console.log(array)

        }
    console.log(array[array.length]+array[array.length-1])




    }
}
console.log('fibonacci')

