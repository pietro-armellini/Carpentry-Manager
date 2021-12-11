<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <div class="form-group">
          <label for="commessa">Filtra per commessa</label>
          <select class="form-control"
                  id="commessa"
                  v-model="commissionName"
                  name="commessa"
                  @change=searchByCommissionName
          >
            <option selected value="-1">Tutte le commesse</option>
            <option v-for="option in commissions" :value="option.value" :key="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
        <!--
        <input type="text" class="form-control" placeholder="Search by commissionName"
               v-model="activity"/>

        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
                  @click="searchByCommissionName"
          >
            Search
          </button>
        </div>
        -->
      </div>
    </div>
    <div class="col-md-6">
      <h4>Lista attività</h4>
      <ul class="list-group">
        <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(activity, index) in activities"
            :key="index"
            @click="setActiveActivity(activity, index)"
        >
          {{ "#"+activity.id + " - " + activity.manufacturingName }}
        </li>
      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentActivity">
        <h4>Attività</h4>
        <div>
          <label><strong>Id:</strong></label> {{ "#"+currentActivity.id }}
        </div>
        <div>
          <label><strong>Data:</strong></label> {{ currentActivity.date}}
        </div>
        <div>
          <label><strong>Tempo:</strong></label> {{ currentActivity.time + " minuti"}}
        </div>
        <div>
          <label><strong>Commessa:</strong></label> {{ currentActivity.commissionName}}
        </div>
        <div>
          <label><strong>Lavorazione:</strong></label> {{ currentActivity.manufacturingName}}
        </div>
        <div>
          <label><strong>Notes:</strong></label> {{ currentActivity.notes }}
        </div>

        <span style="padding:5px"><router-link :to="'/activities/' + currentActivity.id" class="badge badge-warning text-white">Modifica<img src="../assets/edit_icon.png"></router-link></span>
        <span style="padding:5px" class="badge badge-danger text-white"
            @click="deleteActivity"
        >
          Rimuovi<img src="../assets/delete_icon.png">
        </span>
      </div>
      <div v-else>
        <br />
        <p>Premi su un attività per visualizzarne i dettagli</p>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityDataService from "../services/ActivityDataService";
import CommissionDataService from "../services/CommissionDataService";

export default {
  name: "activities-list",
  data() {
    return {
      activities: [],
      currentActivity: null,
      currentIndex: -1,
      activity: "",
      commissions: [],
      commissionName: null
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

    retrieveActivities() {
      ActivityDataService.getAll()
          .then(response => {
            this.activities = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    refreshList() {
      this.retrieveActivities();
      this.currentActivity = null;
      this.currentIndex = -1;
    },

    setActiveActivity(activity, index) {
      this.currentActivity = activity;
      this.currentIndex = activity ? index : -1;
    },
    deleteActivity() {
      ActivityDataService.delete(this.currentActivity.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "activities" });
            this.refreshList();
          })
          .catch(e => {
            console.log(e);
          });
    },

    searchByCommissionName() {
      ActivityDataService.getByCommissionName(this.commissionName)
          .then(response => {
            this.activities = response.data;
            this.setActiveActivity(null);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.retrieveActivities();
    this.retrieveCommissions();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>