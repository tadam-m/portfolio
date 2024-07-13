<script setup lang="ts">
const { x: cursorX, y: cursorY } = useMouse()

const ballX = ref(0)
const ballY = ref(0)
const speed = 5

const updatePosition = () => {
  const dx = cursorX.value - ballX.value
  const dy = cursorY.value - ballY.value
  const distance = Math.sqrt(dx * dx + dy * dy)

  if (distance > 1) {
    const vx = (dx / distance) * speed
    const vy = (dy / distance) * speed

    ballX.value += vx
    ballY.value += vy
  }

  requestAnimationFrame(updatePosition)
}

onMounted(() => {
  requestAnimationFrame(updatePosition)
})

</script>

<template>
  <div class="ball"
       :style="{ transform: `translate(${ballX}px, ${ballY}px)` }"
  ></div>
  <div class="container">
    <p>Let start coding</p>
    <p>
      x: {{ cursorX }} y: {{ cursorY }}
    </p>
  </div>

</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.ball {
  width: 16px;
  height: 16px;
  background: #a1a1a1;
  border-radius: 50%;
}
</style>
