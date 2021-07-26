<template>
  <div
    id="toast1"
    class="toast"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="toast-header bg-info">
      <img
        src="favicon.svg"
        width="24"
        height="24"
        class="rounded bg-light me-2"
        alt="..."
      />
      <strong class="me-auto text-dark">Revista OMIF</strong>
      <!--        <small class="text-muted">11 mins ago</small>-->
      <button
        style="color: white"
        type="button"
        class="btn-close"
        data-bs-dismiss="toast"
        aria-label="Close"
      ></button>
    </div>
    <div class="toast-body">
      <router-link to="revista"
        ><img src="img/sub_pro.jpeg" height="320" width="320"
      /></router-link>
    </div>
  </div>
</template>

