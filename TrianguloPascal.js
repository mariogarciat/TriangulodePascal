function pascal(n) {
    salida = [];
    for (var i = 0; i < n; i++) {
        salida[i] = [];
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                salida[i][j] = 1;
            } else {
                salida[i][j] = 0;
            }
        }
    }

    for (var i = 1; i < n; i++) {
        for (var j = 1; j < n; j++) {
            salida[i][j] = salida[i-1][j] + salida[i][j-1];
        }
    }

    var aux = n;
    var triangulo = "";
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < aux; j++) {
            triangulo = triangulo + salida[i][j] + " ";
        }
        aux--;
        triangulo = triangulo + "\n";
    }

    console.log(triangulo);
}
