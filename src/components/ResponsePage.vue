<template>
  <div class="row" style="padding: 35px">
    <h2 class="col-lg-6 col-12 p-0" style="color: #1c8d0a; display:flex">Form Submission Successful</h2>
    <button @click="goBack" class="col-lg-6 col-12 back-button">Back to Form</button>
  </div>
  <div class="response-container">
    <div>
      <p><strong>Name:</strong> {{ formData.name }}</p>
      <p><strong>Email:</strong> {{ formData.email }}</p>
      <p><strong>Role:</strong> {{ formData.role }}</p>
      <p><strong>Notice Period:</strong> {{ formData.noticePeriod }} days</p>
      <p>
        <strong>Preferred Location:</strong> {{ formData.preferredLocation }}
      </p>
      <p><strong>Last Working Day:</strong> {{ formData.lastWorkingDay }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      formData: (state) => state,
    }),
  },
  methods: {
    goBack() {
      this.$router.push("/form");
    },
  },
};
</script>

<style lang="scss" scoped>
.response-container {
  text-align: left;
  padding: 20px;
  background-color: #1c8d0a;
  color: white;
  border-radius: 8px;
  margin: 20px;
}

.response-container h2 {
  margin-bottom: 20px;
}

.response-container div {
  max-width: 400px;
  margin: 0 auto;
}

.back-button {
  background-color: black;
  color: #1c8d0a;
  padding: 10px;
  border: 2px solid green;
  border-radius: 8px;
  cursor: pointer;
}
</style>
