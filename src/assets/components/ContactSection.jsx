export default function ContactSection() {
  const contacts = [
    {
      iconClass: "fa-regular fa-envelope",
      label: "E-mail",
      value: "sullivanstephen57@yahoo.com",
      href: "mailto:sullivanstephen57@yahoo.com",
    },
    {
      iconClass: "fa-solid fa-phone",
      label: "Telephone",
      value: "(71)98639-3059",
      href: "tel:+5571986393059", 
    },
    {
      iconClass: "fa-brands fa-linkedin",
      label: "LinkedIn",
      value: "@StephenSullivan",
      href: "https://www.linkedin.com/in/stephen-sullivan-4ab85aa1/",
    },
    {
      iconClass: "fa-brands fa-github",
      label: "GitHub",
      value: "@StephenSullivan",
      href: "https://github.com/Stephen191294",
    },
  ];

  return (
    <section id="Contacts" className="flex flex-col items-center justify-center gap-11 pt-[230px] sm:pt-[140px]">
      <h5 className="text-2xl text-center">Contacts</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-6 wow animate__animated animate__fadeInLeft">
        {contacts.map((contact, index) => (
          <div className="flex flex-col justify-center items-center text-center" key={index}>
            <a href={contact.href || "#"} target="_blank" rel="noopener noreferrer">
              <i className={`cursor-pointer ${contact.iconClass} text-green-light bg-dark-900 p-5 rounded-full fa-3x hover:animate-bounce`}></i>
            </a>
            <span className="font-bold mt-[10px] text-2xl ">{contact.label}</span>
            {contact.href ? (
              <a
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-1xl  hover:underline"
              >
                {contact.value}
              </a>
            ) : (
              <span>{contact.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
