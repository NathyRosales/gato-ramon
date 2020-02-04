//Devuelve la suma de 1 a N. Por ejemplo,  Sum1toN(3) devolverá la suma de 1+2+3, la cual es 6
//sum1toN(255) devuelve la suma de todos los números de 1 a 255//
function Sum1toN(n){
    var sum=0;
 for (var i = 0; i <= n ; i++) {
     if (i>=0) {
 	 sum=sum+i;
     }
 }
  return sum;
 }
 b=Sum1toN(255)
 console.log(b);
 e=Sum1toN(3)
 console.log(e);
//devuelve la suma del primer y último número en el array//
function sumFirstLast(arr){
    var sum= 0;
    for(var i = 0; i<= arr.length; i++){
        sum= arr[0]+arr[arr.length-1];
    }
    return sum;
}
b= sumFirstLast([2,4,5,6,7,8]);
console.log(b)
    
describe("Sum1toN", function() { 
    it("should return 3 when we pass 2 as an argument", function() { 
        expect(Sum1toN(2)).toEqual(3); 
    }); 
    it("should return 6 when we pass 3 as an argument", function() { 
        expect(Sum1toN(3)).toEqual(6); 
    }); 
    it("should return 10 when we pass 4 as an argument", function() { 
        expect(Sum1toN(4)).toEqual(10); 
    }); 
});
    
describe("sumFirstLast", function() { 
    it("should return 3 when we pass [1,2] as an argument", function() { 
        expect(sumFirstLast([1,2])).toEqual(3); 
    }); 
    it("should return 10 when we pass [2,3,8] as an argument", function() { 
        expect(sumFirstLast([2,3,8])).toEqual(10); 
    }); 
    it("should return -10 when we pass [-6,23,3,-4] as an argument", function() { 
        expect(sumFirstLast([-6,23,3,-4])).toEqual(-10); 
    }); 
});
//Ejercicio 2 - Es tu turno de escribir primero el test y luego la función//

/* //Ya sea en el mismo archivo o en uno diferente, crea una prueba o función 
que devuelva el número más grande del array. Por ejemplo, returnLargest([1,3,10]) 
debería devolver 10 y returnLargest([-2,-5,-10]) debería devolver -2. 
Una vez que hayas escrito la prueba, ejecútala (sin escribir toda la función 
para asegurarte de que fallen todas las pruebas), luego completa la función 
cerciorándote de que pase todas las pruebas. */

function returnLargest (x){
    var max= x[0];
	for (var i = 0; i < x.length; i++) {
	 if (x[i]>max) {
	 	max= x[i]}
	}
	return max;
}
b= returnLargest([1,3,10]);
console.log(b);
e= returnLargest([-2,-5,-10]);
console.log(e);
describe("returnLargest", function() { 
    it("should return 10 when we pass [1,3,10] as an argument", function() { 
        expect(returnLargest([1,3,10])).toEqual(10); 
    }); 
    it("should return -2 when we pass [-2,-5,-10] as an argument", function() { 
        expect(returnLargest([-2,-5,-10])).toEqual(-2); 
    }); 
});
    