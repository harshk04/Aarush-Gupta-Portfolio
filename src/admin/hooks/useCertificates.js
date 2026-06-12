import { useEffect, useState } from 'react';

import { certificateService } from '../services/certificateService.ts';

export const useCertificates = () => {
  const [certificates, setCertificates] = useState(() => certificateService.list());

  useEffect(() => certificateService.subscribe(setCertificates), []);

  return certificates;
};

