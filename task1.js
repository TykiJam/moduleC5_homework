const parser = new DOMParser();

const doc = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`

const xml = parser.parseFromString(doc, "application/xml");
const students = xml.querySelectorAll("student");
const result = { list: [] };



students.forEach((student) => {
  const nameX = student.querySelector("name");
  const firstX = nameX.querySelector("first");
  const secondX = nameX.querySelector("second");
  const ageX = student.querySelector("age");
  const profX = student.querySelector("prof");
  const langAttr = nameX.getAttribute("lang");



  const name = (`${firstX.textContent + ' ' + secondX.textContent}`);
  result.list.push({
    name,
    age: Number(ageX.textContent),
    prof: profX.textContent,
    lang: langAttr,
  });
});

console.log(result)