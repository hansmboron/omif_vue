<template>
  <main class="container my-3">
    <Carrosel />
    <div class="row g-3">
      <div class="d-md-inline-block d-block col-12 col-md-8" id="mainCard">
        <section class="card">
          <div class="card-header text-dark pb-0">
            <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>'">
              <ol class="breadcrumb">
                <li aria-current="page" class="breadcrumb-item small">Home</li>
                <!--                            <li class="breadcrumb-item small"><a href="#">Library</a></li>-->
              </ol>
            </nav>
          </div>
          <div class="card-body text-justify mb-4">
            <h1 class="card-title text-center mb-3">OMIF 2021</h1>

            <p class="text-center fw-bold">
              O evento da 2ª fase da OMIF será on-line e realizado nos dias 22,
              23 e 24 de outubro de 2021.<br />
              Confira a
              <router-link to="/omif2021">programação completa</router-link
              >.<br />
              Inscrições:
              <a href="https://www.even3.com.br/omif2021/" target="_blank"
                >https://www.even3.com.br/omif2021/</a
              >
            </p>
            <div class="ratio ratio-16x9 mb-4">
              <iframe
                class="border shadow-sm"
                src="pdf/programacao_omif_2021.pdf"
              ></iframe>
            </div>

            <h4 class="text-center">Confira o gabarito da OMIF 2021!!!</h4>
            <a
              href="pdf/Prova_-_1_Fase_-_OMIF_2021_-_versão Final_-_Com_as_Respostas.pdf"
              target="_blank"
              download="pdf/Prova_-_1_Fase_-_OMIF_2021_-_versão Final_-_Com_as_Respostas.pdf"
              >Baixar em PDF
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-file-pdf"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
                />
                <path
                  d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.68 7.68 0 0 1 1.482-.645 19.701 19.701 0 0 0 1.062-2.227 7.269 7.269 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.187-.012.395-.047.614-.084.51-.27 1.134-.52 1.794a10.954 10.954 0 0 0 .98 1.686 5.753 5.753 0 0 1 1.334.05c.364.065.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.856.856 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.716 5.716 0 0 1-.911-.95 11.642 11.642 0 0 0-1.997.406 11.311 11.311 0 0 1-1.021 1.51c-.29.35-.608.655-.926.787a.793.793 0 0 1-.58.029zm1.379-1.901c-.166.076-.32.156-.459.238-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361.01.022.02.036.026.044a.27.27 0 0 0 .035-.012c.137-.056.355-.235.635-.572a8.18 8.18 0 0 0 .45-.606zm1.64-1.33a12.647 12.647 0 0 1 1.01-.193 11.666 11.666 0 0 1-.51-.858 20.741 20.741 0 0 1-.5 1.05zm2.446.45c.15.162.296.3.435.41.24.19.407.253.498.256a.107.107 0 0 0 .07-.015.307.307 0 0 0 .094-.125.436.436 0 0 0 .059-.2.095.095 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a3.881 3.881 0 0 0-.612-.053zM8.078 5.8a6.7 6.7 0 0 0 .2-.828c.031-.188.043-.343.038-.465a.613.613 0 0 0-.032-.198.517.517 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822.024.111.054.227.09.346z"
                /></svg
            ></a>
            <div class="ratio ratio-16x9 mb-2">
              <iframe
                class="border shadow-sm"
                src="pdf/Prova_-_1_Fase_-_OMIF_2021_-_versão Final_-_Com_as_Respostas.pdf"
              ></iframe>
            </div>
            <hr class="my-4" />
            <h3 class="text-center cor-secundaria">
              Live de Divulgação OMIF 2021 (30/08)
            </h3>
            <div class="ratio ratio-16x9 mb-2">
              <iframe
                src="https://www.youtube.com/embed/MQUfHXDp12s"
                title="YouTube video player"
                allow="accelerometer; clipboard-write;  picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <hr class="my-4" />

            <audio class="w-100" controls>
              <source src="../assets/audios/omif2021.mp3" type="audio/mpeg" />
              <source
                src="../assets/audios/omif2021.ogg"
                type="audio/ogg; codec=opus"
              />
            </audio>
            <p>
              A Olimpíada de Matemática das Instituições Federais (OMIF) já está
              sendo preparada para a sua edição de 2021!
            </p>

            <p>
              Muitas adaptações foram necessárias para estabelecer uma OMIF 2020
              dentro do cenário vigente (pandemia de Covid-19) e mesmo assim
              tivemos sucesso na realização da prova e do evento na segunda
              fase.
            </p>

            <p>
              Como ainda vivemos em uma situação complicada por conta da
              pandemia de Covid-19, teremos novamente em 2021 uma olimpíada
              completamente remota, mas que carrega em si características do
              projeto inicial, com a preocupação de evidenciar que a Matemática
              está em tudo e é para todos.
            </p>

            <p>
              Em resumo, a OMIF 2021 ocorrerá com as duas fases costumeiras,
              porém apenas na 1ª fase ocorrerá uma prova online. A 2ª fase será
              um evento online com palestras, minicursos, oficinas, atividades
              culturais, entre outras ações, através dos veículos de comunicação
              como o Youtube e o Meet.
            </p>

            <p>
              Para mais informações, vejam o regulamento e o calendário nos
              links ao lado.
            </p>

            <a class="card-link" href="#sideTitle"
              >Ir até lá
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-box-arrow-in-up-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z"
                /></svg
            ></a>
          </div>
        </section>
      </div>

      <div class="col-12 col-md-4" id="sideCard">
        <section class="card">
          <div class="card-body">
            <h4 class="card-title text-center anchor" id="sideTitle">
              Edição 2021
            </h4>
            <div class="card-text text-justify">
              <span class="fw-bold mb-3">Links:</span>
              <p class="card-text">
                Datas importantes da IV OMIF:<br />
                <a
                  data-bs-toggle="modal"
                  data-bs-target="#calendarModal"
                  href="#"
                  rel="noopener"
                  target="_blank"
                  >Calendário</a
                >
              </p>
              <p class="card-text">
                Confira o regulamento da IV OMIF:<br />
                <a
                  href="pdf/Regulamento OMIF 2021.pdf"
                  rel="noopener"
                  target="_blank"
                  >Regulamento</a
                >
              </p>
              <p class="card-text">
                Confira os editais importantes da OMIF:<br />
                <router-link to="/editais">Editais</router-link>
              </p>
              <p class="card-text">
                Contato:<br />
                <a href="mailto:omif@omif.com.br" rel="noopener" target="_blank"
                  >omif@omif.com.br</a
                >
              </p>
              <p class="card-text fw-bold mt-5">
                Para mais esclarecimentos sobre a OMIF 2021, acompanhe todos os
                nossos canais de comunicação:
              </p>
              <ul style="list-style: square">
                <li>
                  <a
                    href="https://www.youtube.com/c/OMIFoficial"
                    rel="noopener noreferrer"
                    target="_blank"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-youtube"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                      />
                    </svg>
                    YouTube</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/omif_oficial"
                    rel="noopener noreferrer"
                    target="_blank"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-instagram"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                      />
                    </svg>
                    Instagram</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/OMIFoficial"
                    rel="noopener noreferrer"
                    target="_blank"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      fill="currentColor"
                      class="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                      />
                    </svg>
                    Facebook</a
                  >
                </li>
              </ul>
              <h6>Live de lançamento (14/06):</h6>
              <div class="ratio ratio-16x9 mb-2">
                <iframe
                  class="border shadow-sm"
                  src="https://www.youtube.com/embed/QersCUYa6ss"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
  <ImageModal />
  <ToastMessage />
</template>

<script>
import Carrosel from "../components/Carrosel.vue";
import ImageModal from "../components/ImageModal.vue";
import ToastMessage from "../components/ToastMessage.vue";
export default {
  name: "Home",
  components: {
    Carrosel,
    ImageModal,
    ToastMessage,
  },
  mounted() {
    setTimeout(() => {
      let toastElList = [].slice.call(document.querySelectorAll(".toast"));
      let toastList = toastElList.map(function (toastEl) {
        return new bootstrap.Toast(toastEl, { autohide: false });
      });
      toastList.forEach((toast) => toast.show());
    }, 1000);
  },
};
</script>
