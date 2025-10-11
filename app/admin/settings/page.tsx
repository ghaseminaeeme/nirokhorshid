import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createClient } from "@/lib/supabase/server"

interface SiteSetting {
  id: string
  key: string
  value: string | null
  description: string | null
}

async function getSettings(): Promise<Record<string, string>> {
  const supabase = await createClient()
  const { data, error } = await supabase.from("site_settings").select("*")

  if (error) {
    console.error("Error fetching settings:", error)
    return {}
  }

  const settings: Record<string, string> = {}
  data?.forEach((setting: SiteSetting) => {
    settings[setting.key] = setting.value || ""
  })

  return settings
}

export default async function AdminSettingsPage() {
  const settings = await getSettings()

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Site Settings</h1>
        <p className="text-gray-600">Manage your website content and configuration</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
            <CardDescription>Basic company details displayed on the website</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="company_name">Company Name</Label>
              <Input id="company_name" defaultValue={settings.company_name} />
            </div>
            <div>
              <Label htmlFor="company_email">Email Address</Label>
              <Input id="company_email" type="email" defaultValue={settings.company_email} />
            </div>
            <div>
              <Label htmlFor="company_phone">Phone Number</Label>
              <Input id="company_phone" defaultValue={settings.company_phone} />
            </div>
            <div>
              <Label htmlFor="company_address">Address</Label>
              <Textarea id="company_address" defaultValue={settings.company_address} />
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">Save Company Info</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Homepage Content</CardTitle>
            <CardDescription>Hero section and main page content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="hero_title">Hero Title</Label>
              <Input id="hero_title" defaultValue={settings.hero_title} />
            </div>
            <div>
              <Label htmlFor="hero_subtitle">Hero Subtitle</Label>
              <Textarea id="hero_subtitle" defaultValue={settings.hero_subtitle} />
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">Save Homepage Content</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>About Us Content</CardTitle>
            <CardDescription>About page content and company description</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="about_us_content">About Us Text</Label>
              <Textarea
                id="about_us_content"
                rows={6}
                defaultValue={settings.about_us_content}
                placeholder="Enter your company's about us content..."
              />
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">Save About Content</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>SEO Settings</CardTitle>
            <CardDescription>Search engine optimization settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="meta_title">Default Meta Title</Label>
              <Input id="meta_title" defaultValue={settings.meta_title} />
            </div>
            <div>
              <Label htmlFor="meta_description">Default Meta Description</Label>
              <Textarea id="meta_description" defaultValue={settings.meta_description} />
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">Save SEO Settings</Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>System Information</CardTitle>
          <CardDescription>Current system status and information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <div className="text-sm font-medium text-green-800">Database Status</div>
              <div className="text-lg font-bold text-green-900">Connected</div>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <div className="text-sm font-medium text-blue-800">Admin Panel</div>
              <div className="text-lg font-bold text-blue-900">Active</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-sm font-medium text-orange-800">Last Updated</div>
              <div className="text-lg font-bold text-orange-900">Just now</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
