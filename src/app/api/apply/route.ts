import { NextRequest, NextResponse } from 'next/server';

interface ApplicationData {
  org_name: string;
  country: string;
  contact_email: string;
  wallet_address: string;
  mission: string;
  region: 'cr' | 'us';
}

export async function POST(request: NextRequest) {
  try {
    const body: ApplicationData = await request.json();

    // Validate required fields
    if (!body.org_name || !body.country || !body.contact_email || !body.wallet_address || !body.mission) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // TODO: Integrate with Supabase
    // For now, just log and return success
    console.log('New partnership application:', {
      ...body,
      submitted_at: new Date().toISOString(),
    });

    // Future: Save to Supabase
    // const { data, error } = await supabase
    //   .from('partnership_applications')
    //   .insert([body]);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Application received successfully',
        // In production, return the created record ID
        // id: data?.[0]?.id 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

