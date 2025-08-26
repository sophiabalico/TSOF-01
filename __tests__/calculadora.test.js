import { somar } from "../src/calculadora.js";

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
});
