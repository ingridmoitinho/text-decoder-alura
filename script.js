// Seletores dos elementos HTML
const inputText = document.getElementById("inputText");
const output = document.getElementById("output");
const messageDisplay = document.getElementById("messageDisplay");
const copyBtn = document.getElementById("copyBtn");

// Função para criptografar
function criptografar() {
  let texto = inputText.value;

  // Validação: letras maiúsculas e caracteres especiais não são permitidos
  if (/[^a-z\s]/.test(texto)) {
    alert(
      "Apenas letras minúsculas e sem caracteres especiais são permitidos."
    );
    return;
  }

  // Substituição de letras para criptografia simples
  let textoCriptografado = texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

  // Exibir o texto criptografado, esconder a imagem e mostrar o botão de copiar
  messageDisplay.style.display = "none";
  output.style.display = "block";
  output.innerHTML = textoCriptografado;
  copyBtn.style.display = "inline-block";
}

// Função para descriptografar
function descriptografar() {
  let texto = inputText.value;

  // Substituição reversa para descriptografia
  let textoDescriptografado = texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

  // Exibir o texto descriptografado, esconder a imagem e mostrar o botão de copiar
  messageDisplay.style.display = "none";
  output.style.display = "block";
  output.innerHTML = textoDescriptografado;
  copyBtn.style.display = "inline-block";
}

// Função para copiar o texto para a área de transferência
function copiarTexto() {
  let textoCopiado = output.innerHTML;
  navigator.clipboard.writeText(textoCopiado).then(() => {
    alert("Texto copiado para a área de transferência!");
  });
}

// Adicionar event listeners aos botões
document.getElementById("encrypt").addEventListener("click", criptografar);
document.getElementById("decrypt").addEventListener("click", descriptografar);
copyBtn.addEventListener("click", copiarTexto);
