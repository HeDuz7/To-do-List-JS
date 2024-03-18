const novaTarefa = document.getElementById("nova-tarefa");
const adicionarTarefa = document.getElementById("adicionar-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");

adicionarTarefa.addEventListener("click", function() {
    const textoTarefa = novaTarefa.value;
    if (textoTarefa === "") {
        return;
    }

    const li = document.createElement("li");
    li.innerText = textoTarefa;

    const botaoConcluir = document.createElement("button");
    botaoConcluir.innerText = "Concluir";
    botaoConcluir.addEventListener("click", function() {
        li.classList.add("concluida");
    });

    const botaoExcluir = document.createElement("button");
    botaoExcluir.innerText = "Excluir";
    botaoExcluir.addEventListener("click", function() {
        li.parentNode.removeChild(li);
    });

    li.appendChild(botaoConcluir);
    li.appendChild(botaoExcluir);

    listaTarefas.appendChild(li);
    novaTarefa.value = "";
});
