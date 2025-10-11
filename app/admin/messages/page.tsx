import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/supabase/server"
import { Mail, MailOpen, Phone, Calendar } from "lucide-react"

interface ContactMessage {
  id: string
  name: string
  email: string
  phone: string | null
  subject: string | null
  message: string
  is_read: boolean
  created_at: string
}

async function getMessages(): Promise<ContactMessage[]> {
  const supabase = await createClient()
  const { data, error } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false })

  if (error) {
    console.error("Error fetching messages:", error)
    return []
  }

  return data || []
}

export default async function AdminMessagesPage() {
  const messages = await getMessages()
  const unreadCount = messages.filter((msg) => !msg.is_read).length

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600">Customer inquiries and contact form submissions ({unreadCount} unread)</p>
        </div>
      </div>

      {messages.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">No messages yet</p>
            <p className="text-sm text-gray-500">Customer inquiries will appear here</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <Card
              key={message.id}
              className={`hover:shadow-md transition-shadow ${!message.is_read ? "border-orange-200 bg-orange-50/30" : ""}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {message.is_read ? (
                      <MailOpen className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Mail className="h-5 w-5 text-orange-500" />
                    )}
                    <div>
                      <CardTitle className="text-lg">{message.name}</CardTitle>
                      <CardDescription className="flex items-center gap-4">
                        <span>{message.email}</span>
                        {message.phone && (
                          <span className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            {message.phone}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(message.created_at).toLocaleDateString()}
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {!message.is_read && <Badge className="bg-orange-500 hover:bg-orange-600">New</Badge>}
                    <Button variant="outline" size="sm">
                      Mark as {message.is_read ? "Unread" : "Read"}
                    </Button>
                  </div>
                </div>
                {message.subject && (
                  <div className="mt-2">
                    <span className="text-sm font-medium text-gray-700">Subject: </span>
                    <span className="text-sm text-gray-600">{message.subject}</span>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 whitespace-pre-wrap">{message.message}</p>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button asChild size="sm" className="bg-orange-500 hover:bg-orange-600">
                    <a href={`mailto:${message.email}?subject=Re: ${message.subject || "Your inquiry"}`}>Reply</a>
                  </Button>
                  {message.phone && (
                    <Button asChild variant="outline" size="sm">
                      <a href={`tel:${message.phone}`}>Call</a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
