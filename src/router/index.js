import { createRouter, createWebHistory } from "vue-router";
import CharactersList from "../components/CharactersList.vue";
import WeaponsList from "../components/WeaponsList.vue";
import TierList from "../components/TierList.vue";
import TeamComps from "../components/TeamComps.vue";
import CharacterDetails from "../components/CharacterDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/characters", component: CharactersList },
    { path: "/weapons", component: WeaponsList },
    { path: "/tier-list", component: TierList },
    { path: "/team-comps", component: TeamComps },
    { path: "/", redirect: "/characters" },
    { path: "/characters/:name", component: CharacterDetails, props: true },
  ],
});

export default router;
