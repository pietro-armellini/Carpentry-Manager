<template>
  <div class="list row">
    <div class="col-md-8">
      <h4 for="commessa">Filter by commission</h4>
      <div class="input-group mb-3">
        <div class="input-group-append">
          <select class="form-control"
                  id="commessa"
                  v-model="commissionName"
                  name="commessa"
                  @change=searchByCommissionName
          >
            <option selected value="-1">All commissions</option>
            <option v-for="option in commissions" :value="option.value" :key="option.value">
              {{ option.text }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Activity List</h4>
      <ul class="list-group">
        <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(activity, index) in activities"
            :key="index"
            @click="setActiveActivity(activity, index)"
        >
          {{ "#"+activity.id + " - " + activity.manufactureName }}
        </li>
      </ul>

      <br>
    </div>
    <div class="col-md-6">
      <div v-if="currentActivity">
        <h4>Activity</h4>
        <div>
          <label><strong>Id:</strong> {{ "#"+currentActivity.id }}</label>
        </div>
        <div>
          <label><strong>Date:</strong> {{ currentActivity.date}}</label>
        </div>
        <div>
          <label><strong>Time:</strong> {{ currentActivity.time + " minutes"}}</label>
        </div>
        <div>
          <label><strong>Commission:</strong> {{ currentActivity.commissionName}}</label>
        </div>
        <div>
          <label><strong>Manufacture:</strong> {{ currentActivity.manufactureName}}</label>
        </div>
        <div>
          <label><strong>Notes:</strong> {{ currentActivity.notes }}</label>
        </div>
        <br>

        <div style="display:table; margin:0 auto;">
          <span style="padding:30px;"><router-link :to="'/activities/' + currentActivity.id" class="badge badge-warning text-white" style="padding:5px; background-color:#9C9C5C;">
            Edit<img src="../assets/edit_icon.png"></router-link></span>
          <span style="padding:5px; background-color:#7F5353;" type="submit" class="badge badge-danger text-white" @click="deleteActivity">
            Remove<img src="../assets/delete_icon.png">
          </span>
        </div>
      </div>
      <div v-else>
        <br />
        <p>Click on an activity to view its details</p>
      </div>
      <br>
    </div>
  </div>
</template>

<style type="text/css">
  li.active {
    color: #ECEEDB !important;
    background-color: #656659 !important;
    border-color: white !important;
  }
</style>

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