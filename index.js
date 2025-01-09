const readlineSync = require('readline-sync');
const fs = require('fs');
const path = require('path');

// Caminho do arquivo JSON
const productsFilePath = path.join(__dirname, 'data', 'products.json');

// Função para ler os dados dos produtos
function readProducts() {
  const data = fs.readFileSync(productsFilePath);
  return JSON.parse(data);
}

// Função para salvar os dados dos produtos
function saveProducts(products) {
  fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
}

// Função para gerar um ID único para os produtos
function generateProductId() {
  return Math.floor(Math.random() * 1000000);
}

// Função para adicionar um produto
function addProduct() {
  const name = readlineSync.question('Nome do Produto: ');
  const category = readlineSync.question('Categoria: ');
  const quantity = parseInt(readlineSync.question('Quantidade em Estoque: '), 10);
  const price = parseFloat(readlineSync.question('Preco: '));

  const product = {
    id: generateProductId(),
    name,
    category,
    quantity,
    price,
  };

  const products = readProducts();
  products.push(product);
  saveProducts(products);

  console.log('Produto adicionado com sucesso!');
}

// Função para listar os produtos
function listProducts() {
  const products = readProducts();
  console.table(products);
}

// Função para atualizar um produto
function updateProduct() {
  const id = parseInt(readlineSync.question('ID do Produto para Atualizar: '), 10);
  const products = readProducts();
  const product = products.find(p => p.id === id);

  if (!product) {
    console.log('Produto nao encontrado!');
    return;
  }

  console.log('O que você deseja atualizar?');
  console.log('1. Nome');
  console.log('2. Categoria');
  console.log('3. Quantidade');
  console.log('4. Preço');

  const choice = readlineSync.question('Escolha uma opcao (1-4): ');

  switch (choice) {
    case '1':
      product.name = readlineSync.question('Novo Nome: ');
      break;
    case '2':
      product.category = readlineSync.question('Nova Categoria: ');
      break;
    case '3':
      product.quantity = parseInt(readlineSync.question('Nova Quantidade: '), 10);
      break;
    case '4':
      product.price = parseFloat(readlineSync.question('Novo Preco: '));
      break;
    default:
      console.log('Opção inválida!');
      return;
  }

  saveProducts(products);
  console.log('Produto atualizado com sucesso!');
}

// Função para excluir um produto
function deleteProduct() {
  const id = parseInt(readlineSync.question('ID do Produto para Excluir: '), 10);
  const products = readProducts();
  const productIndex = products.findIndex(p => p.id === id);

  if (productIndex === -1) {
    console.log('Produto não encontrado!');
    return;
  }

  const confirm = readlineSync.keyInYNStrict('Tem certeza que deseja excluir este produto?');
  if (confirm) {
    products.splice(productIndex, 1);
    saveProducts(products);
    console.log('Produto excluído com sucesso!');
  }
}

// Função para buscar um produto
function searchProduct() {
  const searchTerm = readlineSync.question('Digite o ID ou Nome do Produto para Buscar: ');
  const products = readProducts();

  const results = products.filter(p => p.id === parseInt(searchTerm, 10) || p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  if (results.length === 0) {
    console.log('Nenhum produto encontrado!');
  } else {
    console.table(results);
  }
}

// Menu principal
function main() {
  while (true) {
    console.log('\nMenu de Gerenciamento de Produtos');
    console.log('1. Adicionar Produto');
    console.log('2. Listar Produtos');
    console.log('3. Atualizar Produto');
    console.log('4. Excluir Produto');
    console.log('5. Buscar Produto');
    console.log('6. Sair');

    const choice = readlineSync.question('Escolha uma opcao (1-6): ');

    switch (choice) {
      case '1':
        addProduct();
        readlineSync.keyInPause();
        console.clear();
        break;
      case '2':
        listProducts();
        readlineSync.keyInPause();
        console.clear();
        break;
      case '3':
        updateProduct();
        readlineSync.keyInPause();
        console.clear();
        break;
      case '4':
        deleteProduct();
        readlineSync.keyInPause();
        console.clear();
        break;
      case '5':
        searchProduct();
        readlineSync.keyInPause();
        console.clear();
        break;
      case '6':
        console.log('Saindo...');
        return;
      default:
        console.log('Opção inválida!');
    }
  }
}

// Iniciar a aplicação
main();
