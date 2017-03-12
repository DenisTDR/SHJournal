export interface EntryModel {
  name: string,
  type: string,
  date?: Date,
  isMonthly?: boolean,
  completed?: boolean,
  id?: string,
  description?:string,
  isInCalendar?: string
}
