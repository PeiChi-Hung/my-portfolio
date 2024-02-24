import ContactList from "@/components/ContactList"

export default function Contact() {
  return (
    <section
      id="contact"
      className="my-4 mb-[50px] flex flex-col items-center gap-5 text-center md:mt-8"
    >
      <h2>Contact</h2>
      <p className="text-balance">
        Thank you for visiting my portfolio! I'm always excited to connect with
        like-minded individuals and explore potential collaborations. Feel free
        to reach out to me via social media or email
      </p>
      <ContactList />
    </section>
  )
}
