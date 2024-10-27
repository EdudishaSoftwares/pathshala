import { getSchoolDetailsRequestQuery } from '@/controllers/typings/school.controller';
import { ISchool } from '@/models/school.model';
import { Document } from 'mongoose';

export type ISchoolDetails = Omit<ISchool, keyof Document>;
export type getSchoolDetailsRequestObject = {
  identifier: getSchoolDetailsRequestQuery;
};
