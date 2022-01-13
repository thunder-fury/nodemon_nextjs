import moment from 'moment'
import { FIXME } from '../types/Any'
export const dateFormat = (date: Date): string => {
  return moment(date).format('YYYY-MM-DD')
}
