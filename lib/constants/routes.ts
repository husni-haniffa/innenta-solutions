export const routes = [
    { id: "howitworks", label: "How it works", type: "scroll" },
    { id: "benefits", label: "Benefits", type: "scroll" },
    { id: "services", label: "Services", type: "scroll" },
    { id: "/portfolio", label: "Portfolio", type: "route" },
    { id: "contactus", label: "Contact us", type: "scroll" },
]

export const handleBooking = () => {
    window.open("https://calendly.com/mulhimajawahir/", "_blank", "noopener,noreferrer")
}