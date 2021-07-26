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
                Artes Visuais
              </li>
            </ol>
          </nav>
        </div>
        <div class="card-body mb-3 mx-xl-5">
          <h2 class="card-title text-center mb-5">
            Resultado do Edital - Concurso Arte Visual OMIF
          </h2>
          <h3 class="text-success text-decoration-underline">1º LUGAR:</h3>
          <p>Axel Rammon Farias da Silva - IFRN - Campus João Câmara</p>
          <figure class="figure shadow cartaz">
            <img
              alt="Arte Axel Rammon"
              class="figure-img img-fluid"
              src="../assets/img/omif.svg"
            />
          </figure>
          <p>Júlio Cézar Batista Ferreira - IFSULDEMINAS - Campus Muzambinho</p>
          <video controls class="figure shadow w-100">
            <source src="../assets/vid/julio.webm" type="video/webm" />
            <source src="../assets/vid/julio.mp4" type="video/mp4" />
          </video>
          <br />
          <br />
          <h3 class="text-success text-decoration-underline my-3">2º LUGAR:</h3>
          <p>Yara Bacha Castro - IFSULDEMINAS - Campus Machado</p>
          <figure class="figure shadow cartaz">
            <img
              alt="Arte Yara Castro"
              class="figure-img img-fluid"
              src="../assets/img/artes/Yara.webp"
            />
          </figure>
          <p>Daniel Cardoso Alves - IFSULDEMINAS - Campus Muzambinho</p>
          <figure class="figure shadow cartaz">
            <img
              alt="Arte Daniel Cardoso"
              class="figure-img img-fluid"
              src="../assets/img/artes/Daniel-Cardoso.png"
            />
          </figure>
          <br />
          <br />
          <h3 class="text-success text-decoration-underline my-3">3º Lugar</h3>
          <p>Júlia Eulália L. de Oliveira - IFAL - Campus Viçosa</p>
          <figure class="figure shadow cartaz">
            <img
              alt="Arte Julia Oliveira"
              class="figure-img img-fluid"
              src="../assets/img/artes/Jlia-Oliveira.png"
            />
          </figure>
          <p>João Victor Duarte - IFSULDEMINAS - Campus Muzambinho</p>
          <figure class="figure shadow cartaz">
            <img
              alt="Arte João Duarte"
              class="figure-img img-fluid"
              src="../assets/img/artes/Joo-Victor-Duarte.webp"
            />
          </figure>
        </div>
      </section>
    </div>
  </main>
</template>