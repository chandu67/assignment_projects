<template>
  <div class="form-container">
    <form @submit="handleSubmit">
      <div class="form-row">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
        <span class="error" v-if="!isNameValid">Name is required</span>
      </div>

      <div class="form-row">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
        <span class="error" v-if="!isEmailValid"
          >Please enter a valid email</span
        >
      </div>

      <div class="form-row">
        <label for="role">Role:</label>
        <select id="role" v-model="selectedRole" required>
          <option disabled value="">Select a role</option>
          <option v-for="role in roles" :key="role.id" :value="role.name">
            {{ role.name }}
          </option>
        </select>
        <span class="error" v-if="!isRoleValid">Please select a role</span>
      </div>

      <div class="form-row">
        <label for="noticePeriod">Notice Period (in days):</label>
        <input
          type="number"
          id="noticePeriod"
          v-model="noticePeriod"
          required
        />
        <span class="error" v-if="!isNoticePeriodValid"
          >Please enter a valid notice period</span
        >
      </div>

      <div class="form-row">
        <label for="preferredLocation">Preferred Location:</label>
        <input
          type="text"
          id="preferredLocation"
          v-model="preferredLocation"
          required
        />
        <span class="error" v-if="!isPreferredLocationValid"
          >Preferred location is required</span
        >
      </div>

      <div class="form-row">
        <label for="lastWorkingDay">Last Working Day:</label>
        <input
          type="date"
          id="lastWorkingDay"
          v-model="lastWorkingDay"
          required
        />
        <span class="error" v-if="!isLastWorkingDayValid"
          >Please enter a valid last working day</span
        >
      </div>

      <div class="button-row">
        <button type="button" class="clear-button" @click="handleClear">
          Clear
        </button>
        <button type="submit" class="submit-button">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      selectedRole: "",
      roles: [
        { id: "developer", name: "Developer" },
        { id: "designer", name: "Designer" },
        { id: "manager", name: "Manager" },
      ],
      noticePeriod: "",
      preferredLocation: "",
      lastWorkingDay: "",
      isNameValid: true,
      isEmailValid: true,
      isRoleValid: true,
      isNoticePeriodValid: true,
      isPreferredLocationValid: true,
      isLastWorkingDayValid: true,
    };
  },
  computed: {
    isFormValid() {
      return (
        this.isNameValid &&
        this.isEmailValid &&
        this.isRoleValid &&
        this.isNoticePeriodValid &&
        this.isPreferredLocationValid &&
        this.isLastWorkingDayValid
      );
    },
    // ... (any additional computed properties)
  },
  methods: {
    validateName() {
      this.isNameValid = !!this.name.trim();
    },
    validateEmail() {
      this.isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    },
    validateRole() {
      this.isRoleValid = !!this.selectedRole;
    },
    validateNoticePeriod() {
      this.isNoticePeriodValid =
        !isNaN(parseInt(this.noticePeriod, 10)) &&
        parseInt(this.noticePeriod, 10) > 0;
    },
    validatePreferredLocation() {
      this.isPreferredLocationValid = !!this.preferredLocation.trim();
    },
    validateLastWorkingDay() {
      this.isLastWorkingDayValid = !!this.lastWorkingDay;
    },
    async handleSubmit() {
      // Validate form data before submission
      this.validateName();
      this.validateEmail();
      this.validateRole();
      this.validateNoticePeriod();
      this.validatePreferredLocation();
      this.validateLastWorkingDay();

      if (this.isFormValid) {
        // Emit custom event with validated form data
        this.$emit("complex-form-submitted", {
          name: this.name,
          email: this.email,
          role: this.selectedRole,
          noticePeriod: parseInt(this.noticePeriod, 10),
          preferredLocation: this.preferredLocation,
          lastWorkingDay: this.lastWorkingDay,
        });
        await this.$store.dispatch("setFormDataAction", {
          name: this.name,
          email: this.email,
          role: this.selectedRole,
          noticePeriod: parseInt(this.noticePeriod, 10),
          preferredLocation: this.preferredLocation,
          lastWorkingDay: this.lastWorkingDay,
        });
        this.$router.push({
          name: "response"
        });

        // Optionally, you can reset the form fields
        this.handleClear();
      }
    },

    handleClear() {
      // Reset form fields
      this.name = "";
      this.email = "";
      this.selectedRole = "";
      this.noticePeriod = "";
      this.preferredLocation = "";
      this.lastWorkingDay = null;
    },
  },
};
</script>

<style lang="scss" scoped>

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78vh;
}

form {
  background-color: black;
  color: white;
  padding: 20px;
  border: 1px solid #1c8d0a;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 400px;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: flex;
  margin-bottom: 8px;
  padding: 2px 10px 2px 0px;
  align-items: flex-start;
}

input,
select,
button {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #1c8d0a;
  border-radius: 4px;
  background-color: black;
  color: white;
}

.error {
  color: #1c8d0a;
  font-size: 0.8em;
  margin-top: 5px;
}

.submit-button {
  background-color: #1c8d0a;
  color: white;
  padding: 12px;
  border: 1px solid #1c8d0a;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:disabled {
  background-color: #565656;
  border: 1px solid #565656;
  cursor: not-allowed;
}

.form-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.button-row {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.clear-button,
.submit-button {
  padding: 10px;
  color: white;
  cursor: pointer;
}

.clear-button {
  background-color: black;
  border: 2px solid green;
  margin-right: 5px;
}

.submit-button {
  background-color: green;
  border: 2px solid green;
  margin-left: 5px;
}

@media (min-width: 601px) {
  form {
    max-width: 60%;
  }
  label {
    padding: 2px 10px 2px 0px;
    min-width: 200px;
    align-items: flex-start;
  }
}
@media (max-width: 600px) {
  .form-row {
    flex-direction: column;
  }

  .form-group {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>
