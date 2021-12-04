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
        <label for="commessa">Selezione commesse</label>
        <select class="form-control"
                id="commessa"
                v-model="activity.commissionName"
                name="commessa"
        >  <option v-for="option in commissions" :value="option.value" :key="option.value">
          {{ option.text }}
        </option>
        </select>
      </div>

      <div class="form-group">
        <label for="lavorazione">Selezione lavorazione</label>
        <select
            class="form-control"
            id="lavorazione"
            v-model="activity.manufacturingName"
            name="lavorazione"
        >  <option v-for="option in manufacturing" :value="option.value" :key="option.value">
            {{ option.text }}
          </option>
        </select>
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

    <div v-if="errors.length">
      <b>Impossibile inserire l'attivtà:</b>
      <ul>
        <li v-for="error in errors" v-bind:key="error.id">{{ error }}</li>
      </ul>
    </div>
  </div>
</template>

<script>

import ActivityDataService from "../services/ActivityDataService";
import CommissionDataService from "../services/CommissionDataService";
import ManufacturingDataService from "../services/ManufacturingDataService";

export default {
  name: "add-activity",
  data() {
    return {
      activity: {
        commissionName: null,
        manufacturingName: null,
        date: "yyyy-MM-dd",
        time: 0,
        notes: ""
      },
      submitted: false,
      commissions: [],
      manufacturing: [],
      errors: []
    };
  },
  methods: {
    retrieveCommissions() {
      CommissionDataService.getAll()
          .then(response => {
            response.data.forEach(el => this.commissions.push({ text: el.name, value: el.name}));
          })
          .catch(e => {
            console.log(e);
          });
    },

    retrieveManufacturing() {
      ManufacturingDataService.getAll()
          .then(response => {
            response.data.forEach(el => this.manufacturing.push({ text: el.name, value: el.name}));
          })
          .catch(e => {
            console.log(e);
          });
    },

    saveActivity() {
      let data = {
        commissionName: this.activity.commissionName,
        manufacturingName: this.activity.manufacturingName,
        date: this.activity.date,
        notes: this.activity.notes,
        time: this.activity.time
      };

      if(this.validateForm()) {
        ActivityDataService.create(data)
            .then(response => {
              this.activity.id = response.data.id;
              console.log(response.data);
              this.submitted = true;
            })
            .catch(e => {
              console.log(e);
            });
      }
    },

    newActivity() {
      this.retrieveCommissions();
      this.submitted = false;
      this.activity = {};
    },

    validateForm(){
      this.errors = [];
      if (!this.activity.data) this.errors.push('Data obbligatoria');
      if (!this.activity.manufacturingName) this.errors.push('Lavorazione obbligatoria');
      if (!this.activity.commissionName) this.errors.push('Commessa obbligatoria');
      if (!this.activity.time || isNaN(this.activity.time) || parseInt(this.activity.time)<=0) this.errors.push('Il tempo deve essere maggiore di 0.');
      return this.errors.length===0;
    }
  },
  mounted() {
    this.retrieveCommissions();
    this.retrieveManufacturing();
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>