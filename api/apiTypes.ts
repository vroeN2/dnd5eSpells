export interface SpellsListResponse {
  count: number;
  results: SpellsList[];
}

export interface SpellsList {
  index: string;
  name: string;
  url: string;
}

export interface SingleSpell {
  _id: string;
  index: string;
  name: string;
  desc: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type: string;
  damage: Damage;
  school: School;
  classes: School[];
  subclasses: School[];
  url: string;
}

export interface School {
  index: string;
  name: string;
  url: string;
}

export interface Damage {
  damage_type: School;
  damage_at_slot_level: { [key: string]: string };
}
