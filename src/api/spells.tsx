import { ListResponses } from 'interfaces/ListResponses'
import { Spell } from 'interfaces/Spell'
import Fetch from 'utils/fetch'

export const getAllSpells = (): Promise<ListResponses<Spell> => {
  return Fetch.get(url: 'spells')
}