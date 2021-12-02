<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by idCommission"
               v-model="activity"/>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button"
                  @click="searchByIdCommission"
          >
            Search
          </button>
        </div>
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
          {{ activity.id }}
        </li>
      </ul>

    </div>
    <div class="col-md-6">
      <div v-if="currentActivity">
        <h4>Attività</h4>
        <div>
          <label><strong>Id:</strong></label> {{ currentActivity.id }}
        </div>
        <div>
          <label><strong>Data:</strong></label> {{ currentActivity.date}}
        </div>
        <div>
          <label><strong>Tempo:</strong></label> {{ currentActivity.time}}
        </div>
        <div>
          <label><strong>Id commessa:</strong></label> {{ currentActivity.idCommission}}
        </div>
        <div>
          <label><strong>Id lavorazione:</strong></label> {{ currentActivity.idManufacturing}}
        </div>
        <div>
          <label><strong>Notes:</strong></label> {{ currentActivity.notes }}
        </div>

        <router-link :to="'/activities/' + currentActivity.id" class="badge badge-warning">Edit</router-link>
      </div>
      <div v-else>
        <br />
        <p>Please click on an Activity...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ActivityDataService from "../services/ActivityDataService";

export default {
  name: "activities-list",
  data() {
    return {
      activities: [],
      currentActivity: null,
      currentIndex: -1,
      activity: ""
    };
  },
  methods: {
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

    searchByIdCommission() {
      ActivityDataService.getByIdCommission(this.activity)
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