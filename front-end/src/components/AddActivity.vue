<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="date">Data attività</label>
        <input
            type="date"
            class="form-control"
            id="date"
            required
            v-model="activity.date"
            name="date"
        />
      </div>

      <div class="form-group">
        <label for="commessa">Seleziona commessa</label>
        <select
            class="form-control"
            id="commessa"

            v-model="activity.idCommission"
            name="commessa"
        ></select>
      </div>

      <div class="form-group">
        <label for="lavorazione">Selezione lavorazione</label>
        <select
            class="form-control"
            id="lavorazione"

            v-model="activity.idManufacturing"
            name="lavorazione"
        ></select>
      </div>

      <div class="form-group">
        <label for="tempo">Tempo impiegato (min)</label>
        <input

            type="number"
            class="form-control"
            id="tempo"
            required
            name="tempo"
            v-model="activity.time"
        />
      </div>


      <div class="form-group">
        <label for="note">Note</label>
        <input
            type="text"
            class="form-control"
            id="note"
            required
            v-model="activity.notes"
            name="note"
        />
      </div>


      <button @click="saveActivity" class="btn btn-success">Aggiungi</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newActivity">Add</button>
    </div>
  </div>
</template>

<script>
import ActivityDataService from "../services/ActivityDataService";

export default {
  name: "add-activity",
  data() {
    return {
      activity: {
        idCommission: -1,
        idManufacturing: -1,
        date: "YYYY-MM-DD",
        notes: "",
        time: 0
      },
      submitted: false
    };
  },
  methods: {
    saveActivity() {
      let data = {
        //idCommission: this.idCommission,
        //idManufacturing: this.idManufacturing,
        date: this.activity.date,
        notes: this.activity.notes,
        time: this.activity.time
      };

      ActivityDataService.create(data)
          .then(response => {
            this.activity.id = response.data.id;
            console.log(response.data);
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
    },

    newActivity() {
      this.submitted = false;
      this.activity = {};
    }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>