<template>
  <div id="bgDiv" class="absolute h-screen w-screen"></div>
</template>

<style>
#bgDiv {
  background-image: url("/background.svg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  z-index: -1;
}
</style>
