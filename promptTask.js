// const obtainedMarks = parseFloat(prompt("Enter obtained marks : "));
// const totalMarks = parseInt(prompt("Enter total marks : "));
// const percentage = (obtainedMarks / totalMarks) * 100;
// const result = percentage >= 90 ? "Grade A" : "Grade B";
// console.log(`Obtained Marks: ${obtainedMarks}`);
// console.log(`Total Marks: ${totalMarks}`);
// console.log(`Percentage: ${percentage}`);
// console.log(`Result : ${result}`);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter obtained marks: ", (obtainedMarks) => {
  readline.question("Enter total marks: ", (totalMarks) => {
    const percentage = (parseFloat(obtainedMarks) / parseInt(totalMarks)) * 100;
    const result = percentage >= 90 ? "Grade A" : "Grade B";

    console.log(`Obtained Marks: ${obtainedMarks}`);
    console.log(`Total Marks: ${totalMarks}`);
    console.log(`Percentage: ${percentage}`);
    console.log(`Result: ${result}`);

    readline.close();
  });
});
