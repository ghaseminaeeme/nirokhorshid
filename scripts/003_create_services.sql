-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  short_description TEXT,
  icon VARCHAR(100),
  image_url TEXT,
  features TEXT[],
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  meta_title VARCHAR(255),
  meta_description TEXT,
  slug VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default services
INSERT INTO services (title, short_description, description, icon, slug, sort_order) VALUES
('Solar System Design', 'Custom solar power system design for your specific needs', 'Our expert engineers design tailored solar power systems that maximize energy production and efficiency for your property. We consider factors like roof orientation, shading, energy consumption patterns, and local regulations to create the optimal solution.', 'sun', 'solar-system-design', 1),
('Installation Services', 'Professional installation by certified technicians', 'Our certified installation team ensures your solar power system is installed safely and efficiently. We handle all aspects from permits and inspections to final commissioning, ensuring your system meets all local codes and regulations.', 'wrench', 'installation-services', 2),
('Maintenance & Support', '24/7 monitoring and maintenance services', 'Keep your solar system running at peak performance with our comprehensive maintenance and support services. We provide regular inspections, cleaning, performance monitoring, and rapid response to any issues.', 'shield-check', 'maintenance-support', 3),
('Energy Consulting', 'Expert advice on renewable energy solutions', 'Our energy consultants help you understand your options and make informed decisions about renewable energy investments. We provide feasibility studies, ROI analysis, and guidance on incentives and financing options.', 'lightbulb', 'energy-consulting', 4);
