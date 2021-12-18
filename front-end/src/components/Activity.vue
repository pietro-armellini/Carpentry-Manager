<template>
  <div v-if="currentActivity" class="edit-form">
    <h4>Attività</h4>
    <form>
      <div class="form-group">
        <label for="id">Id</label>
        <input type="text" class="form-control" id="id"
               readonly
               v-model="currentActivity.id"
        />
      </div>
      <div class="form-group">
        <label for="commissionName">commissionName</label>
        <input type="text" class="form-control" id="commissionName"
               readonly
               v-model="currentActivity.commissionName"
        />
      </div>
      <div class="form-group">
        <label for="manufacturingName">manufacturingName</label>
        <input type="text" class="form-control" id="manufacturingName"
               readonly
               v-model="currentActivity.manufacturingName"
        />
      </div>
      <div class="form-group">
        <label for="date">Data</label>
        <input type="text" class="form-control" id="date"
               readonly
               v-model="currentActivity.date"
        />
      </div>
      <div class="form-group">
        <label for="time">Tempo</label>
        <input type="text" class="form-control" id="time"
               readonly
               v-model="currentActivity.time"
        />
      </div>
      <div class="form-group">
        <label for="notes">Notes</label>
        <input type="text" class="form-control" id="notes"
               v-model="currentActivity.notes"
        />
      </div>
    </form>
    <div style="display:table; margin:0 auto;">
      <span style="padding:5px; background-color:#5C7563;" type="submit" class="badge badge-success text-white" @click="updateActivity">
        Salva<img src="../assets/save_icon.png">
      </span>
    </div>
    <br>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on an Activity ...</p>
  </div>
</template>

<script>
import ActivityDataService from "../services/ActivityDataService";

export default {
  name: "activity",
  data() {
    return {
      currentActivity: null,
      message: ''
    };
  },
  methods: {
    getActivity(id) {
      ActivityDataService.get(id)
          .then(response => {
            this.currentActivity = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    updateActivity() {
      ActivityDataService.update(this.currentActivity.id, this.currentActivity)
          .then(response => {
            console.log(response.data);
            this.message = 'L\'attività è stata modificata con successo';
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.message = '';
    this.getActivity(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>