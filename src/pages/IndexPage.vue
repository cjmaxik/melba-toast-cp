<template>
  <q-page class="flex q-pt-lg q-px-sm">
    <div class="full-width row wrap justify-center items-stretch content-stretch">
      <div class="col-grow">
        <SpeechBox />
      </div>

      <div class="col-grow">
        <ObsControls />
      </div>

      <div class="col-grow">
        <ChatBox />
      </div>
    </div>
  </q-page>
</template>

<script setup>

import SpeechBox from 'components/SpeechBox.vue'
import ObsControls from 'components/ObsControls.vue'
import ChatBox from 'components/ChatBox.vue'

</script>
