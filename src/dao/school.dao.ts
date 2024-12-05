// Models
import { SchoolIdentifier } from '@/constants/enum';
import School, { ISchool } from '@/models/school.model';
// Typings
import { ISchoolDetails } from '@/typings/school';

class SchoolDAO {
  private school = School;

  /**
   * Creates a new school entry in the database.
   * @param schoolData - An object containing the necessary fields for creating a school.
   * @returns A promise that resolves to the newly created school document.
   */
  public async createSchool(schoolData: ISchoolDetails): Promise<ISchool> {
    return await this.school.create(schoolData);
  }

  /**
   * Find School in DB by given identifier type.
   * @param {SchoolIdentifier} key
   * @param {string} value
   * @returns
   */
  public async findSchoolByIdentifier(key: SchoolIdentifier, value: string): Promise<ISchool | null> {
    const query: Record<string, string> = {};
    query[key] = value;
    return this.school.findOne(query);
  }

  /**
   * Finds a school in the database based on multiple identifiers.
   * @param identifiers - A record of key-value pairs where each key is an identifier type,
   *     and each value is the corresponding identifier value.
   * @returns The school document if found, or null if no matching document is found.
   */
  public async findSchoolByIdentifiers(identifiers: Record<string, string>): Promise<ISchool | null> {
    return this.school.findOne(identifiers);
  }
}

export default SchoolDAO;
