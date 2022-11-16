type ComponentType = "V" | "S" | "M";

export interface Spell {
  index: string;
  area_of_effect: {
    size: number;
    type: string;
  } | null;
  attack_type: string | null;
  casting_time: string;
  classes: {
    name: string;
  }[];
  components: ComponentType[];
  concentration: boolean;
  damage: {
    damage_at_character_level:
      | {
          damage: string;
          level: number;
        }[]
      | null;
    damage_at_slot_level:
      | {
          damage: string;
          level: number;
        }[]
      | null;
    damage_type: {
      name: string;
    };
  } | null;
  dc: {
    type: {
      name: string;
    };
    success: string;
  } | null;
  desc: string[];
  duration: string;
  heal_at_slot_level:
    | {
        healing: string;
        level: number;
      }[]
    | null;
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
