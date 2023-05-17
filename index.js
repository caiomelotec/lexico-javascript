/*  construa um analisador léxico primitivo cujos tokens atomicos para aceitacao da string(obtida por input) permita apenas o alfabeto latino minusculo e algarismos numérico de 0 a 9  exetuando as letras j, w, k,  y, ç, h, q e  as demais entradas especiais como /, (, ), &, %, $, #, @ e !. Os espacos poderao ser aceitos.  */

function lexer(input) {
  const invalidChars = /[jwkçhq)(/&%$#@!]/g;
  const invalidTokens = [];
  const validTokens = [];

  const tokens = input.split(" ");

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token.length > 0) {
      if (invalidChars.test(token)) {
        const invalidChar = token.match(invalidChars);
        invalidTokens.push({ token, invalidChar });
      } else {
        validTokens.push(token);
      }
    }
  }

  return { validTokens, invalidTokens };
}

const input = "exemplo amigo lexica 123 caça wato jato igre 52 @email";
const result = lexer(input);

console.log("Tokens válidos:", result.validTokens);
console.log("Tokens inválidos e caracteres inválidos:", result.invalidTokens);
