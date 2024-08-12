export type NavlinksType = {
  href: string;
  title: string;
  icon: React.ReactNode;
};

export type FormInputType = {
  title: string;
  type: string;
  label?: string;
  defaultValue?: string;
};

export type FormSelectType = {
  title: string;
  defaultValue?: string;
  label?: string;
  selectItem: string[];
};

export type JobType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  clerkId: string;
  position: string;
  company: string;
  location: string;
  status: string;
  mode: string;
};
