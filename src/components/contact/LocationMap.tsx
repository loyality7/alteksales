export const LocationMap = () => {
  return (
    <div className="max-h-28">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.193834713823!2d77.69918927487038!3d12.959445215145086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1383fc363ceb%3A0x66009e3075ae9b11!2sALTEK%20SOFTWARE%20TRAINING%20INSTITUTION!5e0!3m2!1sen!2sin!4v1736832242343!5m2!1sen!2sin"
        className="border-none h-full rounded-xl w-full md:w-3/4"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
