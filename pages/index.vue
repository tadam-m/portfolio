<script lang="ts" setup>
const { x: cursorX, y: cursorY } = useMouse()

const BALL_HOME = { x: 54, y: 24 }

const ballX = ref(BALL_HOME.x)
const ballY = ref(BALL_HOME.y)
const speed = 5

const moveTo = (posX: number, posY: number) => {
  const dx = posX - ballX.value
  const dy = posY - ballY.value
  const distance = Math.sqrt(dx * dx + dy * dy)

  if (distance > 1) {
    const vx = (dx / distance) * speed
    const vy = (dy / distance) * speed

    ballX.value += vx
    ballY.value += vy
  }
}

const updatePosition = () => {
  // Check if cursor is inside a card element
  const safePlacesDOM = document.querySelector('.safe-place')

  if (!safePlacesDOM) {
    // Ball return to the house by moving at the same speed

    moveTo(cursorX.value, cursorY.value)
    requestAnimationFrame(updatePosition)
    return
  }

  const safePlaces = safePlacesDOM.getBoundingClientRect()

  if (
    cursorX.value > safePlaces.left
    && cursorX.value < safePlaces.right
    && cursorY.value > safePlaces.top
    && cursorY.value < safePlaces.bottom
  ) {
    if (ballX.value === BALL_HOME.x && ballY.value === BALL_HOME.y) {
      requestAnimationFrame(updatePosition)
      return
    }

    moveTo(BALL_HOME.x, BALL_HOME.y)
    requestAnimationFrame(updatePosition)
    return
  }

  moveTo(cursorX.value, cursorY.value)
  requestAnimationFrame(updatePosition)
}

onMounted(() => {
  requestAnimationFrame(updatePosition)
})
</script>

<template>
  <div
    :style="{ transform: `translate(${ballX}px, ${ballY}px)` }"
    class="ball absolute"
  />
  <div class="h-full w-full">
    <UCard class="w-16 h-16 ms-8 mt-8" />
    <div class="flex justify-center items-center h-full">
      <UCard
        class="min-w-[600px] safe-place dark:hover:background-gradient"
      >
        <template #header>
          <p>Let start coding</p>
        </template>

        <p>
          x: {{ cursorX }} y: {{ cursorY }}
        </p>

        <template #footer />
      </UCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ball {
  width: 16px;
  height: 16px;
  background: #a1a1a1;
  border-radius: 50%;
}
</style>
