import {
  ActivitySubtype,
  ActivityType
} from 'constants/activities';

export interface IActivity {
  _id: string,
  activityId: string,
  docType: string,
  activityType: ActivityType,
  activitySubtype: ActivitySubtype,
  status: string,
  sync: {
    ready: boolean,
    status: string,
    error: string
  },
  dateCreated: Date,
  dateUpdated: Date,
  formData: any,
  formStatus: string
}
