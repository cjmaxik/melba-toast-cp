<template>
  <div class="flex flex-center q-gutter-x-sm">
    <q-btn
      v-for="scene in toaster.obs.scenes"
      :key="scene"
      color="primary"
      :label="scene"
      no-caps
      size="lg"
    />
  </div>
</template>

<script setup>
import { useToasterStore } from 'src/stores/ToasterStore'

const toaster = useToasterStore()
</script>
