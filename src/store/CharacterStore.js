import { defineStore } from "pinia";
import genshinDB from "genshin-db";

export const useCharacterStore = defineStore("CharacterStore", {
  state: () => ({
    characters: genshinDB.characters("names", {
      matchCategories: true,
      verboseCategories: true,
    }),
    filtered: false,
    filterConditions: {
      weaponType: undefined,
      element: undefined,
      rarity: undefined,
    },
    simplifiedCharacters: [
      {
        name: "Albedo",
        rarity: "5",
        element: "Geo",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Albedo.png",
        tier: "s",
        constellation: 0,
      },
      {
        name: "Alhaitham",
        rarity: "5",
        element: "Dendro",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Alhatham.png",
        tier: "ss",
        constellation: 0,
      },
      {
        name: "Aloy",
        rarity: "5",
        element: "Cryo",
        weaponType: "Bow",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Aloy.png",
        tier: "c",
        constellation: 0,
      },
      {
        name: "Amber",
        rarity: "4",
        element: "Pyro",
        weaponType: "Bow",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ambor.png",
        tier: "c",
        constellation: 6,
      },
      {
        name: "Arataki Itto",
        rarity: "5",
        element: "Geo",
        weaponType: "Claymore",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Itto.png",
        tier: "a",
        constellation: 2,
      },
      {
        name: "Baizhu",
        rarity: "5",
        element: "Dendro",
        weaponType: "Catalyst",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Baizhuer.png",
        tier: "s",
        constellation: 0,
      },
      {
        name: "Barbara",
        rarity: "4",
        element: "Hydro",
        weaponType: "Catalyst",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Barbara.png",
        tier: "b",
        constellation: 2,
      },
      {
        name: "Beidou",
        rarity: "4",
        element: "Electro",
        weaponType: "Claymore",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Beidou.png",
        tier: "a",
        constellation: 4,
      },
      {
        name: "Bennett",
        rarity: "4",
        element: "Pyro",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Bennett.png",
        tier: "ss",
        constellation: 1,
      },
      {
        name: "Candace",
        rarity: "4",
        element: "Hydro",
        weaponType: "Polearm",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Candace.png",
        tier: "b",
        constellation: 2,
      },
      {
        name: "Chongyun",
        rarity: "4",
        element: "Cryo",
        weaponType: "Claymore",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Chongyun.png",
        tier: "c",
        constellation: 2,
      },
      {
        name: "Collei",
        rarity: "4",
        element: "Dendro",
        weaponType: "Bow",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Collei.png",
        tier: "b",
        constellation: 2,
      },
      {
        name: "Cyno",
        rarity: "5",
        element: "Electro",
        weaponType: "Polearm",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Cyno.png",
        tier: "a",
        constellation: 2,
      },
      {
        name: "Dehya",
        rarity: "5",
        element: "Pyro",
        weaponType: "Claymore",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Dehya.png",
        tier: "c",
        constellation: 0,
      },
      {
        name: "Diluc",
        rarity: "5",
        element: "Pyro",
        weaponType: "Claymore",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
        tier: "b",
        constellation: 0,
      },
      {
        name: "Diona",
        rarity: "4",
        element: "Cryo",
        weaponType: "Bow",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diona.png",
        tier: "s",
        constellation: 6,
      },
      {
        name: "Dori",
        rarity: "4",
        element: "Electro",
        weaponType: "Claymore",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Dori.png",
        tier: "c",
        constellation: 4,
      },
      {
        name: "Eula",
        rarity: "5",
        element: "Cryo",
        weaponType: "Claymore",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Eula.png",
        tier: "b",
        constellation: 2,
      },
      {
        name: "Faruzan",
        rarity: "4",
        element: "Anemo",
        weaponType: "Bow",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Faruzan.png",
        tier: "s",
        constellation: 6,
      },
      {
        name: "Fischl",
        rarity: "4",
        element: "Electro",
        weaponType: "Bow",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
        tier: "s",
        constellation: 6,
      },
      {
        name: "Ganyu",
        rarity: "5",
        element: "Cryo",
        weaponType: "Bow",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
        tier: "s",
        constellation: 1,
      },
      {
        name: "Gorou",
        rarity: "4",
        element: "Geo",
        weaponType: "Bow",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Gorou.png",
        tier: "a",
        constellation: 6,
      },
      {
        name: "Hu Tao",
        rarity: "5",
        element: "Pyro",
        weaponType: "Polearm",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Hutao.png",
        tier: "ss",
        constellation: 1,
      },
      {
        name: "Jean",
        rarity: "5",
        element: "Anemo",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qin.png",
        tier: "s",
        constellation: 2,
      },
      {
        name: "Kaedehara Kazuha",
        rarity: "5",
        element: "Anemo",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Kazuha.png",
        tier: "ss",
        constellation: 0,
      },
      {
        name: "Kaeya",
        rarity: "4",
        element: "Cryo",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Kaeya.png",
        tier: "b",
        constellation: 2,
      },
      {
        name: "Kamisato Ayaka",
        rarity: "5",
        element: "Cryo",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
        tier: "ss",
        constellation: 0,
      },
      {
        name: "Kamisato Ayato",
        rarity: "5",
        element: "Hydro",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayato.png",
        tier: "s",
        constellation: 0,
      },
      {
        name: "Kaveh",
        rarity: "4",
        element: "Dendro",
        weaponType: "Claymore",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Kaveh.png",
        tier: "a",
        constellation: 1,
      },
      {
        name: "Keqing",
        rarity: "5",
        element: "Electro",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Keqing.png",
        tier: "a",
        constellation: 1,
      },
      {
        name: "Klee",
        rarity: "5",
        element: "Pyro",
        weaponType: "Catalyst",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Klee.png",
        tier: "b",
        constellation: 0,
      },
      {
        name: "Kujou Sara",
        rarity: "4",
        element: "Electro",
        weaponType: "Bow",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Sara.png",
        tier: "s",
        constellation: 6,
      },
      {
        name: "Kuki Shinobu",
        rarity: "4",
        element: "Electro",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shinobu.png",
        tier: "s",
        constellation: 4,
      },
      {
        name: "Layla",
        rarity: "4",
        element: "Cryo",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Layla.png",
        tier: "a",
        constellation: 4,
      },
      {
        name: "Lisa",
        rarity: "4",
        element: "Electro",
        weaponType: "Catalyst",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Lisa.png",
        tier: "b",
        constellation: 4,
      },
      {
        name: "Mika",
        rarity: "4",
        element: "Cryo",
        weaponType: "Polearm",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Mika.png",
        tier: "a",
        constellation: 6,
      },
      {
        name: "Mona",
        rarity: "5",
        element: "Hydro",
        weaponType: "Catalyst",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Mona.png",
        tier: "s",
        constellation: 0,
      },
      {
        name: "Nahida",
        rarity: "5",
        element: "Dendro",
        weaponType: "Catalyst",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Nahida.png",
        tier: "ss",
        constellation: 0,
      },
      {
        name: "Nilou",
        rarity: "5",
        element: "Hydro",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Nilou.png",
        tier: "s",
        constellation: 2,
      },
      {
        name: "Ningguang",
        rarity: "4",
        element: "Geo",
        weaponType: "Catalyst",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ningguang.png",
        tier: "b",
        constellation: 4,
      },
      {
        name: "Noelle",
        rarity: "4",
        element: "Geo",
        weaponType: "Claymore",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Noel.png",
        tier: "b",
        constellation: 1,
      },
      {
        name: "Qiqi",
        rarity: "5",
        element: "Cryo",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
        tier: "b",
        constellation: 0,
      },
      {
        name: "Raiden Shogun",
        rarity: "5",
        element: "Electro",
        weaponType: "Polearm",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shougun.png",
        tier: "ss",
        constellation: 2,
      },
      {
        name: "Razor",
        rarity: "4",
        element: "Electro",
        weaponType: "Claymore",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Razor.png",
        tier: "c",
        constellation: 4,
      },
      {
        name: "Rosaria",
        rarity: "4",
        element: "Cryo",
        weaponType: "Polearm",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Rosaria.png",
        tier: "c",
        constellation: 6,
      },
      {
        name: "Sangonomiya Kokomi",
        rarity: "5",
        element: "Hydro",
        weaponType: "Catalyst",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Kokomi.png",
        tier: "ss",
        constellation: 0,
      },
      {
        name: "Sayu",
        rarity: "4",
        element: "Anemo",
        weaponType: "Claymore",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Sayu.png",
        tier: "b",
        constellation: 1,
      },
      {
        name: "Shenhe",
        rarity: "5",
        element: "Cryo",
        weaponType: "Polearm",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
        tier: "s",
        constellation: 2,
      },
      {
        name: "Shikanoin Heizou",
        rarity: "4",
        element: "Anemo",
        weaponType: "Catalyst",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Heizo.png",
        tier: "b",
        constellation: 3,
      },
      {
        name: "Sucrose",
        rarity: "4",
        element: "Anemo",
        weaponType: "Catalyst",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Sucrose.png",
        tier: "s",
        constellation: 2,
      },
      {
        name: "Tartaglia",
        rarity: "5",
        element: "Hydro",
        weaponType: "Bow",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Tartaglia.png",
        tier: "s",
        constellation: 0,
      },
      {
        name: "Thoma",
        rarity: "4",
        element: "Pyro",
        weaponType: "Polearm",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Tohma.png",
        tier: "b",
        constellation: 6,
      },
      {
        name: "Tighnari",
        rarity: "5",
        element: "Dendro",
        weaponType: "Bow",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Tighnari.png",
        tier: "s",
        constellation: 2,
      },
      {
        name: "Venti",
        rarity: "5",
        element: "Anemo",
        weaponType: "Bow",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
        tier: "s",
        constellation: 0,
      },
      {
        name: "Wanderer",
        rarity: "5",
        element: "Anemo",
        weaponType: "Catalyst",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Wanderer.png",
        tier: "a",
        constellation: 0,
      },
      {
        name: "Xiangling",
        rarity: "4",
        element: "Pyro",
        weaponType: "Polearm",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiangling.png",
        tier: "ss",
        constellation: 4,
      },
      {
        name: "Xiao",
        rarity: "5",
        element: "Anemo",
        weaponType: "Polearm",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
        tier: "a",
        constellation: 1,
      },
      {
        name: "Xingqiu",
        rarity: "4",
        element: "Hydro",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xingqiu.png",
        tier: "ss",
        constellation: 6,
      },
      {
        name: "Xinyan",
        rarity: "4",
        element: "Pyro",
        weaponType: "Claymore",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xinyan.png",
        tier: "c",
        constellation: 2,
      },
      {
        name: "Yae Miko",
        rarity: "5",
        element: "Electro",
        weaponType: "Catalyst",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Yae.png",
        tier: "s",
        constellation: 2,
      },
      {
        name: "Yanfei",
        rarity: "4",
        element: "Pyro",
        weaponType: "Catalyst",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Feiyan.png",
        tier: "b",
        constellation: 2,
      },
      {
        name: "Yaoyao",
        rarity: "4",
        element: "Dendro",
        weaponType: "Polearm",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Yaoyao.png",
        tier: "a",
        constellation: 2,
      },
      {
        name: "Yelan",
        rarity: "5",
        element: "Hydro",
        weaponType: "Bow",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Yelan.png",
        tier: "ss",
        constellation: 0,
      },
      {
        name: "Yoimiya",
        rarity: "5",
        element: "Pyro",
        weaponType: "Bow",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Yoimiya.png",
        tier: "a",
        constellation: 0,
      },
      {
        name: "Yun Jin",
        rarity: "4",
        element: "Geo",
        weaponType: "Polearm",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Yunjin.png",
        tier: "a",
        constellation: 6,
      },
      {
        name: "Zhongli",
        rarity: "5",
        element: "Geo",
        weaponType: "Polearm",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Zhongli.png",
        tier: "ss",
        constellation: 0,
      },
      {
        name: "Dendro Traveler",
        rarity: "5",
        element: "Dendro",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_PlayerBoy.png",
        tier: "b",
        constellation: 6,
      },
      {
        name: "Anemo Traveler",
        rarity: "5",
        element: "Anemo",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_PlayerBoy.png",
        tier: "c",
        constellation: 6,
      },
      {
        name: "Geo Traveler",
        rarity: "5",
        element: "Geo",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_PlayerBoy.png",
        tier: "c",
        constellation: 6,
      },
      {
        name: "Electro Traveler",
        rarity: "5",
        element: "Dendro",
        weaponType: "Sword",
        image:
          "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_PlayerBoy.png",
        tier: "b",
        constellation: 6,
      },
    ],
  }),
  getters: {
    charactersList: (state) => {
      let characters = state.simplifiedCharacters;

      if (state.filtered) {
        for (const [key, value] of Object.entries(state.filterConditions)) {
          console.log(key, value);
          if (key === "element" && value) {
            characters = characters.filter(
              (character) => character.element === value
            );
          } else if (key === "weaponType" && value) {
            characters = characters.filter(
              (character) => character.weaponType === value
            );
          } else if (key === "rarity" && value) {
            characters = characters.filter(
              (character) => character.rarity == value
            );
          }
        }
        return characters;
      } else {
        return characters;
      }
    },
  },
  actions: {
    filter(payload) {
      if (payload.specificity === "Five Stars") {
        payload.specificity = 5;
      } else if (payload.specificity === "Four Stars") {
        payload.specificity = 4;
      }
      if (payload.type == "weapon") {
        this.filtered = true;
        payload.specificity == this.filterConditions.weaponType
          ? (this.filterConditions.weaponType = undefined)
          : (this.filterConditions.weaponType = payload.specificity);
      }
      if (payload.type == "element") {
        this.filtered = true;

        payload.specificity == this.filterConditions.element
          ? (this.filterConditions.element = undefined)
          : (this.filterConditions.element = payload.specificity);
      }
      if (payload.type == "rarity") {
        this.filtered = true;

        payload.specificity == this.filterConditions.rarity
          ? (this.filterConditions.rarity = undefined)
          : (this.filterConditions.rarity = payload.specificity);
      }
      // payload.specificity == this.filterConditions.specificity
      //   ? (this.filterType = { type: 0, specificity: 0 })
      //   : (this.filterType = payload);
    },
  },
});
// simplifiedCharacters: genshinDB
// .characters("names", {
//   matchCategories: true,
//   verboseCategories: true,
// })
// .map((character) => ({
//   name: character.name,
//   rarity: character.rarity,
//   element: character.element,
//   weaponType: character.weapontype,
//   image: character.images.icon,
// })),
// charactersTierList: [
// {
//   name: "Albedo",
//   rarity: "5",
//   element: "Geo",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Albedo.png",
//   tier: "s",
//   constellation: 0,
// },
// {
//   name: "Alhaitham",
//   rarity: "5",
//   element: "Dendro",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Alhatham.png",
//   tier: "ss",
//   constellation: 0,
// },
// {
//   name: "Aloy",
//   rarity: "5",
//   element: "Cryo",
//   weaponType: "Bow",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Aloy.png",
//   tier: "c",
//   constellation: 0,
// },
// {
//   name: "Amber",
//   rarity: "4",
//   element: "Pyro",
//   weaponType: "Bow",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ambor.png",
//   tier: "c",
//   constellation: 6,
// },
// {
//   name: "Arataki Itto",
//   rarity: "5",
//   element: "Geo",
//   weaponType: "Claymore",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Itto.png",
//   tier: "a",
//   constellation: 2,
// },
// {
//   name: "Baizhu",
//   rarity: "5",
//   element: "Dendro",
//   weaponType: "Catalyst",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Baizhuer.png",
//   tier: "s",
//   constellation: 0,
// },
// {
//   name: "Barbara",
//   rarity: "4",
//   element: "Hydro",
//   weaponType: "Catalyst",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Barbara.png",
//   tier: "b",
//   constellation: 2,
// },
// {
//   name: "Beidou",
//   rarity: "4",
//   element: "Electro",
//   weaponType: "Claymore",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Beidou.png",
//   tier: "a",
//   constellation: 4,
// },
// {
//   name: "Bennett",
//   rarity: "4",
//   element: "Pyro",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Bennett.png",
//   tier: "ss",
//   constellation: 1,
// },
// {
//   name: "Candace",
//   rarity: "4",
//   element: "Hydro",
//   weaponType: "Polearm",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Candace.png",
//   tier: "b",
//   constellation: 2,
// },
// {
//   name: "Chongyun",
//   rarity: "4",
//   element: "Cryo",
//   weaponType: "Claymore",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Chongyun.png",
//   tier: "c",
//   constellation: 2,
// },
// {
//   name: "Collei",
//   rarity: "4",
//   element: "Dendro",
//   weaponType: "Bow",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Collei.png",
//   tier: "b",
//   constellation: 2,
// },
// {
//   name: "Cyno",
//   rarity: "5",
//   element: "Electro",
//   weaponType: "Polearm",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Cyno.png",
//   tier: "a",
//   constellation: 2,
// },
// {
//   name: "Dehya",
//   rarity: "5",
//   element: "Pyro",
//   weaponType: "Claymore",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Dehya.png",
//   tier: "c",
//   constellation: 0,
// },
// {
//   name: "Diluc",
//   rarity: "5",
//   element: "Pyro",
//   weaponType: "Claymore",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diluc.png",
//   tier: "b",
//   constellation: 0,
// },
// {
//   name: "Diona",
//   rarity: "4",
//   element: "Cryo",
//   weaponType: "Bow",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Diona.png",
//   tier: "s",
//   constellation: 6,
// },
// {
//   name: "Dori",
//   rarity: "4",
//   element: "Electro",
//   weaponType: "Claymore",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Dori.png",
//   tier: "c",
//   constellation: 4,
// },
// {
//   name: "Eula",
//   rarity: "5",
//   element: "Cryo",
//   weaponType: "Claymore",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Eula.png",
//   tier: "b",
//   constellation: 2,
// },
// {
//   name: "Faruzan",
//   rarity: "4",
//   element: "Anemo",
//   weaponType: "Bow",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Faruzan.png",
//   tier: "s",
//   constellation: 6,
// },
// {
//   name: "Fischl",
//   rarity: "4",
//   element: "Electro",
//   weaponType: "Bow",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Fischl.png",
//   tier: "s",
//   constellation: 6,
// },
// {
//   name: "Ganyu",
//   rarity: "5",
//   element: "Cryo",
//   weaponType: "Bow",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ganyu.png",
//   tier: "s",
//   constellation: 1,
// },
// {
//   name: "Gorou",
//   rarity: "4",
//   element: "Geo",
//   weaponType: "Bow",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Gorou.png",
//   tier: "a",
//   constellation: 6,
// },
// {
//   name: "Hu Tao",
//   rarity: "5",
//   element: "Pyro",
//   weaponType: "Polearm",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Hutao.png",
//   tier: "ss",
//   constellation: 1,
// },
// {
//   name: "Jean",
//   rarity: "5",
//   element: "Anemo",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qin.png",
//   tier: "s",
//   constellation: 2,
// },
// {
//   name: "Kaedehara Kazuha",
//   rarity: "5",
//   element: "Anemo",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Kazuha.png",
//   tier: "ss",
//   constellation: 0,
// },
// {
//   name: "Kaeya",
//   rarity: "4",
//   element: "Cryo",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Kaeya.png",
//   tier: "b",
//   constellation: 2,
// },
// {
//   name: "Kamisato Ayaka",
//   rarity: "5",
//   element: "Cryo",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayaka.png",
//   tier: "ss",
//   constellation: 0,
// },
// {
//   name: "Kamisato Ayato",
//   rarity: "5",
//   element: "Hydro",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ayato.png",
//   tier: "s",
//   constellation: 0,
// },
// {
//   name: "Kaveh",
//   rarity: "4",
//   element: "Dendro",
//   weaponType: "Claymore",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Kaveh.png",
//   tier: "a",
//   constellation: 1,
// },
// {
//   name: "Keqing",
//   rarity: "5",
//   element: "Electro",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Keqing.png",
//   tier: "a",
//   constellation: 1,
// },
// {
//   name: "Klee",
//   rarity: "5",
//   element: "Pyro",
//   weaponType: "Catalyst",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Klee.png",
//   tier: "b",
//   constellation: 0,
// },
// {
//   name: "Kujou Sara",
//   rarity: "4",
//   element: "Electro",
//   weaponType: "Bow",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Sara.png",
//   tier: "s",
//   constellation: 6,
// },
// {
//   name: "Kuki Shinobu",
//   rarity: "4",
//   element: "Electro",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shinobu.png",
//   tier: "s",
//   constellation: 4,
// },
// {
//   name: "Layla",
//   rarity: "4",
//   element: "Cryo",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Layla.png",
//   tier: "a",
//   constellation: 4,
// },
// {
//   name: "Lisa",
//   rarity: "4",
//   element: "Electro",
//   weaponType: "Catalyst",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Lisa.png",
//   tier: "b",
//   constellation: 4,
// },
// {
//   name: "Mika",
//   rarity: "4",
//   element: "Cryo",
//   weaponType: "Polearm",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Mika.png",
//   tier: "a",
//   constellation: 6,
// },
// {
//   name: "Mona",
//   rarity: "5",
//   element: "Hydro",
//   weaponType: "Catalyst",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Mona.png",
//   tier: "s",
//   constellation: 0,
// },
// {
//   name: "Nahida",
//   rarity: "5",
//   element: "Dendro",
//   weaponType: "Catalyst",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Nahida.png",
//   tier: "ss",
//   constellation: 0,
// },
// {
//   name: "Nilou",
//   rarity: "5",
//   element: "Hydro",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Nilou.png",
//   tier: "s",
//   constellation: 2,
// },
// {
//   name: "Ningguang",
//   rarity: "4",
//   element: "Geo",
//   weaponType: "Catalyst",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Ningguang.png",
//   tier: "b",
//   constellation: 4,
// },
// {
//   name: "Noelle",
//   rarity: "4",
//   element: "Geo",
//   weaponType: "Claymore",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Noel.png",
//   tier: "b",
//   constellation: 1,
// },
// {
//   name: "Qiqi",
//   rarity: "5",
//   element: "Cryo",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Qiqi.png",
//   tier: "b",
//   constellation: 0,
// },
// {
//   name: "Raiden Shogun",
//   rarity: "5",
//   element: "Electro",
//   weaponType: "Polearm",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shougun.png",
//   tier: "ss",
//   constellation: 2,
// },
// {
//   name: "Razor",
//   rarity: "4",
//   element: "Electro",
//   weaponType: "Claymore",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Razor.png",
//   tier: "c",
//   constellation: 4,
// },
// {
//   name: "Rosaria",
//   rarity: "4",
//   element: "Cryo",
//   weaponType: "Polearm",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Rosaria.png",
//   tier: "c",
//   constellation: 6,
// },
// {
//   name: "Sangonomiya Kokomi",
//   rarity: "5",
//   element: "Hydro",
//   weaponType: "Catalyst",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Kokomi.png",
//   tier: "ss",
//   constellation: 0,
// },
// {
//   name: "Sayu",
//   rarity: "4",
//   element: "Anemo",
//   weaponType: "Claymore",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Sayu.png",
//   tier: "b",
//   constellation: 1,
// },
// {
//   name: "Shenhe",
//   rarity: "5",
//   element: "Cryo",
//   weaponType: "Polearm",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Shenhe.png",
//   tier: "s",
//   constellation: 2,
// },
// {
//   name: "Shikanoin Heizou",
//   rarity: "4",
//   element: "Anemo",
//   weaponType: "Catalyst",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Heizo.png",
//   tier: "b",
//   constellation: 3,
// },
// {
//   name: "Sucrose",
//   rarity: "4",
//   element: "Anemo",
//   weaponType: "Catalyst",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Sucrose.png",
//   tier: "s",
//   constellation: 2,
// },
// {
//   name: "Tartaglia",
//   rarity: "5",
//   element: "Hydro",
//   weaponType: "Bow",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Tartaglia.png",
//   tier: "s",
//   constellation: 0,
// },
// {
//   name: "Thoma",
//   rarity: "4",
//   element: "Pyro",
//   weaponType: "Polearm",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Tohma.png",
//   tier: "b",
//   constellation: 6,
// },
// {
//   name: "Tighnari",
//   rarity: "5",
//   element: "Dendro",
//   weaponType: "Bow",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Tighnari.png",
//   tier: "s",
//   constellation: 2,
// },
// {
//   name: "Venti",
//   rarity: "5",
//   element: "Anemo",
//   weaponType: "Bow",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Venti.png",
//   tier: "s",
//   constellation: 0,
// },
// {
//   name: "Wanderer",
//   rarity: "5",
//   element: "Anemo",
//   weaponType: "Catalyst",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Wanderer.png",
//   tier: "a",
//   constellation: 0,
// },
// {
//   name: "Xiangling",
//   rarity: "4",
//   element: "Pyro",
//   weaponType: "Polearm",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiangling.png",
//   tier: "ss",
//   constellation: 4,
// },
// {
//   name: "Xiao",
//   rarity: "5",
//   element: "Anemo",
//   weaponType: "Polearm",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xiao.png",
//   tier: "a",
//   constellation: 1,
// },
// {
//   name: "Xingqiu",
//   rarity: "4",
//   element: "Hydro",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xingqiu.png",
//   tier: "ss",
//   constellation: 6,
// },
// {
//   name: "Xinyan",
//   rarity: "4",
//   element: "Pyro",
//   weaponType: "Claymore",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Xinyan.png",
//   tier: "c",
//   constellation: 2,
// },
// {
//   name: "Yae Miko",
//   rarity: "5",
//   element: "Electro",
//   weaponType: "Catalyst",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Yae.png",
//   tier: "s",
//   constellation: 2,
// },
// {
//   name: "Yanfei",
//   rarity: "4",
//   element: "Pyro",
//   weaponType: "Catalyst",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Feiyan.png",
//   tier: "b",
//   constellation: 2,
// },
// {
//   name: "Yaoyao",
//   rarity: "4",
//   element: "Dendro",
//   weaponType: "Polearm",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Yaoyao.png",
//   tier: "a",
//   constellation: 2,
// },
// {
//   name: "Yelan",
//   rarity: "5",
//   element: "Hydro",
//   weaponType: "Bow",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Yelan.png",
//   tier: "ss",
//   constellation: 0,
// },
// {
//   name: "Yoimiya",
//   rarity: "5",
//   element: "Pyro",
//   weaponType: "Bow",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Yoimiya.png",
//   tier: "a",
//   constellation: 0,
// },
// {
//   name: "Yun Jin",
//   rarity: "4",
//   element: "Geo",
//   weaponType: "Polearm",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Yunjin.png",
//   tier: "a",
//   constellation: 6,
// },
// {
//   name: "Zhongli",
//   rarity: "5",
//   element: "Geo",
//   weaponType: "Polearm",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_Zhongli.png",
//   tier: "ss",
//   constellation: 0,
// },
// {
//   name: "Dendro Traveler",
//   rarity: "5",
//   element: "Dendro",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_PlayerBoy.png",
//   tier: "b",
//   constellation: 6,
// },
// {
//   name: "Anemo Traveler",
//   rarity: "5",
//   element: "Anemo",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_PlayerBoy.png",
//   tier: "c",
//   constellation: 6,
// },
// {
//   name: "Geo Traveler",
//   rarity: "5",
//   element: "Geo",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_PlayerBoy.png",
//   tier: "c",
//   constellation: 6,
// },
// {
//   name: "Electro Traveler",
//   rarity: "5",
//   element: "Dendro",
//   weaponType: "Sword",
//   image:
//     "https://upload-os-bbs.mihoyo.com/game_record/genshin/character_icon/UI_AvatarIcon_PlayerBoy.png",
//   tier: "b",
//   constellation: 6,
// },
// ],
