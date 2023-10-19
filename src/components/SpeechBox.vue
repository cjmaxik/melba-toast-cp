<template>
  <q-card class="speech-box">
    <q-card-section class="bg-primary text-white">
      <div class="text-h6 text-center">
        {{ toaster.currentSpeech }}
      </div>
    </q-card-section>

    <q-card-actions align="around">
      <q-btn flat>
        Cancel speech
      </q-btn>

      <q-btn flat>
        Generate
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { useToasterStore } from 'src/stores/ToasterStore'

const toaster = useToasterStore()
</script>
