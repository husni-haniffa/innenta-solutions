"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { Send } from "lucide-react"
const formSchema = z.object(({
    name: z
    .string()
    .min(5, "Name must be atleast 5 characters")
    .max(30, "Name must be at most 32 characters"),

    email: z
    .email("Invalid Email"),

    message: z.
    string().
    min(15, "Message must be atleast 15 characters")
    .max(75, "Message must be at most 75 characters"),

}))



const ContactForm = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  })
  function onSubmit(data: z.infer<typeof formSchema>) {
    toast('Your Message is Sent will get back to u ')
  }
  return (
    <Card className="w-full h-full">
      <CardContent className="pt-6">
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-title">
                    Name
                  </FieldLabel>
                  <Input
                    {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Mulhima Jawahir"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-description">
                    Email
                  </FieldLabel>
                  <Input
                  
                     {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Mulhima Jawahir"
                    autoComplete="off"
                  />
                  
                 
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-demo-description">
                    Message
                  </FieldLabel>
                  <Textarea
                  
                     {...field}
                    id="form-rhf-demo-title"
                    aria-invalid={fieldState.invalid}
                    placeholder="Mulhima Jawahir"
                    autoComplete="off"
                  />
                  
                 
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="gap-2 flex-col sm:flex-row pt-2">
  <Button type="button" className="bg-black text-white hover:bg-black flex-1 gap-2">
    <FaEnvelope />
    Email
  </Button>
  <Button type="submit" form="form-rhf-demo" className="bg-black text-white hover:bg-black flex-1 gap-2">
    <FaWhatsapp className="text-green-500"/>
    Whatsapp
  </Button>
</CardFooter>
    </Card>

  )
}

export default ContactForm