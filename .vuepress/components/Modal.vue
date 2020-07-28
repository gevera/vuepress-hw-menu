<template>
  <div class="modal-window">
    <div class="modal-container">
      <div @click="closeModal" class="close">Close</div>
        <div class="header">
        <slot name="header"></slot>
        </div>
      <div class="modal-main">
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalOn: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal", this.modalOn);
    }
  }
};
</script>

<style scoped>
.modal-window {
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /*visibility: hidden;
  opacity: 0; */
  z-index: 999;
  pointer-events: none;
  transition: all 0.3s;
  }
.modal-window:target {
  }
.modal-container {
    /* animation: show 1s; */
    animation-fill-mode:forwards;
    box-shadow: 0px 0px 40px 18px rgba(0,0,0,0.29);
    border-radius: 0.7rem;
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    width: 80%;
    height: 85%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.8rem;
    background: #ffffff;
  }
  /* @keyframes show{
    0%{opacity:0}
    100%{opacity:1}
} */
  .header {
    border-bottom: 1px solid #eaecef;
    /* position: sticky;
    top: 0; */
  }
  .header:first-child {
    font-weight: 300;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }

.modal-main {
    margin: 0 auto;
}

.close {
  color: #aaa;
  line-height: 50px;
  font-size: 80%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 70px;
  text-decoration: none;
  padding-right: 0.5rem;
}
.close:hover {
    cursor: pointer;
    color: #2c3e50;
}

</style>