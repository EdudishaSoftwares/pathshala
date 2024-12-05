/**
 * All all entry-point typings for request body of controller using their validators here
 */

import SchoolValidators from '@/controllers/validators/school.controller.validation';
import { z } from 'zod';

/**
 * naming convention - {controller_method_name_in_camelCase}${RequestBody/RequestParams/RequestQuery}
 */
export type createSchoolRequestBody = z.infer<typeof SchoolValidators.createSchoolSchema>;
export type getSchoolDetailsRequestQuery = z.infer<typeof SchoolValidators.getSchoolDetailsQuerySchema>;
