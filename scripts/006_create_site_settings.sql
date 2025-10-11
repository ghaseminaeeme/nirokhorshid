-- Create site settings table for managing site content
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key VARCHAR(255) NOT NULL UNIQUE,
  value TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default site settings
INSERT INTO site_settings (key, value, description) VALUES
('company_name', 'SolarTech Solutions', 'Company name displayed on the website'),
('company_email', 'info@solartech.com', 'Main contact email address'),
('company_phone', '+1 (555) 123-4567', 'Main contact phone number'),
('company_address', '123 Solar Street, Green City, GC 12345', 'Company physical address'),
('about_us_content', 'We are a leading provider of solar power solutions, dedicated to helping businesses and homeowners transition to clean, renewable energy. With over 10 years of experience in the industry, we have successfully completed hundreds of solar installations across the region.', 'About us page content'),
('hero_title', 'Power Your Future with Solar Energy', 'Homepage hero section title'),
('hero_subtitle', 'Professional solar power solutions for homes and businesses. Clean energy, lower costs, brighter future.', 'Homepage hero section subtitle'),
('meta_title', 'SolarTech Solutions - Professional Solar Power Installation', 'Default meta title for SEO'),
('meta_description', 'Leading solar power company providing design, installation, and maintenance services for residential and commercial solar energy systems.', 'Default meta description for SEO');
