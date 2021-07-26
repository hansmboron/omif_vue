<template>
  <div class="card my-3">
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          class="active"
          type="button"
          title="slide 1"
          data-bs-slide-to="0"
          data-bs-target="#carouselExampleCaptions"
        ></button>
        <button
          type="button"
          title="slide 2"
          data-bs-slide-to="1"
          data-bs-target="#carouselExampleCaptions"
        ></button>
        <!-- <button aria-label="Slide 3" title="slide 3" data-bs-slide-to="2" data-bs-target="#carouselExampleCaptions"
                        type="button"></button> -->
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="9000">
          <img
            class="d-block w-100 bg-dark"
            src="img/OMIF_2021.gif"
            alt="OMIF 2021"
            height="350"
          />
          <div class="carousel-caption">
            <!-- <h1 class="fw-bolder text-danger" style="text-shadow: 2px 2px #0F701F;">A OMIF 2021 está
                                chegando!!!</h1>
                            <p class="fw-bold"
                                style="font-size: x-large; font-family: 'Nunito', sans-serif; text-shadow: 1px 1px #000;">
                                Live de lançamento (14/06/2021 às 19h):(<a href="https://youtu.be/QersCUYa6ss"
                                    target="_blank"><strong>YouTube</strong></a>)</p> -->
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="9000">
          <router-link to="revista"
            ><img
              class="d-block w-100 bg-dark"
              src="img/sub_pro.webp"
              alt="Revista OMIF submissão prorrogada"
              height="350"
          /></router-link>
        </div>
        <!-- <div class="carousel-item w-100">
                        <img alt="..." height="350" class="mx-auto d-block"
                            src="assets/img/banners/live_lancamento.png">
                        <div class="carousel-caption">
                            <h4 class="text-light"
                                style="font-family: 'Nunito', sans-serif; text-shadow: 1px 1px #000;"><a
                                    style="color: white;" href="https://youtu.be/QersCUYa6ss" target="_blank">Acessar
                                    Link</a></h4>
                        </div>
                    </div> -->

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-slide="prev"
          data-bs-target="#carouselExampleCaptions"
        >
          <span class="visually-hidden">Anterior</span
          ><svg
            height="30"
            width="30"
            fill="none"
            stroke="#00ff00"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-slide="next"
          data-bs-target="#carouselExampleCaptions"
        >
          <span class="visually-hidden">Próximo</span
          ><svg
            height="30"
            width="30"
            fill="none"
            stroke="#00ff00"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>