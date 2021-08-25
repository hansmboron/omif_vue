<template>
  <main class="container my-3">
    <div class="col-12" id="mainCard">
      <section class="card">
        <div class="card-header pb-0">
          <nav aria-label="breadcrumb" style="--bs-breadcrumb-divider: '>'">
            <ol class="breadcrumb">
              <li class="breadcrumb-item small">
                <router-link to="/">Home</router-link>
              </li>
              <li aria-current="page" class="breadcrumb-item small">
                Materiais de Estudo
              </li>
            </ol>
          </nav>
        </div>
        <div class="card-body mb-3 mx-xl-5">
          <h1 class="card-title text-center mb-5">Materiais de Estudos</h1>

          <h3 class="text-success">Simulado da OMIF 2021:</h3>
          <p class="fw-bold">
            O simulado da OMIF 2021 será uma série de desafios semanais que
            versarão sobre os conteúdos da prova da 1ª Fase:
          </p>
          <p>
            <a
              href="pdf/Desafio_01_2021.pdf"
              download="pdf/Desafio_01_2021.pdf"
              target="_blank"
              rel="noopener"
              >Desafio 1
            </a>
          </p>
          <div class="ratio ratio-16x9 mb-2">
            <iframe
              class="border shadow-sm"
              src="pdf/Desafio_01_2021.pdf"
            ></iframe>
          </div>
          <br />
          <br />
          <h3 class="text-success">Prova da OMIF 2020:</h3>
          <p>
            <a
              :href="`${publicPath}pdf/Prova 1ª Fase OMIF 2020.pdf`"
              target="_blank"
              rel="noopener"
              >Prova 1ª Fase OMIF 2020</a
            >
          </p>
          <div class="ratio ratio-16x9 mb-2">
            <iframe
              class="border shadow-sm"
              src="pdf/Prova 1ª Fase OMIF 2020.pdf"
            ></iframe>
          </div>
          <p>
            <a
              :href="`${publicPath}pdf/Gabarito - Prova 1ª Fase OMIF 2020.pdf`"
              target="_blank"
              rel="noopener"
              >Gabarito Prova 1ª Fase OMIF 2020</a
            >
          </p>
          <p>
            <a
              :href="`${publicPath}pdf/Resolução Comentada da Prova de 1ª Fase - OMIF 2020.pdf`"
              target="_blank"
              rel="noopener"
              >Resolução Prova 1ª Fase OMIF 2020</a
            >
          </p>
          <br />
          <h3 class="text-success">Simulado da OMIF 2020:</h3>
          <p class="fw-bold">
            O simulado da OMIF 2020 será uma série de desafios semanais que
            versarão sobre os conteúdos da prova da 1ª Fase:
          </p>
          <p>
            <a
              :href="`${publicPath}pdf/Questão - Desafio 1.pdf`"
              target="_blank"
              rel="noopener"
              >Desafio 1
            </a>
          </p>
          <p>
            <a
              :href="`${publicPath}pdf/Questão - Desafio 1 - Com resolução.pdf`"
              target="_blank"
              rel="noopener"
              >Resolução do Desafio 1</a
            >
          </p>
          <p>
            <a
              :href="`${publicPath}pdf/Questão - Desafio 2.pdf`"
              target="_blank"
              rel="noopener"
              >Desafio 2</a
            >
          </p>
          <p>
            <a
              :href="`${publicPath}pdf/Questão - Desafio 2 - Com resolução.pdf`"
              target="_blank"
              rel="noopener"
              >Resolução do Desafio 2</a
            >
          </p>
          <p>
            <a
              :href="`${publicPath}pdf/Questão - Desafio 3.pdf`"
              target="_blank"
              rel="noopener"
              >Desafio 3</a
            >
          </p>
          <p>
            <a
              :href="`${publicPath}pdf/Questão - Desafio 3 - Com resolução.pdf`"
              target="_blank"
              rel="noopener"
              >Resolução do Desafio 3</a
            >
          </p>
          <p>
            <a
              :href="`${publicPath}pdf/Questão - Desafio 4.pdf`"
              target="_blank"
              rel="noopener"
              >Desafio 4</a
            >
          </p>
          <p>
            <a
              :href="`${publicPath}pdf/Questão - Desafio 4 - Com resolução.pdf`"
              target="_blank"
              rel="noopener"
              >Resolução do Desafio 4</a
            >
          </p>
          <p>
            <a
              :href="`${publicPath}pdf/Questão - Desafio 5.pdf`"
              target="_blank"
              rel="noopener"
              >Desafio 5</a
            >
          </p>
          <p>
            <a
              :href="`${publicPath}pdf/Questão - Desafio 5 - Com resolução.pdf`"
              target="_blank"
              rel="noopener"
              >Resolução do Desafio 5</a
            >
          </p>
          <p>
            <a href="pdf/Questão - Desafio 6.pdf" target="_blank" rel="noopener"
              >Desafio 6</a
            >
          </p>
          <p>
            <a
              href="pdf/Questão - Desafio 6 - Com resolução.pdf"
              target="_blank"
              rel="noopener"
              >Resolução do Desafio 6</a
            >
          </p>
          <br />

          <h3 class="text-success">Provas da OMIF 2019:</h3>
          <p>
            <a
              href="pdf/prova_omif_2019_1fase.pdf"
              target="_blank"
              rel="noopener"
              >Prova 1ª Fase OMIF 2019</a
            >
          </p>
          <div class="ratio ratio-16x9 mb-2">
            <iframe
              class="border shadow-sm"
              src="pdf/prova_omif_2019_1fase.pdf"
            ></iframe>
          </div>
          <p>
            <a href="pdf/OMIF-2019-Gabarito.pdf" target="_blank" rel="noopener"
              >Gabarito Prova 1ª Fase OMIF 2019</a
            >
          </p>
          <p>
            <a
              href="pdf/Resolução Prova da 1ª Fase - OMIF 2019.pdf"
              target="_blank"
              rel="noopener"
              >Resolução Prova 1ª Fase OMIF 2019</a
            >
          </p>
          <p>
            <a
              href="pdf/Caderno de Questões - 2ª Fase - OMIF - 2019 - versão Final.pdf"
              target="_blank"
              rel="noopener"
              >Prova 2ª Fase OMIF 2019</a
            >
          </p>
          <div class="ratio ratio-16x9 mb-2">
            <iframe
              class="border shadow-sm"
              src="pdf/Caderno de Questões - 2ª Fase - OMIF - 2019 - versão Final.pdf"
            ></iframe>
          </div>
          <p>
            <a
              href="pdf/Resolução - 2ª Fase - OMIF - 2019.pdf"
              target="_blank"
              rel="noopener"
              >Resolução Prova 2ª Fase OMIF 2019</a
            >
          </p>
          <br />
          <h3 class="text-success">Simulado da OMIF 2019:</h3>
          <p>
            <a href="pdf/SIMULADO OMIF 2019.pdf" target="_blank" rel="noopener"
              >Simulado 1ª Fase OMIF 2019</a
            >
          </p>
          <p>
            <a
              href="pdf/RESOLUÇÃO SIMULADO OMIF 2019.pdf"
              target="_blank"
              rel="noopener"
              >Resolução Simulado 1ª Fase OMIF 2019</a
            >
          </p>
          <br />

          <h3 class="text-success">Provas da OMIF 2018:</h3>
          <p>
            <a href="pdf/primeira_fase_2018.pdf" target="_blank" rel="noopener"
              >Prova 1ª Fase OMIF 2018</a
            >
          </p>
          <div class="ratio ratio-16x9 mb-2">
            <iframe
              class="border shadow-sm"
              src="pdf/primeira_fase_2018.pdf"
            ></iframe>
          </div>
          <p>
            <a
              href="pdf/gabarito_primeira_fase_2018.pdf"
              target="_blank"
              rel="noopener"
              >Gabarito Prova 1ª Fase OMIF 2018</a
            >
          </p>
          <p>
            <a
              href="pdf/Resolução_2018_OMIF_1_Fase.pdf"
              target="_blank"
              rel="noopener"
              >Resolução Prova 1ª Fase OMIF 2018</a
            >
          </p>
          <p>
            <a
              href="pdf/Caderno de Questões - 2ª Fase - OMIF - 2018.pdf"
              target="_blank"
              rel="noopener"
              >Prova 2ª Fase OMIF 2018</a
            >
          </p>
          <div class="ratio ratio-16x9 mb-2">
            <iframe
              class="border shadow-sm"
              src="pdf/Caderno de Questões - 2ª Fase - OMIF - 2018.pdf"
            ></iframe>
          </div>
          <p>
            <a
              href="pdf/Resolução - 2ª Fase - OMIF - 2018.pdf"
              target="_blank"
              rel="noopener"
              >Resolução Prova 2ª Fase OMIF 2018</a
            >
          </p>
          <br />
          <h3 class="text-success">Simulado da OMIF 2018:</h3>
          <p>
            <a
              href="pdf/prova_simulado_omif_2018.pdf"
              target="_blank"
              rel="noopener"
              >Simulado 1ª Fase OMIF 2018</a
            >
          </p>
          <p>
            <a
              href="pdf/gabarito_simulado_omif_2018.pdf"
              target="_blank"
              rel="noopener"
              >Gabarito Simulado 1ª Fase OMIF 2018</a
            >
          </p>
          <p>
            <a
              href="pdf/resolucao_simulado_omif_2018.pdf"
              target="_blank"
              rel="noopener"
              >Resolução Simulado 1ª Fase OMIF 2018</a
            >
          </p>
        </div>
      </section>
    </div>
  </main>
</template>


<script>
export default {
  name: "Estudos",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>
