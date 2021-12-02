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
        <label for="idCommission">idCommission</label>
        <input type="text" class="form-control" id="idCommission"
               readonly
               v-model="currentActivity.idCommission"
        />
      </div>
      <div class="form-group">
        <label for="idManufacturing">idManufacturing</label>
        <input type="text" class="form-control" id="idManufacturing"
               readonly
               v-model="currentActivity.idManufacturing"
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

    <button class="badge badge-danger mr-2"
            @click="deleteActivity"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"
            @click="updateActivity"
    >
      Update
    </button>
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
            this.message = 'The activity was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
    },

    deleteActivity() {
      ActivityDataService.delete(this.currentActivity.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "activities" });
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