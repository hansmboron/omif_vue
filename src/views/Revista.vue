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
              <li aria-current="page" class="breadcrumb-item small">Revista</li>
            </ol>
          </nav>
        </div>
        <div class="card-body mb-3 mx-xl-5">
          <!--        revista-->
          <nav class="navbar rounded-top navbar-dark px-3" id="navRev">
            <a
              class="navbar-brand"
              :href="`${publicPath}img/revista.svg`"
              target="_blank"
              ><img
                alt="Logo Revista Omif"
                height="40"
                src="../assets/img/revista_white.svg"
                width="150"
            /></a>

            <ul class="nav">
              <li class="nav-item btn-outline-success">
                <a class="nav-link" href="#apre">Apresentação</a>
              </li>
              <li class="nav-item btn-outline-success">
                <a class="nav-link" href="#exp">Expediente</a>
              </li>
              <li class="nav-item btn-outline-success">
                <a class="nav-link" href="#norm">Normas para Publicação</a>
              </li>
              <li class="nav-item btn-outline-success">
                <a class="nav-link" href="#atual">Edição Atual</a>
              </li>
              <li class="nav-item btn-outline-success">
                <a class="nav-link" href="#ante">Edições Anteriores</a>
              </li>
            </ul>
          </nav>
          <div
            class="bg-light pb-4"
            data-bs-offset="0"
            data-bs-spy="scroll"
            data-bs-target="#navRev"
            id="revista"
            tabindex="0"
          >
            <section class="px-2 px-sm-3 px-md-4 px-lg-5 text-justify">
              <h3 class="pt-5" id="apre">Apresentação</h3>
              <p style="font-size: large">
                A <strong>Revista OMIF</strong> é uma ação da Comissão
                Organizadora da Olimpíada de Matemática das Instituições
                Federais (OMIF), que pretende estimular e divulgar as ações de
                Ensino, Pesquisa e Extensão vinculadas à OMIF. A publicação é
                anual e/ou semestral com artigos ligados às atividades
                desenvolvidas na Rede Federal de Educação Profissional,
                Científica e Tecnológica Brasileira (Rede Federal).
              </p>

              <h3 class="pt-5" id="exp">Expediente</h3>
              <h4>Equipe Editorial</h4>
              <h5>Editor Executivo</h5>
              <ul>
                <li>Laynara dos Reis Santos Zontini – IFPR - campus Irati</li>
              </ul>
              <h5>Editor Assistente</h5>
              <ul>
                <li>
                  Renato Machado Pereira - IFSULDEMINAS – campus Muzambinho
                </li>
              </ul>
              <h5>Editor Científico</h5>
              <ul>
                <li>
                  Renivaldo Sodré de Sena - IFCE - campus Tabuleiro do Norte
                </li>
              </ul>
              <h5>Diagramação</h5>
              <ul>
                <li>
                  Tatiana de Carvalho Duarte - IFSULDEMINAS - campus Muzambinho
                </li>
                <li>Diego Dutra Zontini – IFPR campus Irati</li>
              </ul>
              <h5>Comitê Editorial</h5>
              <ul>
                <li>
                  Felipe Mascagna Bittencourt Lima - IFSP – campus São João da
                  Boa Vista
                </li>
                <li>Laynara dos Reis Santos Zontini – IFPR - campus Irati</li>
                <li>
                  Marineide Almeida Rocha - IFNMG - campus Avançado Janaúba
                </li>
                <li>Maurino Atanásio - IFMT - campus Cuiabá Bela Vista</li>
                <li>
                  Renato Machado Pereira - IFSULDEMINAS – campus Muzambinho
                </li>
                <li>
                  Renivaldo Sodré de Sena - IFCE - campus Tabuleiro do Norte
                </li>
                <li>Tatiane Tagino Comin - IFBaiano - campus Serrinha</li>
              </ul>
              <br />
              <p>Pareceristas (a definir)</p>

              <h3 class="pt-5" id="norm">Normas para Publicação</h3>
              <span class="pt-3"
                >Clique
                <a
                  :href="`${publicPath}pdf/EDITAL DE CHAMADA Revista OMIF 2021.pdf`"
                  rel="noopener"
                  target="_blank"
                  >aqui</a
                >
                para acessar o Edital da Chamada para a Revista OMIF 2021.</span
              ><br />
              <a
                class="btn btn-success rounded-pill shadow mb-3 px-3"
                :href="`${publicPath}pdf/EDITAL DE CHAMADA Revista OMIF 2021.pdf`"
                rel="noopener"
                target="_blank"
                >Edital de Chamada Revista OMIF (.pdf)
                <svg
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 20 20"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>

              <p>
                O artigo deverá conter no mínimo 2.000 (dois mil) e no máximo
                8.000 (oito mil) caracteres sem contar os espaços (título, nome
                do/s autor/es, palavras-chave e referências não são computados).
              </p>
              <p>
                O texto deverá ser escrito em Língua Portuguesa, obedecendo às
                regras ortográficas e gramaticais vigentes, em fonte Arial 12,
                com espaçamento 1,5 entre linhas, seguindo template
                disponibilizado abaixo.
              </p>
              <a
                class="btn btn-success rounded-pill shadow mb-2 px-3"
                download="pdf/Template_Relato_de_Exp_e_Ref_Teorica.docx"
                :href="`${publicPath}pdf/Template_Relato_de_Exp_e_Ref_Teorica.docx`"
                rel="noopener noreferrer"
                target="_blank"
                >Template Relato de Experiência e Reflexão Teórica (.docx)
                <svg
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 20 20"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <br />
              <a
                class="btn btn-success rounded-pill shadow mb-2 px-3"
                download="pdf/Template Resolução de questões.docx"
                :href="`${publicPath}pdf/Template Resolução de questões.docx`"
                rel="noopener noreferrer"
                target="_blank"
                >Template Resolução de questões (.docx)
                <svg
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 20 20"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <br />
              <a
                class="btn btn-success rounded-pill shadow mb-3 px-3"
                download="pdf/Template OMIF.tex"
                :href="`${publicPath}pdf/Template OMIF.tex`"
                rel="noopener noreferrer"
                target="_blank"
                >Template (.tex)
                <svg
                  fill="currentColor"
                  height="24"
                  viewBox="0 0 20 20"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>

              <p>
                Serão publicados na Revista OMIF artigos com os seguintes
                formatos e conteúdos:
              </p>
              <ul>
                <li class="fw-bold pt-2">Formato Relato de Experiência:</li>
              </ul>
              <ol type="a">
                <li>
                  Experiências relacionadas à participação ou preparação dos
                  estudantes para a OMIF.
                </li>
                <li>
                  Projetos/ações de Ensino, Pesquisa ou Extensão desenvolvidos
                  na Rede Federal que estejam vinculados à OMIF.
                </li>
                <li>
                  Projeto/ações de incentivo à participação feminina na OMIF.
                </li>
                <li>
                  Projeto/ações de incentivo à participação do público da
                  Educação Especial e/ou com necessidades específicas na OMIF.
                </li>
                <li>
                  Eventos organizados pelos Campi da Rede Federal, em
                  decorrência da participação na OMIF.
                </li>
              </ol>
              <ul>
                <li class="fw-bold pt-2">Formato Resolução de Questão:</li>
              </ul>
              <ol type="a">
                <li>
                  Resolução dialogada de questões da OMIF (qualquer edição) que
                  evidencie o potencial matemático e educacional da prova.
                </li>
              </ol>
              <ul>
                <li class="fw-bold pt-2">Formato Reflexão Teórica:</li>
              </ul>
              <ol type="a">
                <li>
                  Reflexão teórica sobre as contribuições da OMIF para a
                  Matemática.
                </li>
                <li>
                  Reflexão teórica sobre as contribuições da OMIF para a
                  Educação Matemática.
                </li>
                <li>
                  Reflexão teórica sobre as contribuições da OMIF para o Ensino
                  de Matemática.
                </li>
              </ol>

              <ul>
                <li class="fw-bold">Templates para publicação</li>
              </ul>
              <ol type="a">
                <li>Formato Relato de Experiência e Reflexão Teórica (.doc)</li>
                <li>Formato Resolução de Questão (.doc e .tex)</li>
              </ol>
              <p class="fw-bold pt-3">Submissão</p>
              <p>
                Para submeter um artigo para a Revista OMIF acesse
                <a
                  href="https://forms.gle/Z89BgFRXP5NLZ5A4A"
                  rel="noopener"
                  target="_blank"
                  >o formulário</a
                >.<br />O prazo para submissão encerra às 23h59 do
                <strong>dia 19 de setembro de 2021</strong>.<br />Link do
                formulário:
                <a
                  class="btn btn-success rounded-pill shadow mb-3 px-3"
                  href="https://forms.gle/Z89BgFRXP5NLZ5A4A"
                  rel="noopener"
                  target="_blank"
                  >Link do formulário
                  <svg
                    fill="currentColor"
                    height="24"
                    viewBox="0 0 20 20"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"
                    ></path>
                    <path
                      d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                    ></path>
                  </svg>
                </a>
              </p>

              <h3 class="pt-5" id="atual">Edição Atual</h3>
              <p class="text-danger">Em desenvolvimento...</p>

              <h3 class="pt-5" id="ante">Edições Anteriores</h3>
              <p class="text-danger">Em desenvolvimento...</p>
            </section>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "Revista",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>


<style>
#navRev {
  background: linear-gradient(90deg, #0c4128, forestgreen);
}

#navRev a {
  color: #c1d6cc;
}

#navRev a:hover {
  color: white;
  font-weight: bold;
}

#revista ul li {
  list-style: square;
}

#revista ol {
  list-style-type: lower-alpha;
}

#revista h5 {
  margin-top: 15px;
  color: #343a40;
}

#revista h3[id] {
  /*padding-top: 60px;*/
  /*margin-top: -40px;*/
  font-family: "Nunito", sans-serif;
  color: var(--primary);
  font-weight: 800;
  text-align: center;
  text-decoration: underline;
  margin-top: 40px;
}

#revista h3[id]:first-child {
  margin-top: 0;
}
</style>