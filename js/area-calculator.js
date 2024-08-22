// triangle calclutoe
document.getElementById("triangle-btn").addEventListener("click",function getTriangleArea(){
    const bFild = document.getElementById("triangle-b");
    const bValue =parseFloat(bFild.value);
    
    const hFild = document.getElementById("triangle-h");
    const hValue = parseFloat(hFild.value);
    
    const area = 0.5 * bValue * hValue;
    
    const areaValue = document.getElementById("triangleArea");
    areaValue.innerText = area;
})

// Rectangle calculator
document.getElementById("rectangle-btn").addEventListener("click", function getRectangleArea(){
    const wFild = document.getElementById("rectangle-w");
    const wValue =parseFloat(wFild.value);
    
    const lFild = document.getElementById("rectangle-l");
    const lValue = parseFloat(lFild.value);
    
    const area = wValue * lValue;
    
    const areaValue = document.getElementById("rectangleArea");
    areaValue.innerText = area;
})

