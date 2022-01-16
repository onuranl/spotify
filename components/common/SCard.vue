<template>
  <div>
    <div v-if="!horizontal" class="card" style="width: 18rem">
      <div class="card-content">
        <div class="card-content_top">
          <img
            class="card-img-top"
            src="https://dailymix-images.scdn.co/v2/img/6f0da41419b31d9d2ba55d2df212f59ad0668118/1/tr/default"
            alt="Card image cap"
          />
          <div v-if="!podcast" class="card-content_top_play-button">
            <button>
              <svg
                height="16"
                role="img"
                width="16"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <polygon
                  points="21.57 12 5.98 3 5.98 21 21.57 12"
                  fill="currentColor"
                ></polygon>
              </svg>
            </button>
          </div>
        </div>
        <div class="card-body">
          <div class="card-title">Mertoglu</div>
          <div class="card-text">Onur Anıl</div>
        </div>
      </div>
    </div>
    <div v-else class="card-horizontal">
      <div class="card-horizontal_image">
        <div class="card-horizontal_image-section">
          <img
            src="https://i.scdn.co/image/ab67706c0000da8463990d820035dcc6b9c85ac7"
            alt=""
          />
        </div>
      </div>
      <div class="card-horizontal_content">
        <p class="m-0">rastafaray</p>
        <div class="card-horizontal_content_play-button">
          <button>
            <svg
              height="16"
              role="img"
              width="16"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <polygon
                points="21.57 12 5.98 3 5.98 21 21.57 12"
                fill="currentColor"
              ></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    horizontal: {
      type: Boolean,
      default: false,
    },
    podcast: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style></style>
