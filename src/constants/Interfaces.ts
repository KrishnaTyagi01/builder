export interface PersonalData {
  name: string;
  designation: string;
  email: string;
  country: string;
  phoneNumber: string;
  cobjective: string;
}

export interface Experience {
  designation: string;
  company: string;
  experience: string;
  startDate: Date | undefined | string;
  endDate: Date | undefined | string;
  description: string;
}

export interface Education {
  institution: string;
  major: string;
  startDate: string;
  endDate: string;
}
