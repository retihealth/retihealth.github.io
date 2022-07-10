<script setup>
import About from "../components/About.vue";
import SupportedBy from "../components/SupportedBy.vue";
</script>

<template>
  <div class="hero min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Reti Health</h1>
        <p class="py-6">
          We detect hypertension early with AI powered retinal screening
        </p>
        <button class="btn btn-primary">
          <a href="mailto:contact@retihealth.com"> Contact Us </a>
        </button>
      </div>
    </div>
  </div>
  <About />
  <SupportedBy />
</template>
