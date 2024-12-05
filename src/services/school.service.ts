// Dao
import SchoolDAO from '@/dao/school.dao';
// Typings
import { ISchoolDetails } from '@/typings/school';

class SchoolService {
  private schoolDAO = new SchoolDAO();

  /**
   * Manages the creation of a new school.
   * - Validates input and uses SchoolDAO to create a new school entry in the database.
   * @param schoolData - Object containing all the details of the school.
   * @returns The newly created school object if successful, or an error message if not.
   */
  public async createSchool(schoolData: ISchoolDetails) {
    // Create a new school record
    return await this.schoolDAO.createSchool(schoolData);
  }

  /**
   * Retrieves school details based on multiple identifier criteria.
   * @param identifiers - An object containing key-value pairs of identifiers (e.g., domain, _id, name).
   * @returns The school details if a matching school is found.
   */
  public async getSchoolDetails(identifiers: Record<string, string>) {
    // Find and return School Details
    return await this.schoolDAO.findSchoolByIdentifiers(identifiers);
  }
}

export default SchoolService;
