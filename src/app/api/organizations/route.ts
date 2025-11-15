import { NextRequest, NextResponse } from 'next/server';

interface Organization {
  id: string;
  name: string;
  country: string;
  verified: boolean;
  wallet_address: string;
  mission?: string;
}

// Mock data - replace with Supabase queries
const mockOrganizations: Record<'cr' | 'us', Organization[]> = {
  cr: [
    {
      id: '1',
      name: 'Costa Rica Ocean Conservation Society',
      country: 'Costa Rica',
      verified: true,
      wallet_address: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1',
      mission: 'Protecting marine ecosystems and educating coastal communities',
    },
    {
      id: '2',
      name: 'Tamarindo Tech Education Fund',
      country: 'Costa Rica',
      verified: true,
      wallet_address: '0x8ba1f109551bD432803012645Hac136cF7c4d4e3',
      mission: 'Providing technology education to underserved communities',
    },
    {
      id: '3',
      name: 'Guanacaste Wildlife Foundation',
      country: 'Costa Rica',
      verified: false,
      wallet_address: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      mission: 'Wildlife conservation and habitat protection',
    },
  ],
  us: [
    {
      id: '4',
      name: 'Caribbean Hurricane Relief Network',
      country: 'Jamaica',
      verified: true,
      wallet_address: '0x1234567890123456789012345678901234567890',
      mission: 'Emergency relief and disaster preparedness for Caribbean communities',
    },
    {
      id: '5',
      name: 'Bahamas Climate Resilience Initiative',
      country: 'Bahamas',
      verified: true,
      wallet_address: '0xabcdefabcdefabcdefabcdefabcdefabcdefabcd',
      mission: 'Building climate resilience in island communities',
    },
    {
      id: '6',
      name: 'Puerto Rico Education Fund',
      country: 'Puerto Rico',
      verified: false,
      wallet_address: '0x9876543210987654321098765432109876543210',
      mission: 'Supporting educational access and technology in Puerto Rico',
    },
  ],
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const region = searchParams.get('region') as 'cr' | 'us' | null;

    if (!region || (region !== 'cr' && region !== 'us')) {
      return NextResponse.json(
        { error: 'Invalid or missing region parameter. Use ?region=cr or ?region=us' },
        { status: 400 }
      );
    }

    // TODO: Replace with Supabase query
    // const { data, error } = await supabase
    //   .from('organizations')
    //   .select('*')
    //   .eq('region', region)
    //   .eq('verified', true)
    //   .order('created_at', { ascending: false });

    const organizations = mockOrganizations[region] || [];

    return NextResponse.json(
      { 
        region,
        organizations,
        count: organizations.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching organizations:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

