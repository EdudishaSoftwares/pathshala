// Modules
import { Router } from 'express';
// Controllers
import SchoolController from '@/controllers/school.controller';
// Interfaces
import { Routes } from '@/interfaces/routes.interface';
// Middlewares
import ValidatorMiddleware from '@/middlewares/validator.middleware';
// Validators
import { createSchoolSchema } from '@/controllers/validators/school.controller.validation';
// Utils
import { asyncWrapper } from '@/utils/util';

class ExternalRoute implements Routes {
  public path = '/api/v1/platform';
  public router = Router();

  // Middlewares
  private validatorMiddleware = new ValidatorMiddleware();
  // Controllers
  private schoolController = new SchoolController();

  constructor() {
    this.initializeSchoolRoutes(`${this.path}/school`);
  }

  private initializeSchoolRoutes(prefix: string) {
    this.router.post(
      `${prefix}/create`,
      this.validatorMiddleware.validateRequestBody(createSchoolSchema),
      asyncWrapper(this.schoolController.createSchool),
    );
  }
}

export default ExternalRoute;
