type ComponentType = "V" | "S" | "M";
const SaveRolls = {
  STR: "strength",
  DEX: "dexterity",
  CON: "constitution",
  INT: "intelligence",
  WIS: "wisdom",
  CHA: "charisma",
};

export interface DamageDetails {
  damage: string;
  level: number;
}
export interface HealingDetails {
  healing: string;
  level: number;
}

export type DamageType = {
  damage_at_character_level: DamageDetails[] | null;
  damage_at_slot_level: DamageDetails[] | null;
  damage_type: {
    name: string;
  };
} | null;

export type DC = {
  type: {
    name: keyof typeof SaveRolls;
  };
  success: string;
} | null;

export interface Spell {
  index: string;
  area_of_effect: {
    size: number;
    type: string;
  } | null;
  attack_type: string | null;
  casting_time: string;
  classes: {
    name:
      | "Bard"
      | "Cleric"
      | "Druid"
      | "Paladin"
      | "Ranger"
      | "Sorcerer"
      | "Warlock"
      | "Wizard";
  }[];
  components: ComponentType[];
  concentration: boolean;
  damage: DamageType;
  dc: DC;
  desc: string[];
  duration: string;
  heal_at_slot_level: HealingDetails[] | null;
  higher_level: string[] | null;
  level: number;
  material: string | null;
  name: string;
  range: string;
  ritual: boolean;
  school: {
    name: string;
    index: string;
  };
}

export interface LowDetailsSpell {
  index: string;
  casting_time: string;
  classes: {
    name:
      | "Bard"
      | "Cleric"
      | "Druid"
      | "Paladin"
      | "Ranger"
      | "Sorcerer"
      | "Warlock"
      | "Wizard";
  }[];
  components: ComponentType[];
  concentration: boolean;
  desc: string[];
  duration: string;
  level: number;
  name: string;
  range: string;
  ritual: boolean;
  school: {
    name: string;
    index: string;
  };
}
