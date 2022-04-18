const hpCharacters = ['harry','hermione', 'ron', 'Paco']
// push (ginny) pop, shift 
hpCharacters.push('ginny')
console.log(hpCharacters);
hpCharacters.pop();
console.log(hpCharacters);
// hpCharacters.shift();
// console.log(hpCharacters);
hpCharacters.push('malfoy')
// map
const charactersWithHouses =  hpCharacters.map((character,index)=>{
    if(character === 'malfoy'){
        return {
            id: index,
            name: character,
            house: 'slytheryn'
        }
    } else if(character === 'Paco'){
        return {
            id: index,
            name: character,
            house: 'Jamon'
        }
    } else {
        return {
            id: index,
            name: character,
            house: 'gryffindor'
        }
    }
   
})
console.log(charactersWithHouses)
// forEach
let gryffindorCount = 0;
​
charactersWithHouses.forEach((character)=>{
    if(character.house === 'gryffindor'){
        gryffindorCount += 1; 
    }
})
console.log(gryffindorCount)


//const hpCharacters = ['harry','hermione', 'ron', 'Paco']
// filter

const malfoy = charactersWithHouses.filter((character, index)=>{
    return character.name === 'malfoy'
})
console.log(malfoy)

const griffindorMembers = charactersWithHouses.filter((character)=>{
    return character.house === 'gryffindor'
})
console.log(griffindorMembers);


const justOne = charactersWithHouses.find((char,ind)=>{
    return char.house === 'gryffindor'
})
console.log(justOne)





// sort
const sortedArray = charactersWithHouses.sort((a,b)=>{
    
    if(a.name.length < b.name.length){
        return -1
    } else if(a.name.length > b.name.length){
        return 1
    } else {
        return 0
    }
})
console.log(sortedArray)
// reverse
sortedArray.reverse()
console.log(sortedArray)
hpCharacters.reverse()
console.log(hpCharacters)
// reduce
​
const someNumbers = [2,7,2,5,9,6,2,1,1,1,1,1,5,10];
​
const housesWithPeople = charactersWithHouses
.reduce((prev, next) => {
    const house = next.house;
    if (!prev[house]) {
        prev[house] = []
    }
    prev[house].push(next);
    return prev
}, {});
console.log(housesWithPeople)
​
const studentsById = charactersWithHouses
.reduce((prev, next) => ({...prev, [next.name]:next }), {});
console.log(studentsById)
​
const sum = someNumbers
.reduce((prev, next) => {
    if (next % 2 === 0) { // is even
        prev.even = [...prev.even, next]
    } else {
        prev.odd = [...prev.odd, next]
    }
    return prev
}, {odd: [], even:[]})
console.log(sum)
​
​
const response = [{
    name: 'a',
    value: 1
},{
    name: 'b',
    value: 10
},{
    name: 'c',
    value: 4
},{
    name: 'a',
    value: 4
},{
    name: 'b',
    value: 4
},{
    name: 'd',
    value: 14
}
]
// prev,    next
// {}  , {name: 'a',value: 1 }
const objectForCharts = response.reduce((modObj, arrElement)=>{
​
    if(!modObj[arrElement.name]){
    modObj[arrElement.name] = 0;       
    }
    modObj[arrElement.name] += arrElement.value
    modObj.total += arrElement.value
    return modObj
},{total: 0})
​
console.log(objectForCharts)
​
// columnName : total
// {
//     a: 40,
//     b:30,
//     c: 60
// }
​
const colors = ['red','blue','yellow']
​
colors.push('purple');
colors.pop();
​
const capitalizedColors = colors.map((color)=>{
    return color.toUpperCase()
})
console.log(capitalizedColors);
const whateverArray = capitalizedColors.map((color)=>{
    let newObject = {color: color, item: ''}
    if(color === 'RED'){
        return {...newObject, item: 'apple'}
    } else if(color === 'YELLOW'){
        return {...newObject, item: 'sun'}
    } else {
        return {...newObject, item: 'sea'}
    }
})
console.log(whateverArray)
// -------------
let arrayOfcolorfulItems = [];
​
whateverArray.forEach((element)=>{
    arrayOfcolorfulItems.push(element.item)
})
console.log(arrayOfcolorfulItems);
​
const arrayOfcolorfulItems2 = whateverArray.map((element)=>{
    return element.item
})
​
console.log(arrayOfcolorfulItems2)
​