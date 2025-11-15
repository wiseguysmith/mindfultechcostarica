'use client';

import { useEffect, useState } from 'react';
import ImpactSection from './ImpactSection';

interface Organization {
  id: string;
  name: string;
  country: string;
  verified: boolean;
  wallet_address: string;
}

interface ImpactSectionWithDataProps {
  region: 'cr' | 'us';
  title: string;
  description: string;
  wallet: string;
}

export default function ImpactSectionWithData(props: ImpactSectionWithDataProps) {
  const [orgs, setOrgs] = useState<Organization[]>([]);

  useEffect(() => {
    // Only fetch on client side
    if (typeof window === 'undefined') return;
    
    fetch(`/api/organizations?region=${props.region}`)
      .then(res => res.json())
      .then(data => {
        setOrgs(data.organizations || []);
      })
      .catch(err => {
        console.error('Error loading organizations:', err);
      });
  }, [props.region]);

  return <ImpactSection {...props} orgs={orgs} />;
}

