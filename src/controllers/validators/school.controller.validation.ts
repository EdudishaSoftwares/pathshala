import { phoneNumberRegex, postalCode } from '@/constants/common.constants';
import { z } from 'zod';

class SchoolValidators {
  // Zod schema for school address
  private addressSchema = z.object({
    line1: z.string({ required_error: 'Address line 1 is required.' }),
    line2: z.string().optional(),
    city: z.string({ required_error: 'City is required.' }),
    state: z.string({ required_error: 'State is required.' }),
    postalCode: z.string().regex(new RegExp(postalCode), 'Postal code must be a 6-digit number.'),
  });

  // Zod schema for contact information
  private contactInfoSchema = z.object({
    phone: z
      .array(z.string().regex(new RegExp(phoneNumberRegex), 'Phone numbers must be valid.'))
      .min(1, 'At least one contact phone number is required.'),
    email: z.array(z.string().email('Each contact email must be valid.')).min(1, 'At least one contact email is required.'),
  });

  // Zod schema for the entire school object
  public createSchoolSchema = z.object({
    name: z.string({ required_error: 'School name is required.' }),
    address: this.addressSchema,
    boardAffiliation: z.enum(['CBSE', 'ICSE', 'State', 'International']),
    boardAffiliationNumber: z.string({ required_error: 'Affiliation Number is required.' }),
    establishmentYear: z
      .number()
      .min(1800, 'Establishment year must be a valid year.')
      .max(new Date().getFullYear(), 'Establishment year cannot be in the future.'),
    contactInfo: this.contactInfoSchema,
    principalName: z.string({ required_error: 'Principal name is required.' }),
    domain: z.string({ required_error: 'Domain name is required.' }),
  });

  public getSchoolDetailsQuerySchema = z.object({
    _id: z.string().optional(),
    name: z.string().optional(),
    domain: z.string().optional(),
  });
}

export default new SchoolValidators();
