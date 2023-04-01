<script setup>
import {ref} from 'vue'
import VueQrcode from 'vue-qrcode'

const qrCodeRef = ref()
const qrCodeString = ref('http://wangshu.xyz/my-tool')
const dataUrl = ref()
const canvasRef = ref()

const onDataUrlChange = (base64Url) => {
  dataUrl.value = base64Url
  // 绘制canvas
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  const img = new Image()
  img.src = base64Url
  img.onload = () => {
    // 获取图片宽高
    const {width, height} = img
    console.log(width, height)
    // 设置canvas宽高
    canvas.width = 320
    canvas.height = 400
    // 绘制图片
    ctx.drawImage(img, 0, 0, width, height)
    // 绘制文字
    ctx.font = 'bold 14px Arial'
    ctx.fillStyle = 'blue'
    ctx.fillText(qrCodeString.value, 0, height + 20)
    ctx.font = 'bold 20px Arial'
    ctx.fillStyle = 'red'
    ctx.fillText(title.value, 0, height + 40)
    ctx.font = 'bold 16px Arial'
    ctx.fillText(subTitle.value, 0, height + 60)
  }
}

const title = ref('')
const subTitle = ref('')
const onTextChange = () => {
  onDataUrlChange(dataUrl.value)
}

</script>

<template>
  <div class="flex w-full h-full">
    <div class="flex flex-col p-8">
      <vue-qrcode ref="qrCodeRef"
                  class="inline-block hidden"
                  :width="320"
                  :margin="0"
                  :value="qrCodeString"
                  @change="onDataUrlChange"
      />
      <canvas ref="canvasRef" class="w-80 h-100"/>
    </div>
    <div class="flex flex-col w-1/2 pt-5">
      <label class="font-light" for="text">文本</label>
      <textarea id="text" class="border border-b-gray-300" v-model="qrCodeString"/>
      <label for="title" class="font-light">一级标题</label>
      <input id="title" class="border border-b-gray-300" v-model="title" @input="onTextChange"/>
      <label for="subTitle" class="font-light">二级标题</label>
      <input id="subTitle" class="border border-b-gray-300" v-model="subTitle" @input="onTextChange"/>
    </div>
  </div>
</template>


<style scoped>
</style>
