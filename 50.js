/* Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.
2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.
3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.

4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a
disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas
avaliações dentro do objeto do hotel. */

const prompt = require("prompt-sync")();

let hoteis = [];
let reservas = [];

function adicionarHotel() {
    let id = hoteis.length + 1;
    let nome = prompt("Digite o nome do hotel: ");
    let cidade = prompt("Digite a cidade do hotel: ");
    let quartosTotais = Number(prompt("Digite o total de quartos do hotel: "));
    let quartosDisponiveis = quartosTotais;

    let hotel = {
        id: id,
        nome: nome,
        cidade: cidade,
        quartosTotais: quartosTotais,
        quartosDisponiveis: quartosDisponiveis,
        quartos: [] 
    };

    for (let i = 0; i < quartosTotais; i++) {
        let quarto = {
            idQuarto: i + 1,
            disponivel: true
        };
        hotel.quartos.push(quarto);
    }

    hoteis.push(hotel);

    console.log("Hotel adicionado com sucesso!");

    let confirm = prompt("Deseja adicionar mais hoteis? (s/n): ");
    if (confirm.toLowerCase() === "s") {
        adicionarHotel();
    }
}

function buscarHoteisPorCidade() {
    let cidade = prompt("Digite a cidade para buscar hoteis: ");
    let hoteisEncontrados = hoteis.filter(hotel => hotel.cidade.toLowerCase() === cidade.toLowerCase() && hotel.quartosDisponiveis > 0);

    console.log("Hoteis disponíveis em", cidade + ":");
    if (hoteisEncontrados.length > 0) {
        hoteisEncontrados.forEach(hotel => console.log(`ID: ${hotel.id}, Nome: ${hotel.nome}, Quartos Disponíveis: ${hotel.quartosDisponiveis}`));
    } else {
        console.log("Nenhum hotel disponível nesta cidade.");
    }
}

function fazerReserva() {
    let idHotel = Number(prompt("Digite o ID do hotel para fazer a reserva: "));
    const hotel = hoteis.find(h => h.id === idHotel);

    if (!hotel) {
        console.log("Hotel não encontrado.");
        return;
    }

    if (hotel.quartosDisponiveis > 0) {
        let idReserva = reservas.length + 1;
        let nomeCliente = prompt("Digite o nome do cliente: ");

        let reserva = {
            idReserva: idReserva,
            idHotel: idHotel,
            nomeCliente: nomeCliente
        };

        reservas.push(reserva);
        hotel.quartosDisponiveis--;
        console.log("Reserva realizada com sucesso!");
    } else {
        console.log(`O hotel ${hotel.nome} não possui quartos disponíveis.`);
    }
}

function cancelarReserva() {
    let idReserva = Number(prompt("Digite o ID da reserva para cancelar: "));
    const reservaEncontrada = reservas.find(reserva => reserva.idReserva === idReserva);

    if (reservaEncontrada) {
        const hotel = hoteis.find(h => h.id === reservaEncontrada.idHotel);
        if (hotel) {
            hotel.quartosDisponiveis++;
            reservas = reservas.filter(reserva => reserva.idReserva !== idReserva);
            console.log("Reserva cancelada com sucesso.");
        } else {
            console.log("Erro: Hotel da reserva não encontrado.");
        }
    } else {
        console.log("Reserva não encontrada.");
    }
}

function listarReservas() {
    console.log("Reservas:");
    if (reservas.length > 0) {
        reservas.forEach(reserva => {
            const hotel = hoteis.find(h => h.id === reserva.idHotel);
            if (hotel) {
                console.log(`ID Reserva: ${reserva.idReserva}, Hotel: ${hotel.nome} (ID: ${hotel.id}), Cliente: ${reserva.nomeCliente}`);
            } else {
                console.log(`ID Reserva: ${reserva.idReserva}, Hotel: ID ${reserva.idHotel} (Não encontrado), Cliente: ${reserva.nomeCliente}`);
            }
        });
    } else {
        console.log("Nenhuma reserva cadastrada.");
    }
}

function exibirMenu() {
    console.log("\n--- Sistema de Reserva de Hotéis ---");
    console.log("1. Adicionar Hotel");
    console.log("2. Buscar Hotéis por Cidade (apenas disponíveis)");
    console.log("3. Fazer Reserva");
    console.log("4. Cancelar Reserva");
    console.log("5. Listar Reservas");
    console.log("0. Sair");
}

async function executarSistema() {
    let opcao;
    do {
        exibirMenu();
        opcao = Number(prompt("Digite a sua opção: "));

        switch (opcao) {
            case 1:
                adicionarHotel();
                break;
            case 2:
                buscarHoteisPorCidade();
                break;
            case 3:
                fazerReserva();
                break;
            case 4:
                cancelarReserva();
                break;
            case 5:
                listarReservas();
                break;
            case 0:
                console.log("Saindo do sistema...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 0);
}

executarSistema();