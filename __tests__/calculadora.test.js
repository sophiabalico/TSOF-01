import { somar, subtrair } from "../src/calculadora.js";


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
});

