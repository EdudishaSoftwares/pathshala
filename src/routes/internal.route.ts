// Modules
import { Router } from 'express';
// Controllers
import SchoolController from '@/controllers/school.controller';
// Interfaces
import { Routes } from '@/interfaces/routes.interface';
// Middlewares
import ValidatorMiddleware from '@/middlewares/validator.middleware';
import ParseQueryMiddleware from '@/middlewares/query.middleware';
// Validators
import SchoolValidators from '@/controllers/validators/school.controller.validation';
// Utils
import { asyncWrapper } from '@/utils/util';

class ExternalRoute implements Routes {
  public path = '/api/v1/internal';
  public router = Router();

  // Middlewares
  private validatorMiddleware = new ValidatorMiddleware();
  private parseQueryMiddleware = new ParseQueryMiddleware();
  // Controllers
  private schoolController = new SchoolController();
  // Validators
  private schoolValidators = SchoolValidators;

  constructor() {
    this.initializeSchoolRoutes(`${this.path}/school`);
  }

  private initializeSchoolRoutes(prefix: string) {
    //API FOR CREATING SCHOOLS
    this.router.post(
      `${prefix}/create`,
      this.validatorMiddleware.validateRequestBody(this.schoolValidators.createSchoolSchema),
      asyncWrapper(this.schoolController.createSchool),
    );

    //API FOR RETURNING SCHOOL DETAILS
    this.router.get(
      `${prefix}/`,
      this.parseQueryMiddleware.parse,
      this.validatorMiddleware.validateRequestQuery(this.schoolValidators.getSchoolDetailsQuerySchema),
      asyncWrapper(this.schoolController.getSchoolDetails),
    );
  }
}

export default ExternalRoute;
