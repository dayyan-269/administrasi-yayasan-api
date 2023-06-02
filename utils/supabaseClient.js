import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseClient = createClient(
  process.env.PROJECT_URL, 
  process.env.PROJECT_KEY
);

export default supabaseClient