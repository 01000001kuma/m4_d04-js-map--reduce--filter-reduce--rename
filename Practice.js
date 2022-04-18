// Given an array of cities, return an array with the first letter of each city’s name capitalized. You can use ES5 or ES6 syntax, whichever you feel more comfortable with at this point.

// array of cities:
const cities = ['miami', 'barcelona', 'madrid', 'amsterdam', 'berlin', 'sao paulo', 'lisbon', 'mexico city', 'paris'];

function capitalizeWords(cities) {
    return cities.map(element => {
      return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
    });
  }

console.log(capitalizeWords(cities));

//  You are a Math teacher and you have to grade our students based on their performance on two projects (40% of final grade) and their final exam (60% of final grade).

// So the whole class is represented as an array of objects (each object contains the data about that student), and we need to get a new array of objects, but this time the objects will contain only student´s name, and their final grade. Let´s do it.

const students = [
    {
      name: 'Tony Parker',
      firstProject: 80,
      secondProject: 75,
      finalExam: 90
    },
    {
      name: 'Marc Barchini',
      firstProject: 84,
      secondProject: 65,
      finalExam: 65
    },
    {
      name: 'Claudia Lopez',
      firstProject: 45,
      secondProject: 95,
      finalExam: 99
    },
    {
      name: 'Alvaro Briattore',
      firstProject: 82,
      secondProject: 92,
      finalExam: 70
    },
    {
      name: 'Isabel Ortega',
      firstProject: 90,
      secondProject: 32,
      finalExam: 85
    },
    {
      name: 'Francisco Martinez',
      firstProject: 90,
      secondProject: 55,
      finalExam: 78
    },
    {
      name: 'Jorge Carrillo',
      firstProject: 83,
      secondProject: 77,
      finalExam: 90
    },
    {
      name: 'Miguel López',
      firstProject: 80,
      secondProject: 75,
      finalExam: 75
    },
    {
      name: 'Carolina Perez',
      firstProject: 85,
      secondProject: 72,
      finalExam: 67
    },
    {
      name: 'Ruben Pardo',
      firstProject: 89,
      secondProject: 72,
      finalExam: 65
    }
  ];


const finalGrade = students.map((student, finalExam) => {
      
        const finalGrade = (student.firstProject + student.secondProject) / 2;
         
        const graduationGrade = (student.finalExam * 0.60) + (finalGrade * 0.4); 
    
        return {
          Name: student.name,
          Grade: Math.round(graduationGrade)
          
      };
  })

  console.log(finalGrade)

  // Given a menu of foods and their calories, calculate the average number of calories for the entire list.

  const menu = [
    { name: 'Carrots', calories: 150 },
    { name: 'Steak', calories: 350 },
    { name: 'Broccoli', calories: 120 },
    { name: 'Chicken', calories: 250 },
    { name: 'Pizza', calories: 520 }
  ];
  
  const averageCalories = menu.reduce((sum, food) => sum + food.calories / menu.length, 0)   // your code:
  
  console.log(averageCalories); // 278

  // Given the following array, filter the ones who are eligible to go to bars in the USA.

  const people = [
    { name: 'Candice', age: 25 },
    { name: 'Tammy', age: 30 },
    { name: 'Allen', age: 20 },
    { name: 'Nettie', age: 21 },
    { name: 'Stuart', age: 17 },
    { name: 'Bill', age: 19 }
  ];
  
  const adults = people.filter((people) => {
        if ( people.age >= 21 )  return people

  })        // your code...
  
  console.log(adults);
  
// Giving the following arrays of objects, let’s filter just the one with a pool.

const places = [
    {
      title: "Awesome Suite 20' away from la Rambla",
      price: 200,
      type: 'Private Room',
      pool: true,
      garage: false
    },
    {
      title: 'Private apartment',
      price: 190,
      type: 'Entire Place',
      pool: true,
      garage: true
    },
    {
      title: 'Apartment with awesome views',
      price: 400,
      type: 'Entire Place',
      pool: false,
      garage: false
    },
    {
      title: 'Apartment in la Rambla',
      price: 150,
      type: 'Private Room',
      pool: false,
      garage: true
    },
    {
      title: 'Comfortable place in Barcelona´s center',
      price: 390,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'Room near Sagrada Familia',
      price: 170,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: 'Great house next to Camp Nou',
      price: 140,
      type: 'Entire place',
      pool: true,
      garage: true
    },
    {
      title: 'New apartment with 2 beds',
      price: 2000,
      type: 'Entire place',
      pool: false,
      garage: true
    },
    {
      title: 'Awesome Suite',
      price: 230,
      type: 'Private Room',
      pool: false,
      garage: false
    },
    {
      title: "Apartment 10' from la Rambla",
      price: 930,
      type: 'Entire place',
      pool: true,
      garage: true
    }
  ];
  
  const placesWithPool = places.filter((places) => {
    if ( places.pool === true )  return places

}) 

console.log(placesWithPool)

// Given an array of numbers, filter out the ones that are not even, and are greater than 42.

const numbers = [1, 60, 112, 123, 100, 99, 73, 45];

    const oddNumbers = numbers.filter ((number) => {
        return ((number % 2) && (number > 42)
    })

console.log(oddNumbers);
// [ 123, 99, 73, 45 ]


  
  

