<script setup>
import axios from 'axios'
import { ref, reactive, watch } from "vue";
import { useRouter } from "vue-router";
import { useStore } from 'vuex';


const store = useStore();
const router = useRouter();

const title = reactive({
  val: "",
  isValid: true,
});
const description = reactive({
  val: "",
  isValid: true,
});
const tage = reactive({
  val: "",
  isValid: true,
});

watch(title, function () {
  if (title.val !== "") {
    title.isValid = true;
  }
});
watch(description, function () {
  if (description.val !== "") {
    description.isValid = true;
  }
});
watch(tage, function () {
  if (tage.val !== "") {
    tage.isValid = true;
  }
});
const formIsValid = ref(null);

function validateForm() {
  formIsValid.value = true;
  if (title.val === "") {
    title.isValid = false;
    formIsValid.value = false;
  }
  if (description.val === "") {
    description.isValid = false;
    formIsValid.value = false;
  }
  if (tage.val === "") {
    tage.isValid = false;
    formIsValid.value = false;
  }
}

function submitForm() {
  validateForm();

  if (!formIsValid.value) {
    return;
  }

  const enteredValue = {
    id: Math.random().toString(36).substr(2, 9),
    title: title.val,
    description: description.val,
    tage: tage.val,
  };

  //store.dispatch('addTask',enteredValue);
  axios
    .post('https://todo-list-1f086-default-rtdb.firebaseio.com/task-list.json',enteredValue)
    .then(() => {
      store.dispatch('fetchText');
    })
  router.push("/");
}
</script>

<template>
  <div id="form-ui">
    <form @submit.prevent="submitForm" id="form">
      <div id="form-body">
        <div id="welcome-lines">
          <div id="welcome-line-1">Add Task</div>
          <div id="welcome-line-2">enter a task for add todo list</div>
        </div>
        <div id="input-area">
          <div class="form-inp" :class="{ forminperr: !title.isValid }">
            <input placeholder="Title" type="text" v-model.trim="title.val" />
          </div>
          <p v-if="!title.isValid" class="invalid">please enter title</p>
          <div class="form-inp" :class="{ forminperr: !description.isValid }">
            <input
              placeholder="Description"
              type="text"
              v-model.trim="description.val"
            />
          </div>
          <p v-if="!description.isValid" class="invalid">
            please enter description
          </p>
          <div class="form-inp" :class="{ forminperr: !tage.isValid }">
            <input placeholder="Tage" type="text" v-model.trim="tage.val" />
          </div>
          <p v-if="!tage.isValid" class="invalid">please enter tage</p>
        </div>
        <div id="submit-button-cvr">
          <button id="submit-button">add</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
#form-ui {
  display: flex;
  justify-content: center;
  margin-top: 120px;
}
#form {
  display: grid;
  place-items: center;
  width: 300px;
  height: 500px;
  padding: 25px;
  background-color: rgba(39, 39, 39, 0.308);
  box-shadow: 0px 15px 60px #73e6facf;
  outline: 1px solid #73e6facf;
  border-radius: 10px;
}

#form-body {
  position: absolute;
  top: 50%;
  right: 25px;
  left: 25px;
  width: 230px;
  margin: -156px auto 0 auto;
}

#welcome-lines {
  text-align: center;
  line-height: 1;
}

#welcome-line-1 {
  color: #73e6facf;
  font-weight: 600;
  font-size: 40px;
}

#welcome-line-2 {
  color: #ffffff;
  font-size: 18px;
  margin-top: 17px;
}

#input-area {
  margin-top: 40px;
}

.form-inp {
  padding: 11px 25px;
  background: transparent;
  border: 1px solid #e3e3e3;
  line-height: 1;
  border-radius: 8px;
  margin-bottom: 15px;
}
.forminperr {
  border: 1px solid red;
}

.form-inp:focus {
  border: 1px solid #73e6facf;
}

.form-inp input {
  width: 100%;
  background: none;
  font-size: 13.4px;
  color: #73e6facf;
  border: none;
  padding: 0;
  margin: 0;
}

.form-inp input:focus {
  outline: none;
}

#submit-button-cvr {
  margin-top: 20px;
}

#submit-button {
  display: block;
  width: 100%;
  color: #73e6facf;
  background-color: transparent;
  font-weight: 600;
  font-size: 14px;
  margin: 0;
  padding: 14px 13px 12px 13px;
  border: 0;
  outline: 1px solid #73e6facf;
  border-radius: 8px;
  line-height: 1;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
}

#submit-button:hover {
  transition: all ease-in-out 0.3s;
  background-color: #73e6facf;
  color: #161616;
  cursor: pointer;
}

#forgot-pass {
  text-align: center;
  margin-top: 10px;
}

#forgot-pass a {
  color: #868686;
  font-size: 12px;
  text-decoration: none;
}

#bar {
  position: absolute;
  left: 50%;
  bottom: -50px;
  width: 28px;
  height: 8px;
  margin-left: -33px;
  background-color: #73e6facf;
  border-radius: 10px;
}
.error {
  display: flex;
  justify-content: center;
  color: rgb(209, 53, 53);
  margin-top: 10px;
  transition: all ease-in 0.3ms;
}
.invalid {
  color: red;
  margin-bottom: 10px;
  transition: all ease-out 0.3ms;
}
</style>
