// triangle calclutoe
document.getElementById("triangle-btn").addEventListener("click",function getTriangleArea(){
    const bFild = document.getElementById("triangle-b");
    const bValue =parseFloat(bFild.value);
    
    const hFild = document.getElementById("triangle-h");
    const hValue = parseFloat(hFild.value);

    if(isNaN(bValue) || isNaN(hValue)){
        alert("Please Entir Number");
        return;
    }else{
        const area = 0.5 * bValue * hValue;
    
    const areaValue = document.getElementById("triangleArea");
    areaValue.innerText = area;
    }
    
    
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

// parallelogram calclutor

document.getElementById("parallelogram-btn").addEventListener("click", function getParallelogramArea(){
    const bFild = document.getElementById("parallelogram-b");
    const bValue =parseFloat(bFild.value);
    
    const hFild = document.getElementById("parallelogram-h");
    const hValue = parseFloat(hFild.value);
    
    const area = bValue * hValue;
    
    const areaValue = document.getElementById("parallelogramArea");
    areaValue.innerText = area;
})

// rhombus calclutor

document.getElementById("rhombus-btn").addEventListener("click", function getRhombusArea(){
    const d1Fild = document.getElementById("rhombus-d1");
    const d1Value =parseFloat(d1Fild.value);
    
    const d2Fild = document.getElementById("rhombus-d2");
    const d2Value = parseFloat(d2Fild.value);
    
    const area = 0.5 * d1Value * d2Value;
    
    const areaValue = document.getElementById("rhombusArea");
    areaValue.innerText = area;
})

// Pentagon calclutor
document.getElementById("Pentagon-btn").addEventListener("click", function getPentagonArea(){
    const pFild = document.getElementById("pentagon-p");
    const pValue =parseFloat(pFild.value);
    
    const bFild = document.getElementById("pentagon-b");
    const bValue = parseFloat(bFild.value);
    
    const area = 0.5 * pValue * bValue;
    
    const areaValue = document.getElementById("pentagonArea");
    areaValue.innerText = area;
})

// ellipse calclutor
document.getElementById("ellipse-btn").addEventListener("click", function getEllipseArea(){
    const aFild = document.getElementById("ellipse-a");
    const aValue =parseFloat(aFild.value);
    
    const bFild = document.getElementById("ellipse-b");
    const bValue = parseFloat(bFild.value);
    
    const area = 3.1416 * aValue * bValue;
    
    const areaValue = document.getElementById("ellipseArea");
    areaValue.innerText = area;
})