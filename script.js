function deltaPositivo(delta, a, b) {
    let r1 = (-b + Math.sqrt(delta)) / (2 * a);
    let r2 = (-b - Math.sqrt(delta)) / (2 * a);
    
    document.getElementById("resultado").innerHTML = `\\(F_n = C_1 * (${r1.toFixed(2)})^n + C_2 * (${r2.toFixed(2)})^n\\)`;
    document.getElementById("resultado").style.display = 'inline-block';
    MathJax.typeset(); 
}

function deltaZero(a, b) {
    let r = -b / (2 * a);
    
    document.getElementById("resultado").innerHTML = `\\(F_n = C_1 * (${r.toFixed(2)})^n + C_2 * n * (${r.toFixed(2)})^n\\)`;
    document.getElementById("resultado").style.display = 'inline-block';
    MathJax.typeset(); 
}

function deltaNegativo(delta, a, b) {
    delta = delta * (-1);
    let inteiro = -b / (2 * a);
    let imag = Math.sqrt(delta) / (2 * a);
    let r = Math.sqrt(Math.pow(inteiro, 2) + Math.pow(imag, 2));
    let angulo = Math.atan(imag / inteiro) * (180 / Math.PI);

    document.getElementById("resultado").innerHTML = `\\(F_n = ${r.toFixed(2)}^n * [k_1 \\cdot \\cos(n \\cdot ${angulo.toFixed(2)}^\\circ) + k_2 \\cdot \\sin(n \\cdot ${angulo.toFixed(2)}^\\circ)]\\)`;
    document.getElementById("resultado").style.display = 'inline-block';
    MathJax.typeset(); 
}

function recebeValores() {
    let a = parseFloat(document.getElementById("varA").value);
    let b = parseFloat(document.getElementById("varB").value);
    let c = parseFloat(document.getElementById("varC").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    if (a === 0) {
        alert("A deve ser diferente de 0.");
        return;
    }

    let delta = Math.pow(b, 2) - 4 * a * c;

    if (delta > 0) {
        deltaPositivo(delta, a, b);
    } else if (delta === 0) {
        deltaZero(a, b);
    } else {
        deltaNegativo(delta, a, b);
    }
}
