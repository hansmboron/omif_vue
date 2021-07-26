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
              <li aria-current="page" class="breadcrumb-item small text-dark">
                História
              </li>
            </ol>
          </nav>
        </div>
        <div class="card-body mb-3 mx-xl-5">
          <h1 class="card-title text-center mb-4">História</h1>
          <audio class="w-100" controls>
            <source src="../assets/audios/historia.mp3" type="audio/mpeg" />
            <source
              src="../assets/audios/historia.ogg"
              type="audio/ogg; codec=opus"
            />
          </audio>
          <p>
            A ideia de criar uma olimpíada de matemática da Rede Federal de
            Educação Profissional e Tecnológica (Rede Federal) teve como
            precursor um projeto de extensão coordenado pelos professores Renato
            Machado Pereira e Manuel Messias da Silva, que visava desenvolver
            aulas, materiais didáticos, monitorias e atendimentos online para as
            olimpíadas OMU, OBMEP, Canguru de Matemática, Matemática sem
            Fronteiras, OMM e OBM.
          </p>
          <p>
            Entretanto, a ideia ganhou forma com a participação do IFSULDEMINAS
            e do IFRN na 4th International Youth Convention on Commerce &
            Economics (IYCCE), que aconteceu na Índia em outubro de 2017.
            Durante a missão, o professor Renato Machado Pereira liderou a
            equipe do Campus Muzambinho, do IFSULDEMINAS, composta pelos alunos
            André Rodrigues Gomes Silva, Bruno Tadeu Dival Procópio, Haislan
            Wellington Gouveia dos Santos e João Pedro do Nascimento Silva. O
            Professor Marcelo Henrique Carneiro Camilo liderou a equipe do
            Campus Natal Central, do IFRN, composta pelos alunos Arthur Henrique
            Craveiro Costa, Luís Gustavo Fontoura dos Santos, Nalbert Pietro
            Martins da Costa e Nicolas Kevin Borges de Souza.
          </p>
          <p>
            Ao observarem a estrutura do evento, os professores viram que a Rede
            Federal tinha condições de realizar sua própria olimpíada, levando
            em conta o alto nível de seus professores, infraestrutura
            institucional e visão de educação. Assim, nasceu a parceria entre o
            IFSULDEMINAS e o IFRN, com o objetivo de fundar a OMIF.
          </p>
          <p>
            O projeto se desenvolve no âmbito da parceria entre IFSULDEMINAS –
            Campus Muzambinho; IFRN – Campus Natal-Central e IFSP – Campus São
            João da Boa Vista (Comissão e Colaboradores). A comissão
            organizadora objetiva fazer a OMIF como projeto comunitário da Rede
            Federal.
          </p>
          <br />
          <h4 class="mb-3">Estrutura e organização</h4>
          <p>
            As provas são elaboradas por professores da Rede Federal brasileira,
            os quais fomentam um banco de questões. Na 1ª fase, as provas das
            instituições participantes brasileiras são aplicadas em cada campus
            da Rede Federal, inscrito na OMIF, e são coordenadas por um
            professor-coordenador, cadastrado como responsável pelo campus.
          </p>
          <p>
            A 2ª fase será itinerante, sendo eleito a cada ano, o local da
            próxima edição da OMIF.
          </p>
          <p>
            Em 2018, o campus Muzambinho, do IFSULDEMINAS, foi a sede da OMIF,
            onde ocorreram a aplicação das provas da segunda etapa, a cerimônia
            de premiação e um evento com palestras, dinâmicas e
            confraternizações (<a
              :href="`${publicPath}pdf/AF_older_olimpiadas.pdf`"
              rel="noopener"
              target="_blank"
              >veja o folder</a
            >
            ). Mais informações acesse:
            <router-link to="/Omif2018">OMIF 2018 2ª Fase</router-link>
          </p>
          <p>
            Participaram da primeira OMIF, 150 campi da rede federal brasileira,
            totalizando mais de 12300 alunos que fizeram a prova da 1ª fase.
            Criou-se um critério de seleção e foram selecionados pelo menos um
            aluno de cada campus participante para a 2ª fase. Desse modo, foram
            convidados 347 alunos para o evento, dos quais estiveram presentes
            255 alunos e mais 130 professores.
          </p>
          <p>
            Em 2019, a 2ª fase da OMIF foi realizada no IFFluminense - Campus
            Campos Centro nos dias 20, 21 e 22 de setembro.
          </p>
          <p>
            Mais informações acesse:
            <router-link to="/Omif2019">OMIF 2019 2ª Fase</router-link>
          </p>
          <p>
            Participaram da segunda OMIF, 230 campi da Rede Federal, totalizando
            mais de 16300 alunos que fizeram a prova da 1ª fase. Criou-se um
            critério de seleção e foram selecionados pelo menos um aluno de cada
            campus participante para a 2ª fase. Desse modo, foram convidados 320
            alunos para o evento, dos quais estiveram presentes 229 alunos e
            mais 92 professores. As medalhas de ouro, prata, bronze e menção
            honrosa foram compradas através do fomento da Chamada Pública para
            Competições Regionais – 2019 IMPA - OBM (Instituto de Matemática
            Pura e Aplicada – Olimpíada Brasileira de Matemática).
          </p>
          <h4 class="mb-3">Agradecimentos</h4>
          <p>
            Agradecemos o apoio dos técnicos, professores e alunos das
            instituições parceiras, em particular, da direção do IFSULDEMINAS,
            campus Muzambinho, e da direção do IFFluminense, campus Campos
            Centro, sempre disponíveis para tornar a OMIF uma realidade exitosa.
          </p>
          <p>
            Destacamos a grande contribuição de Haislan Wellington Gouveia dos
            Santos, aluno do Campus Muzambinho, IFSULDEMINAS, na criação e
            manutenção do site da OMIF com dedicação e cuidado.
          </p>
          <p>
            A Comissão Organizadora da OMIF deseja a todos os participantes um
            profícuo aprendizado e crescimento, a partir de tudo o que a
            matemática pode proporcionar ao mundo!
          </p>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "Historia",
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>