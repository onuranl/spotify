<template>
  <div class="playingbar">
    <div class="playingbar_info">
      <div class="playingbar_info-image">
        <div class="playingbar_info-image-icon">
          <i></i>
        </div>
        <img
          class="playingbar_info-image-cover"
          src="https://i.scdn.co/image/ab67616d0000485157455fc3c6866e29248d6e72"
          alt=""
        />
      </div>
      <div class="playingbar_info-name">
        <nuxt-link to="/" class="playingbar_info-name-track"
          ><span>Allahından bul</span>
        </nuxt-link>
        <nuxt-link to="/" class="playingbar_info-name-artist"
          ><span>Ezhel</span>
        </nuxt-link>
      </div>
      <div class="playingbar_info-like">
        <button>
          <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path
              d="M13.764 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253A4.05 4.05 0 00.974 5.61c0 1.089.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195A4.052 4.052 0 0014.96 5.61a4.057 4.057 0 00-1.196-2.883zm-.722 5.098L8.58 13.048c-.307.36-.921.36-1.228 0L2.864 7.797a3.072 3.072 0 01-.905-2.187c0-.826.321-1.603.905-2.187a3.091 3.091 0 012.191-.913 3.05 3.05 0 011.957.709c.041.036.408.351.954.351.531 0 .906-.31.94-.34a3.075 3.075 0 014.161.192 3.1 3.1 0 01-.025 4.403z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="playingbar_player-controls">
      <div class="playingbar_player-controls_buttons">
        <div class="playingbar_player-controls_left">
          <button class="playingbar_player-controls_button">
            <svg role="img" height="16" width="16" viewBox="0 0 16 16">
              <path
                d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z"
              ></path>
            </svg>
          </button>
          <button class="playingbar_player-controls_button">
            <svg role="img" height="16" width="16" viewBox="0 0 16 16">
              <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"></path>
            </svg>
          </button>
        </div>
        <button class="playingbar_player-controls_playpause">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path fill="none" d="M0 0h16v16H0z"></path>
            <path d="M3 2h3v12H3zm7 0h3v12h-3z"></path>
          </svg>
        </button>
        <div class="playingbar_player-controls_right">
          <button class="playingbar_player-controls_button">
            <svg role="img" height="16" width="16" viewBox="0 0 16 16">
              <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"></path>
            </svg>
          </button>
          <button class="playingbar_player-controls_button">
            <svg role="img" height="16" width="16" viewBox="0 0 16 16">
              <path
                d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="playingbar_player-controls_playback-bar">
        <div class="playingbar_player-controls_playback-bar_time_left">
          0:20
        </div>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            style="width: 25%"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div class="playingbar_player-controls_playback-bar_time_right">
          3:20
        </div>
      </div>
    </div>
    <div class="playingbar_extra-controls">
      <div class="playingbar_extra-controls_content">
        <button class="playingbar_extra-controls_content_button">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path
              d="M8.5 1A4.505 4.505 0 004 5.5c0 .731.191 1.411.502 2.022L1.99 13.163a1.307 1.307 0 00.541 1.666l.605.349a1.307 1.307 0 001.649-.283L9.009 9.95C11.248 9.692 13 7.807 13 5.5 13 3.019 10.981 1 8.5 1zM4.023 14.245a.307.307 0 01-.388.066l-.605-.349a.309.309 0 01-.128-.393l2.26-5.078A4.476 4.476 0 007.715 9.92l-3.692 4.325zM8.5 9C6.57 9 5 7.43 5 5.5S6.57 2 8.5 2 12 3.57 12 5.5 10.429 9 8.5 9z"
            ></path>
          </svg>
        </button>
        <button class="playingbar_extra-controls_content_button">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path
              d="M2 2v5l4.33-2.5L2 2zm0 12h14v-1H2v1zm0-4h14V9H2v1zm7-5v1h7V5H9z"
            ></path>
          </svg>
        </button>
        <button class="playingbar_extra-controls_content_button">
          <svg
            role="img"
            height="16"
            width="16"
            aria-label="Bir cihaza bağlan"
            viewBox="0 0 16 16"
          >
            <path
              d="M3.001 12h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1h-10c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0-9h10v8h-10V3zm12.5 11H.5c-.275 0-.5.225-.5.5s.225.5.5.5h15.001c.275 0 .5-.225.5-.5s-.225-.5-.5-.5z"
            ></path>
            <path
              d="M3.001 12h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1h-10c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0-9h10v8h-10V3zm12.5 11H.5c-.275 0-.5.225-.5.5s.225.5.5.5h15.001c.275 0 .5-.225.5-.5s-.225-.5-.5-.5z"
            ></path>
          </svg>
        </button>
        <div class="playingbar_extra-controls_content_volume-bar">
          <button class="playingbar_extra-controls_content_button">
            <svg
              role="presentation"
              height="16"
              width="16"
              aria-label="Ses seviyesi yüksek"
              id="volume-icon"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.945 1.379l-.652.763c1.577 1.462 2.57 3.544 2.57 5.858s-.994 4.396-2.57 5.858l.651.763a8.966 8.966 0 00.001-13.242zm-2.272 2.66l-.651.763a4.484 4.484 0 01-.001 6.397l.651.763c1.04-1 1.691-2.404 1.691-3.961s-.65-2.962-1.69-3.962zM0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732z"
              ></path>
            </svg>
          </button>
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              style="width: 25%"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <button class="playingbar_extra-controls_content_button">
          <svg role="img" height="16" width="16" viewBox="0 0 16 16">
            <path
              d="M6.064 10.229l-2.418 2.418L2 11v4h4l-1.647-1.646 2.418-2.418-.707-.707zM11 2l1.647 1.647-2.418 2.418.707.707 2.418-2.418L15 6V2h-4z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
