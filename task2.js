const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}`;



const data = JSON.parse(jsonString);
const student = data.list;
const result = { list: [] }; 



for (let key in student) {
  if (student.hasOwnProperty(key)) {
    result.list.push({
      name: student[key].name,
      age: student[key].age,
      prof: student[key].prof,
    });
  }
}

console.log('result', result);