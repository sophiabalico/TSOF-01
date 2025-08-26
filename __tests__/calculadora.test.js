import { somar, subtrair, multiplicar, dividir } from "../src/calculadora.js";


describe("Calculadorea", () => {
  test("Deve somar dois números corretamente", () => {
    // AAA
    // Arrange (Preparar)
    const a = 18;
    const b = 27;

    // Act (Executar)
    const resultado = somar(a, b);

    // Assert (Verificar)
    expect(resultado).toBe(45);
  });

  test("Deve subtrair dois números corretamente", () => {
    // AAA
    // Arrange (Preparar)
    const a = 27;
    const b = 18;
  
    // Act (Executar)
    const resultado = subtrair(a, b);
  
    // Assert (Verificar)
    expect(resultado).toBe(9);
  });

  test("Deve multiplicar dois números corretamente", () => {
    // AAA
    // Arrange (Preparar)
    const a = 10;
    const b = 10;
  
    // Act (Executar)
    const resultado = multiplicar(a, b);
  
    // Assert (Verificar)
    expect(resultado).toBe(100);
  });

  test("Deve dividir dois números corretamente", () => {
    // AAA
    // Arrange (Preparar)
    const a = 100;
    const b = 2;
  
    // Act (Executar)
    const resultado = dividir(a, b);
  
    // Assert (Verificar)
    expect(resultado).toBe(50);
  });

  test("Não é possível dividir por zero", () => {
    expect(() => {
        dividir(10, 0);
    }).toThrow("Não é possível dividir por zero");
  });
});

