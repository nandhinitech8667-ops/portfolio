"use client"

import { useState } from "react"
import { ScrollSection } from "@/components/scroll-section"
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react"

const links = [
  {
    name: "Email",
    icon: Mail,
    url: "mailto:nandhinisakthi417@gmail.com",
    label: "nandhinisakthi417@gmail.com",
    cmd: "mail",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/NandhiniSakthi",
    label: "@NandhiniSakthi",
    cmd: "github",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/",
    label: "Nandhini Sakthivel",
    cmd: "linkedin",
  },
]

export function ContactSection() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [message,setMessage] = useState("")
  const [loading,setLoading] = useState(false)

  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)

    const data = {
      name,
      email,
      message
    }

    try{

      const response = await fetch("http://localhost:5000/send-email",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })

      const result = await response.json()

      if(result.success){
        alert("Message Sent Successfully 🚀")
        setName("")
        setEmail("")
        setMessage("")
      }else{
        alert("Message Failed")
      }

    }catch(error){
      console.error(error)
      alert("Server Error")
    }

    setLoading(false)
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Form */}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            className="p-3 border rounded"
            required
            />

            <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="p-3 border rounded"
            required
            />

            <textarea
            placeholder="Write your message..."
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            className="p-3 border rounded h-32"
            required
            />

            <button
            type="submit"
            className="bg-black text-white p-3 rounded flex items-center justify-center gap-2"
            >

            <Mail size={18}/>

            {loading ? "Sending..." : "Send Message"}

            <ArrowUpRight size={16}/>

            </button>

          </form>


          {/* Contact Links */}

          <div className="flex flex-col gap-6">

            {links.map((link)=>{

              const Icon = link.icon

              return(

                <a
                key={link.name}
                href={link.url}
                target="_blank"
                className="flex items-center gap-4 p-4 border rounded hover:bg-gray-100"
                >

                <Icon size={22}/>

                <div>

                  <p className="font-semibold">{link.name}</p>

                  <p className="text-sm text-gray-500">
                    {link.label}
                  </p>

                </div>

                </a>

              )

            })}

          </div>

        </div>

      </div>
    </section>
  )
}