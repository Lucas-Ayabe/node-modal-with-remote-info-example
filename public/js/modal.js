class PersonService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async request(endpoint) {
    const response = await fetch(this.baseUrl.concat(endpoint));
    const { data } = await response.json();
    return data;
  }

  async findById(id) {
    const data = await this.request(`/person/${id}`);
    return data.person;
  }
}

const initPeopleTableModal = (personService, modal, modalTriggers) => {
  // Faz o modal fechar ao clicar no botão de fechar
  const close = modal.querySelector("[href='#close']");
  close.addEventListener("click", () => modal.close());

  // Adiciona o evento para popular e abrir o modal
  // ao clicar em algum dos botões "Show Details" da tabela.
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", async () => {
      // Recupera o id do recurso
      const id = trigger.dataset.source;

      // Seleciona os elementos do Modal em que vamos jogar
      // as informações depois.
      const modalName = modal.querySelector("span");
      const modalText = modal.querySelector("p");

      // Usa o id para recuperar o recurso do back-end via fetch.
      const person = await personService.findById(id);

      // Popula o modal com as informações obtidas
      modalName.innerHTML = person.name;
      modalText.innerHTML = `${person.name} is ${person.age} years old.`;

      // Mostra o modal
      modal.showModal();
    });
  });
};

initPeopleTableModal(
  new PersonService("http://localhost:3000"),
  document.querySelector("#modal"),
  document.querySelectorAll("[data-target]")
);
