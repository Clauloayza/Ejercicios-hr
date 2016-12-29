//ciclo for
function forLoop(limit) {
    var total = 0;
    for(var i=0;i<=limit ;i++)
    {
       total = total + i;
    }
    return total;
}


//Números pares del 1 al 100
function sumaPares(n) {
    var total = 0;
    
    for (var i=0; i<=n ;i+=2)
        {
            total = total + i;
        }
    return total;
}

//Factorial de un número
function factorial(n) {
    var total = 1;
    if (n>0){
        for (var i=1; i<=n; i++)
        {
           total = total * i;
        }
        return total;
        } else{
                return null;
               }
    }

//String de multiplicar
function stringMultiplicar(n) {
    var salida = "";
    var resultado;
    
    for (var i=1; i<=10; i++)
        {
           resultado=i*n;
           salida +=n+ "x" + i + "=" + resultado ;
           if((i+1)<=10){
               salida+="/";
           }
            
        }
    return salida;
    
}

//CasiPalindrome
function casiPalindrome(palabra) {
    var tam = palabra.length;
    var palindrome;
    var count=0;
    
    for (var i=0, j=tam-1; i< tam/2, j>tam/2; i++,j--)
        {
            if (palabra[i] != palabra[j])
                {
                    count++;
                }
        }
        if(count<=2)
            {
                palindrome = true;
            }
            else{
                palindrome = false;
            }
        return palindrome;
    }