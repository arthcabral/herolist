<template>
    <div class="container">
      <div class="card">
        <div class="card-header">
          <h3>Add New Hero</h3>
        </div>
        <div class="card-body">
          <form @submit.prevent="registerNewHero">
            <!-- Início bloco: Hero name -->
            <div class="mb-3" >
              <label class="form-label" for="hero-name">Hero Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Type the Hero Name"
                v-model="hero.name"
              />
            </div>
            <!-- Fim bloco: Hero name -->

            <!-- Início bloco: Hero Description -->
            <div class="mb-3">
              <label class="form-label" for="hero-description">Hero Description</label>
              <input
                type="text"
                class="form-control"
                placeholder="Describe this Hero"
                v-model="hero.description"
              />
            </div>
            <!-- Fim bloco: Hero Description -->

            <!-- Início bloco: Abilities -->
            <div class="mb-4">
              <label class="form-label" for="hero-abilities">Abilities</label>
              <input
                type="text"
                class="form-control"
                placeholder="What are your powers?"
                v-model="hero.abilities"
              />
            </div>
            <!-- Fim bloco: Abilities-->

            <!-- Início bloco: Submit button -->
            <div class="mb-3">
              <button type="submit" class="btn btn-primary">
                New Hero
              </button>
            </div>
          <!-- Fim bloco: Submit button -->
          </form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'RegisterHeroComponent',
  data() {
    return {
      hero: {
        name: '',
        description: '',
        abilities: '',
      },
    };
  },
  methods: {
    handleSubmitForm() {},
  },
};
</script>
