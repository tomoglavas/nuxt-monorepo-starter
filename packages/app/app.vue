<script setup lang="ts">
import type { UiTheMessage } from '#components'
import { baseUrl } from '@nuxt-monorepo/api'

const theMessage = ref<InstanceType<typeof UiTheMessage> | null>()

onMounted(() => {
  console.warn('theMessage', theMessage.value)
})

const config = useRuntimeConfig()
</script>

<template>
  <div>
    {{ config.public.apiBase }}
    <UiTheMessage ref="theMessage" />
    api/baseUrl: {{ baseUrl }}

    <!-- overrided by 'app' unocss config -->
    <div class="bg-app">
      red bg
    </div>

    <!-- from 'ui' unocss config -->
    <div class="bg-ui">
      green bg
    </div>
  </div>
</template>
