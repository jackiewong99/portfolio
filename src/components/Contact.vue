<template>
  <div class="modal">
    <div class="modal-content">
      <div class="model-header">
        <div class="closeBtn">&times;</div>
        <h2>Get In Touch</h2>
      </div>
      <div class="modal-body">
        <p>
          I am open to any new opportunities and so is my inbox. No matter the
          message, I will get back to you as soon as possible!
        </p>
        <!-- CONTACT INFO FORM -->
        <form @submit.prevent="submitForm">
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            class="email"
            placeholder="sample@gmail.com"
          />
          <label for="subject">Subject</label>
          <input
            type="text"
            name="subject"
            class="subject"
            placeholder="Subject"
          />
          <label for="message">Message</label>
          <textarea
            name="message"
            class="message"
            cols="70"
            rows="20"
            placeholder="Hello!"
          ></textarea>
          <input type="submit" value="Send" />
        </form>
        <!-- SEND BUTTON -->
        <!-- Add looping animation of paper airplane ready to fly (shaking left and right) -->
        <!-- When user clicks button -->
        <!-- Animate paper airplane flying off screen -->
        <!-- Remove form and Show loading animation -->
        <!-- When successful, animate paper airplane flying in from left to the buttom center -->
        <!-- And fade in text: "Sent!" -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
};
</script>

<style scoped>
.message {
  resize: none;
}
</style>
