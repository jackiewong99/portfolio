<template>
  <div class="contact-modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-content">
          <div class="modal-header">
            <div class="closeBtn" v-on:click="emitHideModal">&times;</div>
            <h2>Get In Touch</h2>
          </div>
          <div class="modal-body">
            <p>
              I am open to any new opportunities and so is my inbox. No matter
              the message, I will get back to you as soon as possible!
            </p>
            <!-- CONTACT FORM -->
            <form
              @submit.prevent="handleSubmit"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <label for="name">Name</label>
              <input
                v-model="form.name"
                type="text"
                name="name"
                class="email"
              />
              <label class="email-label" for="email">Email</label>
              <input
                v-model="form.email"
                type="email"
                name="email"
                class="email"
              />
              <label class="subject-label" for="subject">Subject</label>
              <input
                v-model="form.subject"
                type="text"
                name="subject"
                class="subject"
              />
              <label class="msg-label" for="message">Message</label>
              <textarea
                v-model="form.message"
                type="message"
                name="message"
                class="message"
                cols="70"
                rows="15"
                placeholder="Hello!"
              ></textarea>
              <div data-netlify-recaptcha="true"></div>
              <div class="submit-btn">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router/index.js';
export default {
  name: 'Contact',
  data() {
    return {
      displayModal: Boolean,
      form: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    emitHideModal() {
      this.displayModal = false;
      this.$emit('modalStateChange', this.displayModal);
    },
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&');
    },
    handleSubmit() {
      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: this.encode({
          'form-name': 'contact',
          ...this.form
        })
      })
        .then(() => {
          router.push('thanks');
        })
        .catch(() => {
          router.push('404');
        });
    }
  }
};
</script>

<style scoped>
.modal-mask {
  display: block;
  position: fixed;
  z-index: 10;
  top: 6%;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: block;
}

.modal-content {
  background-color: #a7d7c5;
  border-radius: 30px;
  margin: 0px auto;
  padding: 20px 30px;
  width: 600px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.modal-header {
  color: #275854;
}

.modal-body {
  color: #275854;
  font-weight: 500;
}

label {
  display: block;
}

label:first-child {
  margin-bottom: 5px;
}

.email-label {
  margin-top: 10px;
  margin-bottom: 5px;
}

.subject-label {
  margin-top: 10px;
  margin-bottom: 5px;
}

.msg-label {
  margin-top: 10px;
  margin-bottom: 5px;
}

input,
textarea {
  appearance: none;
  box-sizing: border-box;
  border: 0;
  border-radius: 5px;
  font-family: inherit;
  padding: 7px;
  margin: 0;
  width: 100%;
  transition: all 0.1s ease;
}

input:focus,
textarea:focus {
  border: 2px solid #5c8d89;
  outline: none;
}

input {
  width: 15rem;
}

.message {
  resize: none;
}

.submit-btn {
  text-align: center;
}

.submit-btn input {
  background-color: #a7d7c5;
  border: 3px solid #275854;
  border-radius: 6px;
  color: #275854;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  margin: 5px 0px 0px 4px;
  padding: 20px 30px;
  outline: none;
  transition: 0.3s ease-in;
}

.submit-btn input:hover {
  background-color: rgba(236, 236, 211, 0.3);
  opacity: 0.6;
}

.closeBtn {
  cursor: pointer;
  float: right;
  font-size: 25px;
  transition: 0.3s ease-in;
}

.closeBtn:hover {
  color: rgba(92, 141, 137, 0.5);
  opacity: 0.6;
}
</style>
