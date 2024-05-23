import { z } from 'zod';

const wordSchema = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
  contactNo: z.string().min(1, { message: 'Contact number is required' }),
  emergencyContactNo: z.string(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
});

export default wordSchema;
