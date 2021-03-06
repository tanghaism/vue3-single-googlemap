<template>
  <div>
    <div ref="infoWindowRef">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import { ref, toRefs, inject, toRaw, watch, onMounted, onUnmounted } from 'vue'
  import { infoWindowEvents } from '../utils/events'
  export default {
    name: 'InfoWindow',
    props: {
      options: {
        default: () => ({}),
        type: Object
      },
      show: {
        default: false,
        type: Boolean
      },
      index: {
        default: 0,
        type: Number
      }
    },
    setup (props, context) {
      const { options, show, index } = toRefs(props)
      const $marker = inject('$marker')
      const newMap = inject('newMap');
      const map = inject('map', ref(null));
      const api = inject('api', ref(null));
      const marker = ref(null)
      const infoWindow = ref(null)
      let _component = null
      const infoWindowRef = ref(null)

      onMounted(() => {
        createInfoWindow('onMounted')
      })

      onUnmounted(() => {
        closeInfoWindow()
        if (infoWindow.value) {
          api.value && api.value.event.clearInstanceListeners(_component)
          infoWindow.value.setMap(null)
        }
      })

      watch(() => $marker.marker, (_, __, onInvalidate) => {
        createInfoWindow('watch')
        onInvalidate(() => {
          closeInfoWindow()
        })
      })

      watch(() => show.value, (newVal, oldVal) => {
        if (newVal) {
          openInfoWindow()
        } else {
          closeInfoWindow()
        }
      })

      const createInfoWindow = (trigger) => {
        const _instance = newMap ? map.value : window[window.$simpleMapInstanceKey];
        const _api = newMap ? api.value : window.$simpleMapApi;
        if (_instance && _api && $marker.marker) {
          closeInfoWindow()
          marker.value = toRaw($marker.marker)
          const value = Object.assign(Object.assign({}, options.value, { content: infoWindowRef.value, map: map.value }))
          infoWindow.value = _component = new _api.InfoWindow(value)
          infoWindowEvents.forEach(event => {
            _component && _component.addListener(event, (el) => context.emit(event, el, infoWindow.value, index.value))
          })
          if (show.value) {
            openInfoWindow()
          }
        }
      }

      const openInfoWindow = () => {
        if (infoWindow?.value?.open) {
          infoWindow.value.open(map.value, toRaw($marker.marker.value))
        }
      }

      const closeInfoWindow = () => {
        infoWindow.value && infoWindow.value.close();
        context.emit('close')
      }

      return {
        infoWindow,
        infoWindowRef,
        openInfoWindow,
        closeInfoWindow
      }
    }
  }
</script>

<style scoped>

</style>
