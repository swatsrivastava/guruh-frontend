// api/bookings.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { mentor_id, mentee_name, mentee_email, session_type, scheduled_at } = req.body;
    if (!mentor_id || !mentee_name || !mentee_email || !scheduled_at) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const { data, error } = await supabase
      .from('bookings')
      .insert([{ mentor_id, mentee_name, mentee_email, session_type, scheduled_at }])
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json({ booking: data });
  }

  if (req.method === 'GET') {
    // Add a simple admin auth check: token in header
    const adminToken = req.headers['x-admin-token'];
    if (adminToken !== process.env.ADMIN_TOKEN) return res.status(403).json({ error: 'Forbidden' });

    const { data, error } = await supabase.from('bookings').select('*').order('created_at', { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ bookings: data });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
