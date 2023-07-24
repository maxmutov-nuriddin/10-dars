//test 
String.prototype.trm = function () {
  let start = 0;
  let end = this.length - 1;
  while (this[start] === " ") {
    start++;
  }
  while (this[end] === " ") {
    end--;
  }
  return this.slice(start, end + 1);
}

console.log("     Hello World!     ".trm());


String.prototype.upperCase = function () {
  let newStr = "";
  for (let i = 0; i < this.length; i++) {
    let charCode = this.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      newStr += String.fromCharCode(charCode - 32);
    } else {
      newStr += this[i];
    }
  }
  return newStr;
}

console.log("     Hello World!     ".upperCase());


String.prototype.has = function (substring) {
  for (let i = 0; i <= this.length - substring.length; i++) {
    if (this.slice(i, i + substring.length) === substring) {
      return true;
    }
  }
  return false;
}

console.log("Hello World".has("World"));
console.log("Hello World".has("Universe"));


String.prototype.cut = function (start, end) {
  let newStr = "";
  for (let i = start; i < end && i < this.length; i++) {
    newStr += this[i];
  }
  return newStr;
}

console.log("Hello World".cut(6, 11));


String.prototype.rpt = function (count) {
  let newStr = "";
  for (let i = 0; i < count; i++) {
    newStr += this;
  }
  return newStr;
}

console.log("Hello".rpt(3));


Number.prototype.fixed = function (n) {
  if (isNaN(this)) return "NaN";
  let str = this.toString();
  let dot = str.indexOf(".");
  if (dot === -1) {
    str += ".";
    dot = str.length - 1;
  }
  let diff = n - (str.length - dot - 1);
  for (let i = 0; i < diff; i++) {
    str += "0";
  }
  return str.slice(0, dot + n + 1);
}

console.log((123.45).fixed(2));

Number.prototype.round = function () {
  let num = this;
  if (isNaN(num)) return "NaN";
  if (num >= 0) {
    return Math.floor(num + 0.5);
  } else {
    return Math.ceil(num - 0.5);
  }
}

console.log((10.102).round());


Number.prototype.isSquare = function () {
  let num = this;
  if (num < 0) return false;
  let root = Math.floor(Math.sqrt(num));
  return root * root === num;
}

console.log((16).isSquare());


Number.prototype.count = function () {
  let num = this;
  if (num === 0) return 1;
  let count = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
console.log((12345).count());


Number.prototype.sum = function () {
  let num = this;
  let sum = 0;
  while (num !== 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log((12345).sum());


Array.prototype.customMap = function(callback) {
  let arr = this;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}
console.log([1,2,3].customMap(x => x * 2));


Array.prototype.customEvery = function(callback) {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}
console.log([1,2,3].customEvery(x => x > 0));


Array.prototype.customReduce = function(callback, initialValue) {
  let arr = this;
  let accumulator = initialValue === undefined ? arr[0] : initialValue;
  let startIndex = initialValue === undefined ? 1 : 0;
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}
console.log([1,2,3].customReduce((acc, curr) => acc + curr));


Array.prototype.customFindIndex = function(callback) {
  let arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }
  return -1;
}
console.log([1,2,3].customFindIndex(x => x === 2));


Array.prototype.customSplice = function(start, deleteCount, ...items) {
  let arr = this;
  let deleted = [];
  let addCount = items.length;
  let end = start + deleteCount;
  for (let i = start; i < end; i++) {
    deleted.push(arr[i]);
  }
  let right = arr.slice(end);
  for (let i = 0; i < addCount; i++) {
    arr[start + i] = items[i];
  }
  let newLength = arr.length - deleteCount + addCount;
  arr.length = newLength;
  for (let i = 0; i < right.length; i++) {
    arr[start + addCount + i] = right[i];
  }
  return deleted;
}
console.log([1,2,3].customSplice(1, 1, 4, 5));


function Animal(name, speed, limitAge) {
  this.name = name;
  this.speed = speed;
  this.limitAge = limitAge;
}

Animal.prototype.info = function() {
  return `Name: ${this.name}, Speed: ${this.speed}, Limit Age: ${this.limitAge}`;
};

console.log(new Animal("Tiger", 100, 20).info());


function Student(name, course, years, university) {
  this.name = name;
  this.course = course;
  this.years = years;
  this.university = university;
}

Student.prototype.leftYears = function() {
  return `Left years: ${this.years - this.course}`;
};

console.log(new Student("John Doe", 3, 5, "Harvard University").leftYears());


function Person(name, age, currentYear) {
  this.name = name;
  this.age = age;
  this.currentYear = currentYear;
}

Person.prototype.getBirthYear = function() {
  return `Birth Year: ${this.currentYear - this.age}`;
};

console.log(new Person("Jane Doe", 25, 2023).getBirthYear());


function Employee(name, salary, workName) {
  this.name = name;
  this.salary = salary;
  this.workName = workName;
}

Employee.prototype.increaseSalary = function(percent) {
  const increasedSalary = this.salary * (1 + percent / 100);
  return `Increased Salary: ${increasedSalary}`;
};

console.log(new Employee("John Smith", 5000, "Engineer").increaseSalary(10));


function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.getArea = function() {
  return `Area: ${this.width * this.height}`;
};

Rectangle.prototype.getPerimeter = function() {
  return `Perimeter: ${(this.width + this.height) * 2}`;
};

console.log(new Rectangle(5, 10).getArea());
console.log(new Rectangle(5, 10).getPerimeter());
