<template>
  <div :class="['card-container', alignmentClass]">
    <div class="card">
      <div class="image-container">
        <img
            :src="imagePath"
            :alt="altText"
            :style="{ maxWidth: maxWidth, maxHeight: maxHeight }"
        />
      </div>
      <div class="caption">
        <p>{{ caption }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TemplateImage',
  props: {
    imagePath: {
      type: String,
      required: true
    },
    altText: {
      type: String,
      default: 'Image'
    },
    maxWidth: {
      type: String,
      default: '300px' // Largeur maximale par défaut
    },
    maxHeight: {
      type: String,
      default: '200px' // Hauteur maximale par défaut
    },
    caption: {
      type: String,
      default: ''
    },
    alignment: {
      type: String,
      default: 'center', // Valeur par défaut
      validator: value => ['left', 'right', 'center'].includes(value) // Validation des valeurs possibles
    }
  },
  computed: {
    alignmentClass() {
      return `align-${this.alignment}`; // Classe d'alignement basée sur la prop
    }
  }
}
</script>

<style scoped>
.card-container {
  display: flex;
  margin: 10px;
}

.align-left {
  justify-content: flex-start; /* Aligner à gauche */
}

.align-right {
  justify-content: flex-end; /* Aligner à droite */
}

.align-center {
  justify-content: center; /* Aligner au centre */
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.image-container {
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 4px;
}

.caption {
  text-align: center;
  padding: 10px;
  background-color: #f1f1f1;
  font-size: 16px;
  color: #333;
}
</style>
