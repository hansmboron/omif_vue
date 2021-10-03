<template>
  <div
    class="modal fade"
    :id="idmodal"
    tabindex="-1"
    aria-labelledby="videoModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="videoModalLabel">
            {{ name }}
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="ratio ratio-16x9 mb-2">
            <iframe
              class="border shadow-sm"
              :src="videoUrl"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
              allowfullscreen
            >
            </iframe>
          </div>
          <!-- <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "videoModal",
  props: {
    videoUrl: String,
    name: String,
    idmodal: String,
  },
};
</script>
