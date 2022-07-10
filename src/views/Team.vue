<template>
  <div
    class="hero min-h-screen py-20 bg-fixed"
    style="background-image: url('/background.svg')"
  >
    <div class="flex w-full justify-center flex-wrap">
      <div
        v-for="{ name, image, title, text } in team"
        class="card w-96 bg-base-100/50 text-gray-800 m-5"
      >
        <figure>
          <img class="h-96 grayscale" :src="image" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">
            {{ name }}
          </h2>
          <h3>
            {{ title }}
          </h3>
          <p>{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        {
          name: "Oliver Dean",
          image: "/team/oliver.jpeg",
          title: "CEO",
          text: "Oliver built AI to diagnose cancer at the UCL Center for Medical Image Computing. He also has strategy, fundraising, and technical skills from working at EY, consulting for the healthcare industry, and GoCardless, where he helped raise $75m.",
        },
        {
          name: "George Prichard",
          image: "/team/george.jpeg",
          title: "CTO",
          text: "George studied neuroscience at UCL, then built deep learning products at a computer vision startup. He has published applied neuroscience research, trained deep neural networks, and deployed AI products to hundreds of thousands of people.",
        },
        {
          name: "Imran Hakim",
          image: "/team/imran.jpeg",
          title: "Strategic Advisor",
          text: "Imran is the founder and CEO of the Hakim group, an is responsible for 180 optometry stores across 6 countries. He was recognised by EY as Entrepreneur Of The Year.",
        },
        {
          name: "Eddie Korot",
          image: "/team/eddie.jpeg",
          title: "Medical Advisor",
          text: "Eddie is an Ophthalmologist at Stanford and Honorary Research Fellow at Moorfields Eye Hospital, and previously worked at Google Health. He researches and has multiple publications on uses of AI for ophthalmology.",
        },
      ],
    };
  },
};
</script>
