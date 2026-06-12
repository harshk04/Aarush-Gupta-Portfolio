import { useEffect, useState } from 'react';

import { internshipService } from '../services/internshipService.ts';

export const useInternships = () => {
  const [internships, setInternships] = useState(() => internshipService.list());

  useEffect(() => internshipService.subscribe(setInternships), []);

  return internships;
};

