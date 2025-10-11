-- Create categories table for product categorization
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  slug VARCHAR(255) NOT NULL UNIQUE,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default categories for solar power products
INSERT INTO categories (name, description, slug) VALUES
('Solar Panels', 'High-efficiency photovoltaic panels for residential and commercial use', 'solar-panels'),
('Inverters', 'Power inverters for converting DC to AC electricity', 'inverters'),
('Battery Storage', 'Energy storage solutions for solar power systems', 'battery-storage'),
('Mounting Systems', 'Roof and ground mounting hardware for solar installations', 'mounting-systems'),
('Monitoring Systems', 'Smart monitoring and control systems for solar installations', 'monitoring-systems');
