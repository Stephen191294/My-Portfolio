export default function ContactSection() {
  const contacts = [
    {
      iconClass: "fa-regular fa-envelope",
      label: "E-mail",
      value: "sullivanstephen57@yahoo.com",
    },
    {
      iconClass: "fa-solid fa-phone",
      label: "Telephone",
      value: "(71)98639-3059",
    },
    {
      iconClass: "fa-brands fa-linkedin",
      label: "LinkedIn",
      value: "@StephenSullivan",
    },
    {
      iconClass: "fa-brands fa-github",
      label: "GitHub",
      value: "@StephenSullivan",
    },
  ];

  return (
    <section id="Contacts" className=" flex flex-col items-center justify-center gap-11">
      <h5 className="text-2xl text-center">Contacts</h5>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-6 relative wow animate__animated animate__fadeInLeft">
        {contacts.map((contact, index) => (
          <div className="flex flex-col justify-center items-center" key={index}>
            <i className={`cursor-pointer ${contact.iconClass} text-green-light fa-3x animate-pulse`} ></i>
            <span>{contact.label}</span>
            <span className="cursor-pointer">{contact.value}</span>
          </div>
        ))}
        
      </div>
    </section>
  );
}
