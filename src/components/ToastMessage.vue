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
      <strong class="me-auto text-dark"
        >Live 30/08 19h(Definir Lembrete)</strong
      >
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
      <a href="https://www.youtube.com/watch?v=MQUfHXDp12s" target="_blank"
        ><img
          src="img/live_30_08.jpeg"
          alt="Live OMIF 2021 - Como será a OMIF em 2021?"
          height="320"
          width="320"
      /></a>
    </div>
  </div>
</template>

