function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
    // Ваш код

}

Student.prototype.setSubject = function (subjectName) { 
    this.subject = subjectName;
  //ваш код
}

let arrMark;
Student.prototype.addMark = function (mark) { 
  if (this.marks === undefined) {
    arrMark = [];
    arrMark.push(mark);
    this.marks = arrMark;
  }
  else {
    arrMark.push(mark);
    this.marks = arrMark;
  }
//ваш код
}

Student.prototype.addMarks = function (...mark) {
  if (mark <= 1) { 
    if (this.marks === undefined) {
      arrMark.push(mark);
      this.marks = arrMark;
    }
    else {
      arrMark.push(mark);
      this.marks = arrMark;
    }
  }
  else {
    for (let i = 0; i <= mark.length; i++) {
      if (this.marks === undefined) {
        arrMark.push(mark[i]);
        this.marks = arrMark;
      }
      else {
        arrMark.push(mark[i]);
        this.marks = arrMark;
      }  
    }
  }
}

Student.prototype.getAverage = function (marks) { 
  let sum = marks.map(i => x+=i, x = 0).reverse()[0];
  let avg = sum / marks.length;
  this.avg = avg;
}

Student.prototype.exclude = function (reason) { 
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}


// ваш код для остальных методов