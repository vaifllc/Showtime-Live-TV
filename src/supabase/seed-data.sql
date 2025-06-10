-- Insert sample products
INSERT INTO products (name, description, price, currency, duration, features, active) VALUES
('Trial IPTV Plan', 'Try our IPTV service for 7 days.', 0.00, 'USD', 0, '["HD Streaming", "Limited Channels"]'::jsonb, true),
('3 Month IPTV Plan', 'Access to all channels for 3 months.', 29.99, 'USD', 3, '["HD Streaming", "No Ads", "Multi-device"]'::jsonb, true),
('12 Month IPTV Plan', 'Access to all channels for 12 months.', 99.99, 'USD', 12, '["HD Streaming", "No Ads", "Multi-device", "Priority Support"]'::jsonb, true);

-- Note: User profiles will be created automatically via the trigger when users sign up
-- You can manually create admin users through the Supabase dashboard or auth API
