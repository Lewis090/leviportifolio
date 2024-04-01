
      const produtos = [];

      function adicionar() {
        const nome = document.getElementById("nome").value;
        const valor = Number(document.getElementById("valor").value);
        const form = document.getElementById("form");

        // se o nome for igual a vazio ou o valor
        if (nome == "" || valor == "") {
          alert("Insira todos os campos do Produto");
          return;
        }

        // se o valor for menor ou igual a zero
        if (valor <= 0) {
          alert("O valor do produto está inválido");
          return;
        }

        // Verifica se já existe esse produto na lista
        var seExiste = produtos.find(element => element[0] === nome);

        if (seExiste) {
          alert("O produto já existe na lista");
          return;
        }

        produtos.push([nome, valor]);

        // limpa o formulário depois de adicionar
        form.reset();

        exibir();
        total();
      }

      function exibir(filtro = "") {
        /* Criar a lista de Produtos */

        // Cria um elemento ul e adiciona na constante lista
        const lista = document.createElement("ul");

        // novo vetor para filtro
        let listaProds = [];

        // caso seja passado algum filtro ele receba apenas os buscados
        if (filtro != "") {
          listaProds = produtos.filter(produto => produto[0].includes(filtro));
        } else {
          listaProds = produtos;
        }

        // para cada item de produtos...
        listaProds.forEach(item => {
          // vamos criar um novo elemento de item da lista
          const listaItem = document.createElement("li");

          // vamos criar um Texto e adicionar na constante
          // o texto vai ser o Nome e o Valor, ex.: Café - R$ 4.00
          const texto = document.createTextNode(item[0] + " - R$ " + item[1]);

          // adiciona o texto em listaItem
          listaItem.append(texto);

          // adiciona o item da lista na lista
          lista.append(listaItem);
        });

        // Vamos pegar o elemento onde vai ser inserido a lista
        const saida = document.getElementById("saida");

        // precisamos apagar a lista anterior sempre que atualizar
        saida.innerHTML = "";

        // iremos adicionar a lista no lugar correto
        saida.append(lista);
      }

      function total() {
        var listaValores = produtos.map(item => item[1]);
        var total = listaValores.reduce((total, valor) => total + valor);

        const totalEl = document.getElementById("total");
        totalEl.innerText = total;
      }

      function buscar() {
        var busca = document.getElementById("busca").value;
        exibir(busca);
      }
 