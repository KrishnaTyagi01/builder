export interface PersonalData {
  name: string;
  designation: string;
  email: string;
  country: string;
  phoneNumber: string;
  cobjective: string;
}

export interface Experience {
  id: string;
  designation: string;
  company: string;
  experience: string;
  startDate: Date | undefined | string;
  endDate: Date | undefined | string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  major: string;
  startDate: string;
  endDate: string;
}
