<template>
  <div :class="$style.stage" ref="stage">
    <canvas :class="$style.canvas" ref="canvas"></canvas>

    <vue-grid>
      <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <vue-headline level="1">FidoFilter</vue-headline>
          <div :class="$style.subtitle">
            <span :class="$style.emphasized">Filter out the noise.</span>
            <span>Don't waste time with pictures of shitty things that aren't puppies.</span>
          </div>
        </vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import { CircleAnimation } from '../../../shared/animations/CircleAnimation';
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueIconGithub from '@components/icons/VueIconGithub/VueIconGithub.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  components: { VueHeadline, VueIconGithub, VueGridItem, VueGridRow, VueGrid },
  data() {
    return {};
  },
  computed: {},
  methods: {
    handleResize() {
      const canvas: HTMLCanvasElement = this.$refs.canvas;
      const stage: HTMLElement = this.$refs.stage;
      const stageRect: ClientRect =
        stage.getClientRects().length > 0
          ? stage.getClientRects().item(0)
          : ({
              width: 0,
              height: 0,
            } as ClientRect);

      canvas.width = stageRect.width;
      canvas.height = stageRect.height;
    },
  },
  beforeMount() {
    window.addEventListener('resize', this.handleResize);
  },
  mounted() {
    this.handleResize();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.stage {
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-shadow: 0 0 5px rgba(15, 15, 15, 0.4);
  padding-top: $space-84;
  margin-top: 3rem;

  .subtitle {
    font-weight: $font-weight-light;
    font-size: 2.5rem;
    font-style: italic;
    margin: 5rem auto 2.5rem auto;
    .emphasized {
      font-weight: $font-weight-regular;
    }
  }

  img {
    max-width: 12.8rem;
  }

  h1 {
    margin-bottom: $space-32;
    font-weight: $font-weight-bold;
  }

  @include mediaMin(tabletPortrait) {
    min-height: 50vh;
    img {
      max-width: 25.6rem;
    }
  }
}

.canvas {
  min-height: 100vh;
  width: 100%;
  position: absolute;
  background-color: transparent;
  left: 0;
  top: 0;

  @include mediaMin(tabletPortrait) {
    min-height: 50vh;
  }
}

.github {
  font-size: $font-size-h1;
  display: inline-block;
  background: $brand-bg-color;
  transition: $button-transition;
  transition-property: box-shadow, background-color;
  color: $brand-link-color;

  &:hover {
    box-shadow: $button-active-shadow;
  }

  i {
    height: $font-size-h1;
    width: $font-size-h1;
  }
}
</style>
