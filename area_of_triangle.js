
function areaOfTriangle(a, b, c) {
    let s = (a + b + c) / 2;       // s=Semi-parameter
    let area = Math.sqrt(s*(s - a)*(s - b)*(s - c));
    console.log(`Area of Triangle is ${area}`);
    
}
areaOfTriangle(5, 6, 7)



  