let listaDeCompras = [];

    function adicionar() {
        const produto = document.getElementById('produto').value;
        const valor = parseFloat(document.getElementById('preco').value);
        const quantidade = parseInt(document.getElementById('qtd').value);

        if (produto && !isNaN(valor) && !isNaN(quantidade)) {
            const item = {
                produto: produto,
                valor: valor,
                quantidade: quantidade
            };

            listaDeCompras.push(item);
            mostrarLista();
            atualizarTotal();
        } else {
            alert("Por favor, preencha todos os campos corretamente.");
        }
    }

    function mostrarLista() {
        const listaElement = document.getElementById('lista');
        listaElement.innerHTML = '';
        
        listaDeCompras.forEach(item => {
            const listItem = document.createElement('ol');
            listItem.textContent = `${item.produto} - R$ ${item.valor.toFixed(2)} x ${item.quantidade}=  R$${item.valor.toFixed(2) * item.quantidade}`;
            listaElement.appendChild(listItem);
        });
    }

    function atualizarTotal() {
        let total = 0;
        listaDeCompras.forEach(item => {
            total += item.valor * item.quantidade;
        });
        const totalElement = document.getElementById('total');
        totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
    }