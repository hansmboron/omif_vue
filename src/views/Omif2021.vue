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
                OMIF 2021
              </li>
            </ol>
          </nav>
        </div>
        <div class="card-body mb-3 mx-xl-5">
          <h1 class="card-title text-center mb-4">
            Área de Imprensa - OMIF 2021:
          </h1>
          <div class="w-100 text-center">
            <div class="ratio ratio-16x9 mb-2">
              <iframe
                src="https://www.youtube.com/embed/MQUfHXDp12s"
                title="YouTube video player"
                allow="accelerometer; clipboard-write;  picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="ratio ratio-16x9 mb-2">
              <iframe
                class="border shadow-sm"
                src="https://www.youtube.com/embed/QersCUYa6ss"
                title="YouTube video player"
                allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <figure class="figure cartaz" style="max-width: 800px">
              <a
                class="text-center"
                href="img/calendario_OMIF_2021.webp"
                target="_blank"
                ><img
                  class="figure-img img-fluid shadow-sm border rounded"
                  src="img/calendario_OMIF_2021.webp"
                  alt="Calendário OMIF 2021"
              /></a>
            </figure>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
