<template>
  <div>
    <svg width="140" heiight="170" xmlns="http://wwww.w3.org/2000/svg">
      <title>Cat</title>
      <desc>Stick Figure of Cat</desc>
      <!-- 在这里绘制图像 -->
      <circle cx="70" cy="95" r="50" style="stroke: black; fill: none"></circle>
      <circle cx="55" cy="80" r="5" stroke="black" fill="#3339933"></circle>
      <circle cx="85" cy="80" r="5" stroke="black" fill="#3339933"></circle>
      <!-- 胡须 -->
      <g id="whiskers">
        <line x1="75" y1="95" x2="135" y2="85" style="stroke: black"></line>
        <line x1="75" y1="95" x2="135" y2="105" style="stroke: black"></line>
      </g>
      <!-- 翻转移动whiskers -->
      <use xlink:href="#whiskers" transform="scale(-1 1) translate(-140 0)"></use>
      <!-- 耳朵 -->
      <polyline points="108 62, 90 10, 70 45, 50 10, 32 62" style="stroke: black; fill: none" />
      <!-- 嘴 -->
      <polyline points="35 110,45 120, 95 120, 105 110" style="stroke: black; fill: none" />
      <!-- 鼻子 -->
      <path d="M 75 90 L 65 90 A 5 10 0 0 0 75 90" style="stroke: black; fill: #ffcccc" />
    </svg>
    <!--三次贝塞尔曲线 https://www.jianshu.com/p/c819ae16d29b-->
    <svg width="190px" height="160px" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent" />
      <circle cx="130" cy="110" r="2" fill="red" />
      <circle cx="120" cy="140" r="2" fill="red" />
      <line x1="130" y1="110" x2="120" y2="140" style="stroke: rgb(255, 0, 0); stroke-width: 2" />
      <circle cx="180" cy="140" r="2" fill="red" />
      <circle cx="170" cy="110" r="2" fill="red" />
      <line x1="180" y1="140" x2="170" y2="110" style="stroke: rgb(255, 0, 0); stroke-width: 2" />
    </svg>
    <!--三次贝塞尔曲线简写-->
    <svg width="190px" height="160px" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent" />
      <circle cx="10" cy="80" r="2" fill="red" />
      <circle cx="40" cy="10" r="2" fill="red" />
      <line x1="10" y1="80" x2="40" y2="10" style="stroke: rgb(255, 0, 0); stroke-width: 1" />

      <circle cx="65" cy="10" r="2" fill="red" />
      <circle cx="95" cy="80" r="2" fill="red" />
      <line x1="65" y1="10" x2="95" y2="80" style="stroke: rgb(255, 0, 0); stroke-width: 1" />

      <circle cx="125" cy="150" r="2" fill="blue" />
      <circle cx="180" cy="80" r="2" fill="red" />
      <circle cx="150" cy="150" r="2" fill="red" />
      <line x1="95" y1="80" x2="125" y2="150" style="stroke: blue; stroke-width: 1" />
      <line x1="180" y1="80" x2="150" y2="150" style="stroke: rgb(255, 0, 0); stroke-width: 1" />
    </svg>
    <!--二次贝塞尔曲线-->
    <svg width="190px" height="160px" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 80 Q 95 10 180 80" stroke="black" fill="transparent" />
      <!--Points-->
      <circle cx="10" cy="80" r="2" fill="red" />
      <circle cx="95" cy="10" r="2" fill="red" />
      <circle cx="180" cy="80" r="2" fill="red" />
      <line x1="10" y1="80" x2="95" y2="10" style="stroke: rgb(255, 0, 0); stroke-width: 1" />
      <line x1="95" y1="10" x2="180" y2="80" style="stroke: rgb(255, 0, 0); stroke-width: 1" />
    </svg>
    <!--二次贝塞尔曲线简写-->
    <svg width="190px" height="160px" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 80 Q 52.5 10, 95 80 T  180 80" stroke="black" fill="transparent" />

      <circle cx="10" cy="80" r="2" fill="red" />
      <circle cx="52.5" cy="10" r="2" fill="red" />
      <line x1="10" y1="80" x2="52.5" y2="10" style="stroke: rgb(255, 0, 0); stroke-width: 1" />

      <circle cx="95" cy="80" r="2" fill="red" />
      <line x1="95" y1="80" x2="52.5" y2="10" style="stroke: rgb(255, 0, 0); stroke-width: 1" />

      <circle cx="180" cy="80" r="2" fill="blue" />
      <circle cx="137.5" cy="150" r="2" fill="blue" />
      <line x1="95" y1="80" x2="137.5" y2="150" style="stroke: rgb(0, 0, 255); stroke-width: 1" />
      <line x1="137.5" y1="150" x2="180" y2="80" style="stroke: rgb(0, 0, 255); stroke-width: 1" />
    </svg>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped></style>
