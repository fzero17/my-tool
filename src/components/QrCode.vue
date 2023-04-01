<script setup>
  import {ref} from 'vue'
  import VueQrcode from 'vue-qrcode'

  const qrCodeRef = ref()
  const qrCodeString = ref('http://wangshu.xyz/my-tool')
  const dataUrl = ref()

  const onDataUrlChange = (base64Url) => {
    dataUrl.value = base64Url
  }

  const title = ref('')
  const subTitle = ref('')

</script>

<template>
  <div class="flex w-full">
    <div class="flex flex-col p-2">
      <vue-qrcode ref="qrCodeRef"
                  class="inline-block"
                  :width="400"
                  :value="qrCodeString"
                  @change="onDataUrlChange"
      />
      <span>{{qrCodeString}}</span>
    </div>
    <div class="flex flex-col w-1/2 pt-5">
      <label class="font-light" for="text">文本</label>
      <textarea id="text" class="border border-b-gray-300" v-model="qrCodeString"/>
      <label for="title" class="font-light">一级标题</label>
      <input id="title" class="border border-b-gray-300" v-model="title"/>
      <label for="subTitle" class="font-light">二级标题</label>
      <input id="subTitle" class="border border-b-gray-300" v-model="subTitle"/>
    </div>
  </div>
</template>


<style scoped>
</style>
