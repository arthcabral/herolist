<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h3>Add New Hero</h3>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="handleSubmitForm()">
            <!-- Início bloco: Hero name -->
            <div class="mb-3" >
              <label class="form-label" for="hero-name">Hero Name</label>
              <input
                type="text"
                id="name"
                name="name"
                class="form-control"
                placeholder="Type the Hero Name"
                v-model="heroForm.name"
                :class="{ 'is-invalid': isSubmitted && $v.heroForm.name.$error }"/>
              <div
                v-if="isSubmitted && !$v.heroForm.name.required"
                class="invalid-feedback">
                Hero name field is required!
              </div>
            </div>
            <!-- Fim bloco: Hero name -->

            <!-- Início bloco: Hero Description -->
            <div class="mb-3">
              <label class="form-label" for="hero-description">Hero Description</label>
              <input
                type="text"
                id="description"
                name="description"
                class="form-control"
                placeholder="Describe this Hero"
                v-model="heroForm.description"
                :class="{ 'is-invalid': isSubmitted && $v.heroForm.description.$error }"/>
              <div
                v-if="isSubmitted && !$v.heroForm.description.required"
                class="invalid-feedback">
                Description field is required!
              </div>
            </div>
            <!-- Fim bloco: Hero Description -->

            <!-- Início bloco: Abilities -->
            <div class="mb-4">
              <label class="form-label" for="hero-abilities">Abilities</label>
              <input
                type="text"
                id="abilities"
                name="abilities"
                class="form-control"
                placeholder="What are your powers?"
                v-model="heroForm.abilities"
                :class="{ 'is-invalid': isSubmitted && $v.heroForm.abilities.$error }"/>
              <div
                v-if="isSubmitted && !$v.heroForm.abilities.required"
                class="invalid-feedback">
                Abilities field is required!
              </div>
            </div>
            <!-- Fim bloco: Abilities-->

            <!-- Início bloco: Submit button -->
            <div class="mb-3">
              <button class="btn btn-primary">
                <font-awesome-icon :icon="['fas', 'user-plus']"/> Hero
              </button>
            </div>
          <!-- Fim bloco: Submit button -->
          </form>
        </div>
      </div>
    </div>
</template>

<script>

import { required } from 'vuelidate/lib/validators';

export default {
  name: 'RegisterHeroComponent',
  data() {
    return {
      heroForm: {
        name: '',
        description: '',
        abilities: '',
      },
      isSubmitted: false,
    };
  },
  validations: {
    heroForm: {
      name: { required },
      description: { required },
      abilities: { required },
    },
  },
  methods: {
    handleSubmitForm() {
      this.isSubmitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
    },
  },
};
</script>
