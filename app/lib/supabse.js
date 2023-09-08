import { createClient } from '@supabase/supabase-js';

export const supabase = createClient('https://lafkrudikrqgppteabws.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhZmtydWRpa3JxZ3BwdGVhYndzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQxNzIxMTksImV4cCI6MjAwOTc0ODExOX0.-qVszrZu3HkZ0uaQYTfIu1-aZ-GIXNgZJfegFieqRGg');