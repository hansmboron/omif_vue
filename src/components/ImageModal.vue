<template>
  <div
    class="modal fade"
    id="calendarModal"
    tabindex="-1"
    aria-labelledby="calendarModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="calendarModalLabel">
            Calendário OMIF 2021
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <figure class="figure cartaz" style="max-width: 780px">
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
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>